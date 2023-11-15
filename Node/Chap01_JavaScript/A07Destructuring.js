const user = {
  name: 'NolBu',
  age: 30,
  info: {
    tel: '010-1245-7845',
    address: 'Seoul',
  },
};

// 객체 내부의 요소의 값을 참조해서 다른 변수에 대입
/*
const name = user.name;
const address = user.info.address;
*/

// 객체는 { }로 선언, 배열은 [ ] 로 받아 사용한다
// 1. { } 내부에 선언되는 변수명은 참조하는 객체의 key 이름과 동일해야 한다
const {
  name,
  age,
  info: { tel, address },
} = user;
console.log(`Name: ${name}, Age: ${age}, Tel: ${tel}, Address: ${address}`);
console.log('');

// 2. 이미 사용하는 변수명이 있는 경우 별칭 사용
const { name: nickname, age: num } = user;
console.log(`Name: ${nickname}, Age: ${num}`);
console.log('');

// 3. 선언하는 변수에 초기값 설정이 가능하다. 초기값이 없으면 undefined가 출력된다.
const { name: nick = 'UNKNOWN', age: n = 0, count = '' } = user;
console.log(`Name: ${nick}, Age: ${n}, Count: ${count}`);
console.log('');

// 배열은 []로 받는다
// Key가 없으므로 변수명은 중복되지 않는 변수명을 선언해서 사용. 따라서 별칭 지정도 없다
const arr = ['A', 'B', 'C'];

const [a, b, c] = arr;
console.log(`First: ${a}, Second: ${b}, Thired: ${c}`);

// 필요한 값만 추출 가능
const [, , c1] = arr;
console.log(`Thired: ${c1}`);

const [a2, , c2] = arr;
console.log(`First: ${a2}, Thired: ${c2}`);

// 기본값 할당 가능. 기본값이 없어도 d3은 에러 아님. 단 undefined로 출력된다.
const [a3, b3, c3, d3 = 0] = arr;
console.log(`First: ${a3}, Second: ${b3}, Thired: ${c3} / ${d3}`);
