const db = require('../db/connection.js');

class Players {
  static all() {
    return db.raw(`
    select row_to_json(players) as row
    from(
      select p.id, p.first_name, p.last_name,
      (select json_agg(events)
      from (
        select * from events where player_id = p.id
      ) events
    ) as events
    from players as p) players;
    `)
  }

  static create(resource, data = {}) {
    return db(resource).insert(data, '*');
  }

  static byTeam(id) {
    return db.raw(`
    select row_to_json(players) as row
    from(
      select p.id, p.first_name, p.last_name, p.team_id,
      (select json_agg(events)
      from (
        select * from events where player_id = p.id
      ) events
    ) as events
    from players as p where p.team_id = ${id}) players;
    `)
  }
}
module.exports = Players;
