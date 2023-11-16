// 내가 작성한 모듈. 패스가 항상 상대패스('./경로') 또는 절대패스('/경로')이다
const logFile = require('./log')({ target: 'file' });
logFile.log('Good Evening');

// 절대, 상대로 시작하지 않고 이름만 기술
// 자신이 속한 폴더의 node_modules에서 폴더명 검색. 못 찾으면 상위 폴더의 node_modules
// 없으면 그 상위 형태로 ROOT 까지 참조하고 없으면 에러

// 해당 폴더의 node_modules에 존재
const mime = require('mime-types');
console.log(mime.contentType('text/html'));

// 상위 node_modules 폴더에 존재한다.
const $ = require('jquery');
console.log($)
