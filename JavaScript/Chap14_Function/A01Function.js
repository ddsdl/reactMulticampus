// A01Function.js

console.log('-------- START ----------');
// 선언문 방식으로 정의한 경우만 에러가 발생하지 않고 정상 실행된다
// total();

// 함수는 다른쪽에서 호출해 주어야 사용이 가능한 명령 그룹
// function total() {           // 선언문 방식. 메모리에 먼저 등록된다.
// const total = function () {  // 표현식 방식. 함수 구문을 만나는 순간 함수로써 등록됨
const total = () => {           // Arrow 방식. 표현식 방식과 동일. 다만 내부에 this가 없다
  const x = 100;
  const y = 200;
  const result = x + y;
  console.log(`${x} + ${y} = ${result}`);
}
total();
console.log('Hello World');
total();
console.log('');

const min = function (value1, value2) {
  // value1, value2도 함수 내부에 선언된 변수와 동일하게 취급된다
  // let value1 = undefined; => let value1 = 10;
  // let value2 = undefined; => let value2 = 5;

  // 함수 내부에서 사용한 변수, 함수는 모두 함수 내부에서만 서로 참조 가능한 지역 변수가 된다
  // 함수 외부에서 함수 내부에 선언한 변수와 동일한 이름으로 변수를 선언해도 에러 아님 - 별도의 변수
  const x = value1;   // const x = 10;
  const y = value2;   // const y = 5;
  const result = x - y;
  console.log(`${x} - ${y} = ${result}`);
  // console.log('Good Morning');

  // const x1 = 20;
  // const y1 = 10;
  // const result1 = x1 - y1;
  // console.log(`${x1} - ${y1} = ${result1}`);
}
min(10, 5);
console.log('Good Morning');

min(20, 10);
console.log('');

const multi = function (value1, value2) {
  const x = value1;
  const y = value2;
  const result = x * y;
  // return;                   // 실행을 종료하고 호출한 곳에 undefined를 반환한다
  return `${x} - ${y} = ${result}`;
  // console.log('이 구문은 무시된다...');
}
const value = multi(10, 20);
console.log(value);


console.log('-------- END ----------');
