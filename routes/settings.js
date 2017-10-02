const express = require('express');
const ctrl = require('../controllers/settings');

const router = express.Router();

router.route('/')
  .get(ctrl.testRoute);

router.route('/games/:gameId')
  .delete(ctrl.deleteGame);

router.route('/game')
  .get(ctrl.testRoute)
  .post(ctrl.createGame);


router.route('/team')
  .post(ctrl.createTeam);

router.route('/player')
  .post(ctrl.createPlayer);

router.route('/season/:seasonId')
  .delete(ctrl.deleteSeason);

module.exports = router;
