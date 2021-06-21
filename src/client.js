const FirebaseAdmin = require('firebase-admin');
const DatabaseManager = require('./managers/database.manager.js');
const {LocalClient} = require('@ming-suhi/djs-local-manager');
const dotenv = require('dotenv');


class Client {

  /**
   * Client for managing app client, and db client
   * @property {string} token access bot token
   * @property {LocalClient} local class for managing local
   * @property {DatabaseManager} db class for managing database
   */
  constructor() {
    dotenv.config();

    //initializes firebase app to use db

    FirebaseAdmin.initializeApp({
      credential: FirebaseAdmin.credential.cert({
        "type": "service_account",
        "project_id": process.env.PROJECT_ID,
        "private_key_id": process.env.PRIVATE_KEY_ID,
        "private_key": process.env.PRIVATE_KEY,
        "client_email": process.env.CLIENT_EMAIL,
        "client_id": process.env.CLIENT_ID,
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": process.env.CLIENT_X509_CERT_URL
      })
    });

    this.token = process.env.BOT_TOKEN;
    this.local = new LocalClient();
    this.db = new DatabaseManager();
  }

  /**
   * Finds requested command
   * @param {Interaction} interaction interaction 
   */
   async matchCommand(interaction){
    await this.local.commands.match(interaction);
  }


  /**
   * Sync Discord with local commands
   * @param {Discord.Client} client discord client 
   */
  async syncCommands(client) {
    await this.local.commands.sync(client);
  }
}

module.exports = Client;