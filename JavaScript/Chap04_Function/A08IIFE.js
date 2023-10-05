console.log('----------------- [298] 즉시 실행 함수 -----------------');
let x = 10000;

const one = function () {
  // 함수 내부에 선언된 변수이므로 외부 영향을 받지 않는다
  let x = 10;
  let y = 20;
  let className = '3학년 1반';

  // 직접 변수를 조작하는 것이 아니라 함수를 이용해서 허용된 조작만 가능하도록 설정 
  const onAdd = function () {
    const result = x + y;
    console.log(`${x} + ${y} = ${result}`);
  }
  const onMin = function (x, y) {
    const result = x - y;
    console.log(`${x} - ${y} = ${result}`);
  }
  const setX = function (value) {
    // guard
    if (className === '3학년 1반') {
      x = value;
    }
  }
  const setY = function (value) {
    y = value;
  }
  const getX = function () {
    return x;
  }
  const getY = function () {
    return y;
  }
  const getClassName = function () {
    return className;
  }

  return {
    onAdd, onMin, getX, getY,
    className: getClassName
  }
}

const oneResult = one();
console.log(oneResult);
console.log(oneResult.getX());
console.log(oneResult.getY());
console.log(oneResult.className());
oneResult.x = 3000;       // 에러 아님 => 객체는 존재하고 요소가 존재하지 않으면 무시된다
console.log('');


// Immediately Invoked Function Expression
// 함수를 감싼 ()는 그룹 (1 + 2), 뒤에 ();는 그룹에 있는 함수를 실행하겠다는 함수실행 구문
// (익명함수)();
(function () {
  console.log('즉시실행 함수 01');
})();
(function () {
  console.log('즉시실행 함수 02');
}());

const app = (function () {
  let x = 10;
  let y = 20;
  let className = '3학년 1반';

  function onAdd() {
    const result = x + y;
    console.log(`${x} + ${y} = ${result}`);
  }
  const onMin = function (x, y) {
    const result = x - y;
    console.log(`${x} - ${y} = ${result}`);
  }
  const setX = function (value) {
    if (className === '3학년 1반') {
      x = value;
    }
  }
  const setY = function (value) {
    y = value;
  }
  const getX = function () {
    return x;
  }
  const getY = function () {
    return y;
  }
  const getClassName = function () {
    return className;
  }

  return {
    onAdd, onMin, getX, getY, setX, setY,
    className: getClassName
  }
})();
console.log(app);
console.log('');


const two = (function (args1, args2) {
  let x = args1;
  let y = args2;
  let className = '3학년 1반';

  const onAdd = function () {
    const result = x + y;
    console.log(`${x} + ${y} = ${result}`);
  }
  const onMin = function (x, y) {
    const result = x - y;
    console.log(`${x} - ${y} = ${result}`);
  }
  const setX = function (value) {
    if (className === '3학년 1반') {
      x = value;
    }
  }
  const setY = function (value) {
    y = value;
  }
  const getX = function () {
    return x;
  }
  const getY = function () {
    return y;
  }
  const getClassName = function () {
    return className;
  }

  return {
    onAdd, onMin, getX, getY, setX, setY,
    className: getClassName
  }

})(100, 200);
console.log(two);
console.log(two.getX(), two.getY());
console.log('');


const three = {};

(function (args1, args2) {
  let x = args1;
  let y = args2;
  let className = '3학년 1반';

  const onAdd = function () {
    const result = x + y;
    console.log(`${x} + ${y} = ${result}`);
  }
  const onMin = function (x, y) {
    const result = x - y;
    console.log(`${x} - ${y} = ${result}`);
  }
  const setX = function (value) {
    if (className === '3학년 1반') {
      x = value;
    }
  }
  const setY = function (value) {
    y = value;
  }
  const getX = function () {
    return x;
  }
  const getY = function () {
    return y;
  }
  const getClassName = function () {
    return className;
  }

  const returnValue = {
    onAdd, onMin, getX, getY, setX, setY,
    className: getClassName
  }

  Object.assign(three, returnValue);

})(100, 200);

console.log(three);
console.log(three.getX(), three.getY());
console.log('');


// Global 영역을 오염시키지 않는다.

// 즉시 실행 함수 종료 시작 앞에, 종료 뒤에 ;를 붙인다.
