// ES6

const name = 'NolBu';

const obj = {
  name: 'HungBu',
  age: 25,
  child: ['one', 'two'],
  info: {
    tel: '010-1234-5678',
    add: 'Seoul'
  },
  toString: function () {
    console.log(this.name + '님의 나이는 ' + this.age + '세 입니다');
  }
}

obj.toString();
