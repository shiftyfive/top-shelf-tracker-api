const Resource = require('../models/shared');
const loginResouce = require('../models/login');
const bcrypt = require('bcrypt-as-promised');


function createUser(req, res, next) {
  bcrypt.hash(req.body.password, 12)
  .then((hashedPassword) => {
    const data = { email: req.body.email, password: hashedPassword };
    return Resource.create('users', data);
  })
  .then((users) => {
    const user = users[0];
    delete user.password;
    res.send(user);
  })
  .catch((err) => {
    next(err);
  });
}

function login(req, res, next) {
  const { email, password } = req.body;
  if (!email || !email.trim() || !password) {
    return next({
      status: 400,
      message: 'Email and or Password must not be blank',
    });
  }
  return loginResouce.findUser(email, password)
  .then((id) => {
    req.session.userId = id;
    res.send({ id });
  })
  .catch((err) => {
    next(err);
  });
}

module.exports = { createUser, login };
