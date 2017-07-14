exports.seed = function (knex) {
  return knex('coaches').del()
  .then(() => {
    return knex('coaches').insert([
      {
        id: 1,
        team_id: 1,
        first_name: 'Jeff',
        last_name: 'Blashill',
        coach_type: 'Head',
      },
      {
        id: 2,
        team_id: 1,
        first_name: 'John',
        last_name: 'Torchetti',
        coach_type: 'Assistant',
      },
      {
        id: 3,
        team_id: 3,
        first_name: 'Mike',
        last_name: 'Sullivan',
        coach_type: 'Head',
      },
    ]);
  })
  .then(() => {
      return knex.raw(
        "SELECT setval('coaches_id_seq', (SELECT MAX(id) FROM coaches));"
      )});
};
