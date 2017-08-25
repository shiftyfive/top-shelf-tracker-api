const Resource = require('../models/shared');
const loginResouce = require('../models/login');
const bcrypt = require('bcrypt-as-promised');
const jwt = require('jsonwebtoken');

function createUser(req, res, next) {
  bcrypt.hash(req.body.password, 12)
  .then((hashedPassword) => {
    const data = { email: req.body.email, password: hashedPassword };
    return Resource.create('users', data);
  })
  .then((users) => {  
    const user = users[0];
    delete user.password;
    const claim = { userId: user.id }
    const expires = { expiresIn: '30 days' }
    const token = jwt.sign(claim, process.env.JWT_SECRET, expires);
    res.send({ token, userId: user.id });
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
  loginResouce.findUser(email, password)
  .then((row) => {
    const claim = { userId: row.id };
    const expires = { expiresIn: '30 days' };
    const token = jwt.sign(claim, process.env.JWT_SECRET, expires);
    return res.send({ token, userId: row.id });
  })
  .catch((err) => {
    next(err);
  });
}

module.exports = { createUser, login };
