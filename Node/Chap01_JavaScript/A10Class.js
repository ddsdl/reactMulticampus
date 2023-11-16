class Jumsu {
  #name;

  constructor(name, kor, eng) {
    // this = {}
    this.#name = name;
    this.kor = kor;
    this.eng = eng;
    // return this;
  }

  onTotal() {
    const result = this.kor + this.eng;
    return result;
  }
  onAvg() {
    const result = this.kor + this.eng;
    return result / 2;
  }
  display() {
    console.log(`${this.#name} / ${this.onTotal()} / ${this.onAvg()}`);
  }
}

const nolbu = new Jumsu('놀부', 100, 90); // constructor 호출
nolbu.display();

console.log(nolbu);
