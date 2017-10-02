const Resource = require('../models/shared');


function all(req, res) {
  const id = req.params.seasonId;
  Resource.findById('teams', 1, 'owner_id').then(result => res.json(result));
}

function create(req, res) {
  Resource.create('seasons', req.body).then(result => res.json(result));
}

module.exports = { all, create };
