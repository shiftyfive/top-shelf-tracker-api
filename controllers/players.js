const Resource = require('../models/players');

function createStatObject(object) {
  const noStats = { goals: 0, assists: 0, shots: 0, points: 0, hits: 0, shootingPercentage: 0 }
  if (object.row.events === null) return noStats;
  return object.row.events.reduce(function(accumulatorObj, curr, currentIndex) {
    if (object.row.events[currentIndex].event_type === 'shot') {
      accumulatorObj.shots += 1;
      if (object.row.events[currentIndex].result === 'goal') {
        accumulatorObj.goals += 1;
      }
    }
    if (object.row.events[currentIndex].event_type === 'pass' && object.row.events[currentIndex].event_result === 'goal') {
      accumulatorObj.assists += 1;
    }

    if (object.row.events[currentIndex].event_type === 'hit') {
      accumulatorObj.hits += 1
    }
    if (currentIndex + 1 === object.row.events.length) {
      accumulatorObj.shootingPercentage = (accumulatorObj.goals / accumulatorObj.shots) * 100;
      accumulatorObj.points = (accumulatorObj.goals + accumulatorObj.points)
    }
    return accumulatorObj;
  }, { goals: 0, assists: 0, shots: 0, points: 0, hits: 0, shootingPercentage: 0 });
}


function calculateShootingPercentage(obj) {
  if (obj.row.events === null) return obj;
  obj.row.events.shootingPercentage = (obj.row.events.goals % obj.row.events.shots) * 100;
  return obj;
}

function all(req, res) {
  Resource.all().then((result) => {
    return result.rows.map((element) => {
      element.row.events = createStatObject(element);
      if (element.row.events !== null) {
      }
      return element;
    });
  }).then(result => res.json(result));
}

function byTeam(req, res) {
  console.log(req.params.teamId)
  Resource.byTeam(req.params.teamId).then((result) => {
    return result.rows.map((element) => {
      element.row.events = createStatObject(element);
      if (element.row.events !== null) {
      }
      return element;
    });
  }).then(result => res.json(result));
}

function create(req, res) {
  Resource.create('seasons', req.body).then(result => res.json(result));
}

module.exports = { all, byTeam, create };
