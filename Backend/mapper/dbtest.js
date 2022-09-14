// require("dotenv").config();

// const db_user = process.env.DB_USER
// const db_password = process.env.DB_PASSWORD
// const db_string = process.env.DB_CONNECTSTRING
// const jwt_key = process.env.JWT_KEY
// var OracleDB = require('oracledb')
// const bcrypt = require('bcrypt')
// const saltRounds = 10
// let sysdate = new Date();
// console.log(sysdate)
// OracleDB.outFormat = OracleDB.OUT_FORMAT_OBJECT;



// const run = async function () {
//   // let connection;(db에 연결하는 코드)
//   let connection;
//   connection = await OracleDB.getConnection({ user: db_user, password: db_password, connectString: db_string })
//   console.log("Successfully connected to Oracle Database");
//   try {
//     // Insert some data
//     //실행할 sql문과 row를 정해주고 그것을 insert 시킴
//     const sql = `INSERT INTO tbl_member (USERID,PW,EMAIL,PHONE,REGDATE,UPDATEDATE,ENABLED,ROADADDR,ADDRDETAIL,ZIPNO,JIBUNADDR,NAME,BIRTHDATE,NICKNAME,PHONE2,PHONE3,AUTHEMAIL,DELSTATUS,AUTHTOKEN,GENDER)
//     VALUES (:1,:2,:3,:4,:5,:6,:7,:8,:9,:10,:11,:12,:13,:14,:15,:16,:17,:18,:19,:20)`;

//     const rows =
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
// // run()



// // const db = OracleDB.getConnection({ user: db_user, password: db_password, connectString: db_string })
// // var express = require('express')
// //   , http = require('http')
// // var app = express();

// // //post로 받은 body를 pars하기 위한 미들웨어
// // const bodyParser = require('body-parser')
// // const cookieParser = require('cookie-parser')
// // // info 를 토큰화 시키기위해서 jwt사용 !
// // const jwt = require('jsonwebtoken')
// // // parse application/json
// // app.use(bodyParser.json())
// // app.use(cookieParser())
// // app.use(session({
// //   secret : 'blackzat',
// //   resave : false,
// //   saveUninitialized : true,
// //   store : new FileStore()
// // }))
// // app.use(express.json())
// // app.use(express.urlencoded({ extended: true }))


// // const test = async(req,res)=>{
// //   try {
// //     const existingUser = await db.findOne({id:user_id})
// //     console.log(existingUser)
// //   } catch (error) {
    
// //   }

// // }

// // const run = async function () {
// //   // let connection;(db에 연결하는 코드)
// //   let connection;
// //   connection = await OracleDB.getConnection({ user: db_user, password: db_password, connectString: db_string })
// //   console.log("Successfully connected to Oracle Database");
// //   try {
// //     // Insert some data
// //     //실행할 sql문과 row를 정해주고 그것을 insert 시킴
// //     const sql = `select userid from tbl_member;`;
// //     let result = await connection.execute(sql)
// //     console.log(result)
// //     const sql = `INSERT INTO tbl_member (USERID,PW,EMAIL,PHONE,REGDATE,UPDATEDATE,ENABLED,ROADADDR,ADDRDETAIL,ZIPNO,JIBUNADDR,NAME,BIRTHDATE,NICKNAME,PHONE2,PHONE3,AUTHEMAIL,DELSTATUS,AUTHTOKEN,GENDER)
// //     VALUES (:1,:2,:3,:4,:5,:6,:7,:8,:9,:10,:11,:12,:13,:14,:15,:16,:17,:18,:19,:20)`;

// //     const rows =
// //       [['dodo1', 'qwer1234', 'dodo7@naver.com', '01013315275', sysdate, sysdate, '1', '', '', '', '', '김교준', '', '뿌빠잉', '', '', '0', '0', '', 1]]
// //       const rows =
// //       [['dodo1', 'qwer1234', 'dodo7@naver.com', '01013315275', sysdate, sysdate, '1', '', '', '', '', '김교준', '', '뿌빠잉', '', '', '0', '0', '', 1]]
// //       console.log('rows:',rows)

// //     let result = await connection.executeMany(sql, rows);

// //     console.log(result.rowsAffected, "Rows Inserted");

// //     connection.commit();

// //   } catch (err) {
// //     console.error(err);
// //   } finally {
// //     if (connection) {
// //       try {
// //         await connection.close();
// //       } catch (err) {
// //         console.error(err);
// //       }
// //     }
// //   }
// // }
// // run()


// const { v4 } = require('uuid');
// console.log(v4('/main/product/01'));

// 1. 아임포트 REST API 호출에 필요한 모듈을 불러옵니다.
// const {Iamport,Request,Enum} = require("iamport-rest-client-nodejs");
// const { Banks } = Request;
// const { BankCodeEnum } = Enum;

// // 2. 아임포트 객체를 생성합니다. 귀하의 API 정보는 아임포트 관리자페이지 > 시스템설정 > 내정보를 참고해주세요.
// const iamport = new Iamport({
//   apiKey: '9805576493799803', 
//   apiSecret: 'e60609a714936a6f1e1fb76ef53b5d99e0c0f4e24fca73d5290856b5fa653527e58f98e3ee03fe19',
// });

// // EX1. 모든 은행 정보를 조회합니다.
// const getBanks = Banks.getBanks();
// getBanks.request(iamport)
// .then(response => console.log('response: ', response.data))
// .catch(error => console.log('error: ', error.response.data));

// // EX2. 특정 은행 정보를 조회합니다.
// const getBank = Banks.getBank({
//   code: BankCodeEnum.SC,
// });
// const ready = async function(){
// await getBank.request(iamport)
// .then(response => console.log('response: ', response.data))
// .catch(error => console.log('error: ', error.response.data));
// }
// ready()

let today = new Date();   
let year = today.getFullYear().toString(); // 년도
let month = (today.getMonth() + 1).toString();  // 월
let date = today.getDate().toString();  // 날짜
let day = year+month+date
console.log(day)
let hours = (today.getHours()).toString(); // 시
let minutes = today.getMinutes().toString();  // 분
let seconds = today.getSeconds().toString();  // 초
let time = `${hours}:${minutes}:${seconds}`
console.log(time)
console.log(today)