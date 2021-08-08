import FirebaseAdmin, { ServiceAccount } from 'firebase-admin';
import dotenv from 'dotenv';

export class FirestoreManager {

  constructor() {
    dotenv.config();

    const serviceAccount: ServiceAccount = {
      projectId: process.env.PROJECT_ID,
      clientEmail: process.env.CLIENT_EMAIL,
      privateKey: process.env.PRIVATE_KEY
    }

    FirebaseAdmin.initializeApp({
      credential: FirebaseAdmin.credential.cert(serviceAccount)
    })
  }
}