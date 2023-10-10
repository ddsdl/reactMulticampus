// ES2015
console.log('---------------- Set -----------------');
// 중복된 값이 존재하지 않는다
// 순서가 없는 집합이다 => for로 순차적으로 꺼낼 수 없다
// 순서가 없으므로 꺼내오는 메서드가 없음
const mySet = new Set([10, 11, 100, 10, 21, 22, 11]);
console.log(mySet);     // {10, 11, 100, 21, 22}

// 추가
mySet.add(200);
mySet.add(100);   // 중복. 추가 안됨

// 요소 있는지 확인. 있으면 변수에 값 대입
let result;
if (mySet.has(21)) {
  result = 21;
}
console.log(result);

// 삭제
mySet.delete(21);
console.log(mySet);
console.log('');

// 전체 목록 출력
mySet.forEach((item) => console.log(item));
