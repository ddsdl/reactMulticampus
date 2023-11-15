// ES6
console.log([10, 11, 100]);
console.log([10, 11, 100][0], [10, 11, 100][1], [10, 11, 100][2], [10, 11, 100][20]);
console.log(...[10, 11, 100]); // console.log(10, 11, 100)

console.log('NolBu');
console.log(...'NolBu');
console.log('');

// 매개변수가 순차적으로 대입되고 남는 매개변수가 있다면 ...rest가 모두 배열로 받아 처리한다
function spreadFun(a, b, c, d, e, ...rest) {
  console.log(`a => ${a}`);
  console.log(`b => ${b}`);
  console.log(`c => ${c}`);
  console.log(`d => ${d}`);
  console.log(`e => ${e}`);
  console.log(`rest => ${rest} / ${rest.length}`);
}

const argOne = [10, 20, 30];
const argTwo = [50, 60, 70];
spreadFun(0, ...argOne, 40, ...argTwo);
console.log('');

// 배열 합치기.
const aryOne = [10, 20, 30];
const aryTwo = [1, 2, 3, ...aryOne];
console.log(aryTwo);
console.log('');

// Object 합치기
const objOne = {
  id: 1,
  name: 'NolBu',
};

// const user = ...objOne; // const user = id: 1, name: 'NolBu';
const user = { ...objOne }; // const user = { id: 1, name: 'NolBu' };
console.log(user);
console.log(user === objOne); // false. 항상 새로운 객체를 만들어 리턴한다
console.log('');

const objTwo = {
  id: 2,
  address: 'Seoul',
  ...objOne, // id: 1, name: 'NolBu' => 중복되는 key는 나중에 온 값으로 덮어쓴다.
};
console.log(objTwo);

const objThree = {
  ...objOne, // id: 1, name: 'NolBu'
  id: 3,
  address: 'InChen',
};
console.log(objThree);
