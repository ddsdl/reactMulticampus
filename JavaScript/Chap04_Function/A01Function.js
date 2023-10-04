console.log('---------------- [256] 함수 선언문 -----------------');
console.log(a);

var a = 10;
var b = 20;

// 선언문 방식의 함수
// add라는 이름으로 여러 실행구문(중복 사용된)을 묶는다 => 함수
// add라는 이름으로 실행을 하면 { } 내부의 구문을 순차적으로 실행 후 }를 만나면 호출 구문으로 돌아간다
// 함수는 함수명() 형태로 호출한다. 함수도 값이다. 함수도 객체다
function add() {
  const result = 10 + 20;
  console.log(`10 + 20 = ${result}입니다`);
  console.log('----- END -----');
}

console.log('함수 호출');
add();



// 호이스팅 - var 변수
alert();

// window의 alert() 함수를 덮어씀 - window 영역을 오염시킴
function alert() {
  let result = 10 - 20;
  console.log(`10 - 20 = ${result}입니다`);
}

alert();
console.log('');


// 선언문 방식의 함수 선언
// 일반 함수
function one() {
  const result = 100 + 200;
  console.log(`100 + 200 = ${result}입니다`);
}
console.log(one);   // value
one();              // 값이 함수로써 동작
console.log('');


// 매개변수가 있는 함수.
// 함수 내부에 패턴은 동일한데 함수 내부에서 사용되는 값이 사용될때마다 다른 경우 매개변수, 인수를 
// 이용해서 전달하는 방식. 내부에서 사용할 값은 호출하는 곳에서 전달한다
// 이 값은 전달 안해도, 적게 전달해도, 많이 전달해도 에러는 아니다
// 함수를 정의하는 개발자가 적절하게 에러가 발생하지 않도록 처리를 해 주어야 한다
function two(x, y) {
  // x, y는 내부에 선언된 변수(지역변수) 역할을 한다
  // let x, y;
  const result = x + y;
  console.log(`two() => ${x} + ${y} = ${result}입니다`);
}
two(100, 200);    // x = 100, y = 200
two(1, 2);        // x = 1, y = 2
console.log('');


// 반환값이 있는 함수.
function three(x, y) {
  // 함수 내부에 선언된 변수는 매개변수, var, let, const로 선언된 변수 모두 지역변수다
  // 즉 함수 내부에서만 사용 가능한 변수다
  const result = x + y;
  return result;          // 호출된 곳으로 처리가 이동된다
  console.log('실행되지 않는다...');
}
// console.log(x);
// console.log(result);

// 함수 호출 구문은 함수가 실행되고 난 후에는 return 한 값을 가지고 있는 값으로 취급된다
three(20, 30);    // 50
console.log(three(20, 30));

const value = three(20, 30);
console.log(value);
console.log('')

// 반환값이 없는 함수. => undefined 확인.
function four(x, y) {
  const result = x + y;
  console.log(`two() => ${x} + ${y} = ${result}입니다`);
  // return undefined;
}
const valueFour = four(11, 22);
console.log(valueFour);           // undefined
console.log('');

// add();

// 호이스팅. 함수는 호이스팅 과정에서 완벽히 정의된 값으로 정의. 이미 선언된 함수가 있으면 덮어쓴다
// var 변수는 호이스팅 과정에서 undefined로 초기화
five();       // Five TWO

function five() {
  console.log('Five ONE')
}
five();       // Five TWO

function five() {
  console.log('Five TWO')
}
five();       // Five TWO

