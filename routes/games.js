const express = require('express');
const ctrl = require('../controllers/games');

const router = express.Router();

// all games
router.route('/')
  .get(ctrl.all);

router.route('/:id')
  .get(ctrl.single)
  .post(ctrl.addEvent);


// single game view post put & delete routes are in reference to events

// router.route('/:id')
//   .get(testCtrl.testRoute)
//   .post(eventsCtrl.create)
//   .put(eventsCtrl.update);

// router.route('/:id/boxscore')
//   .get(testCtrl.testRoute);

module.exports = router;
