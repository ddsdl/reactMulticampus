console.log('---------------- [358] Getter / Setter -----------------');

const obj = {
  // 데이터 프로퍼티
  rule: 'Admin',
  firstName: 'Hong',
  lastName: 'GilDone',
  age: 30,

  // Java의 Getter / Setter 메서드 방식
  getAvg() {
    // 가드 - 조건을 달아서 일정 조건이 만족한 경우만 실행하고자 할때
    if (this.rule === 'Admin') return this.age;
    else return '권한이 없습니다';
  },
  setAge(x) {
    if (this.rule === 'Admin') this.age = x;
    else alert('권한이 없습니다');
  },

  // 접근자 프로퍼티 - JavaScript의 Getter / Setter 메서드 방식
  // 정의는 메서드 형태, 호출은 속성(프로퍼티) 형태로 사용
  get name() {
    if (this.rule === 'Admin') return `${this.firstName} ${this.lastName}`;
    else return '권한이 없습니다';
  },
  // setter는 받는 값을 1개만 지정 가능하다 { firstName: 'A', lastName: 'B' } ['A', 'B']
  set name(value) {
    if (this.rule === 'Admin') {
      this.firstName = value.firstName;     // value[0]
      this.lastName = value.lastName;       // value[1]
    } else {
      alert('권한이 없습니다');
    }
  }
};

// 속성으로 접근
obj.age = 100;

// 메서드로 접근
console.log(obj.getAvg());
obj.setAge(50);
console.log(obj);
console.log('');

console.log(obj.name);

// const yourName = { firstName: 'Your', lastName: 'Name'}
// obj.name = yourName;
obj.name = { firstName: 'Your', lastName: 'Name' };
console.log(obj);


// console.log(window)