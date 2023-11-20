/*
순환 순서
  times => pending callback => idle prepare => poll => check => close callbacks

  https://nodejs.org/ko/docs/guides/event-loop-timers-and-nexttick/
*/

const fs = require('fs');
fs.readFile('./A01NodeREPL.js', (error, data) => {
  console.log('File System');
});

// check
setImmediate(() => console.log('setImmediate'));

// time
setTimeout(() => console.log('setTimeout'), 100);

// Promise
Promise.resolve().then(() => console.log('Promise'));

// nextTick() => 루프 순환과 상관없이 즉시 이벤트 루프의 실행 순서에 넣는다
process.nextTick(() => console.log('nextTick'));

// env
// process.env.APORT = 3000;
// console.log(process.env);

const path = require('path')
// require('dotenv').config();
require('dotenv').config({ path: path.join(__dirname, '.env.local') });
console.log(process.env);