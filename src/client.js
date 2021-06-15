const FirebaseAdmin = require('firebase-admin');
const DatabaseManager = require('./managers/database.manager.js');


class Client {

  /**
   * Client for managing app client, and db client
   * @param {string} config path to config.json from root
   * @property {object} config access config.json as object
   * @property {DatabaseManager} db class for managing database
   */
  constructor(config) {
    
    this.config = require.main.require(config);

    //initializes firebase app to use db

    FirebaseAdmin.initializeApp({
      credential: FirebaseAdmin.credential.cert(this.config.service_account)
    });

    this.db = new DatabaseManager();
  }
}

module.exports = Client;