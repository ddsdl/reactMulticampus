console.log('----------------- Object internal Method -----------------');
// 확장 가능(속성 추가) 여부. 삭제, 읽기, 쓰기 가능
const one = { name: 'NolBu', age: 30 };
console.log(Object.isExtensible(one));  // 확장(속성 추가)가 가능하니? => true

one.address = 'Seoul';
console.log(one);

Object.preventExtensions(one);          // 확장 불가로 변경

one.tel = '010-1234-5678';              // 추가 X
one.name = 'ONE';                       // 변경 OK
delete one.address;                     // 삭제 OK

console.log(one);                       // 추가 안됨

for (const key in one) {
  console.log(one[key]);
}
console.log(one);
console.log('');


// 객체 밀봉. 프로퍼티 추가, 삭제 금지. 읽기 쓰기 가능
const two = { name: 'NolBu', age: 30 };
console.log(Object.isSealed(two));      // 추가와 삭제가 안되는 상태니? => false

Object.seal(two);                       // 추가와 삭제가 안됨

two.name = 'TWO';                       // OK
two.address = 'Seoul';                  // X
delete two.age;                         // X
console.log(two);

for (const key in two) {                // OK
  console.log(two[key]);
}
console.log('');


// 객체 동결. 읽기만 가능하다
const three = { name: 'NolBu', age: 30 };
console.log(Object.isFrozen(three));    // 추가, 삭제, 변경이 불가 상태니 => false

Object.freeze(three);                   // 동결

three.name = 'THREE';                   // X
three.address = 'Seoul';                // X
delete three.name;                      // X
console.log(three.name);                // OK 읽기만 가능

for (const key in three) {                // OK
  console.log(three[key]);
}
console.log(three);
console.log('');
