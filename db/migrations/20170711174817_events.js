
exports.up = (knex) => {
  knex.schema.createTable('events', (table) => {
    table.increments('id').unique();
    table.foreign('player_id').references('id').on('players');
    table.foreign('game_id').references('id').on('game');
    table.string('event_time');
    table.string('event_zone');
    table.string('event_type');
    table.string('result');
  });
};

exports.down = (knex) => {
  knex.schema.dropTable('events');
};
