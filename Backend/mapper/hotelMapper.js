require("dotenv").config();
const db_user = process.env.DB_USER
const db_password = process.env.DB_PASSWORD
const db_string = process.env.DB_CONNECTSTRING
const jwt_key = process.env.JWT_KEY
const DataList = [];
const TopTenList = [];
const ChargerList = [];
var OracleDB = require('oracledb');
var cors = require('cors')
const session = require("express-session")
// const FileStore = require('session-file-store')(session); 
const database = require('./database.js')
const bcrypt = require('bcrypt')
const members=[];


// mybatis-mapper 추가
var mybatisMapper = require('mybatis-mapper');
// Mapper Load
mybatisMapper.createMapper(['./mapper/oracle-mapper.xml']);


// 백엔드 서버 : express 사용
var express = require('express')
  , http = require('http')
var app = express();

//post로 받은 body를 pars하기 위한 미들웨어
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
// info 를 토큰화 시키기위해서 jwt사용 !
const jwt = require('jsonwebtoken')
// parse application/json
app.use(bodyParser.json())
app.use(cookieParser())
app.use(session({
  secret : 'blackzat',
  resave : false,
  saveUninitialized : true,
  // store : new FileStore()
}))


app.use(express.static(__dirname));
app.use(
  cors({
    origin: ['http://localhost:9000'],
    credentials: true,
  }),
);
// 백엔드 서버 포트
app.set('port', process.env.PORT || 3000);

// app.get('/',(req,res)=>{
//   res.send('Root')x
// })
// bodyparsor
app.use(express.json())
app.use(express.urlencoded({ extended: true }))



// 기본 라우트

// 임의 설정한 멤버


app.get('/api/login', (req, res) => {
  console.log(req.cookies)
  //쿠키 정보 있으면 파싱해줘서 새로고침해도 로그인이 유지
  if (req.cookies && req.cookies.token) {
    //token화 시켰기에 이걸 uncapsule 해야한다.
    //verify param은 token, "보안키" .. 이다
    jwt.verify(req.cookies.token, jwt_key, (err, decoded) => {
      if (err) {
        res.sendStatus(401);
      }
      else {
        res.send(decoded);
      }
    })
  }
  else {
    res.sendStatus(401);
    //권한없음으로 던짐
  };
})

app.post('/api/login',(req,res)=>{
    //post방식으로 요청이 들어오면
  //들어온 id,pw값 대치하고
  //맞으면 로그인 처리한다.
  // 들어온 값과 서버의 값을 비교해서 유효성 검사
  const loginId = req.body.loginId;
  const loginPw = req.body.loginPw;
  console.log('req:',loginId,loginPw)
  OracleDB.getConnection({ user: db_user, password: db_password, connectString: db_string },
    function (err, connection) {
      if (err) {
        console.error(err.message);
        return;
      }
      var query = `SELECT * FROM TBL_MEMBER`;
      connection.execute(query, {}, function (err, result) {
        if (err) {
          console.error(err.message);
          return;
        }
        for (const i in result.rows) {
          if (Object.hasOwnProperty.call(result.rows, i)) {
            let rows = result.rows[i]
            const jsonData = {
              name : rows[11],
              loginId: rows[0],
              loginPw : rows[1]
            }
              members.push(jsonData)
          }
        }
        console.log(members.length)
        console.log(members)
        const member = members.find(m => m.loginId === loginId && m.loginPw === loginPw)
         //member값이 있으면 member 정보를 send, 없으면 없다고 보냄
  if (member) {
    const options = {
      domain: "localhost",
      path: "/",
      httpOnly: true,
      sameSite: "strict"
    };

    const token = jwt.sign({
      // 우리가 필요한 객체 정보
      name: member.name
    },
      // 2번째 인자로는 암호키, 만료시간, 토큰배급자
      jwt_key, {
      expiresIn: "15m",
      issuer: "jejuOlle"
    });

    // 클라이언트에 토큰값을 쏘자 !

    res.cookie("token", token, options)
    res.send(member);

  }
  else {
    res.sendStatus(404);
  }
  console.log('loginId:', loginId, 'loginPw:', loginPw)
      })
    })
  })
// app.post('/api/account', (req, res) => {
//     //post방식으로 요청이 들어오면
//   //들어온 id,pw값 대치하고
//   //맞으면 로그인 처리한다.
//   // 들어온 값과 서버의 값을 비교해서 유효성 검사
//   const loginId = req.body.loginId;
//   const loginPw = req.body.loginPw;
//   const member = members.find(m => m.loginId === loginId && m.loginPw === loginPw)

//   //member값이 있으면 member 정보를 send, 없으면 없다고 보냄
//   if (member) {
//     const options = {
//       domain: "localhost",
//       path: "/",
//       httpOnly: true,
//       sameSite: "strict"
//     };

//     const token = jwt.sign({
//       // 우리가 필요한 객체 정보
//       id: member.id,
//       name: member.name,
//     },
//       // 2번째 인자로는 암호키, 만료시간, 토큰배급자
//       jwt_key, {
//       expiresIn: "15m",
//       issuer: "jejuOlle"
//     });

//     // 클라이언트에 토큰값을 쏘자 !

//     res.cookie("token", token, options)
//     res.send(member);

//   }
//   else {
//     res.sendStatus(404);
//   }
//   console.log('loginId:', loginId, 'loginPw:', loginPw)
// })


// 로그아웃 api
app.delete('/api/logout', (req, res) => {
  if (req.cookies && req.cookies.token) {
    res.clearCookie("token")
  }
  res.sendStatus(200)
});


// 회원가입 api

let sysdate = new Date();
console.log(sysdate)

app.get('/api/signup', (req,res)=>{
  res.sendStatus(200);
});

app.post('/api/signup',async(req,res)=>{
  try {
    console.log("회원가입 하는 중 !")
    const body = req.body
    await database.create_user(body)
    res.sendStatus(200)
    console.log('회원가입이 완료되었습니다.')
    
  } catch (error) {
    res.sendStatus(401)
  }
})



// marker 띄우기

app.post('/hotel', function (req, res) {
  OracleDB.getConnection({ user: db_user, password: db_password, connectString: db_string },
    function (err, connection) {
      if (err) {
        console.error(err.message);
        return;
      }
      var param = {
        category: req.body.category,
        pickup: req.body.pickup,
        cooking: req.body.cooking,
        breakfast: req.body.breakfast,
        freeparking: req.body.freeparking,
        wifi: req.body.wifi,
        tv: req.body.tv,
        airconditioner: req.body.airconditioner,
        minibar: req.body.minibar,
        bathtub: req.body.bathtub,
        refrigerator: req.body.refrigerator,
        karaoke: req.body.karaoke,
        conveniencestore: req.body.conveniencestore,
        parkinglot: req.body.parkinglot,
        seminarroom: req.body.seminarroom,
        bbq: req.body.bbq,
        restaurant: req.body.restaurant,
      }
      var format = { language: 'sql', indent: ' ' }
      var query = mybatisMapper.getStatement('oracleMapper', 'getListHotelwithFilter', param, format);
      console.log(query)
      connection.execute(query, [], function (err, result) {
        if (err) {
          console.error(err.message);
          return;
        }
        for (const i in result.rows) {
          if (Object.hasOwnProperty.call(result.rows, i)) {
            let rows = result.rows[i]
            const jsonData = {
              HOTELID: rows[0],
              NAME: rows[1],
              CATEGORY: rows[2],
              ADDRESS: rows[3],
              COMMENTS: rows[4],
              PRICE: rows[5],
              STARRATE: rows[6],
              LONGITUDE: rows[7],
              LATITUDE: rows[8],
              UUID: rows[25],
              PATH: rows[26],
            }
            if (DataList.length < result.rows.length) {
              DataList.push(jsonData)
            }
          }
        }
        console.log(DataList.length)
        res.send(DataList)
        //   const AllDataList =DataList.splice(529,DataList.length);
        //   response.send(AllDataList);
        //   console.log(AllDataList.length)
        // }
        // else{
        // }
        // doRelease(response, connection, result.rows);
      })
    })
});
app.post('/carousel', function (request, response) {
  OracleDB.getConnection({ user: db_user, password: db_password, connectString: db_string },

    function (err, connection) {
      if (err) {
        console.error(err.message);
        return;
      }

      var format = { language: 'sql', indent: ' ' }
      var query = mybatisMapper.getStatement('oracleMapper', 'getListTopTen', format);
      console.log(query)
      connection.execute(query, {}, function (err, result) {
        if (err) {
          console.error(err.message);
          return;
        }
        for (const i in result.rows) {
          if (Object.hasOwnProperty.call(result.rows, i)) {
            let rows = result.rows[i]
            const jsonData = {
              HOTELID: rows[0],
              NAME: rows[1],
              ADDRESS: rows[2],
              COMMENTS: rows[3],
              PRICE: rows[4],
              STARRATE: rows[5],
              LATITUDE: rows[6],
              LONGITUDE: rows[7],
            }
            if (TopTenList.length < 10) {
              TopTenList.push(jsonData)
            }
          }
        }
        console.log(TopTenList.length)
        response.send(TopTenList)
      })
    })
});
app.post('/charger', function (request, response) {
  OracleDB.getConnection({ user: db_user, password: db_password, connectString: db_string },

    function (err, connection) {
      if (err) {
        console.error(err.message);
        return;
      }

      var format = { language: 'sql', indent: ' ' }
      var query = mybatisMapper.getStatement('oracleMapper', 'getListCharger', format);
      console.log(query)
      connection.execute(query, {}, function (err, result) {
        if (err) {
          console.error(err.message);
          return;
        }
        for (const i in result.rows) {
          if (Object.hasOwnProperty.call(result.rows, i)) {
            let rows = result.rows[i]
            const jsonData = {
              CHAGERID: rows[0],
              NAME: rows[1],
              ADDRESS: rows[2],
              LATITUDE: rows[3],
              LONGITUDE: rows[4],
            }
            if (ChargerList.length < 500) {
              ChargerList.push(jsonData)
            }
          }
        }
        console.log(ChargerList.length)
        response.send(ChargerList)
      })
    })
});


app.post('/reply', function (request, response) {
  const replyData=[];
  OracleDB.getConnection({ user: db_user, password: db_password, connectString: db_string },
    function (err, connection) {
      if (err) {
        console.error(err.message);
        return;
      }

      var format = { language: 'sql', indent: ' ' }
      var query = mybatisMapper.getStatement('oracleMapper', 'getListReply', format);
      console.log(query)
      connection.execute(query, {}, function (err, result) {
        if (err) {
          console.error(err.message);
          return;
        }
        for (const i in result.rows) {
          if (Object.hasOwnProperty.call(result.rows, i)) {
            let rows = result.rows[i]
            console.log(rows[4])
            const jsonData = {
              RNO: rows[0],
              STARRATE: rows[1],
              NICKNAME: rows[2],
              DATE: rows[3],
              STOREID: rows[4],
              CONTENT: rows[5],
            }
              replyData.push(jsonData)
          }
        }
        console.log(replyData.length)
        response.send(replyData)
      })
    })
});


http.createServer(app).listen(app.get('port'), () => {
  console.log('Express server port : ' + app.get('port'))
})

