const Collection = require("../structures/collection.js");
const GuildManager = require("./guild.manager.js");


class GuildsManager extends Collection {

  /**
   * Manages the guild docs of the guilds collection
   * Path: db/guilds
   * @augments Collection
   * @property {collectionPath} path absolute path leading to guilds collection
   */
  constructor() {
    super("guilds");
  }


  /**
   * Gets field values of doc, gets all docs if no id is passed
   * @param {guildID} [id] id of guild to get
   * @returns {docData|collectionData} field values of doc
   */
  async get(id = null) {
    const doc = await this.data(id);
    return doc;
  }


  /**
   * Posts field values of doc
   * @param {fieldValues} data field values to post
   * @param {guildID} data.id id of guild to post
   * @returns {fieldValues} updated field values of guild
   */
  async post(data) {
    await this.reference(data.id).set(data, { merge: true });
    return data;
  }


  /**
   * Posts object as field values
   * @param {guildID} id id of guild to delete
   * @returns {fieldValues} field values of the deleted guild
   */
  async delete(id) {
    const docRef = this.reference(id);
    const doc = await this.data(id);
    docRef.delete();
    return doc;
  }


  /**
   * Fetches doc, fetches a pseudo doc if doc does not exist
   * @param {guildID} id id  of guild to fetch
   * @returns {GuildManager} fetched guild
   */
  async fetch(id) {
    const doc = await this.data(id);
    if (doc == undefined) {
      return new GuildManager({"id": id});
    } else {
      return new GuildManager(doc);
    }
  }
}

module.exports = GuildsManager;
