console.log('---------------- [263] Arguments -----------------');
// 이전 ES5 까지
function onAdd() {
  // console.log(arguments);   // 전달되는 매개변수를 관리하는 유사 배열 객체
  // console.log(arguments[0], arguments[1], arguments[2], arguments[3]);

  // let total = 0;
  // total = total + arguments[0] + arguments[1] + arguments[2] + arguments[3];

  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    // guard
    if (typeof arguments[i] !== 'number') {
      continue;       // 반복문의 처음으로 이동
    } else {
      total = total + arguments[i];
    }
  }
  console.log(total)
}
console.dir(onAdd);

onAdd();
onAdd(1);
onAdd(1, 2);
onAdd(1, 2, 3);
onAdd(1, 2, 'abc', 3);
console.log('');

// ES2015 부터 매개변수에 기본값 할당이 가능해 졌다
function onPlus(x = '합계: ') {
  // arguments는 매개변수의 선언과 상관없이 모든 매개변수를 관리한다
  // console.log(arguments);

  // if (!x) x = '합계: ';
  // x = (x) ? x : '합계: ';    // 3항 연산자

  // || => x의 값이 null, undefined, 0, -0, 0n, NaN, false, ''를 모두 체크
  // x = x || '합계: ';

  // ?? => x의 값이 null, undefined 만 체크
  // x = x ?? '합계: ';            // ES2020

  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] !== 'number') continue;
    else total = total + arguments[i];
  }
  console.log(`${x} ${total}`)
};
onPlus();
onPlus('합계: ', 1);
onPlus('합계: ', 1, 2);
onPlus('합계: ', 1, 2, 3);
onPlus('합계: ', 1, 2, 'abc', 3);
console.log('');


// ES2015 rest argument. 순수 배열이다. 따라서 배열이 가진 기능 모두 사용 가능
function onSum(x = '합계: ', ...args) {
  // 첫번째 값은 x 변수가 받아 처리하고 나머지 매개변수만 args가 처리한다 (순수 배열)
  // arguments는 모든 매개변수를 일괄 관리 (유사배열)
  // console.log(args);

  let total = 0;
  // for (let i = 0; i < args.length; i++) {
  //   if (typeof args[i] !== 'number') continue;
  //   else total = total + args[i];
  // }

  // console.log(args)
  // [1, 2, 3]
  args.forEach(function (item) {
    if (typeof item === 'number') total = total + item;
  });

  console.log(`${x} ${total}`)
};
onSum();
onSum('합계: ', 1);
onSum('합계: ', 1, 2);
onSum('합계: ', 1, 2, 3);
onSum('합계: ', 1, 2, 'abc', 3);
console.log('');
