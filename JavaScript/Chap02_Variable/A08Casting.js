console.log('----------------- [160] Casting - 타입을 변경 -----------------');
// 기본형 중에서 number, string, boolean은 필요에 따라 타입 변환이 가능
// 참조형(리퍼런스형)은 상속 관계(프로토타입)만 가능
// 명시적 형 변환(타입 캐스팅)
let x = 10;
console.log('x: ' + x + ', typeof(변수명): ' + typeof x);

// string 타입으로 형 변환
let str = String(x);
console.log('str: ' + str + ', typeof(변수명): ' + typeof str);

// 값이 '', 0, undefined, null, NaN면 false, 그 외에 어떤 값이라도 있으면 true로 취급된다
let check = Boolean(x);
console.log('check: ' + check + ', typeof(변수명): ' + typeof check);

x = '200';
let num = Number(x);
console.log('num: ' + num + ', typeof(변수명): ' + typeof num);

// 문자열 변경에는 toString()도 사용 가능
str = num.toString();
console.log('str: ' + str + ', typeof(변수명): ' + typeof str);

str = check.toString();
console.log('str: ' + str + ', typeof(변수명): ' + typeof str);
console.log('');

console.log('----------------- 암묵적 타입 변환 (강제 타입 변환) -----------------');
// 문자열로 변환
// + 연산자로 문자와 연결을 하면 결과는 이어쓰기 형태의 문자열로 형 변환이 이루어 진다
str = num + '';
console.log('str: ' + str + ', typeof(변수명): ' + typeof str);

str = check + '';
console.log('str: ' + str + ', typeof(변수명): ' + typeof str);
console.log('');

// 숫자로 변환
// 연산자 + 이외를 사용하면 숫자로 자동 형 변환
str = '300.123';
// num = str * 1;
num = str - 0;
console.log('num: ' + num + ', typeof(변수명): ' + typeof num);

num = +str;
console.log('num: ' + num + ', typeof(변수명): ' + typeof num);
console.log('');

// boolean
// check = !!'';          // false
// check = !!0;           // false
// check = !!undefined;   // false
// check = !!null;        // false
// check = !!NaN;         // false

check = !!' ';            // true
console.log('check: ' + check + ', typeof(변수명): ' + typeof check);

if (num) console.log('값 있음..');
console.log('');


console.log('-----------------  global 함수 -----------------');

str = '10.25ABC';

// 시작은 숫자로 시작되어야 함. 정수만 추출. 문자로 시작되면 값은 NaN(Not a Number)
num = parseInt(str);
console.log('num: ' + num + ', typeof(변수명): ' + typeof num);

// 시작은 숫자로 시작되어야 함. 모든 수(실수포함) 추출. 문자로 시작되면 값은 NaN(Not a Number)
num = parseFloat(str);
console.log('num: ' + num + ', typeof(변수명): ' + typeof num);

// 문자가 포함되면 값은 NaN(Not a Number)
num = Number(str);
console.log('num: ' + num + ', typeof(변수명): ' + typeof num);
console.log('');

// 변경될 값이 빈 문자열의 경우
str = '';
num = parseInt(str);
console.log('num: ' + num + ', typeof(변수명): ' + typeof num); // NaN

num = parseFloat(str);
console.log('num: ' + num + ', typeof(변수명): ' + typeof num); // NaN

num = Number(str);
console.log('num: ' + num + ', typeof(변수명): ' + typeof num); // 0
console.log('');


num = 12345.6789;
str = num.toFixed(2);   // 소수점 2자리에서 반올림. 문자로 리턴
console.log('str: ' + str + ', typeof(변수명): ' + typeof str);
console.log('');


console.log('1' == 1);      // true
console.log(true == 1);     // true
console.log('1' == true);   // true
