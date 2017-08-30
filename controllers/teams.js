const Resource = require('../models/shared');


function all(req, res) {
  console.log(req.params)
  const id = req.params.ownerId;
  Resource.allById('teams', 'owner_id', id);
}

module.exports = { all };
