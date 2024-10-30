const express = require("express");
const app = express();
const path = require ("path");
const createError = require('http-errors');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const logger = require('morgan');


/* necesraio para usar GET y POST */
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

/* necesario para utilizar DELETE y PUT */
app.use(methodOverride('_method'))

app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'ejs'); // O el motor de vistas que estés usando

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')))

app.use(logger('dev'));

/* app.use(express.static("public")) */

const indexRouter = require('./src/routes/index');
const userRouters = require('./src/routes/users')

app.use('/', indexRouter);
app.use('/usuario', userRouters);


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