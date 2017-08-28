
exports.up = (knex) => {
  return knex.schema.createTable('seasons', (table) => {
    table.increments('id').unique();
    table.integer('owner_id').references('id').inTable('users');
    table.string('league_name');
    table.string('season_start');
    table.string('season_end');
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('seasons');
};
