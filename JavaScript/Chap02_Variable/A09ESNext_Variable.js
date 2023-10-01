console.log('----------------- [105] let, const -----------------');
// 1 재 선언 에러 아님
var nickname = 'NolBu';
var nickname = 'HungBu';

// 2 지역 변수 개념이 없음
{
  var nickaname = 'BangJa';
}
console.log('nickname: ' + nickname);
console.log('');

// 3. window 영역을 오염


// let - ES2015
// var 선언을 let로 변경한다
let address = 'Seoul';
console.log('Address: ' + address);

// 1. 선언한 변수를 재 선언할 수 없다
// let address = 'Busan';     // Error
// let a = 10;                // Error => html 파일에서 선언한 lib.js 파일에 a 변수 선언이 있음
// var address = 'Busan';     // Error
// const address = 'Busan';   // Error

// 2 모든 { }에서 변수의 사용 범위가 결정된다 - 즉 지역변수 개념이 등장
let num = 100;

if (address == 'Seoul') {     // = 는 대입, == 같니?
  // age, num은 if { } 내부에서만 사용할 수 있는 지역변수다
  // 즉 if의 }를 만나면 내부에 선언한 age, num는 자동 삭제된다 (가비지 컬렉션)
  let age = 20;
  let num = 200;
  console.log('age in=> ' + age);   // 20
  console.log('num in=> ' + num);   // 200
}

console.log('num out=> ' + num);    // 100
// console.log('age out=> ' + age); // Error
console.log('');

// 3 window 영역을 오염시키지 않는다
// let, const로 정의된 변수는 TDZ(선언과 최기화 사이)이라는 영역에 선언된다 (var변수는 window 영역에 정의)
let alert = 'Hello World';
console.log('alert=> ' + alert);    // TDZ의 alert

// window.alert('Good Morning');       // window의 alert    OK 경고창 귀찮아서 주석 해 놓음 
console.log('');

// 호이스팅
// console.log(age);        // 선언하지 않은 변수를 먼저 호출해 사용 불가 (var 변수는 가능 - 호이스팅)
let age = 20;
console.log(age);
console.log('')

console.log('----------------  523 Page const - ES2015 -----------------');
// const - ES2015
// 상수를 정의할 목적으로 사용한다. 초기화 이후 값을 변경할 수 없다.
// 프로그램에서 상수(const)의 변수명은 대문자로 적는게 관례 (자바스크립트는 보통 소문자로 기술)
const MY_PI = 3.141516;
console.log(MY_PI);
console.log('');

// 1 초기화 이후 값을 변경할 수 없다.
// MY_PI = 100;     // 값 변경 에러 


// 2. let와 같이 선언된 변수를 재 선언 안됨
// 3. let와 같이 { } 범위의 지역 변수 선언 가능
// 4. TDZ에 선언되므로 window 영역을 오염 시키지 않는다

// 주의점
// 반드시 선언과 동시에 초기화(값 대입)이 이루어져야 한다 => 추후 변경 안됨
// const tel;

// 배열 -> 대괄호로 값을 묶어 처리한다
// 변수 arr은 실질적인 값을 가지고 있지 않고, 실질적인 값이 있는 위치(주소)를 알고 있다
// 이렇게 값이 아닌 주소값을 가지고 있는 변수를 "참조형", "리퍼런스형" 변수라 한다
const arr = [10, 11, 'NolBu', new Date(), true];
// 값 참조 - 없는 방(정의되지 않은 요소)을 참조해도 에러 아님
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);    // undefined

// 변수에 실질적인 값이 대입되어 있는 변수를 "기본(원시)형 변수"라 한다
// ex] nickname, address, num 등은 기본형
// 기본형 변수는 없는(정의하지 않은) 변수를 참조시 에러
// console.log(abc);      // Error

// 참조형 => 참조형 변수가 선언되지 않은 변수를 참조 => Error
//        참조형 변수가 선언되었고 없는 방(요소)을 참조 => 에러 아님 undefined 출력

// 값 수정
arr[1] = 21;
console.log(arr);
console.log('');

// Object 객체 => 참조형 변수
const obj = {
  name: 'HungBu',
  age: 20,
  address: 'Seoul',
  today: new Date(),
  check: true,
}
console.log(obj.name);
console.log(obj.age);
console.log(obj.abc);   // undefined

obj.name = 'BangJa';
console.log(obj);
console.log('');

// 새로운 값으로 대체 => 에러
// arr = [100, 200, 300];
// obj = { name: 'ABC', tel: '010-1234-5678' };

// arr = 100;
// obj = 100;
