console.log('----------------- [481] Conditional Statument -----------------');
const kor = 100;
const eng = 90;
const avg = (kor + eng) / 2;

// 단순 IF
// 조건이 참인 경우만 실행할 구문이 있는 경우
/*
  if (조건) {
    위의 조건이 true인 경우 실행할 구문을 작성.
    ...
  }
*/

if (avg >= 60) {
  console.log('축하합니다...');
}
console.log('');

// IF ~ ELSE
// 조건이 참인 경우와 거짓인 경우 각각 나누어서 실행 할 필요가 있는 경우
/*
  if (조건) {
    위의 조건이 true인 경우 실행할 구문을 작성.
    ...
  } else {
    위의 조건이 false인 경우 실행할 구문을 작성.
    ...
  }
*/
if (avg >= 80) {
  console.log('합격입니다...');
} else {
  console.log('불합격입니다...');
}

// 다중 IF
// 조건을 여러번 체크해야 하는 경우
/*
  if (조건 1) {
    위의 조건 1이 true인 경우 실행할 구문을 작성.
    ...
  } else if (조건 2) {
    위의 조건 1이 false고 조건 2가 true인 경우 실행할 구문을 작성.
    ...
  } else if (조건 3) {
    위의 조건 2가 false고 조건 3가 true인 경우 실행할 구문을 작성.
    ...
  } else {
    위의 조건 1, 2, 3이 모두 false인 경우 실행할 구문을 작성.
    필요에 따라 기술 안 할 수도 있다...
  }
*/

/*
if (avg >= 90) {
  console.log('A 학점');
} else if (avg >= 80) {
  console.log('B 학점');
} else if (avg >= 70) {
  console.log('C 학점');
} else if (avg >= 60) {
  console.log('D 학점');
} else {
  console.log('F 학점');
}
*/

/*
let hakjum;
if (avg >= 90) {
  hakjum = 'A';
} else if (avg >= 80) {
  hakjum = 'B';
} else if (avg >= 70) {
  hakjum = 'C';
} else if (avg >= 60) {
  hakjum = 'D';
} else {
  hakjum = 'F';
}
console.log(`${hakjum} 학점 입니다...`)
*/

let hakjum = 'F';
if (avg >= 90) {
  hakjum = 'A';
} else if (avg >= 80) {
  hakjum = 'B';
} else if (avg >= 70) {
  hakjum = 'C';
} else if (avg >= 60) {
  hakjum = 'D';
}
console.log(`${hakjum} 학점 입니다...`);
console.log('');


console.log('----------------- 482 3의 배수 체크 -----------------');
/*
// 482 page
let value = prompt('숫자를 입력해 주세요');
console.log(`입력하신 숫자는 ${value}입니다`);

if (value % 3 === 0) {
  console.log(`입력하신 숫자는 ${value}는 3의 배수입니다`);
} else {
  console.log(`입력하신 숫자는 ${value}는 3의 배수가 아닙니다`);
}
*/

/*
// 483 page. 3의 배수이면서 5의 배수인가?
let value = prompt('숫자를 입력해 주세요');
console.log(`입력하신 숫자는 ${value}입니다`);

if (value % 3 === 0) {
  console.log(`입력하신 숫자는 ${value}는 3의 배수입니다`);

  if (value % 5 === 0) {
    console.log(`입력하신 숫자는 ${value}는 3의 배수이면서 5의 배수입니다`);
  } else {
    console.log(`입력하신 숫자는 ${value}는 3의 배수이지만 5의 배수는 아닙니다`);
  }

} else {
  console.log(`입력하신 숫자는 ${value}는 3의 배수와 5의 배수가 아닙니다`);
}
*/

/*
let value = prompt('숫자를 입력해 주세요');
console.log(`value: ${value}, ${typeof value}`);

if (value === null) {
  console.log('입력이 취소되었습니다');
} else {
  if (value === '') {
    console.log('값을 입력하지 않았습니다');
  } else {
    const num = Number(value);      // 숫자로 변경
    // console.log(`num: ${num}, ${typeof num}`);
    if (num % 3 === 0 && num % 5 === 0) {
      console.log(`입력하신 숫자는 ${value}는 3의 배수이면서 5의 배수입니다`);
    } else {
      console.log(`입력하신 숫자는 ${value}는 3의 배수와 5의 배수가 아닙니다`);
    }
  }
}
*/

const value = prompt('숫자를 입력해 주세요');
console.log(`value: ${value}, ${typeof value}`);

if (value !== null) {   // 확인 버튼을 클릭했다면
  (value % 3 === 0) ? console.log('3의 배수') : console.log('3의 배수 아님');
}
console.log('');


console.log('----------------- END -----------------');
