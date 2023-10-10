console.log('---------------- [122, 390] Array -----------------');
const one = [10, 11, 'one', 100, true, new Date()];

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

// 배열의 조작
one[0] = 'Hello';
one[100] = 100;       // 중간값을 건너뛰고 값 설정도 가능
console.log(one);