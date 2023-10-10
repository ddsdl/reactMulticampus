console.log('---------------- Array -----------------');
const arr = [10, 11, 100, 101, 1000, 11, 100];

// join => 배열 요소를 지정한 문자열로 묶어서 문자열로 반환
let result = arr.join(' * ');
console.log(result, typeof result);

// push() => 기존 배열에 추가
result = arr.push(1000);

// concat() => 값을 추가후 새로운 배열을 리턴 => react에서 사용
// result = arr.concat(1001);
result = arr.concat([1001, 1002]);
console.log(arr);
console.log(result);
console.log(arr === result);    // false
console.log('');

// 위치
result = arr.indexOf(100);
console.log(result);

result = arr.indexOf(100, 3);   // 검색을 배열의 3번째 위치부터 찾기 시작
console.log(result);            // 6 => 위치값은 좌측부터 항상 카운트

// console.log(arr);      
// [10, 11, 100, 101, 1000, 11, 100, 1000]
result = arr.lastIndexOf(100);    // 검색을 뒤에서 부터 찾기 시작
console.log(result);              // 6 => 위치값은 좌측부터 항상 카운트

result = arr.lastIndexOf(100, 3);     // 검색을 뒤에서 부터 찾기 시작
console.log(result);                  // 2 => 위치값은 좌측부터 항상 카운트

result = arr.lastIndexOf(300);
console.log(result);                  // -1 => 값이 없으면 -1을 리턴
console.log('');

// 배열에 찾을려고 하는 값이 있니?. 중복 데이터는 추가 안 할 목적
if (arr.indexOf(200) === -1) {      // or if (arr.indexOf(200) < 0)
  arr.push(200);
}
console.log(arr);
console.log('');


console.log('---------------- Sort -----------------');
// [10, 11, 100, 101, 1000, 11, 100, 1000, 200]

// unicode 순서로 sort
result = arr.sort();
console.log(arr, result);
console.log(arr === result);    // true => 원판이 변경된다

// 기본형 비교
// unicode 비교 이외는 값으로 비교하기 위한 compare 함수를 매개변수로 전달할 필요가 있다
const compare = (x, y) => {
  if (x > y) return 1;
  else if (x < y) return -1;
  else return 0;
}
result = arr.sort(compare);
console.log(arr);

result = arr.reverse();
console.log(arr);
console.log(result);
console.log(arr === result);    // true => 주소값 비교
console.log('')


const objArray = [
  { name: 'NolBu', age: 35 },
  { name: 'BangJa', age: 18 },
  { name: 'HungBu', age: 25 },
];

// Object 객체의 sort 함수
const objCompare = (key) => {
  const compare = (x, y) => {
    if (x[key] > y[key]) return 1;
    else if (x[key] < y[key]) return -1;
    else return 0;
  }
  return compare;
}

// () 실행을 해야 함수의 리턴값(비교함수)가 반환되서 sort가 된다
objArray.sort(objCompare('age'));
console.log(objArray);
