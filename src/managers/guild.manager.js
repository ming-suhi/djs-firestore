const Document =  require('../structures/document.js');
const MembersManager = require('./members.manager.js');


class GuildManager extends Document {

  /**
   * Manages the guild doc
   * Path: db/guilds/{guildID}
   * @augments Document
   * @param {fieldValues} data field values of guild doc
   * @param {guildID} data.id id of guild doc
   * @property {guildID} id id of guild doc
   * @property {documentPath} path absolute path leading to document
   * @property {UsersManager} users manage users
   */
  constructor(data) {
    super(`guilds/${data.id}`);
    Object.assign(this, data);
    this.members = new MembersManager(data.id);
  }

  
  /**
   * Set ups guild docuemnt 
   * @param {Discord.Guild} guild
   */
  async create(guild) {
    await this.update({"id": guild.id, "name": guild.name, "archived": false});
  }


  /**
   * Updates field values of docs
   * @param {fieldValues} data field values of guild doc
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

module.exports = GuildManager;