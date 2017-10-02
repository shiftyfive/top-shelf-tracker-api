const Resource = require('../models/shared');


function all(req, res) {
  Resource.allById('seasons', 'owner_id', req.params.ownerId).then(result => res.json(result));
}

function create(req, res) {
  Resource.create('seasons', req.body).then(result => res.json(result));
}
// function all(req, res) {
//   Resource.join('leagues', 'seasons', 1).then(result => res.json(result));
// }

// function single(req, res) {
//   Resource.join('seasons', 'games', 1).then(result => console.log(result));
// }

module.exports = { all, create };