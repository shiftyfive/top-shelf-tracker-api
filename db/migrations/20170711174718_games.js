
exports.up = (knex) => {
  return knex.schema.createTable('games', (table) => {
    table.increments('id').unique();
    table.integer('season_id').references('id').inTable('seasons');
    table.integer('home_team').references('id').inTable('teams');
    table.integer('away_team').references('id').inTable('teams');
    table.string('date');
    table.string('start_time');
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('games');
};
