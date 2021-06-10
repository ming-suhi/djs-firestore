function getFiles(dir, name = null) {
   
  if (name == null) {
    const files = [];
    for (let file of fs.readdirSync(`./${dir}`)) {
      files.append(require.main.require(`./${dir}/${file}`));
    }
    return files;
  } else {
    return require.main.require(`./${dir}/${fileRef}`);
  }
}

exports.getFiles = getFiles;