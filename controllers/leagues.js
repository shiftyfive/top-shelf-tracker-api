const Resource = require('../models/shared');

function create(req, res) {
  Resource
}
function all(req, res) {
  Resource.junctionTableJoin('users', 'users_leagues', 'leagues', 1).then(result => console.log(result));
}

function single(req, res) {

}

module.exports = { all, single };
