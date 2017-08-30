const express = require('express');
const ctrl = require('../controllers/events');
const test = require('../controllers/test')

const router = express.Router();

router.route('/')
  .post(ctrl.create)
  .put(ctrl.update);

module.exports = router;
