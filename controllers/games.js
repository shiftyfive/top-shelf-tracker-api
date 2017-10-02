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
  console.log(arr, 'logging arr argument in buildobj function')
  const gameObj = {};
  gameObj.homeTeam = arr[0][0];
  gameObj.awayTeam = arr[1][0]; 
  gameObj.players = arr[2].concat(arr[3]).map((player) => {
    player.fullName = player.first_name + ' ' + player.last_name;
    return player
  });
  gameObj.awayTeam.players = arr[3];
  gameObj.events = eventsByPeriod(arr[4]);
  return gameObj;
}

function all(req, res) {
  Resource.all(req.params.seasonId).then(result => res.json(result.rows));
}

function single(req, res) {
  const gameId = req.params.gameId;
  Promise.all([
    Resource.join('games', 'teams', 'home_team', 1),
    Resource.join('games', 'teams', 'away_team', 2),
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
//you removed single put it back
module.exports = { all, single, addEvent };

