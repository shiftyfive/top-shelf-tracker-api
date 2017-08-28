
exports.up = (knex) => {
  return knex.schema.createTable('users', (table) => {
    table.increments('id');
    table.string('email').unique();
    table.string('first_name');
    table.string('last_name');
    table.specificType('password', 'char(60)').notNullable();
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('users');
}
