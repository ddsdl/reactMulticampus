// ES2015
console.log('---------------- [431] Map -----------------');
const myMap = new Map([
  ['one', 10],
  ['two', 20],
]);

// 추가 / 변경
myMap.set('three', 30);   // 추가
myMap.set('one', 1);      // 변경

// 존재 여부 / 삭제
if (myMap.has('three')) {
  myMap.delete('three');
}

// 참조
const result = myMap.get('one');
console.log(result);
console.log('');

// 순환
myMap.forEach((item) => console.log(item))
console.log(myMap);

const product = [
  { id: 1, name: 'NolBu', age: 35 },    // 0
  { id: 2, name: 'BangJa', age: 18 },   // 1
  { id: 3, name: 'HungBu', age: 25 },   // 2
];

const phone = [
  { id: 1, name: 'NolBu', age: 35 },    // 0
  { id: 2, name: 'BangJa', age: 18 },   // 1
  { id: 3, name: 'HungBu', age: 25 },   // 2
];

const myObject = {
  product: product,
  phone: phone
}

// 필요할때 추출해서 사용 가능
const product01 = myObject.product;
console.log(product01[0].name);
// product01.__proto__ = XXX
console.log('');


const yourMap = new Map([
  ['product', product],
  ['phone', phone]
]);

if (yourMap.has('phone')) {
  const phone01 = yourMap.get('phone');
  console.log(phone01[0].name)
}
