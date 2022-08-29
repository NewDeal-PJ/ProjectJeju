require("dotenv").config();

const db_user = process.env.DB_USER
const db_password = process.env.DB_PASSWORD
const db_string = process.env.DB_CONNECTSTRING
const jwt_key = process.env.JWT_KEY
var OracleDB = require('oracledb')
const connection = OracleDB.getConnection({ user: db_user, password: db_password, connectString: db_string })
const bcrypt = require('bcrypt')
const saltRounds = 10
// // // current timestamp in milliseconds
// var date_ob = new Date();
// var day = ("0" + date_ob.getDate()).slice(-2);
// var month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
// var year = date_ob.getFullYear();
// var hours = date_ob.getHours();
// var minutes = date_ob.getMinutes();
// var seconds = date_ob.getSeconds();
// // prints date & time in YYYY-MM-DD format
// let sysdate = year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;
// console.log(sysdate);
let sysdate = new Date();
console.log(sysdate)
// DB 연결

// const run = async function () {
//   // let connection;(db에 연결하는 코드)
//   let connection;
//   connection = await OracleDB.getConnection({ user: db_user, password: db_password, connectString: db_string })
//   console.log("Successfully connected to Oracle Database");
//   try {
//     // Insert some data
//     // 실행할 sql문과 row를 정해주고 그것을 insert 시킴
//     const sql = `INSERT INTO tbl_member (USERID,PW,EMAIL,PHONE,REGDATE,UPDATEDATE,ENABLED,ROADADDR,ADDRDETAIL,ZIPNO,JIBUNADDR,NAME,BIRTHDATE,NICKNAME,PHONE2,PHONE3,AUTHEMAIL,DELSTATUS,AUTHTOKEN,GENDER)
//     VALUES (:1,:2,:3,:4,:5,:6,:7,:8,:9,:10,:11,:12,:13,:14,:15,:16,:17,:18,:19,:20)`;

//     const rows =
//       [['dodo7', 'qwer1234', 'dodo7@naver.com', '01013315275', sysdate, sysdate, '1', '', '', '', '', '김교준', '', '뿌빠잉', '', '', '0', '0', '', 1]]

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
const run = async function () {
  connection.autoCommit = true;
  let query = `INSERT INTO tbl_member (USERID,PW,EMAIL,PHONE,REGDATE,UPDATEDATE,ENABLED,ROADADDR,ADDRDETAIL,ZIPNO,JIBUNADDR,NAME,BIRTHDATE,NICKNAME,PHONE2,PHONE3,AUTHEMAIL,DELSTATUS,AUTHTOKEN,GENDER) 
  VALUES (:USERID,:PW,:EMAIL,:PHONE,SYSDATE,SYSDATE,:ENABLED,:ROADADDR,:ADDRDETAIL,:ZIPNO,:JIBUNADDR,:NAME,:BIRTHDATE,:NICKNAME,:PHONE2,:PHONE3,:AUTHEMAIL,:DELSTATUS,:AUTHTOKEN,:GENDER)`;
  let binddata = ['dodo8', 'qwer12324', 'dodo8@naver.com', '01013312275', sysdate, sysdate, '1', '', '', '', '', '김빵꾸', '', '빵꾸똥꾸', '', '', '0', '0', '', 1]
    ; (await connection).execute(query)

}
run()

// const run = async function () {
//   //json 파일을 읽는 코드

//   try {
//     // Insert some data
//     // 실행할 sql문과 row를 정해주고 그것을 insert 시킴
//     const sql = `INSERT INTO tbl_member (USERID,PW,EMAIL,PHONE,REGDATE,UPDATEDATE,ENABLED,ROADADDR,ADDRDETAIL,ZIPNO,JIBUNADDR,NAME,BIRTHDATE,NICKNAME,PHONE2,PHONE3,AUTHEMAIL,DELSTATUS,AUTHTOKEN,GENDER)
//       VALUES (:1,:2,:3,:4,:5,:6,:7,:8,:9,:10,:11,:12,:13,:14,:15,:16,:17,:18,:19,:20);`;

//     const rows =
//       [['dodo3', 'qwer1234', 'dodo3@naver.com', '01013345678', to_date(sysdate, 'YYYY-MM-DD HH24:mi:SS'), to_date(sysdate, 'YYYY-MM-DD HH24:mi:SS'), '1', '', '', '', '', '황정민', '1920-03-11', '정민이', '', '', '0', '0', '', 1]]

//     let result = await connection.executeMany(sql, rows);

//     console.log(result.rowsAffected, "Rows Inserted");

//     connection.commit();

//     // Now query the rows back

//     result = await connection.execute(
//       `select * from TBL_MEMBER`,
//       [],
//       { resultSet: true, outFormat: oracledb.OUT_FORMAT_OBJECT });

//     const rs = result.resultSet;

//     await rs.close();

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