const {Client, GuildManager} = require('../../src/index.js');

const client = new Client();
const guild_object = {"id": "test", "name": "test", "archived": false}

test('fetch guild', async() => {
  const guild = await client.db.guilds.fetch(guild_object.id);
  expect(guild).toBeInstanceOf(GuildManager);
  expect(guild).toHaveProperty("id", guild_object.id);
  expect(guild).toHaveProperty("name", guild_object.name);
  expect(guild).toHaveProperty("archived", guild_object.archived);
});