/*
Event
  Web Server가 접속을 받는 처리는, 1회 요구에 대해 결과가 복수 발생하는 비동기 처리라 할 수 있다.
  여기서 요구란 Web Server의 기동을 의미하며 결과는 기동한 서버에 대한 HTTP Request다.
  Server에서 받은 결과는 request에 관한 것에 한정되지 않고 서버의 기동, 정지, 에러처리 등을 결과로 받을 필요가 있다.

  Node는 http라는 module을 이용하여 Web Server를 실행하며, 이 module은 Observer pattern을 이용한다.
  Node에서는 이 Observer pattern을 EventEmitter를 이용하여 실현한다.

  EventEmitter 자체는 Observer pattern의 Subject(감시 대상)로 기능한다. 
  EventEmitter에 대한 Observer는 일반적으로 Listener라 한다.
  EventEmitter Instance의 on()이라는 메서드에 Event Name과 callback을 전달하여 Listener를 등록한다. (리스너가 받은 인수는 이벤트에 따라 다르다)

  EventEmitter의 주요 instance method는 다음과 같다.
    on(event, Listener)
      지정한 Event(첫번째 인수, 문자열)에 대해 새로운 Listener(두번째 인수, 콜백함수)를 등록한다.
    once(event, Listener)
      on과 마찬가지로 Event에 대한 Listener를 등록하지만, 이 Listener는 Event가 1회 발생되면 자동적으로 삭제된다. 
      따라서 그 2회부터의 이벤트는 실행되지 않는다 (1번만 실행하고자 하는 경우)
    emit(event[, ...args])
      지정한 Event(첫번째 인수, 문자열)을 지정한 인수(두번째 인수, 임의) 형태로 발생한다.
    off(event, Listener)
      지정한 Event(첫번째 인수, 문자열)에 등록된 Listener(두번째 인수, 콜백함수)를 삭제한다.
*/
console.log('--------------- EventEmiiter ----------------');
const events = require('events');

const emitter = new events.EventEmitter();

// 메모리에 등록되어 있는 이벤트 리스너들...
const startEvent = () => {
  console.log('START');
}
const threeEvent = (x) => {
  console.log('THREE 1=> ' + x);
}
const fiveEvent = (x) => {
  console.log('FIVE=> ' + x);
}
const endEvent = () => {
  console.log('END');
  emitter.off('start', startEvent);
  emitter.off('three', threeEvent);
  emitter.off('five', fiveEvent);
  emitter.off('end', endEvent);
}

emitter.on('start', startEvent);
emitter.on('three', threeEvent);
emitter.on('three', threeEvent);
emitter.on('five', fiveEvent);
emitter.on('end', endEvent);

emitter.emit('start');
emitter.emit('three', 3);
emitter.emit('five', 3);
emitter.emit('end');
