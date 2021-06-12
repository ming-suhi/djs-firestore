const Document = require("../structures/document")


class UserManager extends Document {

  /**
   * Manages the user doc
   * Path: db/guilds/{guildID}/users/{userID}
   * @param {string} guildID guild id
   * @param {object} data field values of doc
   * @param {string} data.id id of doc
   * @property {string} path absolute path leading to document
   * @property {string} id id of doc
   * @property {string} guildID guild id
   */
  constructor(guildID, data) {
    super(`guilds/${guildID}/users/${data.id}`);
    Object.assign(this, data);
    this.guildID = guildID;
  }


  /**
   * Updates field values of docs
   * @param {object} data field values of doc
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