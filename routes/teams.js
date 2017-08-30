const express = require('express');
const ctrl = require('../controllers/teams');

const router = express.Router();

router.route('/')
  .get(ctrl.all);

module.exports = router;
