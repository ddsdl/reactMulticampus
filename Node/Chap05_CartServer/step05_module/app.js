const path = require('path');
const fs = require('fs');

// npm i serve-static morgan body-parser
const static = require('serve-static');     // 정적 서버 모듈
const logger = require('morgan');           // log 기술 모듈
const bodyParser = require('body-parser');  // form에서 post로 전달되는 값을 parsing 해 주는 모듈
const connect = require('connect');

// const logger = require('./middleware/logger');

// 라우터 추가
const chatRouter = require('./router/chat');

const app = connect();

const logFile = fs.createWriteStream(path.join(__dirname, 'chat.log'), { flags: 'a' });

app.use(bodyParser.json());                           // JSON 파일 형태로 넘어는 값을 객체로 변환해 준다
// extended: false => Node 내장 모듈 queryString을 사용
// extended: false => 외부 모듈 qs을 사용(필요에 따라 설치)
app.use(bodyParser.urlencoded({ extended: false }));  // POST로 넘어는 값을 객체로 변환해 준다

app.use(static(path.join(__dirname, 'public'), { index: ['index.html', 'index.htm'] }));
app.use(logger('combined', { stream: logFile }))

// 동적 파일 추가
app.use(chatRouter);


app.use((req, res, next) => {
  const error = new Error(`${req.url} 파일을 찾을 수 없습니다`);
  error.status = 404;
  next(error)
});

app.use((error, req, res, next) => {
  console.log('----------- END -----------');
  const errorFile = path.join(__dirname, 'views', 'error.html');
  fs.readFile(errorFile, (err, data) => {
    if (err) {
      res.writeHead(404, { 'content-type': 'text/html;charset=UTF-8' });
      res.end(`<h1>${req.url} ERROR 파일을 찾을 수 없습니다.</h1>`);
    } else {
      res.writeHead(404, { 'content-type': 'text/html;charset=UTF-8' });
      data = data.toString()
        .replace('<%=message%>', error.message)
        .replace('<%=status%>', error.status);
      data = data.replace('<%=stack%>', error.stack);
      res.end(data);
    }
  })

})
module.exports = app;
