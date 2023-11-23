const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const nocache = require('nocache');
require('dotenv').config();

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const empRouter = require('./routes/emp');
const empJSONRouter = require('./routes/empJSON');

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
  cookie: { maxAge: null },
  resave: true,
  rolling: false,
  saveUninitialized: false,
  secret: process.env.SESSION_KEY,
}));
app.use(nocache());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/emp', empRouter);
app.use('/empJSON', empJSONRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.locals.title = '에러 페이지';

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
