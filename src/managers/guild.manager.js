const Document =  require('../structures/document.js');


class GuildManager extends Document {

  constructor(data) {
    super(`guilds/${data.id}`);
    Object.assign(this, data);
  }

  
  async update(data) {
    await this.reference().set(data, {merge: true});
  }
}

module.exports = GuildManager;