var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var compression = require('compression')
var session = require('express-session');
var db_mysql = require('./db');
var MySQLStore = require('express-mysql-session')(session);

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var vrsysRouter = require('./routes/vrsys');
var propRouter = require('./routes/prop');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var sessionStore = new MySQLStore({}/* session store options */, db_mysql);
app.use(session({
  store: sessionStore,
  secret:'whtmdduswoodz',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 600000 //10min
  }
}))


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/vrsys',vrsysRouter);
app.use('/prop',propRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
