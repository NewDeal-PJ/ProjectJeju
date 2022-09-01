require("dotenv").config();

const db_user = process.env.DB_USER
const db_password = process.env.DB_PASSWORD
const db_string = process.env.DB_CONNECTSTRING
const jwt_key = process.env.JWT_KEY
var OracleDB = require('oracledb')
const bcrypt = require('bcrypt')
const saltRounds = 10
let sysdate = new Date();
console.log(sysdate)
OracleDB.outFormat = OracleDB.OUT_FORMAT_OBJECT;



const run = async function () {
  // let connection;(db에 연결하는 코드)
  let connection;
  connection = await OracleDB.getConnection({ user: db_user, password: db_password, connectString: db_string })
  console.log("Successfully connected to Oracle Database");
  try {
    // Insert some data
    //실행할 sql문과 row를 정해주고 그것을 insert 시킴
    const sql = `INSERT INTO tbl_member (USERID,PW,EMAIL,PHONE,REGDATE,UPDATEDATE,ENABLED,ROADADDR,ADDRDETAIL,ZIPNO,JIBUNADDR,NAME,BIRTHDATE,NICKNAME,PHONE2,PHONE3,AUTHEMAIL,DELSTATUS,AUTHTOKEN,GENDER)
    VALUES (:1,:2,:3,:4,:5,:6,:7,:8,:9,:10,:11,:12,:13,:14,:15,:16,:17,:18,:19,:20)`;

    const rows =
      [['dodo1', 'qwer1234', 'dodo7@naver.com', '01013315275', sysdate, sysdate, '1', '', '', '', '', '김교준', '', '뿌빠잉', '', '', '0', '0', '', 1]]
      console.log('rows:',rows)

    let result = await connection.executeMany(sql, rows);

    console.log(result.rowsAffected, "Rows Inserted");

    connection.commit();

  } catch (err) {
    console.error(err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
}
// run()



// const db = OracleDB.getConnection({ user: db_user, password: db_password, connectString: db_string })
// var express = require('express')
//   , http = require('http')
// var app = express();

// //post로 받은 body를 pars하기 위한 미들웨어
// const bodyParser = require('body-parser')
// const cookieParser = require('cookie-parser')
// // info 를 토큰화 시키기위해서 jwt사용 !
// const jwt = require('jsonwebtoken')
// // parse application/json
// app.use(bodyParser.json())
// app.use(cookieParser())
// app.use(session({
//   secret : 'blackzat',
//   resave : false,
//   saveUninitialized : true,
//   store : new FileStore()
// }))
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))


// const test = async(req,res)=>{
//   try {
//     const existingUser = await db.findOne({id:user_id})
//     console.log(existingUser)
//   } catch (error) {
    
//   }

// }

// const run = async function () {
//   // let connection;(db에 연결하는 코드)
//   let connection;
//   connection = await OracleDB.getConnection({ user: db_user, password: db_password, connectString: db_string })
//   console.log("Successfully connected to Oracle Database");
//   try {
//     // Insert some data
//     //실행할 sql문과 row를 정해주고 그것을 insert 시킴
//     const sql = `select userid from tbl_member;`;
//     let result = await connection.execute(sql)
//     console.log(result)
//     const sql = `INSERT INTO tbl_member (USERID,PW,EMAIL,PHONE,REGDATE,UPDATEDATE,ENABLED,ROADADDR,ADDRDETAIL,ZIPNO,JIBUNADDR,NAME,BIRTHDATE,NICKNAME,PHONE2,PHONE3,AUTHEMAIL,DELSTATUS,AUTHTOKEN,GENDER)
//     VALUES (:1,:2,:3,:4,:5,:6,:7,:8,:9,:10,:11,:12,:13,:14,:15,:16,:17,:18,:19,:20)`;

//     const rows =
//       [['dodo1', 'qwer1234', 'dodo7@naver.com', '01013315275', sysdate, sysdate, '1', '', '', '', '', '김교준', '', '뿌빠잉', '', '', '0', '0', '', 1]]
//       const rows =
//       [['dodo1', 'qwer1234', 'dodo7@naver.com', '01013315275', sysdate, sysdate, '1', '', '', '', '', '김교준', '', '뿌빠잉', '', '', '0', '0', '', 1]]
//       console.log('rows:',rows)

//     let result = await connection.executeMany(sql, rows);

//     console.log(result.rowsAffected, "Rows Inserted");

//     connection.commit();

//   } catch (err) {
//     console.error(err);
//   } finally {
//     if (connection) {
//       try {
//         await connection.close();
//       } catch (err) {
//         console.error(err);
//       }
//     }
//   }
// }
// run()