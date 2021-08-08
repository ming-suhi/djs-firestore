import { firestore } from 'firebase-admin';
import { DocumentReference, CollectionReference, DocumentData } from '@google-cloud/firestore';
import { getDocs } from '../utilities/firestore';

/** Structure for managing a specific document */
export class Document {
  /** Path from root */
  path: string;

  /**
   * @param path Path from root
   */
  constructor(path: string) {
    this.path = path;
  }

  /**
   * Get reference
   * @returns Document reference
   */
  get reference(): DocumentReference {
    return firestore().doc(this.path);
  }

  /**
   * Get data
   * @returns Document data
   */
  async data(): Promise<DocumentData|undefined> {
    const doc = await this.reference.get();
    return doc.data();
  }
}

/** Structure for managing a specific collection */
export class Collection {
  /** Path from root */
  path: string;

  /**
   * @param path Path from root
   */
  constructor(path: string) {
    this.path = path;
  }

  /**
   * Get reference
   * @returns Collection reference
   */
  get reference(): CollectionReference {
    return firestore().collection(this.path);
  }

  /**
   * Get documents data
   * @returns Document data
   */
  async data(): Promise<Array<DocumentData|undefined>> {
    const collection = await this.reference.get();
    return getDocs(collection);
  }
}