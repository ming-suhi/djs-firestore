const {Client} = require('../../src/index.js');

const client = new Client();
const guild_object = {"id": "test"}
const member_object = {"id": "test2", "name": "test2", "archived": false}

test('create member', async() => {
  const guild = await client.db.guilds.fetch(guild_object.id);
  var member = await client.db.guilds.fetch(member_object.id);
  await member.create(member_object);
  var member = await client.db.guilds.get(member_object.id);
  await guild.members.delete(member_object.id);
  expect(member).toEqual(member_object);
});