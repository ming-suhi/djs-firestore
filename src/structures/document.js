const Database = require('./database.js');


class Document extends Database{

  /**
   * Document structure
   * @param {string} path absolute path leading to the doc
   * @property {string} path absolute path leading to the doc
   */
  constructor(path) {
    super()

    this.path = path;
  }


  /**
    * Gets document reference
    * @returns {Firestore.DocumentReference} reference to doc
    */
  reference() {

    return this.db.doc(`${this.path}`);
  }
  

  /**
    * Gets document's field values 
    * @returns {object} document's field values
    */
  async data() {

    const reference = this.reference();
    const doc = await reference.get();
    return doc.data();
  }
}

module.exports = Document;

