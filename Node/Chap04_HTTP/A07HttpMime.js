// html 요청을 위해 만들어진 모듈
const http = require('http');
const path = require('path');
const fs = require('fs');

// 브라우저에게 전송되는 파일의 타입(mime type)을 통보 
const mime = {
  html: 'text/html',
  javascript: 'application/javascript',
  jpg: 'image/jpeg',
  png: 'image/png',
  svg: 'image/svg+xml',
  ico: 'image/x-icon'
}
const getType = (url) => {
  const extName = path.extname(url).substring(1);   // .을 제외하고 가져온다
  return mime[extName]
}

const server = http.createServer((req, res) => {
  if (req.url === '/') req.url = '/index.html';
  const fileName = path.join(__dirname, req.url);

  const readStream = fs.createReadStream(fileName);
  const mimeType = getType(fileName);

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
