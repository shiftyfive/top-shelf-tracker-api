const express = require('express');
const ctrl = require('../controllers/leagues');

const router = express.Router();

router.route('/')
  .get(ctrl.all);

module.exports = router;
