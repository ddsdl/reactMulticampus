const events = require('events');

const emitter = new events.EventEmitter();

// listener는 동일한 이름으로 10까지만 등록이 가능하다.
// 생성한 Event 객체별로 최대 수량 등록
// emitter.setMaxListeners(15);

// 이벤트 객체 자체에 수량을 변경. 이벤트 객체는 이 기본값을 따른다
events.EventEmitter.defaultMaxListeners = 15;

for (let i = 0; i < 11; i++) {
  emitter.on('start', () => console.log(`START: ${i}`));
}
emitter.emit('start');
console.log('');

// Event listener가 전역 객체. 따러서 변수 SCope와는 상관없다
{
  const msgEvent = () => console.log('Message Event');
  emitter.on('message', msgEvent);

  emitter.emit('message');

  // scope와 상관없으르모 사용하지 않을거면 삭제해야 한다
  emitter.off('message', msgEvent);
}

emitter.emit('message');
console.log('');

// Event 자체가 Error 라면
// Event에는 콜백 패턴과 같이 error라는 이름으로 이미 정의되어 있다
emitter.on('error', (err) => console.error(err.message));

emitter.emit('error', new Error('전달될 에러 메시지'));