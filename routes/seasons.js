const express = require('express');
const ctrl = require('../controllers/seasons');

const router = express.Router();

router.route('/:ownerId')
  .get(ctrl.all)
  .post(ctrl.create);

module.exports = router;
