const http = require('http');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env.local') })
// console.log(__dirname)
const app = require('./../app');

// req, res가 객체인 리퍼런스(즉 주소값) 변수
const server = http.createServer((req, res) => {
  // console.log('진입');
  app(req, res);
})
const port = process.env.PORT || 4000;

server.on('listening', () => console.log(`server started on port ${port}`))
server.listen(port);
