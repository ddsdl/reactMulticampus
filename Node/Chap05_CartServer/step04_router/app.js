const path = require('path');
const fs = require('fs');
const connect = require('connect');

const static = require('./middleware/static');
const logger = require('./middleware/logger');

// 라우터 추가
const chatRouter = require('./router/chat');

const app = connect();

app.use(static(path.join(__dirname, 'public')));
app.use(logger({ target: 'file', dirName: path.join(__dirname) }));

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
