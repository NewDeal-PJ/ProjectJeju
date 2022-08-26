const express = require('express')
const app = express()
const port = 4000


// 기본 홈 라우팅
app.get('/', (req, res) => {
  res.send('Hello World!')
})


// port 설정
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})