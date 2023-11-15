// ES6

const name = 'NolBu';
console.log('name: ' + name + ', typeof: ' + typeof name);
// ${변수명}을 React에서는 {변수명(식은 모두 올수 있다)}
console.log(`name: ${name}, typeof: ${typeof name}`);
console.log('');

const obj = {
  name: 'HungBu',
  age: 25,
  child: ['one', 'two'],
  info: {
    tel: '010-1234-5678',
    add: 'Seoul',
  },
  // method라 한다 => 객체 내부에 선언된 함수
  toString: function () {
    console.log(this.name + '님의 나이는 ' + this.age + '세 입니다\n이 글자는 다음 라인에 표시');
  },
  view() {
    console.log(`${this.name}님의 나이는 ${this.age}세 입니다.
${this.name}님은 ${this.info.add}에 거주합니다`);
  },
};

obj.toString();
obj.view();
