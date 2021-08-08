<p align="center">
  <img src="https://raw.githubusercontent.com/ming-suhi/ming-suhi/master/djs-firestore.svg" width="100" align="center" />
</p>

<p align="center">
  <a href="https://github.com/ming-suhi/djs-firestore" target="_blank">
    <strong>@ming-suhi/djs-firestore</strong>
  </a>
</p>

<p align="center">Powered by Firebase Firestore</p>


## I. About
A package for managing your Discord bot's structured Firestore. For an in-depth documentation visit the <a href="https://ming-suhi.github.io/djs-firestore/" target="_blank">documentation website</a>. 


## II. Getting Started

## A. Installing

##### Run npm install on the command line or terminal.
```
npm install @ming-suhi/djs-firestore
```


## B. Setting environment

1. Create a `.env` file in the root directory

    ```env
    PROJECT_ID=
    CLIENT_EMAIL=
    PRIVATE_KEY=
    ```

2. Get `project_id`, `client_email`, and `private_key` of your Firebase service account and store it correspondingly.

## C. Setting up manager

1. Require `FirestoreManager` 
    ```js
    const { FirestoreManager } = require('@ming-suhi/djs-firestore');
    ```

2. Attach an instance to discord client.
    ```js
    client.db = new FirestoreManager();
    ```

## D. Creating base documents

1. Listen to `guildCreate`
    ```js
    client.on('guildCreate', async guild => {
      // Code here
    });
    ```

2. Create guild doc. Fetch a pseduo-doc(not yet existing doc), and post to it basic infos.
    ```js
    const guildDb = await client.db.guilds.fetch(guild.id);
    await guildDb.update({id: guild.id, name: guild.name});
    ```

3. Listen to `guildMemberAdd`
    ```js
    client.on('guildMemberAdd', async member => {
      // Code here
    })

4. Create member doc. Fetch a pseduo-doc(not yet existing doc), and post to it basic infos.
    ```js
    const guildDb = await client.db.guilds.fetch(member.guild.id);
    const memberDb = await guildDb.members.fetch(member.user.id);
    await memberDb.update({id: member.user.id, name: member.user.username});
    ```

## E. Other methods

1. Get data method
    ```js
    const guildDb = await client.db.guilds.fetch(guildId);
    const data = await guildDb.data();
    console.log(data);
    ```

2. Update method
    ```js
    const guildDb = await client.db.guilds.fetch(guildId);
    await guildDb.update({"updated": true});
    ```

3. Delete method
    ```js
    const guildDb = await client.db.guilds.fetch(guildId);
    await guildDb.delete();
    ```


## III. Contributing
## A. Issues
This project uses GitHub Issues to track bugs and feature requests. Please search the existing issues before filing new issues to avoid duplicates. For new issues, file your bug or feature request as a new issue.

For help and questions about using this project, please open a GitHub issue.

## B. Pull requests

1. Fork the project.

2. Create a topic branch from master.

3. Make some commits to improve the project.

4. Push this branch to your GitHub project.

5. Open a Pull Request on GitHub.

6. Discuss, and optionally continue committing.


## IV. License
MIT © 明suhi