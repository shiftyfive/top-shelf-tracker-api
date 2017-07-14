exports.seed = function (knex) {
  return knex('users_leagues').del()
  .then(() => {
    return knex('users_leagues').insert([
      {
        id: 1,
        user_id: 1,
        league_id: 1,
      },
      {
        id: 2,
        user_id: 2,
        league_id: 2,
      },
      {
        id: 3,
        user_id: 3,
        league_id: 1,
      },
    ]);
  })
  .then(() => {
      return knex.raw(
        "SELECT setval('users_leagues_id_seq', (SELECT MAX(id) FROM users_leagues));"
      )});
};
