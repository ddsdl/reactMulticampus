// 즉시 실행 함수
const app1 = (function () {
  let x = 10;

  return { x }
})();

// namespace
const app2 = {};
app2.name = 'NolBu';
app2.getName = function () {
  console.log(this.name);
  return this.name;
};
// app2.getName();
// console.log('');
