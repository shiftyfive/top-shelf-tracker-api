exports.seed = function (knex) {
  return knex('games').del()
  .then(() => {
    return knex('games').insert([
      {
        id: 1,
        season_id: 1,
        home_team: 1,
        away_team: 2,
        date: '10-20-2017',
        start_time: '12:30 PM',
      },
      {
        id: 2,
        season_id: 1,
        home_team: 3,
        away_team: 1,
        date: '11-3-2017',
        start_time: '6:00 PM',
      },
      {
        id: 3,
        season_id: 1,
        home_team: 4,
        away_team: 5,
        date: '7-1-2017',
        start_time: '6:30 PM',
      },
    ]);
  })
  .then(() => {
      return knex.raw(
        "SELECT setval('games_id_seq', (SELECT MAX(id) FROM games));"
      )});
};
