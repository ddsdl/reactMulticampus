const express = require('express');
const path = require('path');
const fs = require('fs');
const morgan = require('morgan');

// router
const product = require('./router/product');

const app = express();

// express 기본 값 세팅
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));        // ejs가 참조할 동적 파일 위치


// 정적 파일을 직접 작성도 가능
/*
app.use((req, res) => {
  const dom = `<html>
    <head><title>항상 이 파일이 반환됩니다</title></head>
    <body>
      <h1>항상 이 파일이 반환됩니다</h1>
    </body>
  </html>
  `;
  res.send(dom);
})
*/

// 정적 파일 처리
// 첫 파일의 index.html 찾아서 반환
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));

// POST 요청 처리
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// 동적 파일
app.get('/about', (req, res, next) => {
  const dom = `<html>
    <head><title>About</title></head>
    <body>
      <h1>About 패스로 요청이 오면 파일이 반환됩니다</h1>
    </body>
  </html>
  `;
  res.send(dom);
});

app.get('/company', (req, res, next) => {
  const fileName = path.join(__dirname, 'public', 'company.html');
  fs.readFile(fileName, (err, data) => {
    if (err) {
      err.status = 404;
      next(err);
    } else {
      res.send(data.toString());
    }
  })
});

// 앞의 패스 설정에 따라 참조 주소줄이 변경된다..
// app.use('/', product);    // 위에처럼 이 바깥에 기술한 것과 동일한 효과
app.use('/prod', product);


app.use((req, res, next) => {
  const error = new Error(`${req.url} 파일을 찾을 수 없습니다`);
  error.status = 404;
  next(error)
});

// ejs로 변경
app.use((error, req, res, next) => {
  console.log('----------- END -----------');

  // express에 이미 locals라는 이름으로 정의되어 있음
  res.locals.title = 'Error Page';
  res.locals.message = error.message;
  res.locals.status = error.status;
  res.locals.stack = error.stack;

  // express에 이미 render라는 이름으로 정의되어 있음
  res.render('error');
});

module.exports = app;
