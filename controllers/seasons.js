const Resource = require('../models/shared');


function all(req, res) {
  Resource.allById('seasons', 'owner_id', req.params.ownerId).then(result => res.json(result));
}

function create(req, res) {
  Resource.create('seasons', req.body).then(result => res.json(result));
}

module.exports = { all, create };
