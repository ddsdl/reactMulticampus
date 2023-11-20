const http = require('http');
const path = require('path');
const fs = require('fs');
const mime = require('mime');

const server = http.createServer((req, res) => {
  if (req.url === '/') req.url = '/index.html';
  const fileName = path.join(__dirname, req.url);

  const readStream = fs.createReadStream(fileName);
  const mimeType = mime.getType(fileName);

  readStream.on('error', (error) => {
    res.writeHead(404, { 'content-type': 'text/html;charset=utf-8' });
    res.end(`<h1>${req.url} 파일을 찾을 수 없습니다 </h1>`);
  });
  readStream.on('data', (data) => {
    res.writeHead(200, { 'content-type': mimeType + ';charset=utf-8' });
    res.end(data);
  })

});
server.on('error', (error) => console.error(error));

server.on('listening', () => console.log(`server started on port 3500`));
server.listen(3500);
