const {Client} = require('../../src/index.js');

const client = new Client();
const guild_object = {"id": "test", "name": "test", "archived": false}

test('get guild', async() => {
  const guild = await client.db.guilds.get(guild_object.id);
  expect(guild).toEqual(guild_object);
});