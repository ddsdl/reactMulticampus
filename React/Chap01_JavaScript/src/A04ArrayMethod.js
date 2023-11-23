// A04ArrayMethod.js

const products = [
  { id: 1, name: '삼성 TV', price: 15000, count: 10 },
  { id: 2, name: '삼성 PHONE', price: 25000, count: 5 },
  { id: 3, name: 'LG TV', price: 35000, count: 7 },
  { id: 4, name: 'LG PHONE', price: 25000, count: 10 },
  { id: 5, name: '삼성 청소기', price: 15000, count: 6 },
]

// products의 모든 상품의 가격을 2배로 올린 새로운 배열을 생성
let mapArr = products.map((item) => item.price * 2);
console.log(mapArr);

mapArr = products.map((item) => {
  return { ...item, price: item.price * 2 }
});
console.log(mapArr);
console.log('');

mapArr = products.map((item) => ({ ...item, price: item.price * 2 }));
console.log(mapArr);
console.log('')

// 수량이 10 이상인 상품만 추려서 새로운 배열을 생성
let filterArr = products.filter((item) => {
  if (item.count >= 10) return true;
  else return false;
});
console.log(filterArr);

filterArr = products.filter((item) => {
  return (item.count >= 10) ? true : false;
});
console.log(filterArr);

filterArr = products.filter((item) => (item.count >= 10) ? true : false);
console.log(filterArr);
console.log('');

// 상품의 단가를 모두 더하면 얼마?
let total = 0;
products.forEach((item) => total += item.price);
console.log(total);
console.log('')

// reduce => 누적 함수
total = products.reduce((sum, item) => {
  console.log(sum, item.price)
  return sum + item.price
}, 0);
console.log(total)
