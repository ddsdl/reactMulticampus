// A03Return.js

const one = function (x, y) {
  const min = x - y;
  const add = x + y;

  return [min, add]
}
/*
const min = one(10, 20);
console.log(min[0], min[1]);
*/
const [min, add] = one(20, 30);
console.log(min, add);
console.log('');


const two = function (x, y) {
  const min = x - y;
  const add = x + y;

  return {
    min, add
  }
}
const twoValue = two(30, 40);

console.log(twoValue);
console.log(twoValue.min, twoValue.add);

const { min: x, add: y } = two(40, 50);
console.log(x, y);
console.log('');


const three = function (x) {
  // console.log(x);
  // console.log(x[0], x[1], x[2])
  const total = x[0] + x[1] + x[2];
  console.log(total);
}

// const four = function ([x1, x2, x3] = [10, 20, 30]) {
const four = function ([x1, x2, x3]) {
  console.log(x1, x2, x3);
  const total = x1 + x2 + x3;
  console.log(total);
}

const arr = [10, 20, 30];
// const [a1, b1, c1] = arr;      // destructuring
three(arr);
four(arr);
console.log('');


const five = function (args) {      // args => { x: 100, y: 200 };
  const total = args.x + args.y
  console.log(total);
}

// const six = function ({ x, y } = { x: 100, y: 200 }) {
const six = function ({ x, y }) {
  const total = x + y
  console.log(total);
}

const args = { x: 100, y: 200 };
five(args);
six(args);
six({ x: 200, y: 300 });
