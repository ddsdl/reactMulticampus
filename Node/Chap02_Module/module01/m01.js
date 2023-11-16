console.log('---------- m01 ----------');
// 외부에서 사용할 수 있도록 개별 정의

/*
module.exports.name = '놀부';
module.exports.age = 30;
module.exports.onAdd = (x, y) => {
  // console.log(this.name);
  return `${x} + ${y} = ${x + y}`;
};
*/

/*
// 개별 exports의 경우는 module을 생략할 수 있다 - 다만 하지 말자 (아래의 이유)
exports.name = '놀부';
exports.age = 30;
exports.onAdd = (x, y) => {
  return `${x} + ${y} = ${x + y}`;
};
*/

/*
// 이렇게 단축 형태로는 사용할 수 없다. 
// 이 방식은 var exports = { }와 같이 정의한 변수로 취급된다
exports = {
  name: 'HungBu',
  age: 20,
  onAdd(x, y) {
    return `${x} + ${y} = ${x + y}`;
  },
};
console.log(exports); // 변수로써 동작한다
*/

// node의 module 객체
// const module = { exports: {} };
// const exports = module.exports; // 별칭
// console.log(module);

// 보편적으로 이 방식만 사용한다
module.exports = {
  name: 'HungBu',
  age: 20,
  onAdd(x, y) {
    return `${x} + ${y} = ${x + y}`;
  },
};
console.log(module.exports);
console.log(exports);
