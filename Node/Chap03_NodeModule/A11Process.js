const fs = require('fs');

// process 모듈은 require()를 사용하지 않고도 Node.js 애플리케이션에 접근할 수 있는 전역객체다.
// 동작중인 프로세스에 접근할 수 있는 권한을 제공한다.
console.log(`version: ${process.version}`);
console.log(`arch: ${process.arch}`);
console.log(`platform: ${process.platform}`);
console.log(`pipe: ${process.pid}`);            // 현재 프로세스 아이디
console.log(`uptime: ${process.uptime()}`);     // 프로세스가 시작된 후 경과 시간
console.log(`execPath: ${process.execPath}`);
console.log(`cwd: ${process.cwd()}`);           // 프로세스가 실행되는 위치.
console.log(`cpuUsage: ${JSON.stringify(process.cpuUsage())}`);
console.log('');

// node A11Process.js 3000 Hello
// argv는 기본매개변수 2개 외에 사용자가 전달한 값을 받아 내부적으로 사용할 수 있다
console.log(`argv: ${process.argv}`);
console.log(`argv: ${process.argv[0]}`);    // execPath
console.log(`argv: ${process.argv[1]}`);    // cwd
console.log(`argv: ${process.argv[2]}`);    // 3000
console.log(`argv: ${process.argv[3]}`);    // Hello
console.log('');

// 표준 입출력 - stream, event 기반
// process.stdin => 키보드 입력
// process.stdout => console 출력(도스 창 출력)
/*
const writeStream = fs.createWriteStream('A11Write.txt', { flags: 'a' });
process.stdin.on('data', (data) => {
  // console.log(data.toString());
  process.stdout.write(data);
  writeStream.write(data);
});
*/

const writeStream = fs.createWriteStream('A11Write.txt', { flags: 'a' });
process.stdin.pipe(process.stdout);
process.stdin.pipe(writeStream);

// Event
process.stdin.on('custom', () => console.log('Custom 이벤트 발생'));

process.stdin.emit('custom');