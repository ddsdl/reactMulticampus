const net = require('net');

const client = net.createConnection({ port: 80, host: 'google.com' }, () => {
  console.log(`Google 접속: ${client.address()}`);
  // 80번 포트(웹 서버)로 요청
  client.write('GET /index.html HTTP/1.1\n\n'); // 브라우저로 접속하면 브라우저가 서버에 전달하는 값
});

client.on('data', (data) => console.log(data.toString()));
client.on('error', (error) => console.log(error.message));
client.on('end', () => console.log(`서버에서 FIN 전송`));
client.on('close', () => console.log(`접속 종료`));
