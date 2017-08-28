const express = require('express');
const ctrl = require('../controllers/Auth');

const router = express.Router();

router.route('/')
  .get(ctrl.testRoute);

module.exports = router;
