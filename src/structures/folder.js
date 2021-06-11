const {getFiles} = require('../utilities/directory.js');

class Folder {

  /**
   * Folder structure
   * @param {string} [dir] absolute path to folder
   */
  constructor(dir = "./") {

    this.directory = dir;
  }


  /**
   * Get exports from file
   * @param {string} [name] file name
   * @returns {object|array} exports from file
   */
  async get(name = null) {

    const files = getFiles(this.directory, name);
    return files;
  }
}

export default Folder;