
exports.up = (knex) => {
  return knex.schema.createTable('leagues', (table) => {
    table.increments('id').unique();
    table.integer('owner_id').references('id').inTable('users');
    table.string('name');
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('leagues');
};
