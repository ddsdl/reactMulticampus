const three = (function () {
  let x = 100;
  let y = 200;

  const onAdd = function () {
    const result = x + y;
    return `${x} + ${y} = ${result}`;
  }

  return { x, y, onAdd }
})();
