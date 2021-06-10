async function getDocs(collection) {
  const docs = [];
  collection.forEach(doc => {
    docs.push(doc.data());
  });
  return docs
}

exports.getDocs = getDocs;