const path = require('path');
const fs = require('fs');

// npm i ejs
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

const logFile = fs.createWriteStream(path.join(__dirname, 'chat.log'), { flags: 'a' });
app.use(static(path.join(__dirname, 'public'), { index: ['index.html', 'index.htm'] }));
app.use(logger('combined', { stream: logFile }))

app.use(bodyParser.json());                           // JSON 파일 형태로 넘어는 값을 객체로 변환해 준다
// extended: false => Node 내장 모듈 queryString을 사용
// extended: false => 외부 모듈 qs을 사용(필요에 따라 설치)
app.use(bodyParser.urlencoded({ extended: false }));  // POST로 넘어는 값을 객체로 변환해 준다

// session
// req.session
app.use(session({
  cookie: { maxAge: 1000 * 60 * 60 * 2 },   // 2시간. 세션이 유지되는 시간
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
  const errorFile = path.join(__dirname, 'views', 'error.ejs');

  ejs.renderFile(errorFile, {
    title: 'Error Page',
    message: error.message,
    status: error.status,
    stack: error.stack,
  }, (err, data) => {
    if (err) {
      res.writeHead(404, { 'content-type': 'text/html;charset=UTF-8' });
      res.end(`<h1>${req.url} ERROR 파일을 찾을 수 없습니다.</h1>`);
    } else {
      res.writeHead(404, { 'content-type': 'text/html;charset=UTF-8' });
      res.end(data);
    }
  })
});

module.exports = app;
