exports.seed = function (knex) {
  return knex('teams').del()
  .then(() => {
    return knex('teams').insert([
      {
        id: 1,
        owner_id: 1,
        name: 'Red Wings',
        location: 'Detroit',
        arena: 'pizza pizza rena',
      },
      {
        id: 2,
        owner_id: 1,
        name: 'Blackhawks',
        location: 'Chicago',
        arena: 'United Center',
      },
      {
        id: 3,
        owner_id: 1,
        name: 'Penguins',
        location: 'Pitsburgh',
        arena: 'CONSOL Energy Center',
      },
      {
        id: 4,
        owner_id: 2,
        name: 'Soundtigers',
        location: 'Bridgeport',
        arena: 'old barn center',
      },
      {
        id: 5,
        owner_id: 2,
        name: 'Greyhounds',
        location: 'Sault Ste. Marie',
        arena: 'Essar Centre',
      },
    ]);
  })
  .then(() => {
      return knex.raw(
        "SELECT setval('teams_id_seq', (SELECT MAX(id) FROM teams));"
      )});
};
