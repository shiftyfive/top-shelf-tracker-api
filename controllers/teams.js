const Resource = require('../models/shared');


function all(req, res) {
  Resource.join('leagues', 'teams', 1).then(result => console.log(result));
}

function single(req, res) {
  Resource.join('teams', 'players', 1).then(result => console.log(result));
}
module.exports = { all, single };
