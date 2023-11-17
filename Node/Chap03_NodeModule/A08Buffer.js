/*
Node.js 공식문서에서는 Buffer를 다음과 같이 정의합니다.

바이너리 데이터들의 스트림을 읽거나, 조작하는 매커니즘.
이 Buffer클래스는 Node.js의 일부로 도입되어 TCP 스트림이나 파일시스템같은 작업에서의 octet 스트림과의 상호작용을 가능하기 위해 만들어졌습니다.
* octet Stream은 일반적으로 8bit 형식으로 된 데이터를 의미합니다.
*/
// 생성
const buffer = Buffer.from('Hello World');
console.log(buffer);
console.log(buffer.toString());   // buffer date를 문자로
console.log(buffer.length);
console.log('');

// Buffer 결합
const arr = [Buffer.from('http://'), Buffer.from('company.com')];
const company = Buffer.concat(arr);
console.log(company);
console.log(company.toString());
console.log('');

// 빈 Buffer 생성
const alloc = Buffer.alloc(11);
console.log(alloc); // 00, 00...

const size = alloc.write('Hello World Good Morning');
console.log(alloc.toString());
console.log(size);    // 11
console.log('');

// 변경
alloc[0] = 0x41;      // A
console.log(alloc.toString());

