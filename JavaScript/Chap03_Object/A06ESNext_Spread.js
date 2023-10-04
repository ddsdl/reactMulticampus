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
console.log(obj4);
console.log(obj4 === objA);             // false
console.log(obj4.name === objA.name);   // true
console.log('');

const obj5 = { ...objA, ...objB };
console.log(obj5);
console.log(objA);      // 변경 안됨
console.log('');


const objD = {
  name: 'NolBu',
  age: 30,
  info: {
    address: 'Seoul',
    tel: '010-1234-5678',
  },
};

const obj6 = { ...objD };
console.log(obj6 === objD);             // false
console.log(obj6.name === objD.name);   // true
console.log(obj6.info === objD.info);   // true;

objD.info.address = 'Busan';
console.log(obj6.info === objD.info);   // true;
console.log('');

// Deep Copy
const obj7 = {
  ...objD,
  info: {
    ...objD.info
  }
}
console.log(obj7 === objD);             // false
console.log(obj7.name === objD.name);   // true
console.log(obj7.info === objD.info);   // false
objD.info.address = 'ABC';
console.log(obj7.info.address === objD.info.address);   // false
console.log('')


console.log('--------------- spread Array ---------------');
const arrA = [10, 11, 100];
const arrB = [20, 21, 200];

console.log(...arrA);       // 10, 11, 100
// const arr1 = ...arrA;    // arr1 = 10, 11, 100;
const arr1 = [...arrA];
console.log(arrA === arr1);         // false
console.log(arr1[0] === arrA[0]);   // true;

const arr2 = [...arrA, ...arrB];
console.log(arr2);

const arr3 = [30, 31, ...arrA, 300];
console.log(arr3);
console.log('');


function getParams(x, y, z) {
  console.log(x + y + z);
}
getParams(10, 20, 30);
getParams(arrA[0], arrA[1], arrA[2]);
getParams(...arrA);
