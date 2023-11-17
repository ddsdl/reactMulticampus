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
console.log('')