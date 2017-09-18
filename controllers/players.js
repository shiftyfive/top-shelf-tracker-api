const Resource = require('../models/players');

function createStatObject(object) {
  console.log(object)
  if (object.row.events === null) return object.row.events;
  return object.row.events.reduce(function(accumulatorObj, curr, currentIndex) {
    if(object.row.events[currentIndex].event_type === 'shot') {
      accumulatorObj.shots += 1;
      if(object.row.events[currentIndex].result === 'goal') {
        accumulatorObj.goals += 1;
      }
    }
    if(object.row.events[currentIndex].event_type === 'pass' && object.row.events[currentIndex].event_result === 'goal') {
      accumulatorObj.assists += 1;
    }

    if(object.row.events[currentIndex].event_type === 'hit') {
      accumulatorObj.hits += 1
    }
    return accumulatorObj;
  }, { goals: 0, assists: 0, shots: 0, hits: 0 });
}


function calculateShootingPercentae(obj) {
  obj.shootingPercentage = (obj.goals % obj.shots) * 100;
  return obj;
}

function all(req, res) {
  Resource.allJsonAgg().then((result) => {
    return result.rows.map((element) => {
      element.row.events = createStatObject(element);
      return element;
    });
  }).then(result => res.json(result));
}

module.exports = { all };
