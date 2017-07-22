const Resource = require('../models/shared');

function all(req, res) {
  Resource.join('events', 'game', 1).then(result =>res.json(result))
}

function create(req, res) {
  Resource.create('events', req.body).then(result => res.json(result))
  .catch((err) => {
    const error = {
      name: err.routine,
      hint: err.hint,
    };
    res.json(error);
  });
}

function update(req, res) {
  const id = req.body.id;
  Resource.update('events', id, req.body).then(result => res.json(result))
  .catch((err) => {
    const error = {
      name: err.routine,
      hint: err.hint,
    };
    res.json(error);
  });
}

module.exports = { create, update };
