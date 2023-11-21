const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');
const url = require('url');
const mime = require('mime');
require('dotenv').config({ path: path.join(__dirname, '.env.local') })

const server = http.createServer((req, res) => {

  if (req.url === '/') req.url = '/index.html';

  // GET => /chat.html?username=ABC&num=30&add=서울 => 넘어오는 값까지 파일명으로 인식해서 찾는다
  // POST => /chat.html
  const mimeType = mime.getType(req.url);

  const parseURL = url.parse(req.url, true);
  // console.log(parseURL);
  const fileName = path.join(__dirname, '/public', parseURL.pathname);

  const logFile = fs.createWriteStream(path.join(__dirname, 'chat.log'), { flags: 'a' });

  fs.readFile(fileName, (err, data) => {
    if (err) {
      res.writeHead(404, { 'content-type': 'text/html;charset=UTF-8' });
      res.end(`<h1>${req.url} 파일을 찾을 수 없습니다.</h1>`);
    } else {
      res.writeHead(200, { 'content-type': mimeType + ';charset=UTF-8' });
      res.end(data);
    }

    logFile.write(`[${new Date().toLocaleString()}] [${req.socket.remoteAddress}] ${req.url} ${os.EOL}`);
  })
});
const port = process.env.PORT || 3001;

server.listen(port, () => {
  console.log(`TCP Sever Started on port 3000`);
});
