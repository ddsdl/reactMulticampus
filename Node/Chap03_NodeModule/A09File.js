const fs = require('fs');
// const fsp = require('fs/promises');
// import fsp from 'fs/promises'

// 파일 읽어오기 - 비동기
// node module의 callback 함수는 기본적으로 error 객체를 먼저 받는다
/*
fs.readFile('./A01NodeREPL.js', (err, data) => {
  if (err) {      // err 객체 전달되어 들어옴, 이때 data는 null
    console.log(err);
  } else {        // err 객체는 NULL, data => 앞에 지정한 A01NodeREPL.js buffer
    console.log(data.toString());
  }
});

// promise 방식
fsp.readFile('./A01NodeREPL.js')
  .then((data) => {
    console.log(data.toString())
  })
  .catch((err) => {
    console.log(err)
  });
*/

/*
// 쓰기
fs.writeFile('./A09WriteFile.txt', '이 글이 입력됩니다...' + require('os').EOL, { flag: 'a' }, (err) => {
  if (err) console.error(err.message);
});

fsp.writeFile('./A09WriteFile.txt', '프라미스 방식으로 입력됩니다' + require('os').EOL, { flag: 'a' })
  .catch((err) => console.error(err.message));
*/

/*
// 복사
fs.readFile('./A01NodeREPL.js', (err, data) => {
  if (err) console.log(err);
  else {
    fs.writeFile('./A09WriteFile.txt', data, { flag: 'a' }, (err) => {
      if (err) console.error(err.message);
    });
  }
});

fsp.readFile('./A01NodeREPL.js')
  .then((data) => {
    fsp.writeFile('./A09WriteFile.txt', data, { flag: 'a' })
  })
  .catch((err) => {
    console.log(err)
  });
*/

// 비동기
/*
fs.readFile('./A01NodeREPL.js', (err, data) => {
  if (err) console.log(err);
  else console.log('1=> ', data.toString());
});
fs.readFile('./A01NodeREPL.js', (err, data) => {
  if (err) console.log(err);
  else console.log('2=> ', data.toString());
});
fs.readFile('./A01NodeREPL.js', (err, data) => {
  if (err) console.log(err);
  else console.log('3=> ', data.toString());
});
*/


// 동기 방식으로 파일 읽기
/*
try {
  const data = fs.readFileSync('./A01NodeREPL.js');
  console.log(data.toString());
} catch (err) {
  // console.error(err.message);
  console.log('웹 페이지라면 검검중... 등의 대체화면을 전송...');
  console.log('서버관리자에세 메시지, 이메일등 전송....');
}
*/

try {
  // 값을 다 받을때까지 대기. 값을 다 받으면 그때 처리
  const data1 = fs.readFileSync('./A01NodeREPL.js');
  console.log('1=> ', data1.toString());

  const data2 = fs.readFileSync('./A01NodeREPL.js');
  console.log('2=> ', data2.toString());

  const data3 = fs.readFileSync('./A01NodeREPL.js');
  console.log('3=> ', data3.toString());
} catch (err) {
  console.error(err.message);
}

console.log('------------- END -------------')