const net = require('net');

const client = net.createConnection({ port: 3500, host: '127.0.0.1' }, () => {
  const { address, family, port } = client.address();
  console.log(`localhost: ${address}: ${port} / ${family} `);
  client.write('안녕하세요...');
});

client.on('data', (data) => console.log(data.toString()));
client.on('error', (error) => console.log(error.message));
client.on('end', () => console.log(`서버에서 FIN 전송`));
client.on('close', () => console.log(`접속 종료`));
