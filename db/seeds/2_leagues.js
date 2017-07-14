exports.seed = function (knex) {
  return knex('leagues').del()
  .then(() => {
    return knex('leagues').insert([
      {
        id: 1,
        owner_id: 1,
        name: 'The League',
      },
      {
        id: 2,
        owner_id: 2,
        name: 'The Show',
      },
    ]);
  })
  .then(() => {
      return knex.raw(
        "SELECT setval('leagues_id_seq', (SELECT MAX(id) FROM leagues));"
      )});
};
