console.log('---------------- [256] 함수 표현식 -----------------');

// 변수이므로 undefined가 할당. 함수 형식으로 호출할 수 없음.
// one();
// console.log(one);    // var로 선언한 경우만 에러아님

const one = function () {
  const result = 100 + 200;
  console.log(`100 + 200 = ${result}입니다`);
}
console.log(one);   // value
one();              // 값이 함수로써 동작
console.log('');

const two = function (x, y) {
  const result = x + y;
  console.log(`two() => ${x} + ${y} = ${result}입니다`);
}
two(100, 200);    // x = 100, y = 200
two(1, 2);        // x = 1, y = 2
console.log('');

const three = function (x, y) {
  const result = x + y;
  return result;
}
console.log(three(20, 30));
console.log('');

const four = function (x, y) {
  const result = x + y;
  console.log(`two() => ${x} + ${y} = ${result}입니다`);
  // return undefined;
}
const valueFour = four(11, 22);
console.log(valueFour);           // undefined
console.log('');


// five();      // five는 변수 => undefined

// var 변수라 함수 값이 대입될때마다 실행되는 함수가 달라진다 => const로 변경 선언
var five = function () {
  console.log('Five ONE');
}
five();       // Five ONE

var five = function () {
  console.log('Five TWO');
}
five();       // Five TWO
console.log('');


// 함수 표현식. 익명함수를 이용한다. 이름을 붙이면 기명함수라 한다.
// 표현식 방식의 함수 선언(익명함수)
// six는 변수명. 대입되는 함수가 함수명이 없다 => 익명함수
const six = function (x, y) {
  const result = x + y;
  console.log(`six() => ${x} + ${y} = ${result}입니다`);
}
console.log(six);   // 문자열
console.dir(six);   // 구조
console.log('');

const factorial = function (x) {
  if (x === 1) return 1;
  else return x * factorial(x - 1);
}
let result = factorial(10);
console.log(result);
console.log('');


// 표현식 방식의 함수 선언(기명함수)
// fact라는 기명함수 이름은 함수 내부에서만 참조 가능
const factorial1 = function fact(x) {
  if (x === 1) return 1;
  else return x * fact(x - 1);
}
console.dir(factorial1);

// result = factorial(10);
// console.log(result);
console.log('');


// Function 생성자 함수 이용
// 마지막 문자열이 실행구문. 이전은 모두 매개변수로 취급된다
const seven = new Function('x', 'y', 'return x * y');
const value = seven(20, 30);
console.log(value);
