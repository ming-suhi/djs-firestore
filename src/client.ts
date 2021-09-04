import FirebaseAdmin, { ServiceAccount } from 'firebase-admin';
import dotenv from 'dotenv';

dotenv.config();

/** Main structure for managing database */
export class FirestoreManager {
  constructor() {

    const serviceAccount: ServiceAccount = {
      projectId: process.env.PROJECT_ID,
      clientEmail: process.env.CLIENT_EMAIL,
      privateKey: process.env.PRIVATE_KEY?.replace(/\\n/g, '\n')
    }

    FirebaseAdmin.initializeApp({
      credential: FirebaseAdmin.credential.cert(serviceAccount)
    })
  }
}