require("dotenv").config();

const db_user = process.env.DB_USER
const db_password = process.env.DB_PASSWORD
const db_string = process.env.DB_CONNECTSTRING
const jwt_key = process.env.JWT_KEY
var OracleDB = require('oracledb')
// const connection = OracleDB.getConnection({ user: db_user, password: db_password, connectString: db_string })
const bcrypt = require('bcrypt')
const saltRounds = 10
let sysdate = new Date();
console.log(sysdate)




module.exports = {
    async run(data) {
        let connection;
        connection = await OracleDB.getConnection({ user: db_user, password: db_password, connectString: db_string })
        console.log("Successfully connected to Oracle Database");
        const body = data
        const user_id = body.user_id
        const user_pwd = body.user_pwd
        const user_name = body.user_name
        const user_birth = body.user_birth
        const user_gender = body.user_gender
        const user_tel1 = body.user_tel1
        const user_tel2 = body.user_tel2
        const user_tel3 = body.user_tel3
        const user_email = body.user_email
        const user_nickname = body.user_nickname
        console.log(body)
        try {
    // Insert some data
    // 실행할 sql문과 row를 정해주고 그것을 insert 시킴
    const sql = `INSERT INTO tbl_member (USERID,PW,EMAIL,PHONE,REGDATE,UPDATEDATE,ENABLED,ROADADDR,ADDRDETAIL,ZIPNO,JIBUNADDR,NAME,BIRTHDATE,NICKNAME,PHONE2,PHONE3,AUTHEMAIL,DELSTATUS,AUTHTOKEN,GENDER) VALUES (:1,:2,:3,:4,:5,:6,:7,:8,:9,:10,:11,:12,:13,:14,:15,:16,:17,:18,:19,:20)`;
    const rows =
      [[user_id, user_pwd, user_email,user_tel1, sysdate, sysdate, '1', '', '', '', '',user_name,user_birth,user_nickname,user_tel2, user_tel3, '0', '0', '', user_gender]]
    //   [[`${body.user_id}`, `${body.user_pwd}`, `${body.user_email}`, `${body.user_tel1}`, sysdate, sysdate, '1', '', '', '', '', `${body.user_name}`, `${body.user_birth}`, `${body.user_nickname}`, `${body.user_tel2}`, `${body.user_tel3}`, '0', '0', '', 1]]
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
}

// module.exports = {
//     async run() {
//         let connection;
//         connection = await OracleDB.getConnection({ user: db_user, password: db_password, connectString: db_string })
//         console.log("Successfully connected to Oracle Database");
//         // const u_id = u_id
//         // const pw = pw
//         // const u_name = u_name
//         // const birth = birth
//         // const gender = gender
//         // const tel1 = tel1
//         // const tel2 = tel2
//         // const tel3 = tel3
//         // const email = email
//         // const nickname = nickname
//         console.log('u_id:',u_id)
//         try {
//           // Insert some data
//           // 실행할 sql문과 row를 정해주고 그것을 insert 시킴
//         const sql = `INSERT INTO tbl_member (USERID,PW,EMAIL,PHONE,REGDATE,UPDATEDATE,ENABLED,ROADADDR,ADDRDETAIL,ZIPNO,JIBUNADDR,NAME,BIRTHDATE,NICKNAME,PHONE2,PHONE3,AUTHEMAIL,DELSTATUS,AUTHTOKEN,GENDER) VALUES (:1,:2,:3,:4,:5,:6,:7,:8,:9,:10,:11,:12,:13,:14,:15,:16,:17,:18,:19,:20)`;
//         const rows = [[u_id, pw, email, tel1, sysdate, sysdate, '1', '', '', '', '', u_name, birth, nickname, tel2, tel3, '0', '0', '', gender]]
      
//           let result = await connection.executeMany(sql, rows);
      
//           console.log(result.rowsAffected, "Rows Inserted");
      
//           connection.commit();
      
      
//         } catch (err) {
//           console.error(err);
//         } finally {
//           if (connection) {
//             try {
//               await connection.close();
//             } catch (err) {
//               console.error(err);
//             }
//           }
//         }
//       }
// }