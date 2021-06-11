const Database = require('./database.js');
const {getDocs} = require('../utilities/collection.js');
const { firestore } = require('firebase-admin');


class Collection extends Database{

  /**
   * Collection structure
   * @param {string} path absolute path leading to the collection
   * @property {string} path absolute path leading to the collection
   */
  constructor(path) {
    super()

    this.path = path;
  }

  
  /**
    * Gets document reference, gets collection reference if no id is passed
    * @param {string} [id] id of doc
    * @returns {Firestore.DocumentReference|Firestore.CollectionReference} reference to doc
    */
  reference(id = null) {

    if (id == null) {
      const reference = this.db.collection(this.path);
      return reference;
    } else {
      const reference = this.db.doc(`${this.path}/${id}`);
      return reference;
    }
  }


  /**
    * Gets document field values, gets docs from collection if no id is passed
    * @param {string} [id] id of doc 
    * @returns {object|array} field values
    */
  async data(id = null) {

    const reference = this.reference(id);
    const collection = await reference.get();
    if (id == null) {
      return await getDocs(collection);
    } else {
      return collection.data();
    }
  }
}

module.exports = Collection;

