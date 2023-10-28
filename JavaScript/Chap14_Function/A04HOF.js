// A04HOF.js
const one = function (value1, value2, func) {
  console.log('----- START -----');
  const nickname = 'ONE Function';

  // 여기까지가 one 함수가 처리할 로직. 여기서부터 이 값을 가지고 사용자가 어떤 작업을 할 지 모름
  const result = value1 + value2;

  func(result, nickname);
  console.log('Good Morning');

  console.log('----- END -----');
}

const outerAdd = function (value, nickname) {
  const result = value + 100;
  console.log(`${nickname} / ${value} / ${result}`);
}
const outerMin = function (value, nickname) {
  const result = value / 2;
  console.log(`${nickname} / ${value} / ${result}`);
}

one(30, 50, outerAdd);
one(40, 50, outerMin);