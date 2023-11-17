const path = require('path');

console.log('---------- 구분자 ----------');
console.log(`sep: ${path.sep}`);
console.log(`delimiter: `); // 환경변수 구분자 win: ;, Max: :
console.log('');

console.log('---------- 파일정보 ----------');

console.log(`dirname: `);
console.log(`extname: `);
console.log(`basename: `);
console.log(`basename: `);
console.log('');

console.log('---------- parse ----------');

console.log('');

console.log('---------- 경로 합치기 ----------');

// resolve는 항상 파일까지의 경로가 추가된다(__dirname)
console.log('');

// 둘 다 전체 경로를 반환
console.log('');

// 전체 경로를 획득할 필요가 있는 경우 resolve가 편하다
console.log('');

// 패스에 /가 넘어오는 경우는 주의
console.log('');
