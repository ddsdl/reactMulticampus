console.log('---------------- Module  -----------------');

// 즉시 실행 함수
(function () {
  let x = 10;
})();

// namespace
const app = {};
app.name = 'NolBu';
app.getName = function () {
  console.log(this.name);
};
app.getName();
console.log('');
