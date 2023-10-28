// A02HOF.js
const one = function (value1, value2) {

  console.log('----- START -----');
  const nickname = 'ONE Function';

  const oneAdd = function () {
    const x = value1;
    const y = value2;
    const result = x + y;
    console.log(`${nickname} - ${x} + ${y} = ${result}`);
  }

  const oneMin = function () {
    const x = value1;
    const y = value2;
    const result = x - y;
    console.log(`${nickname} - ${x} - ${y} = ${result}`);
  }

  // const oneInner2 = function () {
  //   const x1 = 100;
  //   const y1 = 200;
  //   const result1 = x1 + y1;
  //   console.log(`${x1} + ${y1} = ${result1}`);
  //   console.log('Good Afternoon');
  // }

  oneAdd();
  console.log('Good Morning');

  oneMin();
  console.log('Good Afternoon');

  oneAdd();

  console.log('----- END -----');
}

one(100, 200);

one(20, 30);

// 함수 내부에 선언된 변수, 함수는 함수 내부에서만 유효하다
// oneAdd();