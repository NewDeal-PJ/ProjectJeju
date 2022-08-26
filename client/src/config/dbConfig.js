const oracledb = require('oracledb');

async function run() {

  let connection;

  try {
    connection = await oracledb.getConnection({ user: "jeju", password: "1111", connectString: "np.silly.monster/xe" });
    console.log("Successfully connected to Oracle Database");

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

run();
module.exports =
{
    user : process.env.NODE_ORACLEDB_USER || "jeju",
    password : process.env.NODE_ORACLEDB_PASSWOR || "1111",
    connectString : process.env.NODE_ORACLEDB_CONNECTIONSTRING || "np.silly.monster/xe"
}
