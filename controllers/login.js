const Resource = require('../models/shared');
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
  
}

// function login(req, res, next) {
//   const {email, password} = req.body;

//   if (!email || email.trim()) {
//     return next({
//       status: 400,
//       message: 'Email must not be blank'
//     });
//   }

//   if(!password) {
//     return next({
//       status: 400,
//       message: 'Password must not be blank'
//     });
//   }
// }

module.exports = { createUser };
