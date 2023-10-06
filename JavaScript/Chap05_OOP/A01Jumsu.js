console.log('---------------- OOP -----------------');
/*
    this는 객체 자신의 프로퍼티나 메서드를 참조하기 위한 자기 참조 변수(self-referencing variable)이다.
    즉 this 바인딩은 호출 방식에 따라 동적으로 결정된다.
    일반 함수로서 호출 => 전역객체
    메서드로 호출 => 메서드를 호출한 객체 마침표 앞의 객체
    생성자 함수로 호출 => 생성자 함수가 생성할 인스턴스
*/
const person = {
  name: 'NolBu',
  kor: 100,
  eng: 80,

  // 메서드 (메소드). 절대 Arrow 함수로 사용하지 않는다
  onTotal: function () {
    return this.kor + this.eng;
  },

  // ES2015
  onAvg() {
    return this.onTotal() / 2;
  },
  display: function () {
    // console.log(this);               // 객체 자체가 this
    // console.log(`${this.name}님의 총점은 ${this.onTotal()}이고 평균은 ${this.onAvg()}입니다.`);
    const total = this.onTotal();
    const avg = this.onAvg();
    console.log(`${this.name}님의 총점은 ${total}이고 평균은 ${avg}입니다.`);
  },
};
console.log(person);
person.display();
console.log('');

console.log('---------------- 생성자 함수 -----------------');
// 위와 같은 객체를 붕어빵 찍어내듯 여러개 생성하는 기계(생성자 함수, 클래스)를 정의하자
// 관례로 생성자 함수의 첫 글자는 항상 대문자(파스칼 표기법)로 정의한다
// 파스칼 표기법 => 단어의 첫 글자는 모두 대문자. FirstName, LastName
// 카멜 표기법 => 첫 단어의 시작은 항상 소문자 두번째부터 이어지는 단어의 첫 글자는 모두 대문자. firstName, lastName
// 스네이크 표기법 => 단어는 모두 소문자. 단어와 단어는 _로 연결. first_name, last_name

function JumsuCalc(name, kor, eng) {
  // 1. 묵시적으로 this 객체가 생성된다
  // const this = {};

  // 2. 생성된 this 객체에 요소 추가
  this.name = name;       // this = { name: '놀부' }
  this.kor = kor;         // this = { name: '놀부', kor: 100 }
  this.eng = eng;         // this = { name: '놀부', kor: 100, eng: 90 }

  // 필요에 따라 메서드 추가
  this.onTotal = function () {
    return this.kor + this.eng;
  }
  this.onAvg = function () {
    return this.onTotal() / 2;
  }
  this.display = function () {
    console.log(`${this.name}님의 총점은 ${this.onTotal()}이고 평균은 ${this.onAvg()}입니다.`);
  }

  // 3 값 추가한 this가 반환
  // return this;
}

// 정적 프로퍼티, 정적 함수 - static property, static method
// share 개념 - 호출하면 도일한 값, 동일한 동작을하는 util 적인 요소 - 보통 읽기 전용
JumsuCalc.clzName = '점수 프로그램';
JumsuCalc.area = (w, h) => {
  return w * h;
}

// console.dir(JumsuCalc);        // 구조 파악

const nolbu = new JumsuCalc('놀부', 100, 90);
const hungbu = new JumsuCalc('흥부', 90, 90);
const bangja = new JumsuCalc('방자', 80, 90);

const arr = [nolbu, hungbu, bangja];

arr.forEach((item) => item.display());

/*
for (let i = 0; i < arr.length; i++) {
  const item = arr[i];
  console.log(item);
  item.display();
}
*/

/*
console.log(nolbu);
console.log(hungbu);
console.log(bangja);

nolbu.display();
hungbu.display();
bangja.display();
*/

console.log(JumsuCalc.clzName);
console.log(JumsuCalc.area(10, 10));
