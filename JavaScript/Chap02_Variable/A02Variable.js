console.log('----------------- [468] Type -----------------');
// 기본형 => 숫자(실수포함), 문자, 논리(true, false), undefined, null, Symbol, BitData
// 참조형 => 위 기본형 이외..
let user = 'NolBu';
let age = 20;
let num = 10.25;
let unType = undefined;
let nullType = null;
let check = true;

const arr = [10, 11, 100];
const obj = { name: 'ABC', age: 20 };
const today = new Date();

console.log(`user: ${user}, typeof ${typeof user}`);
console.log(`age: ${age}, typeof ${typeof (age)}`);
console.log(`num: ${num}, typeof ${typeof num}`);
console.log(`unType: ${unType}, typeof ${typeof unType}`);
console.log(`nullType: ${nullType}, typeof ${typeof nullType}`);  // object
console.log(`check: ${check}, typeof ${typeof check}`);
console.log('');

console.log(`arr: ${arr}, typeof ${typeof arr}`);
console.log(`obj: ${obj}, typeof ${typeof obj}`);
console.log(`today: ${today}, typeof ${typeof today}`);
console.log('');

// JavaScript은 동적 타입 언어
user = 30;
console.log(`user: ${user}, typeof ${typeof user}`);

user = true;
console.log(`user: ${user}, typeof ${typeof user}`);

user = Symbol();
console.log(typeof user);

user = [10, 11];
console.log(`user: ${user}, typeof ${typeof user}`);
