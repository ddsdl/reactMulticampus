const path = require('path');
const connect = require('connect');

const static = require('./middleware/static');
const logger = require('./middleware/logger');

const app = connect();
// 기술한 순서대로 실행해 준다
// 기술한 함수에 묵시적으로 request와 response, next() 참조를 매개변수로 전달해 준다
// 호출하는 함수에 next() 함수를 호출해야 다음 use 로 넘어가 실행된다
app.use(static(path.join(__dirname, 'public')));
app.use(logger());

module.exports = app;
