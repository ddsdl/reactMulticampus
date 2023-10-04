console.log('---------------- Object -----------------');

const x = 10;
const str = 'Hello World';

const obj = {
  x: x,           // x: 10
  str: str,
};
console.log(obj);

const obj1 = {
  x,
  str,
}
console.log(obj1);
console.log('');

// 계산된 프로퍼티 이름
const obj2 = {
  name: 'ABC',
}
for (let i = 0; i < 3; i++) {
  obj2['prefix' + i] = i * 10
};
console.log(obj2);
console.log('')

// ES6 Method
const nolbu = {
  name: 'NolBu',
  age: 20,
  display: function () {
    console.log(`${this.name} / ${this.age}`);
  },
  view() {
    // vue에서 자주 사용됨.
    console.log(`${this.name} / ${this.age}`);
  },
};
nolbu.display();
nolbu.view();
