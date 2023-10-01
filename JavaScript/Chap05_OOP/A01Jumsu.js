console.log('---------------- [682] OOP -----------------');
/*
    this는 객체 자신의 프로퍼티나 메서드를 참조하기 위한 자기 참조 변수(self-referencing variable)이다.
    즉 this 바인딩은 호출 방식에 따라 동적으로 결정된다.
    일반 함수로서 호출 => 전역객체
    메서드로 호출 => 메서드를 호출한 객체 마침표 앞의 객체
    생성자 함수로 호출 => 생성자 함수가 생성할 인스턴스
*/
const person = {
  name: 'NolBu',
  kor: 100,
  eng: 80,

  onTotal: function () {
    return this.kor + this.eng;
  },
  onAvg: function () {
    return this.onTotal() / 2;
  },
  display: function () {
    // console.log(this);               // 객체 자체가 this
    console.log(`${this.name}님의 총점은 ${this.onTotal()}이고 평균은 ${this.onAvg()}입니다.`);
  },
};
console.log(person);
person.display();
console.log('');

console.log('---------------- 생성자 함수 -----------------');
