// A03HOF.js

// A02HOF.js
const one = function (value1, value2, func) {
  // console.log(func);       // 함수가 문자열 형태의 값으로 전달
  // func()                   // 문자열 형태로 전달된 함수를 함수로써 실행 () 해라

  console.log('----- START -----');
  const nickname = 'ONE Function';

  // const oneAdd = function () {
  //   const x = value1;
  //   const y = value2;
  //   const result = x + y;
  //   console.log(`${nickname} - ${x} + ${y} = ${result}`);
  // }

  /*
  const outerAdd = function (value1, value2, nickname) {
    const x = value1;
    const y = value2;
    const result = x / y;
    console.log(`${nickname} - ${x} / ${y} = ${result}`);
  }
  */

  const oneMin = function () {
    const x = value1;
    const y = value2;
    const result = x - y;
    console.log(`${nickname} - ${x} - ${y} = ${result}`);
  }

  func(value1, value2, nickname);
  console.log('Good Morning');

  oneMin();
  console.log('Good Afternoon');

  func(value1, value2, '홍길동');

  console.log('----- END -----');
}

const outerAdd = function (value1, value2, nickname) {
  const x = value1;
  const y = value2;
  const result = x / y;
  console.log(`${nickname} - ${x} / ${y} = ${result}`);
}
const outerMin = function (value1, value2, nickname) {
  const x = value1;
  const y = value2;
  const result = x - y;
  console.log(`${nickname} - ${x} - ${y} = ${result}`);
}

one(30, 50, outerAdd);
one(40, 50, outerMin);