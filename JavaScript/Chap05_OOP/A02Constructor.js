console.log('---------------- function -----------------');
function onAdd(x, y) {
  return `${x} + ${y} = ${x + y}`;
}

function onMin(x, y) {
  return { result: x - y };
}

console.dir(onAdd);

// 일반 함수를 잘못해서 new로 호출한 경우 
// return 값일 객체가 아닌 경우(undefined 포함) 빈 객체 { }가 리턴된다
const one = new onAdd(10, 20);
console.log(one);

// return 값이 객체를 리턴한 경우 그 객체가 리턴 값이 된다
const two = new onMin(10, 20);
console.log(two);
console.log('')

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
console.log(nolbu);
console.log(hungbu);    // new를 생략하고 호출. undefined가 반환된다
console.log('');

// new.target => ES6
// new로 호출되면 생성자 함수, 일반 함수로 호출되면 undefined
function Employee(name, age) {
  // console.log(new.target);
  if (!new.target) {
    return new Employee(name, age);
  }
  this.name = name;
  this.age = age;
  this.info = function () {
    return `${this.name} / ${this.age}`;
  };
}

const bangJa = Employee('BangJa', 18);
console.log(bangJa.info());

// scope safe constructor. 스코프 세이프 생성자 패턴
// new.target이 나오기 전 방식
function Student(name, age) {
  // console.log(this instanceof Student);
  if (!(this instanceof Student)) {
    return new Student(name, age);
  }
  this.name = name;
  this.age = age;
  this.info = function () {
    return `${this.name} / ${this.age}`;
  };
}

const hangdan = Student('hangdan', 18);
console.log(hangdan.info());
