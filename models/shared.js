const db = require('../db/connection.js');

class Resource {

  static all(resource) {
    return db(resource);
  }

  static findById(resource, id) {
    return db(resource).where({ id });
  }

  static destroy(resource, id) {
    return db(resource).where({ id }).del();
  }

  static create(resource, body) {
    return db(resource).insert(body, '*');
  }

  static update(resource, id, body) {
    return db(resource).update(body, '*').where('id', id);
  }

  static join(primaryTable, secondaryTable, id) {
    const joinId = primaryTable.substring(0, primaryTable.length - 1).concat('_id');
    return db.from(primaryTable).innerJoin(secondaryTable, `${primaryTable}.id`, `${secondaryTable}.${joinId}`).where(joinId, id);
  }

  static junctionTableJoin(primaryTable, junctionTable, secondaryTable, id) {
    const primaryJTableId = primaryTable.substring(0, primaryTable.length - 1).concat('_id');
    const secondaryJTableId = secondaryTable.substring(0, secondaryTable.length - 1).concat('_id');

    return db.from(primaryTable).innerJoin(junctionTable, `${primaryTable}.id`, `${junctionTlable}.${primaryJTableId}`).where(primaryJTableId, id)
    .innerJoin(secondaryTable, `${secondaryTable}.id`, `${secondaryJTableId}`);
  }
}

module.exports = Resource;
