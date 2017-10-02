const Resource = require('../models/shared');

function createGame(req, res) {
  console.log('create game ctrl function called')
  Resource.create('games', req.body).then(result => res.json(result));
}

function createTeam(req, res) {
  Resource.create('teams', req.body).then(result => res.json(result));
}

function createPlayer(req, res) {
  Resource.create('players', req.body).then(result => res.json(result));
}

function deleteSeason(req, res) {
  console.log(req.body, 'logging req.body from deleteSeason')
  console.log(req.params, 'logging req.params from deleteSeason')
  Resource.destroy('seasons', req.params.seasonId).then(result => res.json(result));
}

function deleteGame(req, res) {
  Resource.destroy('games', req.params.gameId).then(result => res.json(result));
}

function testRoute(req, res) {
  console.log('hey buddy 🌭');
  res.send('hey buddy 🌭');
}

module.exports = { createGame, createTeam, createPlayer, testRoute, deleteSeason, deleteGame };
