// closure
// 함수 내부에 지역변수를 외부에서 참조 가능하게 만들어진 구조
// 쓰는 이유 =>
// 1 함수 내부에 선언된 변수는 함수 외부 환경을 오염시키지 않는다 => 변수 중복, 함수 중복으로 에러 회피
// 2 함수 내부에 선언되 변수를 외부에서 지정한 방법으로만 조작가능하게 할 목적
let x = 1;
const getX = function () {
  return x;
}

const one = (function () {
  let x = 10;

  const getX = function () {
    return x;
  }

  return { x, getX }
})();

const two = (function () {
  let x = 100;

  const setX = function (value) {
    x = value;
    // console.log(x);    // 101
  }

  return { setX }
})();

console.log(x, getX());
console.log('');

console.log(one.x, one.getX());
one.x = 11;
console.log(one.x, one.getX());
console.log('');


two.setX(101);
// two.x = 101;
console.log(two.x);
