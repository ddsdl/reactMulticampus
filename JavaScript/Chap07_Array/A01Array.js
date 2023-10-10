console.log('---------------- Array -----------------');
const one = [10, 11, 'one', 100, true];

const two = new Array(5);   // 5개짜리 배열을 생성 [empty * 5]
two[0] = 20;
two[1] = 21;
two[3] = 200;
two[4] = true;
two[5] = new Date();
two[6] = '이러면 동적으로 배열의 크기가 늘어난다'; // 생성시 정의한 5의 의미가 없어짐

// eslint-disable-next-line no-array-constructor
const three = new Array(30, 31, 'three', 300, false, new Date());

// ES2015
const four = Array.of();          // 빈배열
const five = Array.of(5);         // 요소가 1개인 배열 five = [5]와 동일
const six = Array.of(5, 7, 8);    // 요소가 3개인 배열 five = [5, 7, 8]와 동일

console.log(one);
console.log(two, two[0]);
console.log(three);
console.log(four, five, six);
console.log('');

// 배열의 조작 - 변경
one[0] = 'Hello';
one[100] = 100;       // 중간값을 건너뛰고 값 설정도 가능

// 배열의 전체 요소의 수
console.log(one.length);  // 101
console.log('');

// 조작 메서드


// 추가 / 삭제
let result = one.push(22);    // 배열의 맨 뒤에 추가
console.log(result, one);     // result => 추가후 length

result = one.unshift(2);      // 배열 맨 앞에 추가
console.log(result, one);     // result => 추가후 length

result = one.pop();           // 배열 맨 뒤의 값을 삭제
console.log(result, one);     // result => 삭제된 값

result = one.shift();         // 배열 맨 앞의 값을 삭제
console.log(result, one);     // result => 삭제된 값
console.log('')

// 배열 요소의 중간에 추가, 삭제, 변경
// one.splice(시작 index, 시작 index로 부터 몇개를? - 없으면 끝까지, 치환값 - 없으면 삭제)
result = one.splice(5);         // ['Hello', 11, 'one', 100, true]
console.log(result, one);       // result => 삭제된 값

result = one.splice(1, 1);      // ['Hello', 'one', 100, true]
console.log(result, one);       // result => 삭제된 값 [11]

result = one.splice(1, 1, 10);  // ['Hello', 10, 100, true]
console.log(result, one);       // result => 삭제된 값 [one]

result = one.splice(1, 1, 20, 21, 200);  // ['Hello', 20, 21, 200, 100, true]
console.log(result, one);       // result => 삭제된 값 [10]

result = one.splice(1, 2, 1);  // ['Hello', 1, 200, 100, true]
console.log(result, one);       // result => 삭제된 값 [20, 21]
console.log('');

