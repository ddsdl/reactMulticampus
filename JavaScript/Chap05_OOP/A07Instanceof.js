console.log('----------------- Instanceof -----------------');

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.display = function () {
  console.log(`${this.name} / ${this.age}`);
};

const nolbu = new Person('NolBu', 30);
nolbu.display();
console.log('');

// typeof => 기본형(string, number, boolean, undefined, null, symbol, bigint)
// typeof으로 체크할 수 있는 예외 => function
console.log(typeof Person);     // function
console.log(typeof nolbu);      // object
console.log(nolbu.constructor);
console.log(nolbu.constructor === Person);    // true
console.log('');

// nolbu가 어떤 생성자에 의해 생성되었니? => instanceof
// 모든 식구(상위 객체)와 매치되면 true
console.log(nolbu instanceof Person);   // true
console.log(nolbu instanceof Object);   // true. prototype chain에 있니?
console.log(nolbu instanceof Array);    // false
console.log('');

const arr = [10, 11];
console.log(arr)
console.log(arr instanceof Person);   // false
console.log(arr instanceof Object);   // true. prototype chain에 있니?
console.log(arr instanceof Array);    // false
console.log('');


console.log('----------------- in -----------------');
// 객체의 요소 값으로 지정한 속성이 있니?
const one = Object.create(Object.prototype, {
  name: { value: 'NolBu' },
  age: { value: 20, writable: true },
  address: { value: 'Seoul', writable: true, enumerable: true },
});

for (const key in one) {
  console.log(key, one[key]);
}
console.log('')

console.log('address' in one);    // true
console.log('name' in one);       // true
console.log('tel' in one);        // false

// 부모의 속성도 자신의 속성처럼 찾아 있으면 true
console.log('hasOwnProperty' in one);        // true (Object)
console.log('');

// 기본형
const x = 10;
if (x === 10) { }

// 객체
if (('name' in one) && one.name === '놀부') { };
