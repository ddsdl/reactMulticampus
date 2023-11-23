// 함수 리터럴. 함수 표현식
const onAdd = function (x, y) {
  console.log(`${x} + ${y} = ${x + y}`);
};

const onMin = function (x, y) {
  return `${x} - ${y} = ${x - y}`;
};

onAdd(10, 20);
console.log(onMin(10, 20));
console.log("");

// ES6.
// 함수 리터럴 방식만 변경 가능
// function을 삭제하고 인수 뒤를 =>로 변경 () => {} 형태가 된다
const onOne = (x, y) => {
  console.log(`${x} + ${y} = ${x + y}`);
};

const onTwo = (x, y) => {
  return `${x} - ${y} = ${x - y}`;
};

onOne(10, 20);
console.log(onTwo(10, 20));
console.log("");

// Arrow 함수 {} 내부에 구문 1개만 존재하는 경우 { }와 return을 생략하고
// 한 줄에 기술할 수 있다
// => 뒤가 문이면 실행, => 뒤가 값이면 return 값으로 취급한다
const onThree = (x, y) => console.log(`${x} + ${y} = ${x + y}`);
const onFour = (x, y) => `${x} - ${y} = ${x - y}`;

onThree(10, 20);
console.log(onFour(10, 20));
console.log("");


// 인수가 1개인 경우는 ()를 생략할 수 있다
// ** ES2017? 에서 추가. 자승 2 ** 3 => 2 * 2 * 2
const getName = name => name + ' World';
console.log(getName('Hello'))

// ESNext. 함수의 매개변수에 기본값 할당 가능
const onFive = (x = 0, y = 0) => console.log(`${x} + ${y} = ${x + y}`);
onFive();
onFive(30, 10);
console.log('');

// ** Arrow 함수는 this가 없음. 자신이 포함된 객체의 this를 자신의 this로 사용
window.name = 'Window';
window.age = 3000;

const user = {
  name: "Object",
  age: 10,
  info() {
    console.log(`${this.name} / ${this.age}`);
  },
  view: () => {
    // this는 자신이 포함된 객체 user의 this를 내부에서 사용하고 있다.
    console.log(`${this.name} / ${this.age}`);
  },
};
user.info();
user.view();


