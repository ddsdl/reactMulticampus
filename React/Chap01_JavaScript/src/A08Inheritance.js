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
    return this.onTotal() / cnt;
  }
}

class JumsuTwo extends Jumsu { };

class JumsuThree extends Jumsu {
  constructor(name, kor, eng, math) {
    super(name, kor, eng);
    this.math = math;
  }

  onTotal() {
    const result = this.kor + this.eng + this.math;
    return result;
  }
  // onAvg(cnt) {
  //   return this.onTotal() / cnt;
  // }
}

const one = new Jumsu('NolBu', 100, 90);
const two = new JumsuTwo('흥부', 80, 90);
const three = new JumsuThree('방자', 80, 90, 80);

console.log(one);
console.log(two);
console.log(three);

console.log(one.onTotal(), two.onTotal(), three.onTotal());
console.log(one.onAvg(2), two.onAvg(2), three.onAvg(3));
