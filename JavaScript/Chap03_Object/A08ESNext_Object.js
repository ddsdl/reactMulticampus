console.log('---------------- Object -----------------');

const x = 10;
const str = 'Hello World';

const obj = {};
console.log(obj);
console.log('');

// 계산된 프로퍼티 이름

// ES6 Method
const nolbu = {
  name: 'NolBu',
  age: 20,
  display: function () {
    // vue에서 자주 사용됨.
    console.log(`${this.name} / ${this.age}`);
  },
};
nolbu.display();
