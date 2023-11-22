// npm i express-session detenv nocache socket.io multer
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const nocache = require('nocache');
require('dotenv').config();   // 기본값은 같은 폴더의 .env를 호출한다.

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const chatRouter = require('./routes/chat');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  cookie: { maxAge: null, path: '/', httpOnly: true },
  secret: process.env.SESSION_KEY,
  rolling: true,
  resave: false,
  saveUninitialized: false,
}));
app.use(nocache());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/chat', chatRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.locals.stack = err.stack;
  res.locals.title = '에러 페이지'

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
