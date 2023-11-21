const path = require('path');
const fs = require('fs');
const connect = require('connect');

const static = require('./middleware/static');
const logger = require('./middleware/logger');

const app = connect();

app.use((req, res, next) => {
  console.log('1. 항상 실행된다...');
  next();
});
const two = (req, res, next) => {
  console.log('2. 항상 실행된다...');
  next();
}
app.use(two);

// 기술한 순서대로 실행해 준다
// 기술한 함수에 묵시적으로 request와 response, next() 참조를 매개변수로 전달해 준다
// 호출하는 함수에 next() 함수를 호출해야 다음 use 로 넘어가 실행된다
app.use(static(path.join(__dirname, 'public')));
app.use(logger({ target: 'file', dirName: path.join(__dirname) }));

// 동적 파일 찾는 모듈

// 흐름의 종점을 기술. 여기까지 왔다는 것은 해당 요청 파일을 정적 모듈, 동적 모듈 모두 못 찾음
app.use((req, res, next) => {
  // res.writeHead(404, { 'content-type': 'text/html;charset=UTF-8' });
  // res.end(`<h1>${req.url} 파일을 찾을 수 없습니다.</h1>`);
  const error = new Error(`${req.url} 파일을 찾을 수 없습니다`);
  error.status = 404;
  next(error)
});


// 항상 마지막에 에러 처리를 위한 함수를 하나 기술한다
// next(Error 객체) 형태로 호출하면 순서를 무시하고 바로 이 use로 이동한다(첫번째 파라메터가 error인 use)
app.use((error, req, res, next) => {
  console.log('----------- END -----------');
  const errorFile = path.join(__dirname, 'public', 'error.html');
  fs.readFile(errorFile, (err, data) => {
    if (err) {
      res.writeHead(404, { 'content-type': 'text/html;charset=UTF-8' });
      res.end(`<h1>${req.url} ERROR 파일을 찾을 수 없습니다.</h1>`);
    } else {
      res.writeHead(404, { 'content-type': 'text/html;charset=UTF-8' });
      data = data.toString()
        // method chain 방식
        .replace('<%=message%>', error.message)
        .replace('<%=status%>', error.status);
      data = data.replace('<%=stack%>', error.stack);
      res.end(data);
    }
  })

})
module.exports = app;
