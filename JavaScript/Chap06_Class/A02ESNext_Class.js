// ES2022에 private 속성이 추가됨
// private => this(메모리에 만들어진 영역 - 인스턴스) 요소에서만 서로 참조가 가능한 변수
class Jumsu {
  #name;
  constructor(name, kor, eng) {
    this.#name = name;
    this._kor = kor;
    this._eng = eng;
  }

  onTotal() {
    return this._kor + this._eng;
  }
  onAvg(num) {
    return this.onTotal() / num;
  }
  display() {
    console.log(`${this.#name}님의 총점은 ${this.onTotal()}이고 평균은 ${this.onAvg(2)}입니다`);
  }

  get name() {
    return this.#name;
  }
  set name(name) {
    if (typeof name === 'string') this.#name = name;
  }
}

const nolbu = new Jumsu('NolBu', 100, 90);
console.log(nolbu);

// console.log(nolbu.#name);
// nolbu.#name = 'ABC';

// 접근자 프로퍼티를 이용해서 private 속성에 접근할 수 밖에 없다
nolbu.name = 'ABC';
console.log(nolbu);

console.log(nolbu.name);