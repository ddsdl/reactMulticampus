// A08ExportOne.js
export const name = '놀부';
export const age = 30;
export const check = true;

const arr = [10, 20];
const user = { name: '흥부', age: 20 };
const onAdd = (x, y) => `${x} + ${y} = ${x + y}`;

console.log(`ExportOne Name=> ${name}`);

// onAdd를 add라는 별칭으로 출력
export { arr, user, onAdd as add }