// 함수도 값이다. 문자 리터럴, 숫자 리터값, 함수 리터럴
// const func = function () {..};

// 함수는 함수 내부에 다른 함수를 포함할 수 있다 => 중첩함수
// 함수 내부에 선언된 함수를 값이므로 다른 값처럼 반환(return) 함수의 매개변수 "함수영(func1, func2){..}"이 가능

// 함수는 함수 내부에 선언된 변수와 함수는 함수 내부 즉 함수의 { } 영역 내부에서만 사용 가능 **

// closure
// 함수 내부에 지역변수를 외부에서 참조 가능하게 만들어진 구조
// 쓰는 이유 =>
// 1 함수 내부에 선언된 변수는 함수 외부 환경을 오염시키지 않는다 => 변수 중복, 함수 중복으로 에러 회피
// 2 함수 내부에 선언되 변수를 외부에서 설정한 방법으로만 조작 또는 참조 가능하게 할 목적
let name = 'Window';

const func1 = (function () {
  let name = 'Function 1';
  let age = 20;

  return { name, age };
})();

const func2 = (function () {
  let name = 'Function 2';
  let age = 10;

  const getAge = function () {
    if (name === 'Admin') {
      return age;
    } else {
      return '권한이 없습니다';
    }
  }

  return { name, getAge };
})();

console.log(name);        // Window
console.log(func1.name);  // Function 1
console.log(func2.name);  // Function 2
console.log('');

console.log(func2.age);   // undefined
func2.age = 100;          // 에러는 아님(객체는 존재한다). 다만 실행 안됨
func2.name = 'Hello';
console.log(func2.name);  // Hello
console.log(func2.getAge());  // 10
console.log('');


const call01 = function (func/* str */) {
  const x = 10;
  const y = 20;
  const result = x + y;

  // if (str === '/') {
  //   const value = result / 2;
  //   console.log(value);
  // } else if (str === '+') {
  //   const value = result + 100;
  //   console.log(`ADD: ${value}`)
  // }

  // function func(x) {
  //   // console.log(`DIV: `);
  //   const value = x / 2;
  //   console.log(`DIV: ${value}`);
  // }

  func(result);
}

const div = function (x) {
  const value = x / 2;
  console.log(`DIV: ${value}`);
  // console.log(`DIV:`);
}
const add = function (x) {
  const value = x + 100;
  console.log(`ADD: ${value}`)
  // console.log(`ADD:`);
}

call01(div);
call01(add);