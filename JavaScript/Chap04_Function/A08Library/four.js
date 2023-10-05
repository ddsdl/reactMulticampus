const four = (function () {
  let x = 'Hello';
  let y = 100;

  const onMin = function (x, y) {
    const result = x - y;
    return `${x} - ${y} = ${result}`;
  }

  return { x, y, onMin };
})();
