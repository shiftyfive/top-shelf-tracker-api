const db = require('../db/connection.js');

class Game {

  static all(seasonId) {
    return db.raw(
      `select games.id as game_id, games.date, games.start_time as time,
      json_agg(teams) as teams
      from teams
      inner join games on teams.id = games.home_team or teams.id = games.away_team
      where games.season_id = ${seasonId}
      group by game_id
      `);
  }

  static single(gameId) {
    db.select('').from('games').where('games.id', gameId).join('teams', function () {
      this.on('games.home_team', '=', 'teams.id').orOn('games.away_team', '=', 'teams.id');
    })
  }

  static getEvents(gameId) {
    return db('*').from('events').where('events.game_id', gameId)
  }

  static join(primaryTable, secondaryTable, joinId, id) {
    return db.from(primaryTable).innerJoin(secondaryTable, `${primaryTable}.${joinId}`, `${secondaryTable}.id`).where(joinId, id);
  }

  static getHomeTeamPlayers(gameId) {
    return db.select('games.id as game_id', 'games.home_team', 'players.id as player_id', 'players.first_name', 'players.last_name', 'players.jersey_number', 'players.team_id')
    .from('games')
    .join('players', function () {
      this.on('players.team_id', '=', 'games.home_team')
    }).where('games.id', gameId);
  }

  static getAwayTeamPlayers(gameId) {
    return db.select('games.id as game_id', 'games.away_team', 'players.id as player_id', 'players.first_name', 'players.last_name', 'players.jersey_number', 'players.team_id')
    .from('games')
    .join('players', function () {
      this.on('players.team_id', '=', 'games.away_team')
    }).where('games.id', gameId);
  }

  static getEvents(gameId) {
    return db.select('games.id as game_id', 'events.id as event_id', 'events.player_id', 'events.event_time', 'events.event_zone', 'events.event_type', 'events.result')
    .from('games')
    .join('events', 'games.id', 'events.game_id').where('games.id', gameId);
  }

}

module.exports = Game;
