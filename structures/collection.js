const Database = require('./database.js');


class Collection extends Database{
  
  constructor(path) {

    super()

    this.path = path;
  }


  reference(id = null) {

    if (id == null) {
      const reference = this.db.collection(this.path);
      return reference;
    } else {
      const reference = this.db.doc(`${this.path}/${id}`);
      return reference;
    }
  }
  

  async data(id = null) {

    const reference = this.reference(id);
    const collection = await reference.get();
    const docs = [];
    if (id == null) {
      for (let doc in collection) {
        docs.push(doc.data());
      }
      return docs;
    } else {
      return collection.data();
    }
  }
}

module.exports = Collection;

