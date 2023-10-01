console.log('---------------- Primary Type And Reference Type-----------------');

let numA = 100;
let numB = numA;

// 비교
console.log(numA == numB, numA === numB);

numA = 200;
console.log(numA == numB, numA === numB);
console.log('');

let objA = {
  name: 'NolBu',
  age: 30,
};

let objB = objA;
console.log(objB == objB, objA === objB);

objA.name = 'HungBu';
console.log(objB == objB, objA === objB);
console.log('');

// 값이 같은 새로운 객체
let objC = {
  name: 'HungBu',
  age: 30,
};

console.log(objA === objC);
console.log('');

// 함수에 의한 값 변경
let num = 100;
let obj = {
  name: 'NolBu',
  age: 30,
};

console.log('----- 함수 호출 이전 -----');

console.log('----- 함수 호출 이후 -----');
