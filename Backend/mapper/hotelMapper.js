const DataList = [];
const TopTenList = [];
const ChargerList = [];
var OracleDB = require('oracledb');
var cors = require('cors')
require("dotenv").config();
const db_user = process.env.DB_USER
const db_password = process.env.DB_PASSWORD
const db_string = process.env.DB_CONNECTSTRING
const jwt_key = process.env.JWT_KEY

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

const members = [
  {
    id: 1,
    name: "이수빈",
    loginId: "a",
    loginPw: "a1"
  },
  {
    id: 2,
    name: "김지현",
    loginId: "b",
    loginPw: "b1"
  }
]

app.get('/', function (req, res) { // '/' 위치에 'get'요청을 받는 경우,
  res.send('Hello World!!!!!'); // "Hello World!"를 보냅니다.
});

app.get('/api/account', (req, res) => {
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
    //토큰화 시키고는 cookies parser 안해줘도 된다.
    // const member = JSON.parse(req.cookies.token);
    // console.log(member)

    // if (member.id)
    //   return res.send(member);
  }
  else {
    res.sendStatus(401);
    //권한없음으로 던짐
  };
})


app.post('/api/account', (req, res) => {
  //post방식으로 요청이 들어오면
  //들어온 id,pw값 대치하고
  //맞으면 로그인 처리한다.
  const loginId = req.body.loginId;
  const loginPw = req.body.loginPw;
  // 들어온 값과 서버의 값을 비교해서 유효성 검사
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
      id: member.id,
      name: member.name,
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


// 로그아웃 api

app.delete('/api/account', (req, res) => {
  if (req.cookies && req.cookies.token) {
    res.clearCookie("token")
  }
  res.sendStatus(200)
});












// marker 띄우기

app.post('/hotel', function (request, response) {
  OracleDB.getConnection({ user: db_user, password: db_password, connectString: db_string },

    function (err, connection) {
      if (err) {
        console.error(err.message);
        return;
      }

      // var param = {
      //   category: request.body.category,
      //   pickup: request.body.pickup,
      //   cooking: request.body.cooking,
      //   breakfast: request.body.breakfast,
      //   freeparking: request.body.freeparking,
      //   wifi: request.body.wifi,
      //   tv: request.body.tv,
      //   airconditioner: request.body.airconditioner,
      //   minibar: request.body.minibar,
      //   bathtub: request.body.bathtub,
      //   refrigerator: request.body.refrigerator,
      //   karaoke: request.body.karaoke,
      //   conveniencestore: request.body.conveniencestore,
      //   parkinglot: request.body.parkinglot,
      //   seminarroom: request.body.seminarroom,
      //   bbq: request.body.bbq,
      //   restaurant: request.body.restaurant,
      // }
      var format = { language: 'sql', indent: ' ' }
      var query = mybatisMapper.getStatement('oracleMapper', 'getListHotel', /*param,*/ format);
      console.log(query)
      connection.execute(query, {}, function (err, result) {
        if (err) {
          console.error(err.message);
          return;
        }
        const HOTELID = result.metaData[0].name
        const NAME = result.metaData[1].name
        const ADDRESS = result.metaData[2].name
        const COMMENTS = result.metaData[3].name
        const PRICE = result.metaData[4].name
        const STARRATE = result.metaData[5].name
        const LATITUDE = result.metaData[6].name
        const LONGITUDE = result.metaData[7].name
        const CATEGORY = result.metaData[8].name
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
              CATEGORY: rows[8]
            }
            if (DataList.length < 529) {
              DataList.push(jsonData)
            }
          }
        }
        console.log(DataList.length)
        response.send(DataList)
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
        const HOTELID = result.metaData[0].name
        const NAME = result.metaData[1].name
        const ADDRESS = result.metaData[2].name
        const COMMENTS = result.metaData[3].name
        const PRICE = result.metaData[4].name
        const STARRATE = result.metaData[5].name
        const LATITUDE = result.metaData[6].name
        const LONGITUDE = result.metaData[7].name
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
        const CHAGERID = result.metaData[0].name
        const NAME = result.metaData[1].name
        const ADDRESS = result.metaData[2].name
        const LATITUDE = result.metaData[3].name
        const LONGITUDE = result.metaData[4].name
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

http.createServer(app).listen(app.get('port'), () => {
  console.log('Express server port : ' + app.get('port'))
})

// function doRelease(response, connection, result) {
//   connection.release(function (err) {
//       if (err) {
//           console.error(err.message);
//       }

//   });
// }
