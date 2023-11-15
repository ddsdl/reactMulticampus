const os = require('os');

console.log('---------- 운영 체체 정보 ----------');
console.log(os.arch());
console.log(os.platform());
console.log(os.type()); // 운영체제 정보
console.log(os.uptime());
console.log(os.hostname());
console.log(os.release()); // 운영체제 버전
console.log('');

console.log('---------- 경로 ----------');
console.log(`homedir: ${os.homedir()}`); // Home 디렉터리 경로
console.log(`tmpdir: ${os.tmpdir()}`); // 임시파일 저장 경로
console.log('');

console.log('---------- CPU 정보 ----------');
console.log(os.cpus());
console.log(`cpus.length: ${os.cpus().length}`);
console.log('');

console.log('---------- Memory 정보 ----------');
console.log(`freemem : ${os.freemem}`);
console.log(`totalmem: ${os.totalmem}`);
console.log('');

console.log(os.EOL);
