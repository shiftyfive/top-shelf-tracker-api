exports.seed = function (knex) {
  return knex('users').del()
  .then(() => {
    return knex('users').insert([
      {
        id: 1,
        email: 'babz',
        first_name: 'Mike',
        last_name: 'Babcock',
        password: '$2a$12$rzZ30StGcmk7kfFY5Xu8SOO4N3pwSTJACl9nnCmsa3EkL66H39JKS',
      },
      {
        id: 2,
        email: 'hockeyAssistantCoach@fastmail.com',
        first_name: 'Pat',
        last_name: 'Quin',
        password: 'leafs01',
      },
      {
        id: 3,
        email: 'miracleman@fastmail.com',
        first_name: 'Herb',
        last_name: 'Brooks',
        password: 'beatrussia',
      },
    ]);
  })
  .then(() => {
        return knex.raw(
          "SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));"
        )});
};
