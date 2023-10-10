console.log('---------------- 상속 -----------------');

class One {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  info() {
    console.log(`${this.x} / ${this.y}`);
  }
}
// 부모의 constructor과 동일하게 매개변수를 받는 경우 정의 안해도 에러 아님
class OneSub extends One {
  view() {
    console.log(`View => ${this.x} / ${this.y}`);
  }
}

const one = new OneSub('one sub', 10);
console.log(one);
one.info();
one.view();
console.log('');


class Two {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  info() {
    console.log(`${this.x} / ${this.y}`);
  }
}
// constructor의 매개변수의 수가 다르면 constructor를 생략할 수 없다
class TwoSub extends Two {
  constructor(x, y, z) {
    super(x, y)
    this.z = z;
  }

  view() {
    console.log(`view => ${this.x} / ${this.y}`);
  }
}
const two = new TwoSub('two class', 20);
two.info();
two.view();
