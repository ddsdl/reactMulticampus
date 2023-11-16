const m01 = require('./m01');

console.log('---------- index ----------');
console.log(`${m01.name} / ${m01.age}`);

// Folder < JSON < JavaScript 
const m02 = require('./m02');
console.log(`${m02.name} / ${m02.type}`);

// 폴더명만 존재하는 경우
// 폴더명만 지정하는 경우. 폴더 내부에서 index 이름을 가지고 있는 
// JSON < JavaScript < package.json 파일의 main 항목에 지정한 파일
const m03 = require('./m03');
console.log(`${m03.name} / ${m03.type}`);