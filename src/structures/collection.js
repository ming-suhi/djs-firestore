const Database = require('./database.js');
const {getDocs} = require('../utilities/collection.js');


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
    if (id == null) {
      return await getDocs(collection);
    } else {
      return collection.data();
    }
  }
}

module.exports = Collection;

