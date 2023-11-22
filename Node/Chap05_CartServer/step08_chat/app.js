const path = require('path');
const fs = require('fs');

// npm i socket.io
// www.js 파일에서 socket 서버를 먼저 기동해야 한다...
const static = require('serve-static');     // 정적 서버 모듈
const logger = require('morgan');           // log 기술 모듈
const bodyParser = require('body-parser');  // form에서 post로 전달되는 값을 parsing 해 주는 모듈
const session = require('express-session');
const nocache = require('nocache');
const ejs = require('ejs');

const connect = require('connect');

// 라우터 추가
const chatRouter = require('./router/chat');

const app = connect();

app.use((req, res, next) => {
  const views = path.join(__dirname, 'views');

  // 사용자 정의 속성을 추가
  res.locals = {};

  // 사용자 정의 메서드
  res.render = (file, params) => {
    const fileName = path.join(views, file + '.ejs');
    const paramData = params || res.locals;

    ejs.renderFile(fileName, paramData, (error, data) => {
      if (error) {
        error.status = 404;
        next(error);
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
        res.end(data);
      }
    })
  }
  next();
})

const logFile = fs.createWriteStream(path.join(__dirname, 'chat.log'), { flags: 'a' });
app.use(static(path.join(__dirname, 'public'), { index: ['index.html', 'index.htm'] }));
app.use(logger('combined', { stream: logFile }))

app.use(bodyParser.json());                           // JSON 파일 형태로 넘어는 값을 객체로 변환해 준다
app.use(bodyParser.urlencoded({ extended: false }));  // POST로 넘어는 값을 객체로 변환해 준다


app.use(session({
  cookie: { maxAge: 1000 * 60 * 60 * 35200 },   // 2시간. 세션이 유지되는 시간
  secret: 'someText',
  rolling: true,                            // 페이지 이동시에 시간을 갱신 할 것인가,
  resave: false,                            // 페이지 이동시에 session 값을 갱신 할 것인가?
  saveUninitialized: false,                 // 세션에 저장할 내역이 없어서 세션 작성 여부
}));
app.use(nocache());

// 동적 파일 추가
app.use(chatRouter);


app.use((req, res, next) => {
  const error = new Error(`${req.url} 파일을 찾을 수 없습니다`);
  error.status = 404;
  next(error)
});

// ejs로 변경
app.use((error, req, res, next) => {
  console.log('----------- END -----------');

  res.locals.title = 'Error Page';
  res.locals.message = error.message;
  res.locals.status = error.status;
  res.locals.stack = error.stack;

  res.render('error');
});

module.exports = app;
