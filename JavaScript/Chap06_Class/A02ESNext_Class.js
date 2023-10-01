class Jumsu {
  constructor(name, kor, eng) {
    this._name = name;
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
    console.log(`${this._name}님의 총점은 ${this.onTotal()}이고 평균은 ${this.onAvg(2)}입니다`);
  }

  get name() {
    return this._name;
  }
  set name(name) {
    if (typeof name === 'string') this._name = name;
  }
}

const nolbu = new Jumsu('NolBu', 100, 90);
console.log(nolbu);
