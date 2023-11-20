const net = require('net');

// socket이 접속한 클라이언트
const server = net.createServer((socket) => {
  const address = socket.remoteAddress;
  console.log(`${address}가 접속했습니다...`); // createWriteStream을 이용하면 로그 파일 기록

  socket.on('data', (data) => {
    console.log(data.toString());    // 콘솔 출력
    socket.write(`SERVER: ${data}`);
  });
  socket.on('error', (error) => console.error(error));
  socket.on('end', () => console.log(`${address} FIN`));
  socket.on('close', () => console.log(`${address} 접속 종료`));
})
server.on('listening', () => console.log(`server started on port 3500`));
// 사용하지 않는 3500 포트를 오픈해서 요청을 대기한다. 
// 3500 포트를 정상적으로 오픈하면 listening 이벤트 발생.
server.listen(3500); 