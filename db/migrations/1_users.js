
exports.up = (knex) => {
  knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('email').unique();
    table.string('first_name');
    table.string('last_name');
    table.string('password');
  });
};

exports.down = (knex) => {
  knex.schema.dropTable('users');
}
