
exports.up = (knex) => {
  return knex.schema.createTable('coaches', (table) => {
    table.increments('id').unique();
    table.integer('team_id').references('id').inTable('teams');
    table.string('first_name');
    table.string('last_name');
    table.string('coach_type');
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('coaches');
};
