const {Client} = require('../../src/index.js');

const client = new Client();
const guild_object = {"id": "test"}
const member_object = {"id": "test", "name": "test", "archived": false}

test('get member', async() => {
  const guild = await client.db.guilds.fetch(guild_object.id);
  const member = await guild.members.get(member_object.id);
  expect(member).toEqual(member_object);
});