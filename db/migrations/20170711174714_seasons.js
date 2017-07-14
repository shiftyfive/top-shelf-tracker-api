
exports.up = (knex) => {
  return knex.schema.createTable('seasons', (table) => {
    table.increments('id').unique();
    table.integer('league_id').references('id').inTable('leagues');
    table.string('season_start');
    table.string('season_end');
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('seasons');
};
