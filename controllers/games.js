const sharedResource = require('../models/shared');
const Resource = require('../models/games');

function buildObj(arr) {
  const gameObj = {};
  gameObj.homeTeam = arr[0][0];
  gameObj.awayTeam = arr[1][0];
  gameObj.homeTeam.players = arr[2];
  gameObj.awayTeam.players = arr[3];
  gameObj.events = arr[4];
  return gameObj;
}


function all(req, res) {
  Resource.all(1).then(result => console.log(result.rows));
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

module.exports = { all, single };

