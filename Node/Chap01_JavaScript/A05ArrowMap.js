// 일반 함수 - 함수 선언문 방식. 화살표 함수로 변경할 수 없다

/**
 * 전달된 두 수의 합을 리턴합니다..
 * @param {number} x 첫번째 매개변수 x는 number
 * @param {number} y 두번째 매개변수 y는 number
 * @return {number} 전달한 값의 합
 */
function fn(x, y) {
  console.log('funcion');
  return x + y;
}

fn(5, 7);

/* 이런 식으로는 사용불가
fn() => { }
*/

const arr = [10, 11, 100, 101, 1000];

let total = 0;
for (let i = 0; i < arr.length; i++) {
  total += arr[i];
}
console.log(`배열요소의 합은 ${total} 입니다`);
console.log('');

// console.log(arr);
// const arr = [10, 11, 100, 101, 1000];
total = 0;
arr.forEach(function (item, index, array) {
  // console.log(item, index, array);
  // array[index] = array[index] + 1000;
  total += item;
});
console.log(`배열요소의 합은 ${total} 입니다`);
console.log('');

// 화살표 함수로 변경
total = 0;
arr.forEach((item) => (total += item));
console.log(`배열요소의 합은 ${total} 입니다`);
console.log('');
