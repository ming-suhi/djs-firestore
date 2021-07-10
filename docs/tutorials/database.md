## Accessing manager through client

1. Access Discord Client instance

2. Access manager through the property which you have attached it to
    ```js
    const manager = client.msdm;
    ```

## Accessing manager through service

1. Access Discord Client instance through the client property of service
    ```js
    const client = service.client;
    ```

2. Access manager through the property which you have attached it to
    ```js
    const db = client.msdm.db;
    ```

## Creating base documents

1. Listen to `guildCreate`
    ```js
    //Triggered when bot becomes a member of a guild
    client.on('guildCreate', async guild => {
      //code here
    });
    ```

2. Create guild doc. Fetch a pseduo-doc(not yet existing doc), and post to it basic infos. Create method posts name and id.
    ```js
    guildDb = await db.guilds.fetch(guild.id);
    await guildDb.create(guild);
    ```

3. Create member docs. Loop through guild members and do the same process as with the earlier process for the guilds.
    ```js
    const members = await guild.members.fetch();
    for (let member of members) {
      const memberDb = await guildDB.members.fetch(member.id);
      await memberDb.create(member);
    }
    ```

   Resulting Code:
    ```js
    client.on('guildCreate', async guild => {
      guildDb = await db.guilds.fetch(guild.id);
      await guildDb.create(guild);
      const members = await guild.members.fetch();
      for (let member of members) {
        const memberDb = await guildDB.members.fetch(member.id);
        await memberDb.create(member);
      }
    });
    ```

## Updating documents

1. Fetch document
    ```js
    const guildDb = await db.guilds.fetch(guildId);
    ```

2. Use update method
    ```js
    await guildDb.update({"updated": true});
    ```

   Resulting Code:
    ```js
    const guildDb = await db.guilds.fetch(guildId);
    await guildDb.update({"updated": true});
    ```