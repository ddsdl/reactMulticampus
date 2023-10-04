console.log('---------------- Primary Type And Reference Type-----------------');

let numA = 100;
let numB = numA;

// 비교
console.log(numA == numB, numA === numB);   // true, true

numA = 200;
console.log(numA == numB, numA === numB);   // false, false
console.log('');

let objA = {
  name: 'NolBu',
  age: 30,
};

let objB = objA;
console.log(objA == objB, objA === objB);   // true, true

objA.name = 'HungBu';
console.log(objA == objB, objA === objB);   // true, true
console.log('');

// 값이 같은 새로운 객체
let objC = {
  name: 'HungBu',
  age: 30,
};

console.log(objA === objC);           // false, false
console.log('');

// 함수에 의한 값 변경
let num = 100;
const obj = {
  name: 'NolBu',
  age: 30,
};

// obj = { address: 'Seoul' }

function changeValue(x, y) {
  x = 200;
  y.name = '향단';
}

console.log('----- 함수 호출 이전 -----');
console.log(num);         // 100
console.log(obj);         // {name: 'NolBu', age: 30}

changeValue(num, obj);

console.log('----- 함수 호출 이후 -----');
console.log(num);         // 100
console.log(obj);         // {name: '향단', age: 30}