const FirebaseAdmin = require('firebase-admin');
const GuildsManager = require('./managers/guilds.managers.js');


class Client {

  constructor(config) {

    this.config = require(config);

    FirebaseAdmin.initializeApp({
      credential: FirebaseAdmin.credential.cert(this.config.service_account)
    });

    this.guilds = new GuildsManager();
  }
}

module.exports = Client;