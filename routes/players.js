const express = require('express');
const ctrl = require('../controllers/players');
const test = require('../controllers/test')

const router = express.Router();

router.route('/')
  .get(ctrl.all);

router.route('/:teamId')
  .get(ctrl.byTeam);

module.exports = router;
