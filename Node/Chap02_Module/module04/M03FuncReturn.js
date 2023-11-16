// M03FuncReturn.js
module.exports = (options) => {
  const moduleName = 'M03FuncReturn';
  let count = options.count;

  const getName = () => moduleName;

  const increase = (num) => count = count + num;
  const decrease = () => count = count - 1;
  const getCount = () => count;

  const display = () => {
    console.log(`${options.name}님이 전달한 초기값 ${options.count}`);
  }

  return { getName, increase, decrease, getCount, display }
}