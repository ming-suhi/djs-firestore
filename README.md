<p align="center">
  <img src="https://raw.githubusercontent.com/ming-suhi/djs-manager/master/assets/logo.svg" width="450" align="center" />
</p>

<p align="center">
  <a href="https://github.com/ming-suhi/djs-manager" target="_blank">
    <strong>@ming-suhi/djs-manager</strong>
  </a>
</p>

<p align="center">Discord.js | Firebase Firestore | @ming-suhi/djs-local-manager</p>


## I. About
A package for managing Discord Slash Commands, this package makes use of Firebase Firestore for database, and @ming-suhi/djs-local-manager for managing local and Discord. For an in-depth documentation visit the <a href="https://ming-suhi.github.io/djs-manager/" target="_blank">official website</a>. For users who want to opt for a similar package without a database manager, check out <a href="https://github.com/ming-suhi/djs-local-manager" target="_blank">@ming-suhi/djs-local-manager</a> from the same developer. 


## II. Getting Started
## A. Installing

##### Run npm install on the command line or terminal.
```
npm install @ming-suhi/djs-manager
```

##### Run npm ci to install dependencies.
```
npm ci
```


## B. Setting environment

1. Create a `.env` file in the root directory

```env
BOT_TOKEN = 

COMMANDS_FOLDER =

PROJECT_ID =
PRIVATE_KEY_ID =
PRIVATE_KEY = 
CLIENT_EMAIL =
CLIENT_ID =
CLIENT_X509_CERT_URL =
```

2. Get the Discord bot's token and store it as `BOT_TOKEN`.

3. Create a folder to hold command files. Store the folder path from the root as `COMMANDS_FOLDER`.

4. Get your Firebase project's `Admin SDK config` file. Store the values as their corresponding keys.
  - `type`, `auth_uri`, `token_uri`, and `auth_provider_x509_cert_url` fields need not to be stored


## C. Setting bot

1. Create an instance of Discord Client
```js
const Discord = require('discord.js');
const client = new Discord.Client();
```

2. Attach an instance of Manager Client
```js
const Manager = require('@ming-suhi/djs-manager');
client.msdm = new Manager.Client();
```

3. Login bot
```js
client.login(client.msdm.token);
```


## D. Creating commands

1. Create a file inside the commands folder

2. Require/import `@ming-suhi/djs-manager`
```js
const Manager = require('@ming-suhi/djs-manager');
```

3. Create and export instance of GlobalCommand
```js
module.exports = new Manager.GlobalCommand(commandData);
```

Example
```js
const Manager = require('@ming-suhi/djs-manager');

module.exports = new Manager.GlobalCommand({
  name: 'ping',
  description: 'pings bot to get latency',
  permissions: ["SEND_MESSAGES"],
  async execute(interaction) {
    //send latency to channel
    interaction.sendMessage(`Bot ping is: ${Math.round(interaction.client.ws.ping)}ms`);
  }
});
```


## E. Handling commands

1. Listen to `INTERACTION_CREATE`
```js
//Triggered on Slash Commands
client.ws.on('INTERACTION_CREATE', async request => {
  //code here
})
```

2. Create an instance of Manager Interaction
```js
const interaction = new Manager.Interaction(client, request);
```

3. Execute requested command
```js
client.msdm.matchCommand(interaction);
```


## F. Creating guild document

1. Listen to `guildCreate`
```js
//Triggered when bot becomes a member of a guild
client.on('guildCreate', async guild => {
  //code here
})
```

2. Create guild doc
```js
guildDb = await client.msdm.guilds.fetch(guild.id);
await guildDb.create(guild);
```


## G. Accessing Manager through interaction

1. Access Discord Client instance through the client property of interaction
```js
const client = interaction.client;
```

2. Access manager through the property which you have attached it to(refer to C.2)
```js
const manager = client.msdm;
```