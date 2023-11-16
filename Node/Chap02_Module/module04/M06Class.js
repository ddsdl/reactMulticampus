module.exports = {
  Jumsu: class {
    constructor(name, kor, eng) {
      this.name = name;
      this.kor = kor;
      this.eng = eng;
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
      console.log(`${this.name} / ${this.onTotal()} / ${this.onAvg()}`)
    }
  }
}