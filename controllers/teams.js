const Resource = require('../models/shared');


function all(req, res) {
  const id = req.params.seasonId;
  Resource.findById('teams', 1, 'owner_id').then(result => res.json(result));
}

module.exports = { all };