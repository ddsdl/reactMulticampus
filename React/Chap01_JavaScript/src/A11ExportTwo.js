// A11ExportTwo.js
const jumsu = (function () {
  const progName = '점수 프로그램';
  const name = '놀부';

  const getName = function () {
    return name;
  };
  const getTotal = function (x, y) {
    return x + y;
  };
  const getAvg = function (total, num) {
    return total / num;
  };

  return getName;
})();

const x = 10;
const y = 20;
