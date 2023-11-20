// html 요청을 위해 만들어진 모듈
const http = require('http');

const server = http.createServer((req, res) => {
  // req(request) => client로 부터 넘어오는 모든 요청 정보가 담긴 객체
  // res(response) => client로 응답하기 위한 모든 정보가 담긴 객체
  // console.log(req);
  console.log(req.method, req.url, req.httpVersion);
  console.log(req.headers);

  res.write('<h1>Hello World</h1>');
  res.end();
});
server.on('error', (error) => console.error(error));

server.on('listening', () => console.log(`server started on port 3500`));
server.listen(3500);
