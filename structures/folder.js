const {getFiles} = require('../utilities/directory.js');

class Folder {

  constructor(dir = "./") {

    this.directory = dir;
  }


  async get(name = null) {

    const files = getFiles(this.directory, name);
    return files;
  }
}

export default Folder;