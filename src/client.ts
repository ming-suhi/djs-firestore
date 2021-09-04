import FirebaseAdmin, { ServiceAccount } from 'firebase-admin';
import { Client, Collection, OAuth2Guild } from 'discord.js';
import dotenv from 'dotenv';
import { GuildDocument } from '.';

dotenv.config();

/** Main structure for managing database */
export class FirestoreManager {
  /** Guild documents */
  public guilds: Map<string, any> = new Map;

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

  /**
   * Initialize guilds database
   */
  initializeGuilds(client: Client) {
    client.guilds.fetch().then((guilds: Collection<string, OAuth2Guild>) => {
      guilds.forEach((guild: OAuth2Guild) => {
        const document = new GuildDocument(guild.id);
        document.initialize()
        this.guilds.set(guild.id, document);
      })
    })
  }
}