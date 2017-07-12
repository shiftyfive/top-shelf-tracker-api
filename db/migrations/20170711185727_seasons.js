
exports.up = (knex) => {
  knex.schema.createTable('seasons', (table) => {
    table.increments('id').unique();
    table.foreign('league_id').references('id').on('league');
    table.string('season_start');
    table.string('season_end');
  });
};

exports.down = (knex) => {
  knex.schema.dropTable('seasons');
};
