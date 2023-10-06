console.log('---------------- property shadowing -----------------');

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.display = function () {
  console.log(`prototype=> ${this.name} / ${this.age}`);
};

const nolbu = new Person('NolBu', 30);
const bangja = new Person('방자', 30);

nolbu.display();

console.log(nolbu);
console.log(bangja);

// bangja 객체에 동적으로 display 메서드를 하나 추가.
// 상위 Person의 prototype이 가지고 있는 메서드와 동일이름으로 재정의
// 참조 우선 순위에서 bangja에 있는 display가 우선한다 
//  -> Person의 prototype이 가지고 있는 display를 재 정의한 효과가 발생된다. 메서드의 오버라이드라 한다
bangja.display = function () {
  console.log(`bangja => ${this.name} / ${this.age}`);
}
bangja.display();

delete bangja.display;      // 속성 삭제

bangja.display();           // Person의 display 참조