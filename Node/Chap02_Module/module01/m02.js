const m01 = require('./m01');

console.log('---------- m02 ----------');
console.log(`${m01.name} / ${m01.age} / ${m01.onAdd(20, 30)}`);
console.log('');

const app = (() => {
  const moduleName = 'm02';
  const count = 1;

  const info = () => {
    return `m02=> ${m01.name} / ${m01.age} / ${m01.onAdd(20, 30)}`;
  };
  const onMin = (x, y) => {
    return `${x} - ${y} = ${x - y}`;
  };
  return {
    moduleName,
    count,
    info,
    onMin,
  };
})();
module.exports = app;
