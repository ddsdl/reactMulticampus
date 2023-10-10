console.log('---------------- Array 반복 메서드 -----------------');

const arr = [10, 11, 100, 101, 1000];

let total = 0;
// 일반적인 for 구문
for (let i = 0; i < arr.length; i++) {
  total = total + arr[i];
}
console.log(total);

// forEach => 순수 순환
total = 0;
// for 순환문에서 증감이 1개씩 ++ 과 같다
arr.forEach(function (item, index, arr) {
  // console.log(item, index, arr);
  total = total + item;
});
console.log(total);

total = 0;
arr.forEach((item) => total = total + item);
console.log(total);
console.log('');

// map => forEach와 동일. 다만 리턴값을 기반으로 새로운 배열을 생성해 준다
// react => 배열 요소의 수정으로 많이 사용
let mapArr = arr.map(function (item, index, arr) {
  if (item % 2 === 0) return item * 2;
  else return item;
});
console.log(arr);     // 기존값
console.log(mapArr);  // [20, 11, 200, 101, 2000]

mapArr = arr.map((item) => (item % 2 === 0) ? item * 2 : item);
console.log(mapArr);  // [20, 11, 200, 101, 2000]
console.log('');

// filter => 순환. 다만 내부의 조건이 true인 순환 요소 기반으로 새로운 배열을 생성해 준다
// react => 배열 요소의 삭제으로 많이 사용
let filterArr = arr.filter(function (item) {
  if (item % 2 === 0) return true;
  else return false;
});
console.log(arr);         // 기존값
console.log(filterArr);   // [10, 100, 1000]

filterArr = arr.filter((item) => (item % 2 === 0) ? true : false);
console.log(filterArr);   // [10, 100, 1000]
console.log('');


// reduce
// react => useReducer가 이 함수 사용
// [10, 11, 100, 101, 1000]
total = arr.reduce(function (sum, item) {
  /*
  console.log(sum, item); // sum => 0, item => 10 return => 10. return 값이 다음 순환의 sum 값이 된다
  console.log(sum, item); // sum => 10, item => 11 return => 21. return 값이 다음 순환의 sum 값이 된다
  console.log(sum, item); // sum => 21, item => 100 return => 121. return 값이 다음 순환의 sum 값이 된다
  console.log(sum, item); // sum => 121, item => 101 return => 222. return 값이 다음 순환의 sum 값이 된다
  console.log(sum, item); // sum => 222, item => 1000 return => 1222.
  */
  return sum + item;
}, 0);

total = 0;
total = arr.reduce((sum, item) => sum + item, 0);
console.log(total)

const names = ['NolBu', 'HungBu', 'BangJa', 'HongGilDong', 'HungBu', 'BangJa'];
const nameCounter = names.reduce((sum, item) => {
  // if(sum['NolBu'])
  if (!sum[item]) {
    sum[item] = 1;              // sum['NolBu'] = 1;
  } else {
    // { NolBu: 1, HungBu: 2, BangJa: 2, HongGilDong: 1}
    sum[item] = sum[item] + 1;  // sum['NolBu'] = sum['Nolbu'] + 1;
  }
  return sum;
}, {});
console.log(nameCounter);
