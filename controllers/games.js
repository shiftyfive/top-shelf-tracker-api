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
    if (arr[i].period === 'OT') {
      periodArr[3].push(arr[i]);
    }
    if (arr[i].period === 'SO') {
      periodArr[4].push(arr[i]);
    }
  }
  return periodArr;
}


function buildObj(arr) {
  const gameObj = {};
  gameObj.homeTeam = arr[0][0];
  gameObj.awayTeam = arr[1][0]; 
  gameObj.players = arr[2].concat(arr[3]);
  gameObj.awayTeam.players = arr[3];
  gameObj.events = eventsByPeriod(arr[4]);
  return gameObj;
}

function all(req, res) {
  Resource.all(req.params.seasonId).then(result => res.json(result.rows));
}

function single(req, res) {
  Promise.all([
    Resource.join('games', 'teams', 'home_team', 1),
    Resource.join('games', 'teams', 'away_team', 2),
    Resource.getHomeTeamPlayers(1),
    Resource.getAwayTeamPlayers(1),
    Resource.getEvents(1),
  ]).then((data) => {
    res.json(buildObj(data))
  });
}

function addEvent(req, res) {
  console.log(req.body, 'req.body from add event controller function')
  Resource.addEvent(req.body);
}
//you removed single put it back
module.exports = { all, single, addEvent };

