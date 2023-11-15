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
