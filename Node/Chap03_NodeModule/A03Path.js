const path = require('path');

console.log('---------- 구분자 ----------');
console.log(`sep: ${path.sep}`);    // mac => /, window => \
console.log(`delimiter: ${path.delimiter}`); // 환경변수 구분자 win: ;, Max: :
console.log('');

console.log('---------- 파일정보 ----------');
const file = __filename;
// console.log(file);

console.log(__dirname)
console.log(`dirname: ${path.dirname(file)}`);
console.log(`extname: ${path.extname(file)}`);    // 확장자=> .js
console.log(`basename: ${path.basename(file)}`);  // 파일명=> A03Path.js
console.log(`basename: ${path.basename(file, '.js')}`); // 확장자 제거 파일명=> A03Path
console.log(`basename: ${path.basename(file, path.extname(file))}`);
console.log('');

console.log('---------- parse ----------');
const parseFile = path.parse(file);
// console.log(parseFile);
console.log(`Root: ${parseFile.root}, Base: ${parseFile.base}, Ext: ${parseFile.ext}, Name: ${parseFile.name}`);
console.log(parseFile.dir);
console.log('');

console.log('---------- 경로 합치기 ----------');
const tree = path.format({
  root: '/',
  name: 'tree',
  ext: '.jpg',
  dir: __dirname
})
console.log(tree);
console.log('');


// resolve는 항상 파일까지의 경로가 추가된다(__dirname)
console.log(path.relative('public', 'images', 'tree', '.jpg'));
// 지정된 값만 가지고 연결을 해 준다
console.log(path.join('public', 'images', 'tree', '.jpg'));
console.log('');

// 둘 다 전체 경로를 반환
console.log('');

// 전체 경로를 획득할 필요가 있는 경우 resolve가 편하다
console.log('');

// 패스에 /가 넘어오는 경우는 주의
console.log('');
