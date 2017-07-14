const express = require('express');
const ctrl = require('../controllers/test.js');

const router = express.Router();

// all games
router.route('/')
  .get(ctrl.testRoute);

// single game view post put & delete routes are in reference to events

router.route('/:id')
  .get(ctrl.testRoute)
  .post(ctrl.testRoute)
  .put(ctrl.testRoute)
  .delete(ctrl.testRoute);

module.exports = router;
