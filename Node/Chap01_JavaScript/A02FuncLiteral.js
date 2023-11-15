/* eslint-disable no-var */
// ES5. 함수 리터럴
var sayHello = function () {
  return 1;
};
console.log('1 => ' + sayHello()); // 1

{
  // eslint-disable-next-line no-redeclare
  var sayHello = function () {
    return 2;
  };
  console.log('2 => ' + sayHello()); // 2
}

console.log('3 => ' + sayHello()); // 2
console.log('');

// ES6. Function
const yourHello = function () {
  return 1;
};
console.log('1 => ' + yourHello()); // 1

{
  const yourHello = function () {
    return 2;
  };
  console.log('2 => ' + yourHello()); // 2
}

console.log('3 => ' + yourHello()); // 1
console.log('');
