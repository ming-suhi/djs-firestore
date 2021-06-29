const {Client, MemberManager} = require('../../src/index.js');

const client = new Client();
const guild_object = {"id": "test"}
const member_object = {"id": "test", "name": "test", "archived": false}

test('fetch member', async() => {
  const guild = await client.db.guilds.fetch(guild_object.id);
  const member = await guild.members.fetch(member_object.id);
  expect(member).toBeInstanceOf(MemberManager);
  expect(member).toHaveProperty("id", member_object.id);
  expect(member).toHaveProperty("name", member_object.name);
  expect(member).toHaveProperty("archived", member_object.archived);
});