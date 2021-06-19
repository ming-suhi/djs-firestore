const LocalManager = require('../djs-local-manager/src/index.js');

module.exports = {
  "Client": require('./client.js'),
  "Collection": require('./structures/collection.js'),
  "Document": require('./structures/document.js'),
  ...LocalManager
}