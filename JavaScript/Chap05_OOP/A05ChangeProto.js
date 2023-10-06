console.log('---------------- [692] Change Prototype -----------------');

const one = {
  name: 'One',
  display: function () {
    console.log(this.name);
  },
};

// const two = new Object();
// two.name = 'Two';
const two = {
  name: 'Two',
};

const three = {};

console.log(two.__proto__);       // Object
console.log(Object.getPrototypeOf(two) === Object.prototype);   // true

// 부모의 prototype도 Object 객체다. 이 값을 다른 Object 객체로 변경하면 부모가 변경된다
Object.setPrototypeOf(two, one);
console.log(Object.getPrototypeOf(two) === Object.prototype);   // false
console.log(Object.getPrototypeOf(two) === one);                // true
console.log(two);

Object.setPrototypeOf(three, two);
console.log(three.name);
three.display();
console.log('')

console.log('---------------- 생성자의 prototype 동적 변경 확인 -----------------');

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const obj = {
  constructor: Person,
  getName() {
    return this.name;
  },
  view() {
    console.log(`view=> ${this.name} / ${this.age}`);
  }
}
Person.prototype = obj;
/*
Person.prototype = {
  getName() {
    return this.name;
  },
  view() {
    console.log(`view=> ${this.name} / ${this.age}`);
  }
}
*/
Person.prototype.display = function () {
  console.log(`display=> ${this.name} / ${this.age}`);
};

const nolbu = new Person('NolBu', 30);
console.log(nolbu);

nolbu.display();
nolbu.view();
console.log(nolbu.getName());
console.log('')

console.log('---------------- 인스턴스의 prototype 동적 변경 확인 -----------------');
const hungbu = new Person('HungBu', 20);

const parent = {
  constructor: Person,
  parentGetName() {
    return `parent=> ${this.name}`;
  },
  parentView() {
    console.log(`parent view=> ${this.name} / ${this.age}`);
  }
}
// hungbu.__proto__ = parent;
Object.setPrototypeOf(hungbu, parent);

console.log(hungbu);