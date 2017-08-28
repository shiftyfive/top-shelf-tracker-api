
exports.up = (knex) => {
  return knex.schema.createTable('teams', (table) => {
    table.increments('id').unique();
    table.integer('owner_id').references('id').inTable('users');
    table.string('name');
    table.string('location');
    table.string('arena');
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('teams');
};
