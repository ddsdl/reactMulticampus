/*
module.exports = {
  name: 'Object Module',
  age: 10,
  check: true,
  onAdd(x, y) {
    return `${x} + ${y} = ${x + y}`
  },
}
*/
const user = {
  name: 'Object Module',
  age: 10,
  check: true,
  onAdd(x, y) {
    return `${x} + ${y} = ${x + y}`
  },
}
module.exports = user;