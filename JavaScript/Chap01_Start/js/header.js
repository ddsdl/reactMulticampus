document.write('01. Body에 표시는 된다<br>');
document.write('이후 기술되는 자바스크립트에서 사용할 변수, 함수 등을 정의<br>');
document.write('브라우저가 시작될때 자동으로 처리해야 할 작업 등을 기술한다<br><br>');

// //로 시작하면 그 줄은 주석 (파서가 실행하지 않고 패싱)
/*
  이런식으로 여러줄을 묶어서 주석 처리도 가능하다
  자바스크립트는 이렇게 2가지 형태의 주석이 존재
*/

// 변수
var x = 10;
var y = 20;
var z = x + y;

// 함수
function onMin(x, y) {
  return x - y;
}

document.write(one + two);