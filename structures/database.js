const FirebaseAdmin = require('firebase-admin');


class Database {

  constructor() {

    this.db = FirebaseAdmin.firestore();
  }
}

module.exports = Database;