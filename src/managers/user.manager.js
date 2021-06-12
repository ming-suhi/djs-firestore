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
    super(`guild/${guildID}/users/${data.id}`);
    Object.assign(this, data);
    this.guildID = guildID;
  }
}

module.exports = UserManager;