const GuildsManager = require('./guilds.manager.js');
const UsersManager = require('./users.manager.js');


class DatabaseManager {

  /**
   * Manages the database
   * Path: db
   * @property {GuildsManager} guilds class for managing guilds
   */
  constructor() {
    this.guilds = new GuildsManager();
    this.users = new UsersManager();
  }
}

module.exports = DatabaseManager;