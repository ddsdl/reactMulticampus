console.log('----------------- switch -----------------');
// switch
// 다중 if 구문에서 조건이 === 인 경우 switch 구문으로 변경 가능..
const avg = 91;
let hakjum2;

switch (avg) {
  case 100:           // avg === 100
    hakjum2 = 'A+';
    break;    // 전체 switch 구문을 빠져 나간다
  case 90:            // avg === 90
    hakjum2 = 'A';
    break;
  case 80:            // avg === 80
    hakjum2 = 'B';
    break;
  case 70:            // avg === 70
    hakjum2 = 'C';
    break;
  default:            // 위 조건이 다 만족되지 않은 경우
    hakjum2 = 'F';
}
console.log(`${hakjum2} 학점 입니다...`)
console.log('');



const year = prompt('연도를 입력해 주세요');
const month = Number(prompt('월을 입력해 주세요'));   // casting
let day = 0;

/*
// console.log(`month: ${month}, ${typeof month}`);
if (month === 1) day = 31;
else if (month === 2) day = 28;
else if (month === 3) day = 31;
else if (month === 4) day = 30;
else if (month === 5) day = 31;
else if (month === 6) day = 30;
else if (month === 7)
  day = 31;
else if (month === 8) {
  day = 31;
} else if (month === 9) {
  day = 30;
} else if (month === 10) {
  day = 31;
} else if (month === 11) {
  day = 30;
} else if (month === 12) {
  day = 31;
}
*/

switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    day = 31;
    break;
  case 2:
    day = 28;
    break;
  case 4: case 6: case 9: case 11:
    day = 30;
    break;

}
console.log(`${year}년도의 ${month}월은 ${day}일까지 있습니다..`)
console.log('');


// switch 구문 주의점
const str = '+';
const x = 10;
const y = 20;

// switch { } block 내부에서 선언되는 변수는 중복될 수 없다
switch (str) {
  case '+':
    const result = x + y;
    console.log(`${x} + ${y} = ${result}`);
    break;
  case '-':
    // let result = x - y;
    const min = x - y;
    console.log(`${x} - ${y} = ${min}`);
    break;
  case '*':
    // let result = x * y;
    const multi = x * y;
    console.log(`${x} - ${y} = ${multi}`);
    break;
  default:
    console.log('매칭되는 연산자가 없습니다');
    break;
}
console.log('')


console.log('----------------- 490 Page -----------------');
const memNum = 31;
const colNum = 5;
let rowNum = 0;

// parseInt(숫자 형식의 문자열) => 숫자 타입으로 변경
if (memNum % colNum === 0) {
  rowNum = parseInt(memNum / colNum);
} else {
  rowNum = parseInt(memNum / colNum) + 1;
}
console.log(`관객 ${memNum}이 입장한 경우 한 줄에 ${colNum}명씩 앉는다면 ${rowNum} 줄이 필요합니다`)

console.log(parseInt(''));  // NaN
console.log(Number(''));    // 0


console.log('----------------- END -----------------');