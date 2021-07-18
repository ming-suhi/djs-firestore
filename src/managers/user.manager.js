const Document =  require('../structures/document.js');


class UserManager extends Document {

  /**
   * Manages the user doc
   * Path: db/users/{userID}
   * @augments Document
   * @param {fieldValues} data field values of user doc
   * @param {userID} data.id id of user doc
   * @property {userID} id id of user doc
   * @property {documentPath} path absolute path leading to document
   */
  constructor(data) {
    super(`users/${data.id}`);
    Object.assign(this, data);
  }

  
  /**
   * Set ups user docuemnt 
   * @param {Discord.User} user 
   */
  async create(user) {
    await this.update({"id": user.id, "name": user.username});
  }


  /**
   * Updates field values of docs
   * @param {fieldValues} data field values of user doc
   */
  async update(data) {
    await this.reference().set(data, {merge: true});
  }
}

module.exports = UserManager;