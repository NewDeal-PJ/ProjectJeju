//import
require("dotenv").config();
const db_user = process.env.DB_USER
const db_password = process.env.DB_PASSWORD
const db_string = process.env.DB_CONNECTSTRING
const jwt_key = process.env.JWT_KEY
const OracleDB = require('oracledb')
const pool = OracleDB.createPool({
  user : db_user,
  password : db_password,
  connectString : db_string
})

// const connection = OracleDB.getConnection({ user: db_user, password: db_password, connectString: db_string })
const bcrypt = require('bcrypt')
const saltRounds = 10
let sysdate = new Date();
console.log(sysdate)




// DB 연결
module.exports = {
  async run(query, params) {
    return new Promise((resolve, reject) => {
        pool.getConnection()
            .then(conn => {
                conn.query(query, params)
                    .then((rows) => {
                        resolve(rows);
                        conn.end(); // (필수) connection 종료
                    })
                    .catch(err => {
                        console.log(err);
                        conn.end(); // (필수) connection 종료
                        reject(err);
                    })

            }).catch(err => {
                //not connected
                console.log(err);
                reject(err);
            });
    });
}
}

// let connection;
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