
exports.up = (knex) => {
  knex.schema.createTable('coaches', (table) => {
    table.increments('id').unique();
    table.foreign('user_id').references('id').on('user');
    table.foreign('league_id').references('id').on('league');
  });
};

exports.down = (knex) => {
  knex.schema.dropTable('coaches');
};
