const LocalManager = require('@ming-suhi/djs-local-manager');

module.exports = {
  "Client": require('./client.js'),
  "Collection": require('./structures/collection.js'),
  "Document": require('./structures/document.js'),
  "GuildsManager": require('./managers/guilds.manager.js'),
  "GuildManager": require('./managers/guild.manager.js'),
  "UsersManager": require('./managers/users.manager.js'),
  "UserManager": require('./managers/user.manager.js'),
  ...LocalManager
}