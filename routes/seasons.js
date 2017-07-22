const express = require('express');
const ctrl = require('../controllers/seasons');

const router = express.Router();

router.route('/')
  .get(ctrl.all);

module.exports = router;
