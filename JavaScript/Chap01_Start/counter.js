let count = 100;
document.querySelector('#cnt').textContent = count;

document.querySelector('#btn').addEventListener('click', function () {
  count = count - 1;
  document.querySelector('#cnt').textContent = count;
});
