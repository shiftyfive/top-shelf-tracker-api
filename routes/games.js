const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/test.js')

router.route('/')
  .get(ctrl.testRoute);

module.exports = router;
