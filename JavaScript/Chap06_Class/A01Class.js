console.log('---------------- Function -----------------');
const Jumsu = (function () {
  function Jumsu(name, kor, eng) {
    this.name = name;
    this.kor = kor;
    this.eng = eng;
  }

  Jumsu.prototype.onTotal = function () {
    return this.kor + this.eng;
  };
  Jumsu.prototype.onAvg = function () {
    return this.onTotal() / 2;
  };
  Jumsu.prototype.display = function () {
    console.log(`${this.name} / ${this.onTotal()} / ${this.onAvg()}`);
  };

  Jumsu.className = '3학년 1반';
  Jumsu.area = (w, h) => w * h;

  return Jumsu;
})();

const nolbu = new Jumsu('NolBu', 100, 80);
nolbu.display();
console.log(nolbu);
console.log('');

console.log('---------------- Class -----------------');
// ES2015. 생성자 함수를 대체 => class
class JumsuTwo {
  constructor(name, kor, eng) {
    // const this = {};
    this._name = name;
    this.kor = kor;
    this.eng = eng;

    this.getName = function () {
      return this._name
    }
    // return this;
  }

  // constructor 바깥 영역은 class JumsuTwo의 prototype 영역이다
  onTotal() {
    return this.kor + this.eng;
  };
  onAvg() {
    return this.onTotal() / 2;
  };
  display() {
    console.log(`${this._name} / ${this.onTotal()} / ${this.onAvg()}`);
  };

  // static
  static JumsuTwoName = '점수 구하는 프로그램'
  static getArea(x, y) {
    return x * y;
  }

  // 접근자 프로퍼티
  // 구현은 함수형태로 구현하지만 외부에서 사용은 프로퍼티(속성) 형태로 한다...
  get name() {
    return this._name;
  }
  // set name(name) {
  //   // Guard
  //   this._name = name;
  // }
}
const hungbu = new JumsuTwo('흥부', 100, 80);  // class의 constructor()가 호출된다
const bangja = new JumsuTwo('방자', 90, 80);

console.log(hungbu);
console.log(bangja);

hungbu.display();
bangja.display();
console.log('');

// static property, static method 참조
console.log(JumsuTwo.JumsuTwoName);
console.log(JumsuTwo.getArea(10, 20));
console.log('');

// 접근자 프로퍼티 - 생성자 함수에서는 구현할 수 없었음
// 객체에서는 가능 했음 - Chap03_Object의 A03ProtoType.js 참조
console.log(hungbu.name);

hungbu.name = '변경된 흥부';
console.log(hungbu.name);     // 변경은 안되지만 에러는 아님
console.log('');

console.log('---------------- prototype -----------------');
// hungbu 인스턴스를 생성한 객체는 class JumsuTwo
console.log(hungbu.__proto__);      // JumsuTwo의 prototype
console.log(Object.getPrototypeOf(hungbu) === JumsuTwo.prototype);
console.log(Object.getPrototypeOf(hungbu).constructor);

// hungbu 인스턴스 부모에 JumsuTwo 가 존재하니?
console.log(hungbu instanceof JumsuTwo);    // true
console.log(hungbu instanceof Object);      // true
console.log('');

console.log('name' in hungbu);        // true
console.log('_name' in hungbu);       // true
console.log('address' in hungbu);     // false
