
exports.up = (knex) => {
  knex.schema.createTable('players', (table) => {
    table.increments('id').unique();
    table.foreign('team_id').references('id').on('teams');
    table.string('first_name');
    table.string('last_name');
    table.int('jersey_number');
    table.string('position');
    table.string('shooting_hand');
    table.int('age');
    table.string('height');
    table.string('weight');
  });
};

exports.down = (knex) => {
  knex.schema.dropTable('leagues');
};
