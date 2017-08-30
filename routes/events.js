const express = require('express');
const test = require('../controllers/test')

const router = express.Router();

router.route('/events')
  .get(test.testRoute);

module.exports = router;
