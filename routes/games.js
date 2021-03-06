const express = require('express');
const ctrl = require('../controllers/games');

const router = express.Router();

router.route('/:seasonId')
  .get(ctrl.all);

router.route('/:seasonId/:gameId')
  .get(ctrl.single)
  .post(ctrl.addEvent);

router.route('/:seasonId/:gameId/:eventId')
  .delete(ctrl.deleteEvent);

// single game view post put & delete routes are in reference to events

module.exports = router;
