console.log('----------------- [289] Closure -----------------');

let num = 0;
const incOne = function () {
  return num++;
};
console.log(incOne());
console.log(incOne());

num = 100;
console.log(incOne());
console.log('');

const incTwo = function () {
  let num = 0;
  return num++;
};
console.log(incTwo());
console.log(incTwo());
console.log(incTwo());
console.log('');

// closure
// 함수 내부에 선언된 변수를 함수 외부에서 참조(조작) 할 수 있도록 만들어진 구조
// 클로저는 함수와 함수가 선언된 어휘적 환경의 조합이다. 이 환경은 클로저가 생성된 시점의 
//      유효 범위 내에 있는 모든 지역 변수로 구성된다
// 클로저는 어떤 데이터(어휘적 환경)와 그 데이터를 조작하는 함수를 연관시켜주기 때문에 유용하다.
const incThree = function (x) {
  let cnt = x;

  function increase() {
    // gurad
    return cnt++;
  }

  return increase;
};
const three = incThree(1);
console.log(three());   // 1
console.log(three());   // 2
// cnt = 100;
console.log(three());   // 3
console.log('');


const three1 = incThree(100);
console.log(three1());  // 100
console.log(three1());  // 101
console.log(three1());  // 102
console.log('');