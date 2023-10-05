// A08ExportTwo.js

// export default (function () { ... }
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

  return { progName, getName, getTotal, getAvg };
})();
// default는 module에서 1개의 값만 지정 가능
export default jumsu;

// 개별 export는 중첩해서 사용 가능
export const x = 10;
export const y = 20;
