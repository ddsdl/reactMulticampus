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

// 매개변수의 수가 다르면 constructor를 생략할 수 없다
class Two {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  info() {
    console.log(`${this.x} / ${this.y}`);
  }
}
