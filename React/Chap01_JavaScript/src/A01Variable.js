// 변수.
let address = 'Seoul';
console.log(`Address: ${address}, typeof: ${typeof address}`);

address = 10;
console.log(`Address: ${address}, typeof: ${typeof address}`);

address = null;
console.log(`Address: ${address}, typeof: ${typeof address}`);
console.log('');

// 1. 재 선언 안됨
// let address = true;
// var address = true;
// const address = true;

// 2. { } 변수 참조 범위를 갖는다
for (var i = 0; i < 3; i++) {
  var j = 100;
  console.log(i);
}
console.log(`for i => ${i}, j=> ${j}`);
console.log('');

for (let k = 0; k < 3; k++) {
  let m = 100;
  console.log(k, m);
}
// console.log(`for k => ${k}, m=> ${m}`);
console.log('');

// 상수
// 1, 2번은 let와 동일
const age = 200;
console.log(`age: ${age}, typeof: ${typeof age}`);

// 3. 초기화 후 값 변경 안된다.
// age = 300;

// 리퍼런스 변수(참조형은 참조되는 요소의 값은 변경 가능하다)
const arr = [10, 20];
arr[0] = 2000;
console.log(arr);

