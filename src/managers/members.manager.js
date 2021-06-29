const Collection = require("../structures/collection.js");
const MemberManager = require("./member.manager.js");


class MembersManager extends Collection {

  /**
   * Manages the member docs of the members collection
   * Path: db/guilds/{guildID}/members
   * @augments Collection
   * @param {guildID} guildID guild id
   * @property {guildID} guildID guild id
   * @property {collectionPath} path absolute path leading collection
   */
  constructor(guildID) {
    super(`guilds/${guildID}/members`);
    this.guildID = guildID;
  }

  /**
   * Gets field values of doc, gets all docs if no id is passed
   * @param {userID} [id] id of member to get
   * @returns {docData|collectionData} member field values
   */
   async get(id = null) {
    const doc = await this.data(id);
    return doc;
  }


  /**
   * Posts field values of doc
   * @param {fieldValues} data field values of member to post
   * @param {userID} data.id id of member to post
   * @returns {fieldValues} updated field values of member
   */
   async post(data) {
    await this.reference(data.id).set(data, { merge: true });
    return data;
  }


  /**
   * Posts object as field values
   * @param {userID} id id of member to delete
   * @returns {fieldValues} field values of the deleted member
   */
  async delete(id) {
    const docRef = this.reference(id);
    const doc = await this.data(id);
    await docRef.delete();
    return doc;
  }


  /**
   * Fetches doc, fetches a pseudo doc if doc does not exist
   * @param {userID} id id  of member to fetch
   * @returns {MemberManager} fetched member
   */
   async fetch(id) {
    const doc = await this.data(id);
    if (doc == undefined) {
      return new MemberManager(this.guildID, {"id": id});
    } else {
      return new MemberManager(this.guildID, doc);
    }
  }
}

module.exports = MembersManager;