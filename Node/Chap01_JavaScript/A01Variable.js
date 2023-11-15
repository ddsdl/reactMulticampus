// ES5
let nickname = 'NolBu'; // string

// 브라우저 Constole에 표시된다
console.log('nickname: ' + nickname + ', typeof: ' + typeof nickname);

nickname = 300; // number
console.log('nickname: ' + nickname + ', typeof: ' + typeof nickname);

nickname = true; // boolean
console.log('nickname: ' + nickname + ', typeof: ' + typeof nickname);

nickname = undefined;
console.log('nickname: ' + nickname + ', typeof: ' + typeof nickname);

nickname = null; // object => object로 출력되도 기본형으로 취급된다.
console.log('nickname: ' + nickname + ', typeof: ' + typeof nickname);
console.log('');

// 1. let 변수는 선언한 변수를 재 선언할 수 없다
// let nickname = 'NolBu';
// var nickname = 'Nolbu';
// const nickname = 'Nolbu';

// 2. 변수 참조 범위 => scope. Global => { A, { B, { C } } }, { D, { E }}
// C 내부 { } 에서 선언된 변수는 C 영역의 { } 내부에서만 참조 가능. C 지역변수
// B 내부 { } 에서 선언된 변수는 B, C 영역의 { } 내부에서만 참조 가능. B 지역변수
// A 내부 { } 에서 선언된 변수는 A, B, C 영역의 { } 내부에서만 참조 가능. A 지역변수
// Global에서 선언된 변수는 파일 모든 영역에서만 참조 가능. Global 변수
const age = 'Global Age';
const x = 10;
if (x > 0) {
  const age = 100;
  console.log('IF Inner age=> ' + age); // 100
} // 를 만나면 if 구문 { } 내부에 선언된 변수는 삭제된다 (지역 변수)
console.log('IF Inner age=> ' + age);
console.log('');

// 윈도우 영역의 빌드인(이미 만들어져 있는 명령)을 호출하는 경우는 window를 붙이자
const alert = 'Hello World';
console.log('alert: ' + alert + ', typeof: ' + typeof alert);

// window.alert('Good Afternoon');

// ESNext
// 브라우저에서는 Global 영역이 window, Node에서는 global
console.log(globalThis);
// globalThis.alert('Good Afternoon');    // OK
console.log('');

/*
--------- const -------
let와 동일.
*/

// 초기화 후 값 변경 안된다.
const address = 'Seoul';
console.log('address: ' + address + ', typeof: ' + typeof address);

const arr = [10, 20];
arr[0] = 100;
console.log(arr);

// 브라우저에 바로 표시된다.
const app = document.querySelector('#root');
app.innerHTML = `
  <h3>Good Morning</h3>
  <div>Hello ${nickname}, typeof ${typeof nickname}</div>
`;
