/*
URL의 각 부분

  프로토콜            호스트              포트            경로            쿼리스트링                해시
  http://           localhost         :3000         /about          ?name=NolBu           #TOP
  http://           daum.net                        /search         ?q=node&id=3
  https://          google.com                                                            #q=express

  일반적으로 포트는 1023보다 큰 포트 번호를 이용. 0번부터 1023번까지는 일반적인 서비스 용도로 예약되어 있음.
  해시는 서버로 전송되지 않으며 브라우저에서만 사용. 문서의 특정 부분으로 이동할 목적으로 사용

요청 헤더
  URL 이외에 받을 페이지의 언어, 사용자 에이전트(브라우저, 운영체제, 하드웨어) 등의 정보를 요청 헤더에 담아 전달.
응답 헤더
  일반적으로 메타 데이터와 서버 정보 등을 담아 보낸다. 브라우저는 URL 경로와 상관없이 컨첸츠 타입 헤더의 정보를 더 우선시 한다.
  브라우저는 컨텐츠를 렌더링할때 Content-Type 정보를 사용해 렌더링 방법을 결정
*/
const url = require('url');

const myURL = 'http://www.company.com:3000/product/1001/node.html?name=nolbu&name=BangJa&age=20#TOP';

console.log('-------------- searchParams -------------- ');
// WHATWG
const one = new url.URL(myURL);
// console.log(one);
console.log(`pathname: ${one.pathname}`);
console.log(`search: ${one.search}`);
console.log(`hash: ${one.hash}`);               // server에서 사용하지 않는 값이다 (브라우저에서 사용)
console.log('');

console.log(`searchParams: ${one.searchParams}`);
console.log(one.searchParams.getAll('name'));       // ['nolbu', 'hungbu']
console.log(one.searchParams.getAll('name')[0]);    // 'nolbu'
console.log(one.searchParams.get('name'));          // 'nolbu' => 첫번째 요소만 항상 출력

// 추가
one.searchParams.append('name', '향단');
console.log(one.searchParams.getAll('name'));       // ['nolbu', 'hungbu', '향단']

// 변경
one.searchParams.set('name', '방자');               // set('name', ['방자', '향단']);    
console.log(one.searchParams.getAll('name'));      // ['방자']

// 삭제
one.searchParams.delete('name');
console.log(one.searchParams.getAll('name'));      // []
console.log('')

console.log('-------------- 기존 Node 방식-------------- ');
const two = url.parse(myURL, true)
// console.log(two);
console.log(`pathname: ${two.pathname}`);
console.log(`search: ${two.search}`);
console.log(`hash: ${two.hash}`);               // server에서 사용하지 않는 값이다 (브라우저에서 사용)
console.log('');

// console.log(two.query);
console.log(two.query.name, typeof two.query.name);
console.log(two.query.name instanceof Array, two.query.name.constructor); // 요소의 값이 배열

// 추가
two.query.name.push('향단');
console.log(two.query.name);

// 삭제
two.query.name.pop();     // shift(), splice(2, 1)
console.log(two.query.name, two.query.age);

// 변경
two.query.name[0] = 'ABC';
console.log(two.query.name);

console.log('');
