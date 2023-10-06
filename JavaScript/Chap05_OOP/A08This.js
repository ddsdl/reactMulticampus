console.log('---------------- Object this -----------------');

const obj = {
  name: 'NolBu',
  age: 20,
  display() {
    console.log(`${this.name} / ${this.age}`);
  },
};
// this는 method를 호출한 객체 => 즉 .앞의 객체
obj.display();

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.display = function () {
  console.log(`${this.name} / ${this.age}`);
};

const nolbu = new Person('Nolbu', 20);
const hungbu = new Person('흥부', 20);

nolbu.display();
hungbu.display();
console.log('');


console.log(this);    // window

function one() {
  console.log(this);  // 함수가 선언된 영역 => window
}
one();
console.log('');

const user = {
  one: one,
}
user.one();           // user

