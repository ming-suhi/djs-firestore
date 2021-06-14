const Document = require("../structures/document")


class UserManager extends Document {

  /**
   * Manages the user doc
   * Path: db/guilds/{guildID}/users/{userID}
   * @augments Document
   * @param {guildID} guildID guild id
   * @param {fieldValues} data field values of user doc
   * @param {userID} data.id id of user doc
   * @property {documentPath} path absolute path leading to user document
   * @property {userID} id guild id
   * @property {guildID} guildID guild id
   */
  constructor(guildID, data) {
    super(`guilds/${guildID}/users/${data.id}`);
    Object.assign(this, data);
    this.guildID = guildID;
  }


  /**
   * Updates field values of docs
   * @param {fieldValues} data field values of user doc
   */
  async update(data) {
    await this.reference().set(data, {merge: true});
  }


  /**
   * Sets archived field to true
   */
  async archive() {
    await this.update({"archived": true});
  }


  /**
   * Sets archived field to false
   */
  async unarchive() {
    await this.update({"archived": false});
  }
}

module.exports = UserManager;