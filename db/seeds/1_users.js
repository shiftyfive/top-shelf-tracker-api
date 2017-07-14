exports.seed = function (knex) {
  return knex('users').del()
  .then(() => {
    return knex('users').insert([
      {
        id: 1,
        email: 'hockeyCoach111@fastmail.com',
        first_name: 'Mike',
        last_name: 'Babcock',
        password: 'hockey123',
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
