const {Client} = require('../../src/index.js');

const client = new Client();
const guild_object = {"id": "test2", "name": "test2", "archived": false}

test('create guild', async() => {
  var guild = await client.db.guilds.fetch(guild_object.id);
  await guild.create(guild_object);
  var guild = await client.db.guilds.get(guild_object.id);
  await client.db.guilds.delete(guild_object.id);
  expect(guild).toEqual(guild_object);
});