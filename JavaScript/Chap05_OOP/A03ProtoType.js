console.log('---------------- [687] prototype chain -----------------');

function Jumsu(name, kor, eng) {
  this.name = name;
  this.kor = kor;
  this.eng = eng;

  this.getName = function () {
    return this.name;
  };
}

Jumsu.prototype.onTotal = function () {
  return this.kor + this.eng;
}
Jumsu.prototype.onAvg = function () {
  return this.onTotal() / 2;
}
Jumsu.prototype.display = function () {
  console.log(`${this.name}님의 총점은 ${this.onTotal()}이고 평균은 ${this.onAvg()}입니다.`);
}

console.dir(Jumsu);

// nolbu, hungbu, bangja를 인스턴스라고 한다
// 생성하는 Jumsu를 class라 한다. 여기서는 생성자 함수

// JavaScript에서는 자신의 객체를 생성한 생성자 함수(Jumsu)가 생성된 인스턴스(nolbu, hungbu..)의 부모 객체가 된다
// 상속
// 속성, 메서드가 자신에게 있으면 자신꺼 사용. 없으면 부모의 속성, 메서드를 사용, 부모도 없으면 할아버지꺼 사용
// 인스턴스는 [[Prototype]]이라는 내부 속성으로 부모 객체의 prototype 속성과 연결된다
// 이렇게 상속 관계를 찾아 올라가면서 사용할 프로퍼티, 메서드를 참조하는 방식을 "프로토타입 체인"이라 한다
const nolbu = new Jumsu('놀부', 100, 90);
const hungbu = new Jumsu('흥부', 90, 90);
const bangja = new Jumsu('방자', 80, 90);

console.log(nolbu);
console.log(hungbu);
console.log(bangja);

nolbu.display();
hungbu.display();
bangja.display();
console.log('')


console.log('---------------- getPrototypeOf -----------------');
// __proto__ => chrome에서 사용하던 부모의 prototype 참조 객체 . ES2015애서 표준으로 정의됨
console.log(nolbu.__proto__);
// 실질적인 표준 메서드
console.log(Object.getPrototypeOf(nolbu));
console.log('')

console.log(Object.getPrototypeOf(nolbu) === Jumsu.prototype);    // true
console.log(Object.getPrototypeOf(nolbu).constructor === Jumsu);  // true
console.log('');

console.log(nolbu.__proto__ === Jumsu.prototype);    // true
console.log(nolbu.__proto__.constructor === Jumsu);  // true
console.log('');


