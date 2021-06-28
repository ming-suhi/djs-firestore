const {Client} = require('../../src/index.js');

const client = new Client();
const guild_object = {"id": "test2", "name": "test2", "archived": false}

test('post guild', async() => {
  await client.db.guilds.post(guild_object);
  const guild = await client.db.guilds.get(guild_object.id);
  expect(guild).toEqual(guild_object);
});