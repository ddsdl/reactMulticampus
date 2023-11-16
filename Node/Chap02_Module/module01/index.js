// 실행은 터미널로 실행
// console.log(window.alert('Hello World'));
// console.log(globalThis);

console.log('---------- Index ----------');
// .js, .json, .mjs, .ts 등의 확장자는 생략 가능
const m01 = require('./m01');
const { name, age, onAdd } = require('./m01');

const m02 = require('./m02');
const m03 = require('./m03');

// console.log(m01);
// console.log(require('./m02'));
console.log(m03);

console.log(`${m01.name} / ${m01.age} / ${m01.onAdd(20, 30)}`);
console.log(`${name} / ${age} / ${onAdd(20, 30)}`);
console.log('');

console.log(`${m02.moduleName} / ${m02.count}`);
console.log(m02.info());
console.log(m02.onMin(30, 20));
console.log('');

console.log(`${m03.name} / ${m03.age} / ${m03.check}`);
// console.log(m03.onAdd(10, 20));    // 문자열이다

const jsonData = JSON.stringify({
  name: 'JSON Module',
  age: 20,
  check: true,
  onAdd: (x, y) => x + y
});
console.log(jsonData);

const jsData = JSON.parse(jsonData);
console.log(jsData);

