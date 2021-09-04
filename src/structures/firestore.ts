import { firestore } from 'firebase-admin';
import { DocumentReference, DocumentData, DocumentSnapshot, WriteResult, Timestamp } from '@google-cloud/firestore';

/** Structure for managing a specific document */
export class Document {
  /** Document reference */
  public readonly reference: DocumentReference;
  /** Document data */
  protected data?: DocumentData;
  /** Document last write */
  protected deleted: boolean = false;

  /**
   * @param path Document absolute path
   */
  constructor(path: string) {
    this.reference = firestore().doc(path);
  }

  /**
   * Store data to class, and add listener
   */
  public async initialize() {
    const document = await this.reference.get();
    this.data = document.data();
    this.reference.onSnapshot(async(snapshot: DocumentSnapshot) => {
      this.data = snapshot.data();
    });
  }

  /**
   * Get document field
   * @param name Field name
   * @returns Field value
   */
  public async get(name: string) {
    return this.data![name];
  }

  /**
   * Update document field
   * @param data Document data
   */
  async update(data: any) {
    await this.reference.set(data, { merge: true });
  }

  /**
   * Delete document
   */
  async delete() {
    this.deleted = true;
    await this.reference.delete();
  }
}