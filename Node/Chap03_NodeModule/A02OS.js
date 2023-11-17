const os = require('os');

console.log('------ 운영체체 정보 -----');
console.log('os.arch: ' + os.arch());
console.log(`os.platform(): ${os.platform()}`);
console.log(`os.type(): ${os.type()}`);
console.log(`os.uptime(): ${os.uptime() / 60}`);  // 초
console.log(`os.hostname(): ${os.hostname()}`);
console.log(`os.release(): ${os.release()}`);
console.log('');

console.log('------ 경로 -----');
console.log(`os.homedir(): ${os.homedir()}`);
console.log(`os.tmpdir(): ${os.tmpdir()}`);
console.log('');

console.log('------ CPU 정보 -----');
console.log(`os.cpus(): `, os.cpus());
console.log(`os.cpus(): `, os.cpus().length);
console.log('');

console.log('------ Memory 정보 -----');
console.log(`os.freemem(): `, os.freemem());
console.log(`os.totalmem(): `, os.totalmem());
console.log('');

// 리눅스 => \n, 윈도우 => \r\n
os.EOL; // 개행 문자
