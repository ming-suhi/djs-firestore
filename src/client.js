const FirebaseAdmin = require('firebase-admin');
const GuildsManager = require('./managers/guilds.managers.js');


class Client {

  /**
   * Client for managing app client, and db client
   * @param {string} config path to config.json from root
   * @property {object} config access config.json as object
   * @property {GuildsManager} guilds class for managing guilds
   */
  constructor(config) {
    
    this.config = require.main.require(config);

    //initializes firebase app to use db

    FirebaseAdmin.initializeApp({
      credential: FirebaseAdmin.credential.cert(this.config.service_account)
    });

    this.guilds = new GuildsManager();
  }
}

module.exports = Client;