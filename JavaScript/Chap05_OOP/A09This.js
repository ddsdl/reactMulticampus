console.log('---------------- this -----------------');

// 객체 내부 메소드 내부의 함수.
var count = 100;

const myObj = {
  count: 0,
  visit: function () {
    function inner(x) { }

    inner(2);
  },
};

myObj.visit();
console.log('');

console.log('--------------- 편법 that ---------------');
count = 100;

console.log('--------------- [303] call, apply, bind ---------------');
count = 100;

console.log('--------------- copy ---------------');
const person = {
  name: 'NolBu',
  display: function () {
    console.log(this.name);
  },
};

const emp = { name: 'HungBu' };

console.log('--------------- Arrow Function은 호출한 곳의 상위 {}가 this ---------------');
