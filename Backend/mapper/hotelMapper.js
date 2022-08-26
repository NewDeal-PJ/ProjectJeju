const DataList = [];
const TopTenList = [];
const ChargerList = [];
var OracleDB = require('oracledb');
var cors = require('cors')
require("dotenv").config();
const db_user = process.env.DB_USER
const db_password = process.env.DB_PASSWORD
const db_string = process.env.DB_CONNECTSTRING

// mybatis-mapper 추가
var mybatisMapper = require('mybatis-mapper');
// Mapper Load
mybatisMapper.createMapper(['./mapper/oracle-mapper.xml']);

var express = require('express')
  , http = require('http')
var app = express();
app.use(express.static(__dirname));
app.use(
  cors({
    origin: ['http://localhost:9000'],
    credentials: true,
  }),
);

app.set('port', process.env.PORT || 3000);

// app.get('/',(req,res)=>{
//   res.send('Root')x
// })
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', function (req, res) { // '/' 위치에 'get'요청을 받는 경우,
  res.send('Hello World!'); // "Hello World!"를 보냅니다.
});


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
