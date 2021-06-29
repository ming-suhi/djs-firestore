const LocalManager = require('@ming-suhi/djs-local-manager');

module.exports = {
  "Client": require('./client.js'),
  "Collection": require('./structures/collection.js'),
  "Document": require('./structures/document.js'),
  "GuildsManager": require('./managers/guilds.manager.js'),
  "GuildManager": require('./managers/guild.manager.js'),
  "MembersManager": require('./managers/members.manager.js'),
  "MemberManager": require('./managers/member.manager.js'),
  ...LocalManager
}