const sharedResource = require('../models/shared');
const Resource = require('../models/games');

function eventsByPeriod(arr) {
  const periodArr = [[], [], [], [], []];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].period === 1) {
      periodArr[0].push(arr[i]);
    }
    if (arr[i].period === 2) {
      periodArr[1].push(arr[i]);
    }
    if (arr[i].period === 3) {
      periodArr[2].push(arr[i]);
    }
    if (arr[i].period === 4) {
      periodArr[3].push(arr[i]);
    }
    if (arr[i].period === 5) {
      periodArr[4].push(arr[i]);
    }
  }
  return periodArr;
}


function buildObj(arr) {
  const gameObj = {};
  gameObj.players = arr[0].concat(arr[1]).map((player) => {
    player.fullName = player.first_name + ' ' + player.last_name;
    return player
  });
  gameObj.events = eventsByPeriod(arr[2]);
  return gameObj;
}

function all(req, res) {
  Resource.all(req.params.seasonId).then(result => res.json(result.rows));
}

function single(req, res) {
  const gameId = req.params.gameId;
  console.log(req.params.gameId, 'logging req.params.gameId from single controller function.');
  Promise.all([
    Resource.getHomeTeamPlayers(gameId),
    Resource.getAwayTeamPlayers(gameId),
    Resource.getEvents(gameId),
  ]).then((data) => {
    res.json(buildObj(data));
  });
}

function addEvent(req, res) {
  Resource.addEvent(req.body).then(console.log(res.json));
}

function deleteEvent(req, res) {
  console.log(req.params, 'logging req.params from deleteEvent ctroller')
  sharedResource.destroy('events', req.params.eventId).then(result => res.json(result));
}
//you removed single put it back
module.exports = { all, single, addEvent, deleteEvent };

