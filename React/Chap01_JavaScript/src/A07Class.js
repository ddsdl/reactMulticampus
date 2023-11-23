// React 16.8 이전은 대부분 class를 이용, 이후는 대부분 함수를 이용
class Jumsu {
  constructor(name, kor, eng) {
    this.name = name;
    this.kor = kor;
    this.eng = eng;
  }

  onTotal() {
    const result = this.kor + this.eng;
    return result;
  }
  onAvg(cnt) {
    const result = this.kor + this.eng;
    return result / cnt;
  }
}

const one = new Jumsu('NolBu', 100, 90);
const two = new Jumsu('흥부', 80, 90);
console.log(one);
console.log(two);

console.log(one.onTotal(), two.onTotal());
console.log(one.onAvg(2), two.onAvg(2));
