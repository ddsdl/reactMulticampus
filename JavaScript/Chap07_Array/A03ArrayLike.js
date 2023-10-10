console.log('---------------- [409] Array Like Object -----------------');
/*
유사 배열(Array Like Object)
  1. 0 이상의 정수 값으로 프로퍼티 이름을 갖는다.
  2. length 프로퍼티가 있다.
  3. 요소의 추가, 삭제에 따라 length의 값이 변경되어야 한다.

  HTML DOM의 li 등이 Array Like Object이다.
*/
// const arr = [10, 11];
// console.log(Object.getOwnPropertyDescriptors(arr));

const arrLike = {
  0: '놀부',
  1: '흥부',
  2: '방자',
  length: 3,

  push(item) {
    this[this.length] = item;
    this.length++;
    return this.length;
  },
  pop() {
    const last = this[this.length - 1];
    delete this[this.length - 1];
    this.length--;

    return last;
  },
  unshift(item) {
    return Array.prototype.unshift.call(this, item);
  },
  shift() {
    return Array.prototype.shift.call(this);
  }
}
console.log(arrLike[0], arrLike[1], arrLike[2], arrLike[3]);

console.log(arrLike);
let result = arrLike.push('향단');
console.log(arrLike, result);

result = arrLike.pop();
console.log(arrLike, result);

result = arrLike.unshift('향단');
console.log(arrLike, result);

result = arrLike.shift();
console.log(arrLike, result);

// DOM 참조
result = document.querySelectorAll('h1');
console.log(result);
