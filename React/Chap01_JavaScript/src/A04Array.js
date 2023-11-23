const arr = [10, 11, 100, 101, 1000];

// 맨 뒤에 1001 추가
let result = arr.push(1001);
console.log(arr, result);     // 전체 배열의 개수(length)

// 맨 앞에 1추가
result = arr.unshift(1);
console.log(arr, result);     // 전체 배열의 개수(length)

// 맨뒤의 1001 삭제
result = arr.pop();
console.log(arr, result);     // result는 추출된 값

// 맨 앞에 1 삭제
result = arr.shift();
console.log(arr, result);     // result는 추출된 값
console.log('')

// 맨 뒤에 1001 추가. 단 기존 배열을 그대로 두고  새로운 배열로
// concat
const newArr = arr.concat(1001);
console.log(newArr);
console.log(arr);
console.log(arr === newArr);
console.log(``);

// spread
const newArr2 = [...arr, 1001];
console.log(newArr2);
console.log(arr);
console.log(arr === newArr2);
console.log(``);


// 맨뒤에 1001 추가 (새로운 배열을 반환)
let newArr1 = [...arr, ...[1001, 1002]];   // 배열 내부의 배열로 추가
console.log(newArr1)

newArr1 = arr.concat([1001, 1002]);     // 각 요소를 풀어서 추가
console.log(newArr1)
console.log(arr);       // 기존배열 변경 없음
console.log('');

// 맨앞에 1 추가 (새로운 배열을 반환)
const newArr21 = [1, ...arr];
console.log('');

// 맨뒤의 1001 삭제 (새로운 배열을 반환)
let newArr3 = arr.slice(0, arr.length - 1);
console.log(newArr3);   // 범위에 속한 배열이 모두 반환되서 새로운 배열이 생성
console.log(arr);       // 기존 변경 없음
console.log('');

newArr3 = arr.splice(arr.length - 1, 1);
console.log(newArr3);   // 추출된 값만 배열로 생성 [1000]
console.log(arr);       // 기존 배열이 변경된다

// 맨앞에 1 삭제 (새로운 배열을 반환)
const newArr4 = arr.slice(1);

// 배열의 2번째 11을 삭제 (새로운 배열을 반환)
const newArr5 = [...arr.slice(0, 1), ...arr.slice(2)];

// 맨뒤에 1001 추가. 단 기존 배열을 그대로 두고 값이 추가된 새로운 배열을 받음 (새로운 배열을 반환)
const newArr6 = [...arr, 1001];