const express = require('express');
const testCtrl = require('../controllers/test');
const eventsCtrl = require('../controllers/events');

const router = express.Router();

// all games
router.route('/')
  .get(testCtrl.testRoute);

// single game view post put & delete routes are in reference to events

router.route('/:id')
  .get(testCtrl.testRoute)
  .post(eventsCtrl.create)
  .put(eventsCtrl.update);

router.route('/:id/boxscore')
  .get(testCtrl.testRoute);

module.exports = router;
