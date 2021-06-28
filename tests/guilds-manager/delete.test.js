const {Client} = require('../../src/index.js');

const client = new Client();
const guild_object = {"id": "test2", "name": "test2", "archived": false}

test('delete guild', async() => {
  await client.db.guilds.delete(guild_object.id);
  const guild = await client.db.guilds.get(guild_object.id);
  expect(guild).toEqual(undefined);
});