console.log('---------------- this -----------------');
// 객체 내부 메소드 내부의 함수.
var count = 100;

const myObj = {
  count: 0,
  visit: function () {
    // 여기까지는 this가 myObj를 나타낸다 

    // 함수 내부의 함수에서 this를 어떻게 정의할 것인지에 대한 규칙이 만들어지지 않음
    // 함수 내부의 함수에서 this는 항상 global(window)를 나타내도록 확정되어 있다
    function inner(x) {
      this.count = this.count + x;
      console.log(this.count);

      function abc() {
        console.log(this);
      }
      abc();
    }

    inner(2);
  },
};

myObj.visit();
console.log('');

console.log('--------------- 편법 that ---------------');
count = 100;

const yourObj = {
  count: 0,
  visit: function () {
    // 여기까지는 this가 yourObj를 나타낸다 
    const that = this;        // const that = yourObj;

    function inner(x) {
      that.count = that.count + x;
      console.log(that.count);    // 2  => yourObj
      console.log(this.count);    // 100 => window

      function abc() {
        console.log(that);
      }
      abc()
    }

    inner(2);
  },
};

yourObj.visit();
console.log('');


console.log('--------------- call, apply, bind ---------------');
count = 100;

const herObj = {
  count: 0,
  visit: function () {

    function inner(x) {
      this.count = this.count + x;
      console.log(this.count);
    }
    // this를 동적으로 변경해서 사용할 수 있는 메서드 -> call, apply, bind
    // call, apply, bind는 다른 개발자가 작성한 함수 등을 호출할때 this를 변경해서 호출할 필요가 있는 경우 편리

    // this가 포함된 함수명.call(함수가 this로 실행할 객체, 매개변수, ...)
    // inner 함수를 실행할때 herObj가 inner 함수의 this 참조 값으로 변경해서 실행해라
    // 3은 inner 함수에 실질적인 매개변수 x에 대입될 값. 1이상이면 , 로 계속 구분해서 할당
    inner.call(herObj, 3);

    // apply는 call과 동일하다. 다만 매개변수를 배열로 묶어서 전달한다
    inner.apply(herObj, [5]);

    // bind는 this를 지정한 객체로 변경한 새로운 함수를 만들어 리턴해 준다
    const innerBind = inner.bind(herObj);
    // console.log(innerBind);
    innerBind(7);

  },
};

herObj.visit();
console.log('');


console.log('--------------- copy ---------------');
const person = {
  name: 'NolBu',
  display: function () {
    console.log(this.name);
  },
};

const emp = { name: 'HungBu' };
emp.display = person.display;

person.display();   // NolBu
emp.display();      // Hungbu
console.log('');

const your = { name: 'Your' }
person.display.call(your);    // Your
person.display.apply(your);   // Your
console.log('');

console.log('--------------- Arrow Function은 호출한 곳의 상위 {}가 this ---------------');
// arrow 함수는 this가 없다. 
// Arrow 함수 내부에서 this를 사용했을 경우 자신이 속한 객체의 this가 Arrow 함수의 this가 된다.
count = 100;
const heObj = {
  count: 10,
  visit: function () {
    // 여기서 this는 heObj. 따라서 아래의 inner Arrow 함수의 this는 visit 함수의 this인 heObj가 된다
    const inner = (x) => {
      console.log(this);
      this.count = this.count + x;
      console.log(this.count);
    }

    inner(2);
  },
  view: () => {
    console.log(`${this.name} / ${this.count}`);
  }
}
// visit 함수 내부의 inner가 화살표 함수
heObj.visit();

// view() 함수 자체가 Arrow 함수
/* window. */ heObj.view();   // window에 있는 name과 count를 출력한다
console.log(window)

