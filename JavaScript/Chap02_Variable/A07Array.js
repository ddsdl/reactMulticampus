// A07Array.js
console.log('--------- 배열과 반복문 ---------');
const arr = [10, 11, 100, 101, 1000, 1001];
let result = 0;

/*
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr.length);
*/
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// arr = [10, 11, 100, 101, 1000, 1001];
// arr 배열 전체의 합 구하시오
for (let i = 0; i < arr.length; i++) {
  result = result + arr[i];
}
console.log(`배열 전체의 합 ${result}`);

// arr 배열에서 짝수의 합만 구하시오
result = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    result = result + arr[i];
  }
}
console.log(`배열에서 짝수의 합 ${result}`);


// arr 배열에서 4의 배수의 합만 구하시오
result = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 4 === 0) {
    result = result + arr[i];
  }
}
console.log(`배열에서 4의 배수의 합 ${result}`);
console.log('');


console.log('--------- 2차원 배열 ---------');
const two = [
  [10, 11, 100, 101, 1000, 1001],
  [20, 21, 200, 201, 2000, 2001],
  [30, 31, 300, 301, 3000, 3001]
];
console.log(two.length);      // 층의 수 => 3
console.log(two[0].length);   // 0층의 총 방의 개수 => 6
console.log(two[1].length);   // 1층의 총 방의 개수 => 6
console.log(two[2].length);   // 2층의 총 방의 개수 => 6

// 0층에 있는 손님의 총 합은 ?
result = 0;
for (let i = 0; i < two[0].length; i++) {
  result = result + two[0][i];
}
console.log(result);

// 1층에 있는 손님의 총 합은 ?
result = 0;
for (let i = 0; i < two[1].length; i++) {
  const item = two[1][i];
  result = result + item;
}
console.log(result);

// 전체 합
result = 0;
for (let floor = 0; floor < two.length; floor++) {
  for (let root = 0; root < two[floor].length; root++) {
    const item = two[floor][root];
    result = result + item;
  }
}
console.log(result);

// 전체에서 4의 배수의 합은?
result = 0;
for (let floor = 0; floor < two.length; floor++) {
  for (let root = 0; root < two[floor].length; root++) {
    const item = two[floor][root];
    if (item % 4 === 0) {
      result = result + item;
    }
  }
}
console.log(result);
console.log('');

const person = 56;
const line = 5;

for (let i = 1; i <= person; i++) {
  document.write(`<span>관객 ${i} &nbsp; &nbsp; </span>`);
  if (i % line === 0) document.write('<br>');
}
console.log('');


console.log('--------- 511 Page ---------');
document.write('<br><br>');

const num = prompt('숫자를 입력해주세요');
let count = 0;
for (let i = 1; i < num; i++) {
  if (i % 3 === 0) {
    count++;
    document.write(`<span>${i}, </span> &nbsp; `)
  }
}
document.write('<br>');
document.write(`<div style="color: red;">${num}까지 3의 배수의 개수 ${count}</div>`);