
exports.up = (knex) => {
  return knex.schema.createTable('events', (table) => {
    table.increments('id').unique();
    table.integer('player_id').references('id').inTable('players');
    table.integer('game_id').references('id').inTable('games');
    table.string('event_time');
    table.string('event_zone');
    table.string('event_type');
    table.string('result');
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('events');
};
