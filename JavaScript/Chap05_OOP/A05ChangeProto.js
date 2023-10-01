console.log('---------------- [692] Change Prototype -----------------');

const one = {
  name: 'One',
  display: function () {
    console.log(this.name);
  },
};

const two = {
  name: 'Two',
};

const three = {};

console.log('---------------- 생성자의 prototype 동적 변경 확인 -----------------');

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.display = function () {
  console.log(`${this.name} / ${this.age}`);
};

const nolbu = new Person('NolBu', 30);
nolbu.display();

console.log('---------------- 인스턴스의 prototype 동적 변경 확인 -----------------');
