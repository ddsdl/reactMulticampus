console.log('---------------- [307] 중첩함수, 콜백함수 -----------------');
// var x = 10;

// function displayNumber() {
//   console.log(`x is ${x}`);
//   console.log(`y is ${y}`);
//   var y = 20;
// }
// displayNumber();

// HOF Higher Order Function => react HOC Component

const x = 1000;

// 중첩함수
function outer1() {
  let x = 10;

  function inner() {
    const y = 20;
    const result = x + y;
    console.log(`${x} + ${y} = ${result}`);
    // return undefined;
  }

  return inner;          // 1. 값으로 전달
  // return inner();           // 2. inner 함수를 실행 ()하고 그 결과값을 리턴해라 => undefined가 리턴
}
const result = outer1();
// console.log(result);
result();                // 1. 값으로 전달된 함수를 실행( ) 해라
// result();                // 2. 넘어온 값이 undefined. undefined를 함수로 실행 undefined() 해라 => 에러
// console.log(result);        // undefined
console.log('');

// 4. 동적으로 프로퍼티 생성 가능
// 생성자 함수에서 static이라는 이름으로 사용
outer1.name = 'outer function';
outer1.age = 20;
console.log(outer1.name);
console.log(outer1.age);
console.log('');

/*
함수는 일급객체
    1. 리터럴에 의해 생성 가능
    2. 변수나 배열요소, 객체의 프로퍼티로 할당 가능
    3. 함수의 인자나 리턴 값으로 사용 가능
    4. 동적으로 프로퍼티 생성 가능
*/

function outer2(x) {
  console.log('outer 함수 호출', x);
}

//  2. 변수나 배열요소, 객체의 프로퍼티로 할당 가능
// 변수
const func = function () {
  console.log('Hello World');
}
func();

// 배열
const arr = [10, function () { console.log('배열내부의 함수') }, 'Hello', true];
arr[1]();

// 객체
const user = {
  name: '흥부',
  address: 'Seoul',
  view(x) {
    console.log(`${x} / ${this.name} / ${this.address}`)
  }
}
user.view('Hello');
console.log('');

console.log('----------- 함수의 인자나 리턴 값이 될 수 있다. -------------');
const one = function (x, y) {
  const result = x + y;
  return result;
}
let value = one(10, 20);
console.log(value);

const two = function (x, y, func) {
  const result = x + y;
  // console.log(func);
  func();
}

const printString = function () {
  console.log('Hello World');
}

two(20, 30, printString);
two(30, 40, function () {
  console.log('Good Morning');
});
console.log('');

const three = function (x, y, callback) {
  const result = x + y;
  callback(result, 'Hello');
}

three(40, 50, function (x, y) {
  console.log(`Value: ${x} / ${y}`)
});

const onDiv = function (value, str) {
  const result = value / 2;
  console.log(`${value} / 2 = ${result}`);
  console.log(str);
}
three(50, 60, onDiv);
console.log('');

console.log('---------------- 시간이 걸리는 작업 -----------------');
const sleep = function (ms) {
  // Date.now() => 1970-01-01 00:00:00부터 현재 시간을 밀리초로 환산한 숫자값
  // 밀리초 => 1초를 1000으로 환산한 값
  const timeout = Date.now() + ms;
  while (Date.now() < timeout) { };
}

const four = function () {
  console.log('---------- START ----------');
  sleep(2000);
  const result = 2000;
  console.log(`Four: ${result}`);
  console.log('---------- END ----------');
}
// four();

const five = function () {
  console.log('---------- START ----------');
  // setTimeout은 지정한 콜백함수를 지정한 시간(2초)후에 메인 stack으로 불러와 실행.
  setTimeout(function () {
    const result = 2000;
    console.log(`Five: ${result}`);
  }, 2000);
  console.log('---------- END ----------');
}
// five();

const six = function (resolve) {
  console.log('---------- START ----------');
  setTimeout(function () {
    const result = 2000;
    // console.log(`Five: ${result}`);
    // return result;
    resolve(result);
  }, 2000);
  console.log('---------- END ----------');
}
// value = six();
// console.log(`SIX: ${value}`);

// six(function (x) {
//   console.log(`SIX: ${x}`);
// })

const seven = function () {
  console.log('---------- START ----------');
  setTimeout(function () {
    const sevenResult = 2000;

    setTimeout(function () {
      const sevenValue = 3000;
      console.log(sevenResult + sevenValue);
    }, sevenResult)

    // console.log(sevenValue);
  }, 2000);
  console.log('---------- END ----------');
}
// seven();

const eight = function (callback) {
  console.log('---------- START ----------');
  setTimeout(function () {
    const sevenResult = 2000;

    setTimeout(function () {
      const sevenValue = 3000;
      // console.log(sevenResult + value);
      callback(sevenResult + sevenValue);
    }, sevenResult)
  }, 2000);
  console.log('---------- END ----------');
}
const printValue = function (value) {
  console.log(value);
}
eight(printValue);

