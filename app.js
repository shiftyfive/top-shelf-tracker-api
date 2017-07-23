const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const csv = require('fast-csv');
const fs = require('mz/fs');

const index = require('./routes/index');
const users = require('./routes/users');
const leagues = require('./routes/leagues');
const seasons = require('./routes/seasons');
const games = require('./routes/games');
const players = require('./routes/players');
const teams = require('./routes/teams');
const admin = require('./routes/admin');
const login = require('./routes/login');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cookieSession({
  name: 'top-shelf-tracker',
  keys: [process.env.SESSION_SECRET],
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/leagues/:id/games/', games);
app.use('/leagues/:id/teams', teams);
app.use('/leagues/:id/players', players);
app.use('/leagues/:id', seasons);
app.use('/leagues', leagues);
app.use('/users', users);
app.use('/admin', admin);
app.use('/login', login);
app.use('/', index);


// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  console.log(err);
  res.json(err);
});

module.exports = app;
