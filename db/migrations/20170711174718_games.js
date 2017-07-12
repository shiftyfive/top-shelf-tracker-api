
exports.up = (knex) => {
  knex.schema.createTable('games', (table) => {
    table.increments('id').unique();
    table.foreign('season_id').references('id').on('season');
    table.foreign('home_team').references('id').on('teams');
    table.foreign('away_team').references('id').on('teams');
    table.datetime('date');
  });
};

exports.down = (knex) => {
  knex.schema.dropTable('games');
};
