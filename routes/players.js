const express = require('express');
const ctrl = require('../controllers/players');

const router = express.Router();

router.route('/')
  .get(ctrl.all);

// router.route('/:id')
//   .get(ctrl.testRoute);

module.exports = router;
