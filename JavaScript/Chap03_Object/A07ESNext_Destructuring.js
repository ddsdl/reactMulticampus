console.log('---------------- Object DeStructuring -----------------');
/*
  ES2015 비 구조화 할당(DeStructuring)
  배열, 객체, 반복 가능한 객체에서 값을 꺼내 그 값을 별도의 변수에 대입하는 구문.
*/
const obj = {
  name: 'NolBu',
  age: 30,
  address: 'Seoul',
  getName: function () {
    return this.name;
  },
};

/*
// 이전 방식
const name = obj.name;
const age = obj.age;
const address = obj.address;
const getName = obj.getName;

console.log(name, age, address);
console.log(getName());             // window의 name 속성을 참조한다.
*/

// Object 객체 => { }, Array => [ ]
const { name, age, address, getName } = obj;
console.log(name, age, address);
console.log(getName());             // window의 name 속성을 참조한다.

// 별칭
const { name: nickname, age: num } = obj;
console.log(nickname, num);

// 기본값 할당
const { name: x = 'unknown', age: y = 0, tel = '000', add } = obj;
console.log(x, y, tel, add);
console.log('');


console.log('---------------- [636] Array DeStructuring -----------------');
const arr = [10, 11, 100, 101, 1000, 1001];

const [a, b, c, d, e, f, g] = arr;
console.log(a, b, c, d, e, f, g);

// 별칭 없음. 알아서 중복되지 않는 변수로 정의해야 함
const [a1, , , d1, , f1] = arr;
console.log(a1, d1, f1);

const [, , , , , f2] = arr;
console.log(f2);
console.log('');


const objArray = [
  { id: 1, name: 'NolBu', age: 35 },
  { id: 2, name: 'BangJa', age: 18 },
  { id: 3, name: 'HungBu', age: 25 },
];

const [obj1, obj2, obj3] = objArray;
console.log(obj1 === objArray[0]);      // true

objArray[0].name = '놀부';
console.log(obj1 === objArray[0]);      // true
console.log(obj1.name === objArray[0].name);    // true
console.log('');

// tuple
let [x1, y1, z1] = [10, 20, 'Hello'];
console.log(x1, y1, z1);

[x1, y1, z1] = [y1, x1, z1];
console.log(x1, y1, z1);

