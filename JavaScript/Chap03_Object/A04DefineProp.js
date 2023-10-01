console.log('----------------- defineProperty -----------------');

const obj = {
  name: 'NolBu',
  age: 30,
};

console.log(Object.getOwnPropertyDescriptor(obj, 'name'));
console.log(Object.getOwnPropertyDescriptors(obj));
console.log('');

// 속성 정의시 제약 조건을 추가
Object.defineProperty(obj, 'address', { value: '서울' });
Object.defineProperty(obj, 'tel', {
  value: '010-1234-5678',
  writable: true,           // 수정 여부
  configurable: false,      // 삭제 여부
  enumerable: true,         // for ~ in 구문으로 출력 여부
});
Object.defineProperty(obj, 'info', {
  get() {             // value
    // 가드
    return `${this.name} / ${this.age}`;
  },
  // value => { name: 'ABC', age: 10 }
  set(value) {        // writable.  기술하지 않으면 수정불가 writable: false와 동일
    this.name = value.name;
    this.age = value.age;
  },
  configurable: false,
  enumerable: false,
})

obj.address = 'Busan';    // 변경 안됨 => writable: false
delete obj.address;       // 삭제 안됨 => configurable: false
console.log(obj.address)  // OK
console.log(obj);
console.log('');

obj.tel = '010-9876-5432';
delete obj.tel;
console.log(obj);
console.log('')

console.log(obj.info);
obj.info = { name: 'ABC', age: 10 };
console.log(obj);
console.log('');

for (const key in obj) {
  console.log(obj[key]);
}
console.log('');

// 객체를 처음부터 속성 지정해서 생성
const person = {};
Object.defineProperties(person, {
  name: { value: '흥부' },      // 나머지 모두 false
  age: { value: 10, writable: true, configurable: false, enumerable: true },
  address: { value: 'Seoul', writable: false, configurable: false, enumerable: true },
  info: {
    get() {
      return `${this.name} / ${this.age}`;
    },
    set(value) {
      this.name = value.name;   // 변경 안됨. 속성에서 writable이 false
      this.age = value.age;
    },
    configurable: false,
    enumerable: false,
  }
});

person.info = { name: 'ABC', age: 20 };
console.log(person.info);
console.log(Object.getOwnPropertyDescriptors(person));

