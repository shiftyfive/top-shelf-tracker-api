exports.seed = function (knex) {
  return knex('seasons').del()
  .then(() => {
    return knex('seasons').insert([
      {
        id: 1,
        league_id: 1,
        season_start: '10-20-2017',
        season_end: '6-20-2017',
      },
      {
        id: 2,
        league_id: 2,
        season_start: '6-30-2017',
        season_end: '8-30-2017',
      },
    ]);
  })
  .then(() => {
      return knex.raw(
        "SELECT setval('seasons_id_seq', (SELECT MAX(id) FROM seasons));"
      )});
};
