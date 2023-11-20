// html 요청을 위해 만들어진 모듈
const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/') req.url = '/index.html';
  const fileName = path.join(__dirname, req.url);

  fs.readFile(fileName, (err, data) => {
    if (err) {
      res.writeHead(404, { 'content-type': 'text/html;charset=utf-8' });
      /*
      res.write(`<h1>${req.url} 파일을 찾을 수 없습니다 </h1>`);
      res.end();
      */
      res.end(`<h1>${req.url} 파일을 찾을 수 없습니다 </h1>`);
    } else {
      res.writeHead(200, { 'content-type': 'text/html;charset=utf-8' });
      /*
      res.write(data);
      res.end();
      */
      res.end(data);
    }
  });
});
server.on('error', (error) => console.error(error));

server.on('listening', () => console.log(`server started on port 3500`));
server.listen(3500);
