const Collection = require("../structures/collection.js");
const UserManager = require("./user.manager.js");


class UsersManager extends Collection {

  /**
   * Manages the user docs of the users collection
   * Path: db/users
   * @augments Collection
   * @property {collectionPath} path absolute path leading to users collection
   */
  constructor() {
    super("users");
  }


  /**
   * Gets field values of doc, gets all docs if no id is passed
   * @param {userID} [id] id of user to get
   * @returns {docData|collectionData} field values of doc
   */
  async get(id = null) {
    const doc = await this.data(id);
    return doc;
  }


  /**
   * Posts field values of doc
   * @param {fieldValues} data field values to post
   * @param {userID} data.id id of user to post
   * @returns {fieldValues} updated field values of user
   */
  async post(data) {
    await this.reference(data.id).set(data, { merge: true });
    return data;
  }


  /**
   * Posts object as field values
   * @param {userID} id id of user to delete
   * @returns {fieldValues} field values of the deleted user
   */
  async delete(id) {
    const docRef = this.reference(id);
    const doc = await this.data(id);
    await docRef.delete();
    return doc;
  }


  /**
   * Fetches doc, fetches a pseudo doc if doc does not exist
   * @param {userID} id id  of user to fetch
   * @returns {UserManager} fetched user
   */
  async fetch(id) {
    const doc = await this.data(id);
    if (doc == undefined) {
      return new UserManager({"id": id});
    } else {
      return new UserManager(doc);
    }
  }
}

module.exports = UsersManager;