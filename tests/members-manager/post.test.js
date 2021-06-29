const {Client} = require('../../src/index.js');

const client = new Client();
const guild_object = {"id": "test"}
const member_object = {"id": "test2", "name": "test2", "archived": false}

test('post member', async() => {
  const guild = await client.db.guilds.fetch(guild_object.id);
  await guild.members.post(member_object);
  const member = await guild.members.get(member_object.id);
  expect(member).toEqual(member_object);
});