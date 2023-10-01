console.log('---------------- Object this -----------------');

const obj = {
  name: 'NolBu',
  age: 20,
  display() {
    console.log(`${this.name} / ${this.age}`);
  },
};

// method를 호출한 객체. 즉 .앞의 객체
obj.display();

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.display = function () {
  console.log(`${this.name} / ${this.age}`);
};

const nolbu = new Person('Nolbu', 20);
