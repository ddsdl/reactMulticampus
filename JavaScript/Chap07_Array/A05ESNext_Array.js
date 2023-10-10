// ES2015
const arr = [10, 11, 100, 101, 1000, 1001];

// arr배열에서 요소 1번째부터 3까지를 'A'로 변경
const one = arr.fill('A', 1, 3);
console.log(one);

const two = new Array(10);
two.fill('A', 0);
console.log(two);
console.log('');

// indexOf 대신 이제는 includes
let result = arr.includes(10);
console.log(result);      // true

result = arr.includes(100000);
console.log(result);      // false

if (!arr.includes(2000)) arr.push(2000);
console.log(arr);
console.log('');


const objArray = [
  { id: 1, name: 'NolBu', age: 35 },    // 0
  { id: 2, name: 'BangJa', age: 18 },   // 1
  { id: 3, name: 'HungBu', age: 25 },   // 2
];


// find => 매개변수로 넘어온 값과 매칭되는 요소의 값이 필요한 경우 사용
const getItem = (value) => {
  // return objArray[index];       // objArray[3]
  // return objArray.name === 'HungBu'
  const result = objArray.find((item, index, arr) => {
    // item =>  { id: 1, name: 'NolBu', age: 35 }
    return item.id === value;
  });
  return result;
}
result = getItem(3);
console.log(result.name);
console.log('');


// findIndex => 매개변수로 넘어온 값과 매칭되는 요소의 값이 필요한 경우 사용
const getIndex = (value) => {
  const result = objArray.findIndex((item) => {
    return item.id === value;
  });
  return result;
}
result = getIndex(3);
console.log(result);    // 2
console.log('');

// 함수 내부에서 외부 변수에 대한 의존성이 없음
// 함수가 외부 값을 변경하는 작업을 하지 않는다
// 매개변수가 동일하면 항상 동일한 값을 리턴한다
const getItemFunction = (obj, value) => {
  return obj.find((item) => item.id === value);
}
result = getItemFunction(objArray, 3);
console.log(result.name);
console.log('');
