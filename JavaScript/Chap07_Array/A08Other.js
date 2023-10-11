/* eslint-disable new-cap */
/* eslint-disable use-isnan */
/* eslint-disable no-new-wrappers */
const obj = {
  name: 'Hello',
  info() {
    console.log(this.name);
  }
}
obj.info();

class Jumsu {
  constructor() {
    this.name = 'Hello';      // 프로퍼티, 속성
  }
  getInfo() {                 // 메서드
    console.log('Jumsu class')
  }
}
Jumsu.area = (x, y) => x * y; // string
const two = new Jumsu();
two.getInfo();



console.log('---------------- Number -----------------');
let num = new Number(10.3456);

let str = num.toFixed(3);       // 지정 수에서 반올림한 문자열을 리턴한다
console.log(str, typeof str);

str = num.toExponential(2);     // 지수 표기법으로 바꾸어 문자열로 리턴
console.log(str, typeof str);


str = '123.45678';
num = Number(str);
console.log(num, typeof num);   // 123.45678

// global
num = parseInt(str);
console.log(num, typeof num);   // 123

num = parseFloat(str);
console.log(num, typeof num);   // 123.45678

// NaN => 연산 결과가 숫자가 될 수 없는 경우의 값이다.
num = NaN;
console.log(num, typeof num);   // NaN, number

// NaN는 어떤값과 비교해도 false
console.log(num === NaN);       // false

// 따라서 NaN는 비교연산자를 사용하지 않고 isNaN()를 사용해 비교
str = (isNaN(num)) ? '연산이 잘못되었습니다' : num;
console.log(str);
console.log('');


console.log('---------------- String  -----------------');
let msg = new String(' abc 123 DEF 456 ');
console.log(msg);

console.log(`msg의 전체 문자 개수: ${msg.length}`);

// ES2015
let result = msg.trim();      // 좌우의 공백이 있으면 제거
console.log(result, result.length)

result = msg.trimEnd();
console.log(result, result.length)
console.log('');

// 'abc 123 DEF 456'
msg = msg.trim();
result = msg.substring(4, 7);       // 4부터 7사이에 포함된 문자
console.log(result, result.length);

result = msg.substr(4, 3);          // 4번째부터 3글자
console.log(result, result.length);

// 찾기 => indexOf
result = msg.indexOf('123');
console.log(result);
// result = msg.substring(result, 7);       // 4부터 7사이에 포함된 문자

result = msg.indexOf('123', 7);
console.log(result);                // 값이 없으면 -1

// ES2015
result = msg.includes('123');
console.log(result);                // true


// 치환
result = msg.replace('123', 'good');
console.log(msg, result);

// 구분자를 지정해서 문자를 배열로 변환
result = msg.split(' ');
console.log(result)

// 대문자로 변경
result = msg.toUpperCase();
console.log(result, msg);

result = msg.toLocaleLowerCase();     // 숫자 , 구분. 날짜도 수요일 
console.log(result, msg);

msg = 'http://google.com';
result = msg.startsWith('https://');    // false
console.log(result);

result = msg.endsWith('.com');          // true
console.log(result);
console.log('');

console.log('---------------- Math -----------------');
console.log(Math.PI);

num = Math.pow(2, 3);   // 2 * 2 * 2
console.log(num);

num = 2 ** 3;           // 2 * 2 * 2
console.log(num);

// 0 ~ 0.99999999999 난수를 리턴
num = Math.random();
console.log(num);

num = Math.random() * 46;   // 0 ~ 45
console.log(num);

num = 0.00000000001;
console.log(Math.ceil(num));    // 무조건 올림 => 1

num = 0.99999999999;
console.log(Math.floor(num));    // 무조건 버림 => 0

num = Math.ceil(Math.random() * 46);   // 1 ~ 46
console.log(num);

const arr = [];
while (arr.length < 6) {
  const num = Math.ceil(Math.random() * 46);
  if (!arr.includes(num)) arr.push(num);
}
console.log(arr);
console.log('');

console.log('---------------- Date  -----------------');
const today = new Date();

str = today.toLocaleDateString();   // 날짜
console.log(str);

str = today.toLocaleTimeString();   // 시간
console.log(str);

str = today.toLocaleString();   // 날짜와 시간
console.log(str);

const year = today.getFullYear();
const month = today.getMonth() + 1;   // 0부터 시작. 즉 1월이 0
const date = today.getDate();
const day = today.getDay();           // 0이 일요일

const hour = today.getHours();
const min = today.getMinutes();
const sec = today.getSeconds();
const mill = today.getMilliseconds();   // 1000이 1초

const yoil = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']

str = `${year}-${month}-${date} ${yoil[day]} ${hour}:${min}:${sec} ${mill}`;
console.log(str);

// 월은 0부터 시작한다. 11 => 12월
const nextDay = new Date(2030, 11, 25, 12, 0, 0);
console.log(nextDay.toLocaleString());
console.log(yoil[nextDay.getDay()])

const nextMonth = new Date();
nextMonth.setMonth(today.getMonth() + 1);
console.log(nextMonth.toLocaleString());
console.log('');

// 1970-01-01 00:00:00 기준으로 현재까지 경과시간을 밀리초로 리턴해 준다
const now = Date.now();
console.log(now); // 1696987241500_fileName.확장자
console.log('');


console.log('---------------- try ~ catch  -----------------');
// XMLDocument();

// 에러 회피
try {
  // 여기에 에러(예외)가 발생할 수 있는 구문을 묶는다
  console.log('이 구문은 표시됩니다');

  XMLDocument();

  console.log('이 구문은 표시되지 않습니다');
} catch (err) {
  // try { } 블럭에서 에러가 발생하면 즉시 이 catch { } 블럭이 실행되고 catch의 } 다음으로 
  // 처리가 이동된다
  console.log(`에러가 발생했습니다...${err.message}`);
  console.error(err);
}
console.log('');
console.log('');

// class TypeError extends Error { }

// 강제적으로 명령을 실행하지 않도록 에러발생시킴 => 그 에러에 대한 처리
let money = 10000;
const bank = (value) => {

  // throw 구문을 만나면 바로 에러 발생시키고 종료
  if (money - value < 0) throw new Error('잔금이 부족합니다');

  console.log(`출금액: ${value}`);
  money = money - value;

  console.log(`잔금: ${money}`);
}

try {
  console.log('은행에 가서 출금 준비....')
  bank(1000);
} catch (err) {
  console.error(`Error 발생: ${err.message}`);
}

console.log('---------------- END  -----------------');
