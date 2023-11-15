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

// http://www.company.com:3000/product/node.html?name=nolbu&name=BangJa&age=20#TOP

console.log('-------------- searchParams -------------- ');
console.log('');

console.log('-------------- 기존 Node 방식-------------- ');
console.log('');
