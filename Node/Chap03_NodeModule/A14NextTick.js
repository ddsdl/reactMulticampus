const events = require('events');

const _emitFunc = (emitter, value) => {
  let count = 1;

  emitter.emit('start');

  while (count <= value) {

    if (count % 15 === 0) {
      emitter.emit('all', count);
    } else if (count % 3 === 0) {
      emitter.emit('three', count);
    } else if (count % 5 === 0) {
      emitter.emit('five', count);
    }
    count++;
  }
  emitter.emit('end')
}

const createEventEmitter = (value) => {
  const emitter = new events.EventEmitter();

  process.nextTick(() => _emitFunc(emitter, value));
  return emitter;
}

const startListener = () => console.log('START');
const allListener = (cnt) => console.log(`ALL: ${cnt}`);
const threeListener = (cnt) => console.log(`THREE: ${cnt}`);
const fiveListener = (cnt) => console.log(`FIVE: ${cnt}`);
const endListener = function () {
  console.log('END', this);
  this.off('start', startListener);
  this.off('all', allListener);
  this.off('three', threeListener);
  this.off('five', fiveListener);
  this.off('end', endListener);
};

const emitter = createEventEmitter(32);
console.log('---------- START ----------');
emitter.on('start', startListener);
emitter.on('all', allListener);
emitter.on('three', threeListener);
emitter.on('five', fiveListener);
emitter.on('end', endListener);
console.log('---------- END ----------');