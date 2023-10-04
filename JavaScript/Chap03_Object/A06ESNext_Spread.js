// ES2015
console.log('--------------- Object assign ---------------');
let objA = {
  name: 'NolBu',
  age: 30,
};

let objB = {
  address: 'Seoul',
  age: 100,
};

const obj1 = Object.assign({}, objA);
console.log(obj1);
console.log(obj1 === objA);             // false
console.log(obj1.name === objA.name);   // true
console.log('');

const obj2 = Object.assign(objA, objB);
console.log(obj2);
console.log(objA);
console.log(objA === obj2);             // true

const obj3 = Object.assign({ id: 1 }, objB);
console.log(obj3);
console.log('')

console.log('--------------- [627] spread Object ---------------');
objA = {
  name: 'NolBu',
  age: 30,
};

objB = {
  address: 'Seoul',
  age: 100,
};

// const obj4 = ...objA;    // name: 'NolBu', age: 20
const obj4 = { ...objA };   // { name: 'NolBu', age: 20 }


const objD = {
  name: 'NolBu',
  age: 30,
  info: {
    address: 'Seoul',
    tel: '010-1234-5678',
  },
};

console.log('--------------- spread Array ---------------');
const arrA = [10, 11, 100];
const arrB = [20, 21, 200];
