const FirebaseAdmin = require('firebase-admin');


class Database {

  constructor() {

    this.db = FirebaseAdmin.firestore();
    Object.defineProperty(this, "db", {enumerable: false});
  }
}

module.exports = Database;