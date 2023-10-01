console.log('--------- break - stop ---------');
let i = 0;
let result = 0;

// result가 1000이거나 1000 이상이 될때 더해지는 숫자는 몇인가?
while (result <= 1000) {
  result = result + i;
  if (result >= 1000) console.log(result, i);
  i++;
}

i = 1;
result = 0;
while (true) {
  result = result + i;
  if (result >= 1000) {
    console.log(result, i);
    break;      // 가장 가까운 반복문을 벗어난다..
    console.log('이 구문은 실행되지 않음');
  }
  i++
}

result = 0;
for (let i = 0; i < 100; i++) {
  result = result + i;
  if (result >= 1000) {
    console.log(result, i);
    break;      // 가장 가까운 반복문을 벗어난다..
  }
}

i = 0;
result = 0;
for (; true;) {
  result = result + i;
  if (result >= 1000) {
    console.log(result, i);
    break;      // 가장 가까운 반복문을 벗어난다..
  }
  i++;
}

first: for (let i = 1; i < 10; i++) {
  second: for (let k = 0; k < 10; k++) {
    if (i === 3) break first;
    console.log(`${i} * ${k} = ${i * k}`);
  }
  console.log('');
}


console.log('--------- continue - skip ---------');
// 짝수의 합
i = 0;
result = 0;

wx: while (i <= 100) {
  i++;
  if (i % 2 === 1) {
    continue wx;         // 가장 가까운 반복의 시작(조건체크)으로 이동 즉 while (i <= 100)
  }
  result = result + i;
}
console.log(`Result: ${result}`);

fx: for (let i = 1; i < 10; i++) {
  fy: for (let k = 0; k < 10; k++) {
    // if (i === 3) continue fy;           // 3단만 출력되지 않는다
    if (k === 3) continue fx;              // 각 단의 2 이상은 출력되지 않는다
    console.log(`${i} * ${k} = ${i * k}`);
  }
  console.log('');
}

