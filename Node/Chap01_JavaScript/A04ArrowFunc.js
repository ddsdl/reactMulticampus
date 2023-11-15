// 함수 리터럴. 함수 표현식
const onAdd = function (x, y) {
  console.log(`${x} + ${y} = ${x + y}`);
};

const onMin = function (x, y) {
  return `${x} - ${y} = ${x - y}`;
};

console.log(onAdd); // 변수의 값(문자 리터럴 형식으로 표시됨)
onAdd(10, 20);
console.log(onMin(10, 20));
console.log('');

// ES6. Arrow Function - 화살표 함수
// 1. function을 삭제하고 (매개변수, ..) 다음에 => 를 붙인다
const one = (x, y) => {
  console.log(`${x} + ${y} = ${x + y}`);
};

const two = (x, y) => {
  return `${x} - ${y} = ${x - y}`;
};
one(10, 20);
console.log(two(10, 20));
console.log('');

// 2. 함수 { } 내부에 명령 구문이 딱 1줄만 있는 경우는 함수의 {}와 return을 생략하고
//  한 줄에 기술 할 수 있다. [중요] return 키워드도 생략한다.
//  Arrow 함수가 => 다음의 구문이 실행 구문이면 그냥 실행만, => 다음이 값이면 return이 있는 것으로 취급한다(즉 값이면 리턴값 취급)
const three = (x, y) => console.log(`${x} + ${y} = ${x + y}`);
const four = (x, y) => `${x} - ${y} = ${x - y}`;
three(10, 20);
console.log(four(10, 20));
console.log('');

// 3. 매개변수가 1개면 매개변수를 받는 ()를 생략할 수 있다
const five = (x) => 2 ** x;
console.log(`2의 3승은 ${five(3)} 입니다.`);
console.log('');

// 4. Arrow 함수는 자체 this를 갖지 않는다
// 내부에서 this가 참조되면 자신을 포함한 객체의 this 화살표 함수의 내부 this로 사용한다.

// [중요]: 화살표 함수 내부에서 this를 사용하는 경우(메서드)는 화살표 함수를 사용하지 않는다(꼭은 아님)
globalThis.name = 'WINDOW';
globalThis.age = 1000;

const obj = {
  name: 'HungBu',
  age: 25,
  info: {
    tel: '010-1234-5678',
    add: 'Seoul',
  },
  toString() {
    console.log(this.name + '님의 나이는 ' + this.age + '세 입니다\n이 글자는 다음 라인에 표시');
  },
  view: () => {
    console.log(this); // window
    console.log(`${this.name}님의 나이는 ${this.age}세 입니다.`);
  },
};

obj.toString();
obj.view();
