// npm i mime, dotenv
const http = require('http');
const path = require('path');
const fs = require('fs');
const mime = require('mime');
require('dotenv').config(); // root 폴더의 .env 파일을 불러온다.
// require('dotenv').config({ path: path.join(__dirname, '.env') });

const server = http.createServer((req, res) => {
  if (req.url === '/') req.url = '/index.html';

  const fileName = path.join(__dirname, req.url);
  const mimeType = mime.getType(fileName);

  fs.stat(fileName, (error, stats) => {
    if (error) {
      res.writeHead(404, { 'content-type': 'text/html;charset=utf-8' });
      res.end(`<h1>${req.url} 파일을 찾을 수 없습니다 </h1>`);
    } else if (stats.isDirectory()) {
      res.writeHead(403, { 'content-type': 'text/html;charset=utf-8' });
      res.end(`<h1>${req.url} 폴더에 접근 할 수 없습니다 </h1>`);
    } else {
      res.writeHead(200, { 'content-type': mimeType + ';charset=utf-8' });
      fs.createReadStream(fileName).pipe(res);  // 전송
    }
  })

});
const port = process.env.PORT || 3501;

server.on('error', (error) => console.error(error));
server.on('listening', () => console.log(`server started on port ${port}`));
server.listen(port);
