// A05Optional.js
// ||, && 를 연산자로도 사용한다

let y = 1;
y = y || 10;            // y = 1 || 10; => y = 1;
console.log(`y=> ${y}`);

// JavaScript에서는 변수의 값이 0, -0, '', NaN, false, null, undefined면 
// 모두 false로 취급된다.
let x = 0;
x = x || 10;        // let x = undefined || 10; => let x = false || 10; => let x = 10;
console.log(`x=> ${x}`);

// Null 병합 => || 와 동일하다. 다만 조건에 null, undefined인 경우만 false로 취급.
// 나머지 0, -0, '', NaN 은 값으로 취급된다. 즉 true로 취급됨
let z = 0;        // undefined 또는 null로 변경후 결과값 확인
z = z ?? 10;
console.log(`z=> ${z}`);
console.log('')

// optional
const arr = [];
const user = {};
// 객체가 존재하는 경우 없는 속성을 참조하면 에러가 아닌 undefined가 출력된다
console.log(arr[0]);
console.log(user.name);

// 객체 자체가 없으면 Error
// console.log(obj.name);       // Error

// and => false and true => 뒤를 체크할 필요가 없다 (즉 뒤 구문을 실행하지 않는다)
const obj = undefined;                        // let obj = undefined;

// obj가 0, -0, NaN, '', false, undefined, null이라면 && 뒤를 실행하지 않음(앞이 false)
// 앞의 값이 0, -0, NaN, '', false, undefined, null 이라면 앞의 값을 반환하고 바로 종료
console.log(obj && obj.name);   // undefined && obj.name => false && obj.name
console.log('');

const product = 10;

// product가 객체가 아니면 무조건 undefined, 속성이 없어도 undefined, 속성이 있는 경우만 출력
// const product = { name: 'A' };
console.log(product?.name);         // obj가 undefined, null 인 경우 undefined, null 값을 반환하고 종료
console.log('')


const one = {
  name: 'NolBu',
  // user: { address: 'Seoul' }
};
console.log(one?.name);             // Nolbu
console.log(one?.age);              // undefined
console.log(one?.user?.address);    // undefined


