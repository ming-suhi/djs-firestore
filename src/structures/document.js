const Database = require('./database.js');


class Document extends Database{
  
  constructor(path) {

    super()

    this.path = path;
  }


  reference() {

    return this.db.doc(`${this.path}`);
  }
  

  async data() {

    const reference = this.reference();
    const doc = await reference.get();
    return doc.data();
  }
}

module.exports = Document;

