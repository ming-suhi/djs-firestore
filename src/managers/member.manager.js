const Document = require("../structures/document")


class MemberManager extends Document {

  /**
   * Manages the member doc
   * Path: db/guilds/{guildID}/members/{userID}
   * @augments Document
   * @param {guildID} guildID guild id
   * @param {fieldValues} data field values of doc
   * @param {userID} data.id user id
   * @property {documentPath} path absolute path leading collection
   * @property {userID} id guild id
   * @property {guildID} guildID guild id
   */
  constructor(guildID, data) {
    super(`guilds/${guildID}/members/${data.id}`);
    Object.assign(this, data);
    this.guildID = guildID;
  }


  /**
   * Set ups guild member document
   * @param {Discord.User} user 
   */
  async create(user) {
    await this.update({"id": user.id, "name": user.username, "archived": false});
  }

  /**
   * Updates field values of docs
   * @param {fieldValues} data field values of doc
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

module.exports = MemberManager;