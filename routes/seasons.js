const express = require('express');
const ctrl = require('../controllers/seasons');

const router = express.Router();

router.route('/')
  .get(ctrl.all);

router.route('/:id')
  .get(ctrl.single);

module.exports = router;
