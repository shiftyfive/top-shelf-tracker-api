const express = require('express');
const ctrl = require('../controllers/teams');

const router = express.Router();

router.route('/:id')
  .get(ctrl.all);

module.exports = router;
