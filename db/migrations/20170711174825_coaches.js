
exports.up = (knex) => {
  knex.schema.createTable('coaches', (table) => {
    table.increments('id').unique();
    table.foreign('team_id').references('id').on('team');
    table.string('first_name');
    table.string('last_name');
    table.string('coach_type');
  });
};

exports.down = (knex) => {
  knex.schema.dropTable('coaches');
};
