const GuildsManager = require('./guilds.manager.js');


class DatabaseManager {

  /**
   * Manages the database
   * Path: db
   * @property {GuildsManager} guilds class for managing guilds
   */
  constructor() {
    this.guilds = new GuildsManager();
  }
}

module.exports = DatabaseManager;