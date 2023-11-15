console.log('---------------- 중첩함수, 콜백함수 -----------------');

// 중첩 함수
function outer() {
  const x = 100;
  console.log(`outer() x변수=> ${x}`);

  function inner(y) {
    // y도 inner 함수 내부에 선언된 지역 변수가 된다.
    console.log(`inner() y 변수=> ${y}`);
    console.log(`inner() x 변수=> ${x}`); // scope chain이라 한다

    // 여기에 다시 중첩되는 함수가 올 수 있다
  }

  inner(200);
}
outer();
// inner();
console.log('');

const x = 'Global';
const one = function () {
  // 함수는 생성될때 scope chain이 결정되서 메모리에 올라간다.
  console.log(x);
};
const two = function () {
  // eslint-disable-next-line no-unused-vars
  const x = 'TWO LOCAL';
  one();
};

one(); // Global
two(); // Global
console.log('');

/*
함수는 일급객체
    1. 리터럴에 의해 생성 가능
    2. 변수나 배열요소, 객체의 프로퍼티로 할당 가능
    3. 함수의 인자나 리턴 값으로 사용 가능
    4. 동적으로 프로퍼티 생성 가능
*/

// 함수 내부에 선언된 변수의 값을 함수 외부에서 참조 할 수 있도록 리턴 값으로 사용
function outerTwo() {
  const x = 100;
  console.log(`outer() x변수=> ${x}`);

  function inner(y) {
    console.log(`inner() y 변수=> ${y}`);
    console.log(`inner() x 변수=> ${x}`);
  }
  inner(200);

  return x;
}
const result = outerTwo();
console.log(`outerTwo 내부에 선언된 변수 x의 값: ${result}`);
console.log('');

// 함수 내부에 선언된 변수의 값을 함수 외부에서 참조 할 수 있도록 리턴 값으로 사용
function outerThree() {
  const x = 100;
  console.log(`outer() x변수=> ${x}`);

  function inner(y) {
    console.log(`inner() y 변수=> ${y}`);
    console.log(`inner() x 변수=> ${x}`);
  }
  // inner(200);
  // console.log(inner);

  return inner;
}
const resultFunc = outerThree();
console.log(`outerThree 내부에 선언된 함수 inner의 값: ${resultFunc}`);
// 함수는 () 없이 호출하면 함수리터럴(값 - 문자열)로 출력되지만
// 함수 실행 명령인 ()를 변수뒤에 붙이면 함수로써 동작한다
// 일반 변수를 ()로 쳐서 호출하면 에러다. 값이 함수인 경우만 ()를 이용해 함수로써 호출 가능
resultFunc(50);
console.log('');

// outerThree()이 먼저 실행되고 리턴되는 값이 inner라는 함수를 outerThree 실행후에
// 반환된 inner를 함수로써 실행 ( ) 해라
// outerThree() => inner  => (60) => inner(60);
outerThree()(60);
console.log('');

const onAdd = function (x, y) {
  return x + y;
};
const sum = onAdd(10, 20);
console.log(sum);
console.log(onAdd(10, 20));
