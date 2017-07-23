const express = require('express');
const ctrl = require('../controllers/login.js');

const router = express.Router();

router.route('/')
  .post(ctrl.login);

module.exports = router;
