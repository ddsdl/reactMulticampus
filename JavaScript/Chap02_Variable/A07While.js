console.log('--------- while ---------');
/*
for (초기화; 조건; 변수증감) {
  반복 명령...
}

초기화
while (조건) {
  조건이 참이면 반복 명령...
  변수증감
} => 이 } 를 만나면 다시 while문의 조건을 체크 참이면 실행 거짓이면 이 다음 줄을 실행

*/

let i = 0;
while (i < 3) {
  console.log(`Hello World!!!=> ${i}`);
  i++;
  // i = 5;
}

i = 1;
let result = 0;
while (i <= 10) {
  result += i;        // result = result + i;
  i++;
}
console.log(`1부터 10까지의 합 ${result}`);
console.log('');

// 1부터 100까지의 짝수의 합을 구하시오
i = 1;
result = 0;
while (i <= 100) {
  if (i % 2 === 0) result = result + i;
  i++;
}
console.log(`1부터 100까지의 짝수의 합 ${result}`);


// 1부터 100까지의 수 중에서 3의 배수의 합만 구하시오
i = 1;
result = 0;
while (i <= 100) {
  if (i % 3 === 0) result = result + i;
  i++;
}
console.log(`1부터 100까지의 3의 배수의 합 ${result}`);

// 1부터 100까지의 수 중에서 3의 배수이면서 5의 배수인 수의 합을 구하시오
i = 1;
result = 0;
while (i <= 100) {
  if (i % 3 === 0 && i % 5 === 0) result = result + i;
  i++;
}
console.log(`1부터 100까지의 3의 배수이면서 5의 배수인 합 ${result}`);

// 구구단 3단을 출력하시오
i = 1;
while (i < 10) {
  document.write(`3 * ${i} = ${3 * i}<br>`);
  i++;
}
console.log('');


console.log('--------- do ~ while ---------');

let kor = 0;
do {
  kor = prompt('국어 점수를 입력해주세요');
  console.log(`입력하신 점수는 ${kor}입니다`);
} while (kor < 0 || kor > 100);
