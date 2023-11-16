// 가장 기본적인 형태
const m01 = require('./M01Object');
// console.log(m01);
console.log(`M01 Object=> ${m01.name} / ${m01.age} / ${m01.check}`);
console.log(`${m01.onAdd(10, 20)}`);
console.log('');


// 전달되는 값 자체가 함수이다
const m02 = require('./M02Function');
// console.log(m02);      // 값으로 전달됨
const result = m02(20, 5);
console.log(`M02(20, 5) => ${result}`);
console.log('');


// 함수가 실행되고 그 리턴값을 받아 처리한다
/*
const m03 = require('./M03FuncReturn');
const m03Data = { name: 'NolBu', count: 10 };
const m03Result = m03(m03Data);
console.log(m03Result);
*/
const m03 = require('./M03FuncReturn')({ name: 'NolBu', count: 10 });
console.log(m03.getCount());
m03.increase(3);
console.log(m03.getCount());
m03.decrease();
console.log(m03.getCount());
m03.display();
console.log(m03.count);
console.log('');


const m04 = require('./M04NodeModule');
// console.log(m04);      // m04 = { makePath: function(){}, getText: function(){} }
const myPath = m04.makePath('public', 'images', 'tree', '.jpg');
console.log(myPath);

// 파일을 읽어온 후 해야 할 작업
const readProcess = (txt) => {
  // 파일 기록..
  console.log(txt.toString());
}
m04.getText('./index.js', readProcess);
