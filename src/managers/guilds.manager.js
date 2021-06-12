const Collection = require("../structures/collection.js");
const GuildManager = require("./guild.manager.js");

class GuildsManager extends Collection {

  /**
   * Manages the guild docs of the guilds collection
   * Path: db/guilds
   */
  constructor() {
    super("guilds");
  }


  /**
   * Gets field values of doc, gets all docs if no id is passed
   * @param {string} [id] id of doc
   * @returns {object|array} field values of doc
   */
  async get(id = null) {
    const doc = await this.data(id);
    return doc;
  }


  /**
   * Posts field values of doc
   * @param {object} data field values to update
   * @param {string} data.id id of doc
   * @returns {object} updated field values of doc
   */
  async post(data) {
    await this.reference(data.id).set(data, { merge: true });
    return data;
  }


  /**
   * Posts object as field values
   * @param {string} id id of doc to delete
   * @returns {object} field values of the deleted docs
   */
  async delete(id) {
    const docRef = this.reference(id);
    const doc = await this.data(id);
    docRef.delete();
    return doc;
  }


  /**
   * Fetches doc, fetches a pseudo doc if doc does not exist
   * @param {string} id id of doc to fetch
   * @returns {GuildManager} fetched guild
   */
  async fetch(id) {
    const doc = await this.data(id);
    return new GuildManager(doc);
  }
}

module.exports = GuildsManager;
