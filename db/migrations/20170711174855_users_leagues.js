
exports.up = (knex) => {
  return knex.schema.createTable('users_leagues', (table) => {
    table.increments('id').unique();
    table.integer('user_id').references('id').inTable('users');
    table.integer('league_id').references('id').inTable('leagues');
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('users_leagues');
};
