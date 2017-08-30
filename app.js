const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const csv = require('fast-csv');
const fs = require('mz/fs');
const jwt = require('jsonwebtoken')
const cors = require('cors')

const index = require('./routes/index');
const seasons = require('./routes/seasons');
const games = require('./routes/games');
const events = require('./routes/games');
const players = require('./routes/players');
const teams = require('./routes/teams');
const login = require('./routes/login');
const registration = require('./routes/registration');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', index);
app.use('/login', login);
app.use('/login/registration', registration)
// app.use((req, res, next) => {
//   jwt.verify(req.headers.authorization, process.env.JWT_SECRET, (err, result) => {
//     req.user = err ? {} : { id: result.userId };
//     if (err) return next(err);
//     next();
//   });
// });
app.use('/api', seasons);
app.use('/api', events);
app.use('/api/:seasonId/teamsheroku create/:ownerId', teams);
app.use('/api/:id/games/', games);
app.use('/api/leagues/:id/players', players);
app.use('/api/leagues/:id', seasons);


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
  res.json(err);
});

module.exports = app;
 