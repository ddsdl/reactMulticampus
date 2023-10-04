console.log('---------------- Scope -----------------');
// var로 선언된 변수는 함수 이외의 { } 스코프를 갖지 않는다.
var i = 10;
if (true) {
  var i = 20;
  console.log('If block=> ', i);
}
console.log('Global=> ', i);

// for 순환을 위해 선언한 i 변수가 위 i 변수 값을 변경
for (var i = 0; i < 3; i++) { }
console.log('Global For=> ', i);
console.log('');

// 함수는 { } 스코프를 갖는다
var str = 'Global';

function out() {
  // var, let, const 어떤 키워드로 달아도 함수 내부에서 선언된 변수는 함수 내부에서만 사용 가능한
  // 지역 변수가 된다. => 함수 밖에서 참조할 수 없다
  var str = 'Local';
  console.log('Function IN: ', str);

  // 함수 내부에서 변수를 선언할 때 var, let, const 키워드를 달지 않고 선언하면
  // 그 변수는 global 변수(window)로 등록된다.
  inner = '함수 내부의 inner 변수';
  console.log('Function IN: ', inner);
}
out();

console.log('Function OUT: ', str);
console.log('Function OUT: ', inner);
console.log('');

// arguments 객체 생성
// scope chian 설정
// 내부 변수 정의
// this 값 결정
// 실행
let x = 'Global X';
let y = 'Global Y';

function outer() {
  let z = 'Outer Local z';

  const inner = function () {   // 중첩 함수
    const y = 'INNER Y';
    console.log(`x=> ${x}`);
    console.log(`y=> ${y}`);
    console.log(`z=> ${z}`);
  }

  inner();
}
outer();
// inner();           // 함수 내부에 선언된 변수. 함수 외부에서 호출할 수 없다.
console.log('');


function foo() {
  const x = 10;
  console.log(x);   // 10
  bar();
}

function bar() {
  console.log(x);
}

// bar();
foo();        // Global X
