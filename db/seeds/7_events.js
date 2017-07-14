exports.seed = function (knex) {
  return knex('events').del()
  .then(() => {
    return knex('events').insert([
      {
        id: 1,
        player_id: 1,
        game_id: 1,
        event_time: 187,
        event_zone: 'L-slot',
        event_type: 'shot',
        result: 'goal',
      },
      {
        id: 2,
        player_id: 3,
        game_id: 1,
        event_time: 2048,
        event_zone: 'high-slot',
        event_type: 'shot',
        result: 'goal',
      },
      {
        id: 3,
        player_id: 2,
        game_id: 1,
        event_time: 3089,
        event_zone: 'low-slot',
        event_type: 'shot',
        result: 'goal',
      },
    ]);
  })
  .then(() => {
      return knex.raw(
        "SELECT setval('events_id_seq', (SELECT MAX(id) FROM events));"
  )});
};