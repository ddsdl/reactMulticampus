console.log('---------------------- try ~ catch ----------------------');
// 1. 에러(예외)가 발생할 수 있는 구문을 try { } 내부에 기술한다.
// try { } 구문을 먼저 실행. 실행 중 에러(예외)가 발생하면 즉각 처리를 catch { } 블럭으로 이동하여 실행(에러 발생 안함)
// 즉 처리가 자연스럽게 catch 블럭으로 이동
try {
  console.log('Hello World');
  X();
  console.log('Good Bye~~~');
} catch (err) {
  // err는 try 구문에서 발생한 에러(도스창에 출력되는 문자열) 정보를 가지고 있는 객체
  // console.log(err);
  console.log('잠시 점검중입니다...')
}
console.log('');


console.log('---------------------- 경로 ----------------------');
console.log('');


console.log('---------------------- console ----------------------');
console.log('');


console.log('---------------------- color console ----------------------');
console.log('');


console.log('---------------------- END ----------------------');
