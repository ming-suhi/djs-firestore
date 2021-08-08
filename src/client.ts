import FirebaseAdmin, { ServiceAccount } from 'firebase-admin';
import dotenv from 'dotenv';
import { UsersCollection, GuildsCollection } from './structures/discord';

/** Main structure for managing database */
export class FirestoreManager {
  /** Manage user documents */
  users: UsersCollection;
  /** Manage guild documents */
  guilds: GuildsCollection;

  constructor() {
    dotenv.config();

    const serviceAccount: ServiceAccount = {
      projectId: process.env.PROJECT_ID,
      clientEmail: process.env.CLIENT_EMAIL,
      privateKey: process.env.PRIVATE_KEY?.replace(/\\n/g, '\n')
    }

    FirebaseAdmin.initializeApp({
      credential: FirebaseAdmin.credential.cert(serviceAccount)
    })

    this.users = new UsersCollection();
    this.guilds = new GuildsCollection();
  }
}