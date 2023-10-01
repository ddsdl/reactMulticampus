console.log('----------------- [492] Loop Statument -----------------');
// 동일한 구문을 연속 기술
/*
console.log('Hello World!!!');
console.log('Hello World!!!');
console.log('Hello World!!!');
console.log('Hello World!!!');
console.log('Hello World!!!');
*/

// for 구문

// 처음 1 => 2 => 4
// 두번째부터 3 => 2 => 4
/*
for (1=> let 변수명 = 초기화; 2=> 조건문; 3=> 변수 증감) {
  4 => 조건문이 true인 동안 반복 실행할 구문
  ...
}
*/
for (let i = 0; i < 5; i++) {
  console.log(`Hello World!!! => ${i}`);
  // i++;
};
console.log('');

for (let i = 5; i > 0; i--) {
  console.log(`Hello World!!! => ${i}`);
};
console.log('');


let result = 0;
/*
result = result + 1;
result = result + 2;
result = result + 3;
...
*/
for (let i = 1; i <= 10; i++) {
  // console.log(i)
  result = result + i;
};
console.log(`1부터 10까지의 합은 ${result}입니다`);


result = 0;
// 1부터 100까지의 합을 구하시오


result = 0;
// 1부터 100까지의 짝수의 합을 구하시오
for (let i = 0; i <= 100; i = i + 2) {
  result = result + i;
};
console.log(`1부터 100까지의 짝수의 합은 ${result}입니다`);

result = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) result = result + i;
};
console.log(`1부터 100까지의 짝수의 합은 ${result}입니다`);
console.log('');

result = 0;
// 1부터 100까지의 홀수의 합을 구하시오
for (let i = 1; i <= 100; i = i + 2) {
  result = result + i;
};
console.log(`1부터 100까지의 홀수의 합은 ${result}입니다`);

result = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 1) result = result + i;
};
console.log(`1부터 100까지의 홀수의 합은 ${result}입니다`);
console.log('');

result = 0;
// 1부터 100까지의 수 중에서 3의 배수의 합만 구하시오
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) result = result + i;
};
console.log(`1부터 100까지의 3의 배수의 합은 ${result}입니다`);


result = 0;
// 1부터 100까지의 수 중에서 3의 배수이면서 5의 배수인 수의 합을 구하시오
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) result = result + i;
};
console.log(`1부터 100까지의 3의 배수이면서 5의 배수인 수의 합은 ${result}입니다`);
console.log('');

// 구구단 3단을 출력하시오
// 3 * 1 = 3
// 3 * 2 = 6
// 3 * 3 = 9
// ...
// 3 * 9 = 27
for (let i = 1; i < 10; i++) {
  document.write(`2 * ${i} = ${3 * i}<br>`);
};
document.write(`<br>`);

/*
for (let i = 1; i < 10; i++) {
  document.write(`3 * ${i} = ${3 * i}<br>`);
};
document.write(`<br>`);

for (let i = 1; i < 10; i++) {
  document.write(`4 * ${i} = ${3 * i}<br>`);
};
*/

document.write('<h2>구구단</h2>');

document.write('<div id="nine">');

for (let k = 2; k < 10; k++) {
  document.write('<div>');
  document.write(`<h3>${k}단</h3>`);

  for (let i = 1; i < 10; i++) {
    document.write(`${k} * ${i} = ${k * i}<br>`);
  };
  // document.write(`<br>`);
  document.write('</div>');

}

document.write('</div>');