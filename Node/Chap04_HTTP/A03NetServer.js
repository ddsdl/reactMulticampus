const net = require('net');
const path = require('path');
const fs = require('fs');
const os = require('os');

const parseRequest = (data) => {
  const req = {
    headers: {}
  }

  const arr = data.split(os.EOL);
  // console.log(arr);
  const firstLine = arr.shift().split(' ');
  // console.log(firstLine);
  req.method = firstLine[0];
  req.url = firstLine[1];
  req.httpVersion = firstLine[2];

  arr.forEach((item) => {
    if (item.trim() !== '') {
      const line = item.split(':');
      const name = line[0].trim().toLowerCase();
      const value = line[1].trim();
      req.headers[name] = value;
    }
  })

  return req;
}

const server = net.createServer((socket) => {
  const address = socket.remoteAddress;
  console.log(`${address}가 페이지 요청...`);

  socket.on('error', (error) => console.error(`${address} 요청 에러, ${error.message}`));
  socket.on('end', () => console.log(`${address} 접속 종료`));

  // 요청 처리
  socket.on('data', (data) => {
    // console.log(data.toString());
    const req = parseRequest(data.toString());
    // console.log(req)
    console.log(req.method, req.url, req.httpVersion)
    console.log(req.headers['user-agent']);

    /*
    // 브라우저에 응답
    socket.write('HTTP/1.1 200 OK' + os.EOL);
    socket.write('content-type: text/html; charset=utf-8' + os.EOL);
    socket.write(os.EOL);
    socket.write('<h1>Hello World</h1>');
    socket.end();         // 브라우저가 전송 완료를 캐치해서 socket을 닫는다
    */

    // 아무런 파일도 지정하지 않으면 디폴트 파일을 전송
    if (req.url === '/') req.url = '/index.html';

    // index.html => 경로/index.html
    // public/hello.html => 경로/public/hello.html
    const fileName = path.join(__dirname, req.url);
    // console.log(fileName);

    fs.readFile(fileName, (err, data) => {
      if (err) {
        socket.write('HTTP/1.1 404 Not Found' + os.EOL);
        socket.write('content-type: text/html; charset=utf-8' + os.EOL);
        socket.write(os.EOL);
        socket.write(`<h1>${fileName}을 찾을 수 없습니다.</h1>`);
        // socket.end();
      } else {
        socket.write('HTTP/1.1 200 OK' + os.EOL);
        socket.write('content-type: text/html; charset=utf-8' + os.EOL);
        socket.write(os.EOL);
        socket.write(data);
        // socket.end();
      }
      socket.end();
    })
  })
})
server.listen(3500, () => console.log(`server started on port 3500`));
