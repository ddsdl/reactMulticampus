// 함수 리터럴. 함수 표현식
let onAdd = function (x, y) {
  console.log(`${x} + ${y} = ${x + y}`);
}

const onMin = function (x, y) {
  return `${x} - ${y} = ${x - y}`;
}

onAdd(10, 20);
console.log(onMin(10, 20));
console.log('')


// ES6. 
