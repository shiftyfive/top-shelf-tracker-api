
exports.up = (knex) => {
  knex.schema.createTable('teams', (table) => {
    table.increments('id').unique();
    table.foreign('league_id').references('id').on('league');
    table.string('team_name');
    table.string('location');
    table.string('arena_name')
  });
};

exports.down = (knex) => {
  knex.schema.dropTable('teams');
};
