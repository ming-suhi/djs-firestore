const LocalManager = require('@ming-suhi/djs-local-manager');

module.exports = {
  "Client": require('./client.js'),
  "Collection": require('./structures/collection.js'),
  "Document": require('./structures/document.js'),
  ...LocalManager
}