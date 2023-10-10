console.log('---------------- 상속 -----------------');

class Jumsu {
  // 생성자 메서드. 반환문을 갖지 않는다.
  constructor(name, kor, eng) {
    this.name = name;
    this.kor = kor;
    this.eng = eng;
  }

  onTotal() {
    return this.kor + this.eng;
  }
  onAvg() {
    return this.onTotal() / 2;
  }
  display() {
    console.log(`${this.name} / ${this.onTotal()} / ${this.onAvg()}`);
  }
}

// 부모 클래스는 딱 1개만 지정 가능 - 단일 상속
// class의 상속 => 기존의 정의된 클래스의 기능을 확장하는 개념(기존 클래스의 자원 재 이용)
// Jumsu가 부모 클래스, JumsuTwo가 자식 클래스가 된다
class JumsuThree extends Jumsu {
  constructor(name, kor, eng, math) {
    // 어떤 명령보다 부모의 자료 구조를 만드는 super 메서드가 제일 먼저 호출되야 한다
    super(name, kor, eng);
    this.math = math;
  }

  // 부모의 메서드를 오버라이드(재정의)
  onTotal() {
    return this.kor + this.eng + this.math;
  }
  onAvg() {
    return this.onTotal() / 3;
  }

  getMath() {
    return this.math;
  }
  getName() {
    return this.name;
  }
  getSuperTotal() {
    // 부모가 가지고 있는 메서드 호출.
    const total = super.onTotal();
    return total;
  }
}

const nolbu = new Jumsu('놀부', 100, 90);
const hungbu = new JumsuThree('흥부', 90, 80, 90);

console.log(nolbu);
console.log(hungbu);

nolbu.display();
hungbu.display();
console.log(hungbu.getName());
console.log(hungbu.getSuperTotal());