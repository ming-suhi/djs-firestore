import { firestore } from 'firebase-admin';
import { DocumentReference, CollectionReference, DocumentData } from '@google-cloud/firestore';

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




