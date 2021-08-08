import { firestore } from 'firebase-admin';
import { DocumentReference, CollectionReference, DocumentData } from '@google-cloud/firestore';
import { getDocs } from '../utilities/firestore';

export class Document {

  path: string;

  constructor(path: string) {
    this.path = path;
  }

  get reference(): DocumentReference {
    return firestore().doc(this.path);
  }

  async data(): Promise<DocumentData|undefined> {
    const doc = await this.reference.get();
    return doc.data();
  }
}

export class Collection {

  path: string;

  constructor(path: string) {
    this.path = path;
  }

  get reference(): CollectionReference {
    return firestore().collection(this.path);
  }

  async data(): Promise<Array<DocumentData>> {
    const collection = await this.reference.get();
    return getDocs(collection);
  }
}




