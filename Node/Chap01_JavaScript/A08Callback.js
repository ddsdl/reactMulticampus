/* eslint-disable no-unused-vars */
console.log('---------------- 중첩함수, 콜백함수 -----------------');

// 중첩 함수
function outer() {
  const x = 100;
  console.log(`outer() x변수=> ${x}`);

  function inner(y) {
    // y도 inner 함수 내부에 선언된 지역 변수가 된다.
    console.log(`inner() y 변수=> ${y}`);
    console.log(`inner() x 변수=> ${x}`); // scope chain이라 한다

    // 여기에 다시 중첩되는 함수가 올 수 있다
  }

  inner(200);
}
outer();
// inner();
console.log('');

const x = 'Global';
const one = function () {
  // 함수는 생성될때 scope chain이 결정되서 메모리에 올라간다.
  console.log(x);
};
const two = function () {
  // eslint-disable-next-line no-unused-vars
  const x = 'TWO LOCAL';
  one();
};

one(); // Global
two(); // Global
console.log('');

/*
함수는 일급객체
    1. 리터럴에 의해 생성 가능
    2. 변수나 배열요소, 객체의 프로퍼티로 할당 가능
    3. 함수의 인자나 리턴 값으로 사용 가능
    4. 동적으로 프로퍼티 생성 가능
*/

// 함수 내부에 선언된 변수의 값을 함수 외부에서 참조 할 수 있도록 리턴 값으로 사용
function outerTwo() {
  const x = 100;
  console.log(`outer() x변수=> ${x}`);

  function inner(y) {
    console.log(`inner() y 변수=> ${y}`);
    console.log(`inner() x 변수=> ${x}`);
  }
  inner(200);

  return x;
}
const result = outerTwo();
console.log(`outerTwo 내부에 선언된 변수 x의 값: ${result}`);
console.log('');

// 함수 내부에 선언된 변수의 값을 함수 외부에서 참조 할 수 있도록 리턴 값으로 사용
function outerThree() {
  const x = 100;
  console.log(`outer() x변수=> ${x}`);

  function inner(y) {
    console.log(`inner() y 변수=> ${y}`);
    console.log(`inner() x 변수=> ${x}`);
  }
  // inner(200);
  // console.log(inner);

  return inner;
}
const resultFunc = outerThree();
console.log(`outerThree 내부에 선언된 함수 inner의 값: ${resultFunc}`);
// 함수는 () 없이 호출하면 함수리터럴(값 - 문자열)로 출력되지만
// 함수 실행 명령인 ()를 변수뒤에 붙이면 함수로써 동작한다
// 일반 변수를 ()로 쳐서 호출하면 에러다. 값이 함수인 경우만 ()를 이용해 함수로써 호출 가능
resultFunc(50);
console.log('');

// outerThree()이 먼저 실행되고 리턴되는 값이 inner라는 함수를 outerThree 실행후에
// 반환된 inner를 함수로써 실행 ( ) 해라
// outerThree() => inner  => (60) => inner(60) => outerThree()(60);
outerThree()(60);
console.log('');

const onAdd = function (x, y) {
  return x + y;
};
const sum = onAdd(10, 20);
console.log(sum);
console.log(onAdd(10, 20));
console.log('');

// 함수를 매개변수로 전달하자 - 함수 내부에서 실행하는 구문이 시간이 걸리는 경우
const three = function (ms) {
  console.log('main process 처리 하는 함수 three 시작');

  const now = Date.now(); // 1970-01-01 00:00:00 기준으로 현재까지 경과 시간을 밀리초(1000)로 리턴
  // eslint-disable-next-line no-empty
  while (now + ms > Date.now()) {} // 지정한 시간동안 아무것도 안함 (시간 걸리는 작업)
  const x = 10;
  const y = 20;
  const result = x + y;
  console.log(`result=> ${result} / ${ms}`);

  console.log('main process 처리 하는 함수 three 종료');
};
// three(500);

const four = function (ms) {
  console.log('----- four START -----');

  // setTimeout을 Ajax 요청으로 생각하고 실행
  setTimeout(function () {
    console.log('서버로부터 결과값 받아옴...');
  }, ms);
  const x = 10;
  const y = 20;
  const result = x + y;
  console.log(`result=> ${result} / ${ms}`);

  console.log('----- four END -----');
};
// four(2000);

const func = function () {
  console.log('서버로부터 결과값 받아옴...');
};
// console.log(func);
const five = function (ms, cb) {
  console.log('----- five START -----');

  // setTimeout을 Ajax 요청으로 생각하고 실행
  // document.addEventListener('click', func) 와 동일한 구문
  setTimeout(cb, ms);
  const x = 10;
  const y = 20;
  const result = x + y;
  console.log(`result=> ${result} / ${ms}`);

  console.log('----- five END -----');
};
// five(3000, func);

const six = function (ms) {
  console.log('----- six START -----');

  setTimeout(function () {
    // 시간이 걸리는 작업을 함수로 묶어 처리
    const x = 10;
    const y = 20;
    const result = x + y;

    console.log(`result=> ${result} / ${ms}`);
  }, ms);

  console.log('----- six END -----');
};
// six(3000);

const funcSeven = function () {
  // 시간이 걸리는 작업을 함수로 묶어 처리
  const x = 10;
  const y = 20;
  const result = x + y;

  console.log(`result=> ${result}`);
};

const seven = function (ms, cb) {
  console.log('----- seven START -----');

  setTimeout(cb, ms);

  console.log('----- seven END -----');
};
// seven(3000, funcSeven);

const seven01 = (cb) => {
  console.log('----- seven01 START -----');

  cb();

  console.log('----- seven01 END -----');
};
// seven01(funcSeven);

// [개념] - 함수가 생성될때 상위 scope chain이 global
const seven02Func = (x) => {
  console.log(`Hello World ${x}`);
};

const seven02 = (cb) => {
  console.log('----- seven01 START -----');

  const x = 10;
  const y = 20;
  const result = x + y;

  // 함수가 생성될때 상위 scope chain이 seven02 => global
  const seven02Func = () => {
    console.log(`Hello World ${result}`);
  };
  seven02Func();

  // 콜백 함수는 함수가 생성되는 시점이 함수가 정의된 곳에 따라 스코프 체인이 결정되서 매개변수로 전달된다.

  // 이 경우는 콜백함수 seven02Func이 global에 정의되어 있으므로 이 seven02Func의 스코프 체인은 함수 내부 => global 순으로 참조
  // 따라서 내부 result 값 참조 불가. 값 참초 가능하도록 매개변수로 전달
  cb(result);

  console.log('----- seven01 END -----');
};
// seven02(seven02Func);

const seven03Func = (x) => {
  console.log(`Hello World ${x}`);
};

const seven03 = (cb) => {
  console.log('----- seven01 START -----');

  const x = 10;
  const y = 20;
  const result = x + y;

  setTimeout(() => {
    cb(result);
  }, 2000);

  console.log('----- seven01 END -----');
};
seven03(seven03Func);

console.log('----- main process 종료 -----');
