const Collection =  require('../structures/collection.js');


class GuildsManager extends Collection{

  constructor() {
    super('guilds');
  }


  async get(id) {
    const doc = await this.data(id);
    return doc
  }


  async post(data) {
    await this.reference(data.id).set(data, {merge: true});
    return data;
  }


  async delete(id) {
    const docRef = this.reference(id);
    const doc = await this.data(id);
    docRef.delete();
    return doc;
  }
}

module.exports = GuildsManager;