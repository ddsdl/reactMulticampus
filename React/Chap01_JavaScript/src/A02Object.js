// 다음 조건을 만족하는 user 객체를 선언하시오
// "name" 속성에 "홍길동"
// "age" 속성에 20
// "user-address" 속성에 "Seoul"
// "user-tel" 속성에 "010-1234-5678"
// "0" 속성에 "ONE",
// "1" 속성에 "TWO",
const user = {
  name: '홍길동',
  age: 20,
  'user-address': 'Seoul',
  'user-tel': '010-7894-5612',
  0: 'ONE',
  1: 'TWO'
}

// JavaScript의 변수 명명 규칙을 따르는 키만 . 을 이용해서 참조가능
console.log(user.name, user.age);

// JavaScript의 변수 명명 규칙을 따르지 않는 경우는 객체명[키] 형태로 사용한다
console.log(user['user-address'], user['user-tel']);

// 숫자도 동일하게 []로 참조
console.log(user[0], user['1']);
console.log('')

// 변수에 key 값이 담긴 경우 변수명으로 값을 참조하는 경우는 무조건 []로 참조한다
// 변수 userAddress를 이용하여 user 객체에서 user-address의 Seoul 값을 출력하도록 완성
const userAddress = 'user-address';
console.log(user[userAddress])

// user 객체에서 "ONE" 값을 출력
console.log(user[0], user['1']);
