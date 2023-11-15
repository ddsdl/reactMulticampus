
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const mime = require('mime');

const server = http.createServer((req, res) => {

  if (req.url === '/') req.url = '/index.html';

  const mimeType = mime.getType(req.url);
  const fileName = path.join(__dirname, req.url);
  fs.readFile(fileName, (err, data) => {
    if (err) {
      res.writeHead(404, { 'content-type': 'text/html;charset=UTF-8' });
      res.end(`<h1>${req.url} 파일을 찾을 수 없습니다.</h1>`);
    } else {
      res.writeHead(200, { 'content-type': mimeType + ';charset=UTF-8' });
      res.end(data);
    }
  })
});

server.listen(3000, () => {
  console.log(`TCP Sever Started on port 3000`);
});
