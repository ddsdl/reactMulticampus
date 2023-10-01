console.log('--------------------- [317] Arrow Function ---------------------');

// 매개변수의 기본값 지정 가능
function onAdd(x, y) {
  return `${x} + ${y} = ${x + y}`;
}

console.log(onAdd());
console.log(onAdd(10, 20));
console.log('');

let onMin = function (x, y) {
  return `${x} - ${y} = ${x - y}`;
};

console.log(onMin(10, 20));
console.log('');

// ES6.
// 함수 리터럴 방식만 변경 가능
// function을 삭제하고 인수 뒤를 =>로 변경 () => {} 형태가 된다

// {} 구문 안에 리턴 값 1개만 있는 경우 { }과 return을 생략하고 한줄에 기술
// 한 줄에 기술하는 경우 => 뒤가 값이면 return을 붙여서 값을 리턴
// 명령문인 경우는 리턴하지 않고 실행.

// 매개변수가 1개인 경우는 ()를 생략할 수 있다. **3 => 2 * 2 * 2
// 매개변수가 1개 이상인 경우는 반드시 ()로 묶어야 한다.

// 매개변수에 초기화가 가능

// 즉시 실행 함수로도 이용 가능
