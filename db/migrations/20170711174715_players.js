
exports.up = (knex) => {
  return knex.schema.createTable('players', (table) => {
    table.increments('id').unique();
    table.integer('team_id').references('id').inTable('teams');
    table.string('first_name');
    table.string('last_name');
    table.integer('jersey_number');
    table.string('position');
    table.integer('age');
    table.string('height');
    table.string('weight');
    table.string('shoots');
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('leagues');
};
