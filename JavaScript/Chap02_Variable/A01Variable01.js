/* eslint-disable */
console.log('---------------- Variable -----------------');
// 변수는 식별자라고도 한다.
// var => 자신이 속한 영역(WINDOW 또는 함수)에 변수를 처음으로 생성한다는 표현식
// var을 붙이지 않으면 무조건 WINDOW 영역에 변수를 생성한다 (함수에서 다시 나옴)
var a = 10;
var b = 20;
var c = a + b;
a = a + 10;
console.log(a + ' + ' + b + ' = ' + c);     // 10 + 20 = 30

// 함수
function abc() {
  // 함수 내부에서만 유효한 변수
  const a1 = 100;
  const b1 = 200;
  const c1 = a1 + b1;
  console.log(a1 + ' + ' + b1 + ' = ' + c1);

  // var 없이 변수 생성
  // var을 붙이지 않으면 무조건 WINDOW 영역에 변수를 생성
  a2 = 1;
  b2 = 2;
}
// 함수 실행
abc();

// var의 사용 주의점
// 1. 선언한 변수를 재 선언해도 에러가 아니다
// 이 자바스크립트를 실행시, 먼저 문서를 처음부터 스캔하면서 변수와 함수만 뽑아서 메모리에 만드는 작업을 먼저 한다
// 이때 var로 선언된 변수는 변수의 기본 값으로 "undefined"라는 자바스크립트의 특수한 값으로 먼저 값을 세팅(변수의 초기화)
// 함수는 내용까지 모두 메모리에 올린다

// 재 선언 변수. 변수가 존재하면 스킵.
var a = 'Hello World';
console.log(a + ' + ' + b + ' = ' + c);     // 21 + 20 = 30

// calc라는 입장에서는 a 변수의 값이 10인 것을 기대하고 호출
// 하지만 위에서 a라는 변수에 'Hello World'라는 값으로 변경했으므로 10이 'Hello World'로 변경됨
// 원했던 결과 안나옴
calc();
console.log('');

// 2. 사용하는 변수의 사용 범위가 window와 함수 2개만 존재
// 보통 프로그램은 { } 별로 변수 사용 범위를 갖는다.
// 값은 항상 가까운 { } 영역에서 상위 { } 영역으로 거슬러 올라가면서 참조
// 최종적으로 값이 없으면 에러 
var num = 100;

if (num > 0) {
  // { } 안에서 선언된 변수를 지역변수라 한다
  // } 를 만나면 지역변수, 함수는 자동 삭제됨
  // 단 var로 선언된 경우는 지역변수가 아닌 일반 변수 취급
  var num = 20;
  var nickname = 'IF 조건문';
  console.log('조건이 참 입니다');
  console.log('num in=> ' + num);         // 20
  console.log('nickname in=> ' + nickname);
}

console.log('num out=> ' + num);              // 20
console.log('nickname out=> ' + nickname);    // IF 조건문
console.log('');

// 3. window 영역을 오염시킨다.
alert('Hello World!!!');

// window가 가지고 있떤 alert 변수의 값이 함수였는데 이를 일반 값으로 변경
var alert = 'Good Morning';

// 이제는 함수로써 사용할 수 없다
// alert('Hello World!!!');


console.log('---------------- hosting -----------------');
// 변수, 함수를 메모리에 먼저 올리는 작업
// var 변수는 undefined 값으로 초기화된다
// 초기화 -> 변수, 함수에 처음으로 값을 넣는 작업

console.log('age: ' + age);     // undefind

var age = 30;                   // 최기와 undefind => 30
console.log('age: ' + age);     // 30
console.log('');

console.log('---------------- 465 -----------------');
var x;
var y;
var z;

var x1, y1, z1;

x = 10;
y = 20;
z = x + y;
console.log(x + ' + ' + y + ' = ' + z);

x1 = 11;
y1 = 21;
z1 = x1 + y1;
console.log(x1 + ' + ' + y1 + ' = ' + z1);


console.log('---------------- 466 나이 계산 -----------------');
// 2023 - 1995 = ?
/*
  // 변수 선언
  var startYear;
  var endYear;

  // 변수 초기화
  startYear = prompt('기준 연도를 입력해 주세요!');
  endYear = prompt('태어난 연도를 입력해 주세요!');

  var year = startYear - endYear;
  console.log('1995년에 태어난 사람의 나이는 ' + year);
*/

// 변수 선언과 동시에 초기화
var startYear = prompt('기준 연도를 입력해 주세요!');           // 시작 연도
var endYear = prompt('태어난 연도를 입력해 주세요!');
// var year = 2023 - 1995;
var year = startYear - endYear;
console.log('1995년에 태어난 사람의 나이는 ' + year);


// console.log(window);
