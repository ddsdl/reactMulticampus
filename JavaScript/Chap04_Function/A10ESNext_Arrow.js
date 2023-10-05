// ES2015
console.log('--------------------- [317] Arrow Function ---------------------');
// 매개변수의 기본값 지정 가능 / 선언문 방식은 Arrow 함수로 변경 불가
function onAdd(x, y) {
  return `${x} + ${y} = ${x + y}`;
}
console.log(onAdd());
console.log(onAdd(10, 20));
console.log('');

const onMin = function (x, y) {
  return `${x} - ${y} = ${x - y}`;
};
console.log(onMin(10, 20));
console.log('');

// ES6.
// 함수 리터럴(표현식) 방식만 변경 가능
// function을 삭제하고 인수 뒤를 =>로 변경 () => {} 형태가 된다
const one = (x, y) => {
  return `${x} - ${y} = ${x - y}`;
};
const two = (x, y) => {
  console.log(`${x} - ${y} = ${x - y}`);
};
console.log(one(10, 20));
two(20, 30);
console.log('');


// Arrow 함수 {} 구문 안에 명령 구문이 딱 1줄만 존재하는 경우 { }과 return을 생략하고 한줄에 기술
// 한 줄에 기술하는 경우 => 뒤가 값이면 return을 붙여서 값을 리턴
// => 뒤의 구문이 값이 아닌 명령문인 경우는 리턴하지 않고 실행.
const three = (x, y) => `${x} - ${y} = ${x - y}`;
const four = (x, y) => console.log(`${x} - ${y} = ${x - y}`);

console.log(three(30, 40));
four(40, 50);
console.log('');


// 매개변수가 1개인 경우는 ()를 생략할 수 있다. **3 => 2 * 2 * 2
// 매개변수가 1개 이상인 경우는 반드시 ()로 묶어야 한다.
const five = x => 2 ** x;
console.log(five(3));       // 8
console.log('')

// 매개변수에 초기화가 가능
const six = (x = 0, y = 0) => console.log(`${x} - ${y} = ${x - y}`);
six();
six(50, 60);

// 즉시 실행 함수로도 이용 가능
const app = (() => {
  let x = 10;

  return { x }
})();
console.log(app);
console.log('');

let total = 0;
const arr = [10, 11, 100, 101, 1000];
arr.forEach(function (item) {
  total = total + item;
});
console.log(total);
console.log('');

total = 0;
arr.forEach(item => total += item);
console.log(total);
console.log('');


const seven = function () {
  console.log('---------- START ----------');
  setTimeout(() => {
    const result = 2000;
    console.log(`Five: ${result}`);
  }, 2000);
  console.log('---------- END ----------');
}
console.log('');


const getValue = function (ms) {
  const promise = new Promise((resolve, reject) => {
    if (ms < 1000) reject('시간이 너무 짧습니다...');
    else {
      setTimeout(() => resolve(3000), ms)
    }
  });

  return promise;
}
getValue(2000)
  .then((resp) => getValue(resp))
  .then((resp) => resp + 5000)
  .then((resp) => console.log(`Last: ${resp}`))
  .catch((error) => console.log(`Error: ${error}`))
  .finally(
    console.log('then, catch 상관없이 항상 실행된다')
  )