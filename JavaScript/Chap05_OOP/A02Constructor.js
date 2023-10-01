console.log('---------------- function -----------------');

function onAdd(x, y) {
  return `${x} + ${y} = ${x + y}`;
}

function onMin(x, y) {
  return { result: x - y };
}

console.log('---------------- constructor -----------------');

function Person(name, age) {
  this.name = name;
  this.age = age;

  this.info = function () {
    return `${this.name} / ${this.age}`;
  };
}

const nolbu = new Person('NolBu', 30);
const hungbu = Person('HungBu', 20);

// new.target => ES6
// new로 호출되면 생성자 함수, 일반 함수로 호출되면 undefined
function Employee(name, age) {
  this.name = name;
  this.age = age;
  this.info = function () {
    return `${this.name} / ${this.age}`;
  };
}

const bangJa = Employee('BangJa', 18);
// console.log(bangJa.info());

// scope safe constructor. 스코프 세이프 생성자 패턴
function Student(name, age) {
  this.name = name;
  this.age = age;
  this.info = function () {
    return `${this.name} / ${this.age}`;
  };
}

const hangdan = Student('hangdan', 18);
// console.log(hangdan.info());
