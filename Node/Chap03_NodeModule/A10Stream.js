const fs = require('fs');

/*
// 읽기 스트림 - Bufer와 Event의 조합
// buffer(메모리 공간의 일정 크기의 저장 공간)를 이용한다
const readStream = fs.createReadStream('./A01NodeREPL.js');
readStream.on('open', () => console.log('파일 오픈'));
readStream.on('data', (data) => console.log(data.toString()));
readStream.on('error', (err) => console.log(err.message));
readStream.on('end', () => console.log('FIN 전송'));
readStream.on('close', () => console.log('파일 닫침'));
*/

/*
// write stream
const writeStream = fs.createWriteStream('A10Stream.txt', { flags: 'a' });
writeStream.write('이 글이 입력됩니다' + require('os').EOL);
writeStream.write(`backtic을 이용한 텍스트 입력
개행도 자유롭다.${require('os').EOL}`);

writeStream.on('error', (err) => console.error(err.message));
writeStream.on('open', () => console.log('OPEN'));
writeStream.on('finish', () => console.log('FINISH'));
writeStream.on('close', () => console.log('CLOSE'));

// write stream은 마지막에 쓰기 완료를 반드시 기술해 주어야 한다
// 웹 서버라면 클라이언트에 모든 데이트를 보냈다는 신호를 전달 => 브라우저 받기를 닫음
writeStream.end();
*/

const readStream = fs.createReadStream('./A01NodeREPL.js');
const writeStream = fs.createWriteStream('A10Stream.txt', { flags: 'a' });

/*
readStream.on('data', (data) => {
  writeStream.write(data);
});

readStream.on('end', () => writeStream.end());
readStream.on('error', (err) => {
  console.log(err.message);
  writeStream.end();
});
writeStream.on('error', (err) => {
  console.error(err.message);
  writeStream.end();
});
*/

// pipe는 내부적으로 ERROR 처리와 END 처리가 모두 구현되어 있다 (별도의 처리 필요 없음)
readStream.pipe(writeStream);
readStream.pipe(process.stdout);  // 도스 창

// 변환스트림
const crypto = require('crypto');
readStream
  .pipe(crypto.createHash('sha512'))    // crypto 객체로 진입, 다시 pipe로 out
  .pipe(fs.createWriteStream('crypt.txt', { flags: 'w' })) // createWriteStream으로 진입
  .on('finish', () => console.log('암호화 완료'));
