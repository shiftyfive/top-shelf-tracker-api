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
      {
        id: 3,
        owner_id: 2,
        name: 'join test 1',
      },
      {
        id: 4,
        owner_id: 2,
        name: 'join test 2',
      },
    ]);
  })
  .then(() => {
      return knex.raw(
        "SELECT setval('leagues_id_seq', (SELECT MAX(id) FROM leagues));"
      )});
};
