## A. Accessing Manager through client

1. Access Discord Client instance

2. Access manager through the property which you have attached it to
    ```js
    const manager = client.msdm;
    ```

## B. Accessing Manager through interaction

1. Access Discord Client instance through the client property of interaction
    ```js
    const client = interaction.client;
    ```

2. Access manager through the property which you have attached it to
    ```js
    const manager = client.msdm;
    ```

## C. Creating base documents

1. Listen to `guildCreate`
    ```js
    //Triggered when bot becomes a member of a guild
    client.on('guildCreate', async guild => {
      //code here
    });
    ```

2. Create guild doc
    ```js
    guildDb = await client.msdm.guilds.fetch(guild.id);
    await guildDb.create(guild);
    ```

3. Create member docs
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
      guildDb = await client.msdm.guilds.fetch(guild.id);
      await guildDb.create(guild);
      const members = await guild.members.fetch();
      for (let member of members) {
        const memberDb = await guildDB.members.fetch(member.id);
        await memberDb.create(member);
      }
    });
    ```

## D. Updating documents

1. Fetch document
    ```js
    const guildDb = await client.msdm.db.guilds.fetch(guildId);
    ```

2. Use update method
    ```js
    await guildDb.update({"updated": true});
    ```

   Resulting Code:
    ```js
    const guildDb = await client.msdm.db.guilds.fetch(guildId);
    await guildDb.update({"updated": true});
    ```