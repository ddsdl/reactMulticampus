console.log('----------------- [479] Comparison Operator -----------------');

let x = 10;
let y = 3;

// >, <, <=, >=, ==(같다), ===(같다), !=(같지 않다), !==(같지 않다)
let result = x > y;
console.log(`x > y => ${result}, ${typeof result}`);

result = x < y;
console.log(`x > y => ${result}, ${typeof result}`);

result = x >= y;
console.log(`x >= y => ${result}, ${typeof result}`);
console.log('');

// 동등 비교
result = x == y;
console.log(`x == y => ${result}, ${typeof result}`);

result = x != y;
console.log(`x != y => ${result}, ${typeof result}`);
console.log('');

result = x === y;
console.log(`x === y => ${result}, ${typeof result}`);

result = x !== y;
console.log(`x !== y => ${result}, ${typeof result}`);
console.log('');


// 일치 비교
x = true;
y = '1';

// == 는 자동 형(타입) 변환이 이루어진다. true => 1, false => 0
result = x == y;
console.log(`x == y => ${result}, ${typeof result}`);

// === 타입도 매칭되어야 한다
result = x === y;
console.log(`x === y => ${result}, ${typeof result}`);
console.log('');

// 아스키 코드
// const code = { 65: 'a', 66: 'b', ... };

// utf-8
console.log('\uAC00');
// utf-16
console.log('\u{1F600}');

// 문자열 비교는 유니코드 값 비교
console.log('A' > 'B');     // false
console.log('');


console.log('----------------- 3항 연산자-----------------');
const name = 'NolBu';

result = (name === 'Nolbu' ? '관리자' : '일반 유저');
console.log(`result: ${result}, ${typeof result}`);
