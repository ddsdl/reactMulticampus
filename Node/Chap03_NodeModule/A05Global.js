/* eslint-disable no-undef */
console.log('---------------------- try ~ catch ----------------------');
// 1. 에러(예외)가 발생할 수 있는 구문을 try { } 내부에 기술한다.
// try { } 구문을 먼저 실행. 실행 중 에러(예외)가 발생하면 즉각 처리를 catch { } 블럭으로 이동하여 실행(에러 발생 안함)
// 즉 처리가 자연스럽게 catch 블럭으로 이동
try {
  console.log('Hello World');
  x();
  console.log('Good Bye~~~');
} catch (err) {
  // err는 try 구문에서 발생한 에러(도스창에 출력되는 문자열) 정보를 가지고 있는 객체
  // console.log(err);
  console.log('잠시 점검중입니다...')
}
console.log('');

// 2. 일정 프로그램을 실행하지 않을 목적 => throw 처리. throw new Error('에러 메시지');
const bank = (num) => {
  let money = 10000;

  try {
    if (money - num < 0) throw new Error('잔금이 부족합니다..');
    else {
      money = money - num;
      console.log(`잔금은 ${money}가 남았습니다.`);
    }
  } catch (err) {
    console.error(err.message);
  }
}
bank(15000);
console.log('');


console.log('---------------------- 경로 ----------------------');
console.log(__dirname);
console.log(__filename);
console.log('');

console.log('---------------------- 시간 ----------------------');
// setTimeout은 지정한 시간 경과후 딱 1번 실행되고 메모리에서 삭제됨
setTimeout(() => {
  console.log('이건 맨 나중에 출력됩니다...')
}, 0);

// 메모리에 존재. 지정한 시간마다 익명함수를 재 실행한다
const interval = setInterval(() => {
  const today = new Date();
  console.log(today.toLocaleString())
}, 1000);

// 메모리에 있는 setInterval 함수 삭제
clearInterval(interval);
console.log('');

console.log('---------------------- console ----------------------');
console.log('LOG');
// console.trace('TRACE');      // JavaScript에서는 존재. Node에서는 지원 안함
console.debug('DEBUG');
console.info('INFO');
console.warn('WARN');
console.error('ERROR');
console.log('');


console.log('---------------------- color console ----------------------');
// https://www.npmjs.com/package/tracer
// const tracer = require('tracer').console();
const tracer = require('tracer').colorConsole({
  level: 3
});
tracer.log('LOG');                                // level 0
tracer.trace('TRACE', 'Hello World');             // level 1
tracer.debug('DEBUG %s %d', 'Hello', 100);        // level 2
tracer.info('INFO');                              // level 3
tracer.warn('WARN');
tracer.error('ERROR');
console.log('');

const tracerFile = require('tracer').dailyfile({
  root: require('path').resolve('daily'),
  maxLogFiles: 10,
  level: 3
});
tracerFile.log('LOG');                                // level 0
tracerFile.trace('TRACE', 'Hello World');             // level 1
tracerFile.debug('DEBUG %s %d', 'Hello', 100);        // level 2
tracerFile.info('INFO');                              // level 3
tracerFile.warn('WARN');
tracerFile.error('ERROR');
console.log('');


console.log('---------------------- END ----------------------');
