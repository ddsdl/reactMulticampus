console.log('---------------- Object DeStructuring -----------------');
/*
    ES6 비 구조화 할당(DeStructuring)
    배열, 객체, 반복 가능한 객체에서 값을 꺼내 그 값을 별도의 변수에 대입하는 구문.
*/
const obj = {
  name: 'NolBu',
  age: 30,
  address: 'Seoul',
  getName: function () {
    return this.name;
  },
};

console.log('---------------- [636] Arrat DeStructuring -----------------');
const arr = [10, 11, 100, 101, 1000, 1001];

const objArray = [
  { id: 1, name: 'NolBu', age: 35 },
  { id: 2, name: 'BangJa', age: 18 },
  { id: 3, name: 'HungBu', age: 25 },
];
