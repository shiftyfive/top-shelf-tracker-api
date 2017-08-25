const Resource = require('../models/shared');
const csv = require('csvtojson');
const db = require('../db/connection.js');
const promises = [];

csv()
.fromFile('test.csv')
.on('json', (jsonObj) => {
  promises.push(Resource.create('players', jsonObj));
}).on('done', () => {
  return Promise.all(promises);
});
``
