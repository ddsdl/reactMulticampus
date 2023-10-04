console.log('----------------- [148] Logical Operator -----------------');
// 조건 and 조건 => 조건 && 조건
// 조건 or 조건 => 조건 || 조건
// not 조건 => !조건
const x = 10;
const y = 5;
const z = 5;
let result;

result = x > y && x > z;
console.log('(x > y) && (x > z) => ' + result);
console.log('');


console.log('----------------- &&, || 를 연산자로 사용 -----------------');
// 연산자로 사용
// JavaScript에서는 값이 없으면 false다. 그 외에 값이 있으면 true로 취급된다
// '', 0, -0, 0n, undefined, null, NaN, false
let age;
console.log(age);

if (age) {
  console.log('값이 없으므로 false');
}

result = (age) ? 'TRUE' : 'FALSE';
console.log(result);
console.log('');

// or
result = age || 0;
console.log(result);

// and
age = 10;
result = age && 'AND';
console.log(result);
