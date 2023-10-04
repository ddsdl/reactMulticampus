console.log('---------------- [307] 중첩함수, 콜백함수 -----------------');
const x = 1000;

// 중첩함수
function outer1() {
  let x = 10;

  function inner() {
    const y = 20;
    const result = x + y;
    console.log(`${x} + ${y} = ${result}`);
    // return undefined;
  }

  // return inner;          // 1. 값으로 전달
  return inner();           // 2. inner 함수를 실행 ()하고 그 결과값을 리턴해라 => undefined가 리턴
}
const result = outer1();
// console.log(result);
// result();                // 1. 값으로 전달된 함수를 실행( ) 해라
// result();                // 2. 넘어온 값이 undefined. undefined를 함수로 실행 undefined() 해라 => 에러
console.log(result);        // undefined


console.log('');

/*
함수는 일급객체
    1. 리터럴에 의해 생성 가능
    2. 변수나 배열요소, 객체의 프로퍼티로 할당 가능
    3. 함수의 인자나 리턴 값으로 사용 가능
    4. 동적으로 프로퍼티 생성 가능
*/

function outer2(x) {
  console.log('outer 함수 호출', x);
}

console.log('----------- 함수의 인자나 리턴 값이 될 수 있다. -------------');



console.log('---------------- [604] Promise -----------------');
