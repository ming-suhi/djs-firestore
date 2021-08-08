import { QuerySnapshot, DocumentData } from "@google-cloud/firestore";

export function getDocs(collection: QuerySnapshot): Array<DocumentData>{
  const docs = new Array();
  collection.forEach(doc => {
    docs.push(doc.data());
  });
  return docs;
}