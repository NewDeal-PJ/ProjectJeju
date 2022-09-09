require("dotenv").config();
const aws = require('aws-sdk')
const db_user = process.env.DB_USER
const db_password = process.env.DB_PASSWORD
const db_string = process.env.DB_CONNECTSTRING
const jwt_key = process.env.JWT_KEY
const s3 = new aws.S3({
  accessKeyId: process.env.AWSAccessKeyId,
  secretAccessKey: process.env.AWSSecretKey,
  region: 'ap-northeast-2'
})
const multer = require('multer')
const multerS3 = require('multer-s3')
const path = require("path");
const { v4 } = require('uuid');

var OracleDB = require('oracledb');
var cors = require('cors')
const session = require("express-session")
// const FileStore = require('session-file-store')(session);
const database = require('./database.js')
const bcrypt = require('bcrypt')
let members = [];
let check_member = [];


// mybatis-mapper 추가
var mybatisMapper = require('mybatis-mapper');
// Mapper Load
mybatisMapper.createMapper(['./mapper/oracle-mapper.xml']);

OracleDB.autoCommit = true;

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
  secret: 'blackzat',
  resave: false,
  saveUninitialized: true,
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
// app.get('http://localhost:3000', (req, res) => {
//   console.log("helloWorld")

// })

// DB 연결

// const client = OracleDB.getConnection({ user: db_user, password: db_password, connectString: db_string },
//   function (err, connection) {
//     if (err) {
//       console.error(err.message);
//       return;
//     }
//   });
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

app.post('/api/login', (req, res) => {
  //post방식으로 요청이 들어오면
  //들어온 id,pw값 대치하고
  //맞으면 로그인 처리한다.
  // 들어온 값과 서버의 값을 비교해서 유효성 검사
  const loginId = req.body.loginId;
  const loginPw = req.body.loginPw;
  console.log('req:', loginId, loginPw)
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
              id: rows[0],
              name: rows[11],
              loginId: rows[0],
              loginPw: rows[1]
            }
            members.push(jsonData)
          }
        }

        const member = members.find(m => m.loginId === loginId)
        //member값이 있으면 member 정보를 send, 없으면 없다고 보냄
        if (member) {
          if (bcrypt.compareSync(loginPw, member.loginPw)) {
            const options = {
              domain: "localhost",
              path: "/",
              httpOnly: true,
              sameSite: "strict"
            };
            const token = jwt.sign({
              // 우리가 필요한 객체 정보
              id: member.id,
              name: member.name
            },
              // 2번째 인자로는 암호키, 만료시간, 토큰배급자
              jwt_key, {
              expiresIn: "180m",
              issuer: "jejuOlle"
            });
            // 클라이언트에 토큰값을 쏘자 !

            res.cookie("token", token, options)
            res.send(member);
            members = []
          }
          else {
            res.sendStatus(404);
          }
        }
        else {
          res.sendStatus(401)
        }
        console.log('loginId:', loginId, 'loginPw:', loginPw)
      })
    })

})




// 로그아웃 api
app.delete('/api/logout', (req, res) => {
  if (req.cookies && req.cookies.token) {
    res.clearCookie("token")
  }
  res.sendStatus(200)
});

// 아이디 중복 체크 api
app.post('/api/check_id', async (req, res) => {
  // check_member = [];
  const chk_id = req.body.user_id._value;
  OracleDB.getConnection({ user: db_user, password: db_password, connectString: db_string },
    function (err, connection) {
      if (err) {
        console.error(err.message);
        return;
      }
      var query = `SELECT USERID FROM TBL_MEMBER`;
      connection.execute(query, {}, function (err, result) {
        if (err) {
          console.error(err.message);
          return;
        }
        for (const i in result.rows) {
          if (Object.hasOwnProperty.call(result.rows, i)) {
            let rows = result.rows[i]
            const jsonData = {
              id: rows[0]
            }
            check_member.push(jsonData)
          }
        }
        if (check_member.length > 0) {
          for (let j = 0; j <= check_member.length; j++) {
            try {
              if (check_member[j].id === chk_id) {
                let result = 1;
                return res.send({ status: 200, result: result });
              }

              else {
                result = 0;
              }
            } catch (err) {
              console.error(err);
              return res.send({ status: -1, result: result });
            }
          }
        }
        else {
          result = 0;
          return res.send({ status: -1, result: result });
        }
      })
    })
  check_member = []
})

// 회원가입 api

app.get('/api/signup', (req, res) => {
  res.sendStatus(200);
});

app.post('/api/signup', async (req, res) => {
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



// 회원정보 수정 API
app.put('/api/userinfo/update', async (req, res) => {
  const hashedPwd = await bcrypt.hash(req.body.update_pwd._value, 10)
  try {
    OracleDB.getConnection({ user: db_user, password: db_password, connectString: db_string },
      function (err, connection) {
        if (err) {
          console.error(err.message);
          return;
        }
        var param = {
          user_id: req.body.user_id,
          user_pwd: hashedPwd,
          user_tel1: req.body.update_tel1._value,
          user_tel2: req.body.update_tel2._value,
          user_tel3: req.body.update_tel3._value,
          user_email: req.body.update_email._value,
          user_nickname: req.body.update_nickname._value,
        }
        var format = { language: 'sql', indent: ' ' }
        var query = mybatisMapper.getStatement('oracleMapper', 'updateUser', param, format);
        console.log(query)
        connection.execute(query, [], function (err, result) {
          if (err) {
            console.error(err.message);
            return;
          }
          console.log('User Update 성공 : ' + result.rowsAffected)
          connectionRelease(res, connection, result.rowsAffected)
        })
      })

  } catch (error) {
  }

});

//회원 탈퇴 API
app.post('/api/userinfo/delete', async (req, res) => {
  try {
    OracleDB.getConnection({ user: db_user, password: db_password, connectString: db_string },
      function (err, connection) {
        if (err) {
          console.error(err.message);
          return;
        }
        var param = {
          user_id: req.body.user_id
        }
        var format = { language: 'sql', indent: ' ' }
        var query = mybatisMapper.getStatement('oracleMapper', 'deleteUser', param, format);
        console.log(query)
        connection.execute(query, [], function (err, result) {
          if (err) {
            console.error(err.message);
            return;
          }
          console.log('User Update 성공 : ' + result.rowsAffected)
          connectionRelease(res, connection, result.rowsAffected)
          if (req.cookies && req.cookies.token) {
            res.clearCookie("token")
          }
        })
      })

  } catch (error) {
  }

});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//상품부분 /////////////////////////////////////////////////////////////////////////////////////////////////////

app.post('/api/shop', (req, res) => {
  const ShopData = [];
  OracleDB.getConnection({ user: db_user, password: db_password, connectString: db_string },
    function (err, connection) {
      if (err) {
        console.error(err.message);
        return;
      }
      var query = `SELECT * FROM TBL_PRODUCT`;
      connection.execute(query, {}, function (err, result) {
        if (err) {
          console.error(err.message);
          return;
        }
        for (const i in result.rows) {
          if (Object.hasOwnProperty.call(result.rows, i)) {
            let rows = result.rows[i]
            const jsonData = {
              id: rows[0],
              product_name: rows[1],
              price: rows[3],
              description: rows[2]
            }
            ShopData.push(jsonData)
          }
        }
        res.send(ShopData)
      })
    })

})




app.post('/api/shop/register', function (req, res) {
  console.log(req.body)
  OracleDB.getConnection({ user: db_user, password: db_password, connectString: db_string },
    function (err, connection) {
      if (err) {
        console.error(err.message);
        return;
      }
      var param = {
        productname: req.body.product_name._value,
        description: req.body.product_content._value,
        price: req.body.product_price._value
      }

      var format = { language: 'sql', indent: ' ' }
      var query = mybatisMapper.getStatement('oracleMapper', 'insertProduct', param, format);
      console.log(query)
      connection.execute(query, [], function (err, result) {
        if (err) {
          console.error(err.message);
          return;
        }
        console.log('Insert 성공 : ' + result.rowsAffected)
        connectionRelease(res, connection, result.rowsAffected)
      })
    })
})

// OracleDB.getConnection({ user: db_user, password: db_password, connectString: db_string },
//   function (err, connection) {
//     if (err) {
//       console.error(err.message);
//       return;
//     }
//     var param = {
//       nickname: request.body.NICKNAME,
//       storeid: Number(request.body.STOREID),
//       content: request.body.CONTENT,
//       starrate: Number(request.body.STARRATE),
//     }

//     var format = { language: 'sql', indent: ' ' }
//     var query = mybatisMapper.getStatement('oracleMapper', 'insertReply', param, format);
//     console.log(query)
//     connection.execute(query, [], function (err, result) {
//       if (err) {
//         console.error(err.message);
//         return;
//       }
//       console.log('Insert 성공 : ' + result.rowsAffected)
//       connectionRelease(response, connection, result.rowsAffected)
//     })
//   })

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//장바구니부분 /////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//결제부분 /////////////////////////////////////////////////////////////////////////////////////////////////////




// marker 띄우기

app.post('/hotel', function (req, res) {
  const DataList = [];
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
        freeParking: req.body.freeParking,
        wifi: req.body.wifi,
        tv: req.body.tv,
        airConditioner: req.body.airConditioner,
        miniBar: req.body.miniBar,
        bathTub: req.body.bathTub,
        refrigerator: req.body.refrigerator,
        karaoke: req.body.karaoke,
        convenienceStore: req.body.convenienceStore,
        parkingLot: req.body.parkingLot,
        seminarRoom: req.body.seminarRoom,
        bbq: req.body.bbq,
        restaurant: req.body.restaurant,
        jeju: req.body.jeju,
        aewol: req.body.aewol,
        hamdeok: req.body.hamdeok,
        moonset: req.body.moonset,
        gujwa: req.body.gujwa,
        seogwipo: req.body.seogwipo,
        seongsan: req.body.seongsan,
        pyoseon: req.body.pyoseon,
      }
      var format = { language: 'sql', indent: ' ' }
      var query = mybatisMapper.getStatement('oracleMapper', 'getListHotelwithFilter', param, format);
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

  const TopTenList = [];
  OracleDB.getConnection({ user: db_user, password: db_password, connectString: db_string },

    function (err, connection) {
      if (err) {
        console.error(err.message);
        return;
      }

      var format = { language: 'sql', indent: ' ' }
      var query = mybatisMapper.getStatement('oracleMapper', 'getListTopTen', format);
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
              ADDRESS: rows[2],
              COMMENTS: rows[3],
              PRICE: rows[4],
              STARRATE: rows[5],
              LATITUDE: rows[6],
              LONGITUDE: rows[7],
              UUID: rows[9],
              PATH: rows[11],
            }
            if (TopTenList.length < 10) {
              TopTenList.push(jsonData)
            }
          }
        }
        response.send(TopTenList)
      })
    })
});
app.post('/charger', function (req, res) {
  const ChargerList = [];
  OracleDB.getConnection({ user: db_user, password: db_password, connectString: db_string },

    function (err, connection) {
      if (err) {
        console.error(err.message);
        return;
      }
      var param = {
        jeju: req.body.jeju,
        aewol: req.body.aewol,
        hamdeok: req.body.hamdeok,
        moonset: req.body.moonset,
        gujwa: req.body.gujwa,
        seogwipo: req.body.seogwipo,
        seongsan: req.body.seongsan,
        pyoseon: req.body.pyoseon,
      }

      var format = { language: 'sql', indent: ' ' }
      var query = mybatisMapper.getStatement('oracleMapper', 'getListCharger', param, format);
      connection.execute(query, [], function (err, result) {
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
        res.send(ChargerList)
      })
    })
});


app.get('/reply/:storeid', function (request, response) {
  const replyData = [];
  OracleDB.getConnection({ user: db_user, password: db_password, connectString: db_string },
    function (err, connection) {
      if (err) {
        console.error(err.message);
        return;
      }
      var param = {
        storeid: request.params.storeid
      }
      var format = { language: 'sql', indent: ' ' }
      var query = mybatisMapper.getStatement('oracleMapper', 'getListReply', param, format);
      connection.execute(query, {}, function (err, result) {
        if (err) {
          console.error(err.message);
          return;
        }
        for (const i in result.rows) {
          if (Object.hasOwnProperty.call(result.rows, i)) {
            let rows = result.rows[i]
            const jsonData = {
              RNO: rows[0],
              NICKNAME: rows[1],
              REGDATE: rows[2],
              STOREID: rows[3],
              CONTENT: rows[4],
              STARRATE: rows[5],
              RRNO: rows[6],
              UUID: rows[7],
              PATH: rows[8],
            }
            replyData.push(jsonData)
          }
        }
        response.send(replyData)
      })
    })
});
app.post('/reply/insert', function (request, response) {
  OracleDB.getConnection({ user: db_user, password: db_password, connectString: db_string },
    function (err, connection) {
      if (err) {
        console.error(err.message);
        return;
      }
      var param = {
        nickname: request.body.NICKNAME,
        storeid: Number(request.body.STOREID),
        content: request.body.CONTENT,
        starrate: Number(request.body.STARRATE),
        rrno: request.body.RRNO,
      }

      var format = { language: 'sql', indent: ' ' }
      var query = mybatisMapper.getStatement('oracleMapper', 'insertReply', param, format);
      console.log(query)
      connection.execute(query, [], function (err, result) {
        if (err) {
          console.error(err.message);
          return;
        }
        connectionRelease(response, connection, result.rowsAffected)
      })
    })
})
app.post('/reply/insertAttach', function (request, response) {

  const upload = multer({
    storage: multerS3({
      s3: s3,
      bucket: 'jejuprojectimage/' + request.body.PATH,
      key: function (req, file, cb) {
        cb(null, request.body.UUID);
      },
      acl: 'public-read-write',
      contentType: multerS3.AUTO_CONTENT_TYPE
    }),
  });
  app.post('/upload', upload.single("File"), function (req, res, next) {
    console.log(req.file)
  })
  OracleDB.getConnection({ user: db_user, password: db_password, connectString: db_string },
    function (err, connection) {
      if (err) {
        console.error(err.message);
        return;
      }
      var param = {
        uuid: request.body.UUID,
        path: request.body.PATH,
      }
      var format = { language: 'sql', indent: ' ' }
      var query = mybatisMapper.getStatement('oracleMapper', 'insertReplyAttach', param, format);
      console.log(query)
      connection.execute(query, [], function (err, result) {
        if (err) {
          console.error(err.message);
          return;
        }
        console.log('InsertAttach 성공 : ' + result.rowsAffected)
        connectionRelease(response, connection, result.rowsAffected)
      })
    })
});
app.put('/updateReply', function (request, response) {
  OracleDB.getConnection({ user: db_user, password: db_password, connectString: db_string },
    function (err, connection) {
      if (err) {
        console.error(err.message);
        return;
      }
      var param = {
        rno: request.body.rno,
        starRate: request.body.starRate,
        content: request.body.content,
      }

      var format = { language: 'sql', indent: ' ' }
      var query = mybatisMapper.getStatement('oracleMapper', 'updateReply', param, format);
      console.log(query)
      connection.execute(query, [], function (err, result) {
        if (err) {
          console.error(err.message);
          return;
        }
        console.log('Update 성공 : ' + result.rowsAffected)
        connectionRelease(response, connection, result.rowsAffected)
      })
    })
});
app.put('/updateReplyAttach', function (request, response) {
  OracleDB.getConnection({ user: db_user, password: db_password, connectString: db_string },
    function (err, connection) {
      if (err) {
        console.error(err.message);
        return;
      }
      var param = {
        rno: request.body.rno,
        uuid: request.body.uuid,
        path: request.body.path,
      }
      const upload = multer({
        storage: multerS3({
          s3: s3,
          bucket: 'jejuprojectimage' + request.body.path,
          key: function (req, file, cb) {
            const extension = path.extname(file.originalname);
            cb(null, Date.now().toString() + extension);
          },
          acl: 'public-read-write',
          contentType: multerS3.AUTO_CONTENT_TYPE
        }),
      });
      upload.single("File"), function (req, res, next) {
        console.log(req.file)
      }

      var format = { language: 'sql', indent: ' ' }
      var query = mybatisMapper.getStatement('oracleMapper', 'updateReplyAttach', param, format);
      console.log(query)
      connection.execute(query, [], function (err, result) {
        if (err) {
          console.error(err.message);
          return;
        }
        console.log('Update 성공 : ' + result.rowsAffected)
        connectionRelease(response, connection, result.rowsAffected)
      })
    })
});
app.post('/deleteReply', function (request, response) {
  OracleDB.getConnection({ user: db_user, password: db_password, connectString: db_string },
    function (err, connection) {
      if (err) {
        console.error(err.message);
        return;
      }
      var param = {
        rno: request.body.rno
      }
      var format = { language: 'sql', indent: ' ' }
      var query = mybatisMapper.getStatement('oracleMapper', 'deleteReply', param, format);
      console.log(query)
      connection.execute(query, [], function (err, result) {
        if (err) {
          console.error(err.message);
          return;
        }
        console.log('Delete 성공 : ' + result.rowsAffected)
        connectionRelease(response, connection, result.rowsAffected)
      })
    })
});
app.post('/deleteReplyAttach', function (request, response) {
  OracleDB.getConnection({ user: db_user, password: db_password, connectString: db_string },
    function (err, connection) {
      if (err) {
        console.error(err.message);
        return;
      }
      var param = {
        rno: request.body.rno
      }
      var format = { language: 'sql', indent: ' ' }
      var query = mybatisMapper.getStatement('oracleMapper', 'deleteReplyAttach', param, format);
      console.log(query)
      connection.execute(query, [], function (err, result) {
        if (err) {
          console.error(err.message);
          return;
        }
        console.log('Delete 성공 : ' + result.rowsAffected)
      })
    })
    setTimeout(() => {
      s3.deleteObject({
        Bucket: 'jejuprojectimage', // 삭제하고 싶은 이미지가 있는 버킷 이름
        Key: request.body.path+'/'+request.body.UUID, // 삭제하고 싶은 이미지의 key 
      }, (err, data) => {
        if (err) console.log(err); // 실패 시 에러 메시지
        else console.log(data); // 성공 시 데이터 출력
      })
    }, 600);
});

app.get('/store/:storeid', function (req, res) {
  const StoreData = [];
  OracleDB.getConnection({ user: db_user, password: db_password, connectString: db_string },
    function (err, connection) {
      if (err) {
        console.error(err.message);
        return;
      }
      var param = {
        storeid: req.params.storeid
      }
      var format = { language: 'sql', indent: ' ' }
      var query = mybatisMapper.getStatement('oracleMapper', 'getStore', param, format);
      connection.execute(query, [], function (err, result) {
        if (err) {
          console.error(err.message);
          return;
        }
        for (const i in result.rows) {
          if (Object.hasOwnProperty.call(result.rows, i)) {
            let rows = result.rows[i]
            const jsonData = {
              STOREID: rows[0],
              STORENAME: rows[1],
              CATEGORY: rows[2],
              ADDRESS: rows[3],
              INFO: rows[4],
              KEYWORD: rows[5],
              STARRATE: rows[6],
              LONGITUDE: rows[7],
              LATITUDE: rows[8],
              OPEN: rows[9],
              TEL: rows[10],
              UUID: rows[11],
              PATH: rows[12],
            }
            StoreData.push(jsonData)
          }
        }
        res.send(StoreData)
      })

    })
})

app.post('/store', function (req, res) {
  const StoreList = [];
  OracleDB.getConnection({ user: db_user, password: db_password, connectString: db_string },

    function (err, connection) {
      if (err) {
        console.error(err.message);
        return;
      }
      var param = {
        jeju: req.body.jeju,
        aewol: req.body.aewol,
        hamdeok: req.body.hamdeok,
        moonset: req.body.moonset,
        gujwa: req.body.gujwa,
        seogwipo: req.body.seogwipo,
        seongsan: req.body.seongsan,
        pyoseon: req.body.pyoseon,
      }

      var format = { language: 'sql', indent: ' ' }
      var query = mybatisMapper.getStatement('oracleMapper', 'getListStore', param, format);
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
              STOREID: rows[0],
              STORENAME: rows[1],
              CATEGORY: rows[2],
              ADDRESS: rows[3],
              INFO: rows[4],
              KEYWORD: rows[5],
              STARRATE: rows[6],
              LONGITUDE: rows[7],
              LATITUDE: rows[8],
              OPEN: rows[9],
              TEL: rows[10],
              UUID: rows[11],
              PATH: rows[12]
            }
            if (StoreList.length < result.rows.length) {
              StoreList.push(jsonData)
            }
          }
        }
        res.send(StoreList)
      })
    })
});

app.post('/api/writinginfo', function (req, res) {
  const replymypageData = [];
  OracleDB.getConnection({ user: db_user, password: db_password, connectString: db_string },
    function (err, connection) {
      if (err) {
        console.error(err.message);
        return;
      }
      var param = {
        nickname: req.body.nickname
      }
      var format = { language: 'sql', indent: ' ' }
      var query = mybatisMapper.getStatement('oracleMapper', 'getReplyMypage', param, format);
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
              RNO: rows[0],
              NICKNAME: rows[1],
              REGDATE: rows[2],
              STOREID: rows[3],
              CONTENT: rows[4],
              STARRATE: rows[5],
              UUID: rows[7],
              PATH: rows[8],
            }
            replymypageData.push(jsonData)
          }
        }
        res.send(replymypageData)
      })

    })
})

function connectionRelease(res, connection, result) {
  connection.release(function (err) {
    if (err) {
      console.log(err.message)
    }
    res.send('' + result)
  })

}



http.createServer(app).listen(app.get('port'), () => {
  console.log('Express server port : ' + app.get('port'))
})

// function uuidv4() {
//   return (
//       [1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
//           (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
//       );
// }
// const upload = multer({
//   storage: multerS3({
//     s3: s3,
//     bucket: 'jejuprojectimage/ReplyPic/',
//     key: function (req, file, cb) {
//       const extension = path.extname(uuidv4());
//       cb(null, Date.now().toString() + extension);
//     },
//     acl: 'public-read-write',
//     contentType: multerS3.AUTO_CONTENT_TYPE
//   }),
// });
// app.post('/upload', upload.single("File"), function (req, res, next) {
//   console.log(req.file)
// })