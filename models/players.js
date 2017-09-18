const db = require('../db/connection.js');

class Players {
  static joinEvents() {
    return db.select('*').from('players').innerJoin('events', {'events.player_id': 'players.id'})
  }

  static all() {
    return db.select('*').from('players').join('events', { 'players.id': 'events.player_id' });
  }
  static allJsonAgg() {
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
}
module.exports = Players;
