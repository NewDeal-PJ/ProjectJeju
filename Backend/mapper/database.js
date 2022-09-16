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
OracleDB.autoCommit = true;



module.exports = {
    async create_user(data) {
        let connection;
        connection = await OracleDB.getConnection({ user: db_user, password: db_password, connectString: db_string })
        console.log("Successfully connected to Oracle Database");
        const body = data
        const user_id = body.user_id._value
        const user_pwd = body.user_pwd._value
        const user_name = body.user_name._value
        const user_birth = body.user_birth._value
        const user_gender = body.user_gender._value
        const user_tel1 = body.user_tel1._value
        const user_tel2 = body.user_tel2._value
        const user_tel3 = body.user_tel3._value
        const user_email = body.user_email._value
        const user_nickname = body.user_nickname._value
        console.log(body)
        try { 
            const salt = await bcrypt.genSalt(10)
            const hashedPwd = await bcrypt.hash(user_pwd,salt)
            
    // Insert some data
    // 실행할 sql문과 row를 정해주고 그것을 insert 시킴
    const sql = `INSERT INTO tbl_member (USERID,PW,EMAIL,PHONE,REGDATE,UPDATEDATE,ENABLED,ROADADDR,ADDRDETAIL,ZIPNO,JIBUNADDR,NAME,BIRTHDATE,NICKNAME,PHONE2,PHONE3,AUTHEMAIL,DELSTATUS,AUTHTOKEN,GENDER) VALUES (:1,:2,:3,:4,:5,:6,:7,:8,:9,:10,:11,:12,:13,:14,:15,:16,:17,:18,:19,:20)`;
    const rows =
      [[user_id, hashedPwd, user_email,user_tel1, sysdate, sysdate, '1', '', '', '', '',user_name,user_birth,user_nickname,user_tel2, user_tel3, '0', '0', '', user_gender]]
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