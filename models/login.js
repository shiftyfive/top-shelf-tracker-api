const db = require('../db/connection.js');
const bcrypt = require('bcrypt-as-promised');

class Login {
  static findUser(email, password) {
    return db('users').where('email', email)
    .then((row) => {
      if (!row) {
        throw {
          status: 400,
          message: 'Bad Email or Password',
        };
      }
      return bcrypt.compare(password, row[0].password)
      .then(() => {
        console.log(row[0])
        return row[0].id;
      });
    })
    .catch(bcrypt.MISMATCH_ERROR, () => {
      throw {
      status: 400,
      message: 'Bad Email or Password.',
    };
    });
  }
}

module.exports = Login;
