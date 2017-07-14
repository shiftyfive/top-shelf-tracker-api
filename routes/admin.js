const express = require('express');
const ctrl = require('../controllers/test.js');

const router = express.Router();

router.route('/')
  .get(ctrl.testRoute);

module.exports = router;
