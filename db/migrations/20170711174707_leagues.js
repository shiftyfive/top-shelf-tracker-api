
exports.up = (knex) => {
  knex.schema.createTable('leagues', (table) => {
    table.increments('id').unique();
    table.foreign('owner_id').references('id').on('users');
    table.string('name');
    table.string('season_start');
    table.string('season_end');
  });
};

exports.down = (knex) => {
  knex.schema.dropTable('leagues');
};
