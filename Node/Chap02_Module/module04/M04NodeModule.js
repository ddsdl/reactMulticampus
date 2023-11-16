// M04NodeModule.js
const path = require('path');     // Node 내장객체
const fs = require('fs');         // 외부파일 읽기, 쓰기, 폴더 생성 등에 관련된 명령

// node core module은 관련 항목끼리 묶어서 객체로 전달.
// 완벽하게 구현된 상태의 메서드와, 일부만 구현된 메서드 혼합 존재
const pathUtils = {
  // makePath('public', 'images', 'tree', '.jpg');
  makePath(...args) {     // args => ['public', 'images', 'tree', '.jpg']
    let value = '';

    // for(let i = 0; i < args.length; i++) { }
    // 배열명.forEach( (item, index, array) => { })
    // for(const 변수명 in 배열) => 변수에는 Index 값
    // for(const 변수명 of 배열) => 변수에는 배열 요소의 실질적인 값
    for (const str of args) {
      value += path.sep + str;      // path.sep => OS별 구문자 \ 또는 /
    }
    return value;
  },

  // 반만 구현된 상태
  getText(file, callback) {
    fs.readFile(file, (err, data) => {
      if (err) callback(err);
      else callback(data);
      console.log('--- 처리 완료 ---')
    })
  }
}
module.exports = pathUtils;
