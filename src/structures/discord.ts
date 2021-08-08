import { Collection, Document } from "./firestore";

/** Structure for managing user documents */
export class UsersCollection extends Collection {
  constructor() {
    super(`users`);
  }

  /**
   * Fetch a user document
   * @param userID Guild id
   * @returns User document
   */
  async fetch(userID: string): Promise<UserDocument> {
    return new UserDocument(userID);
  }
}

/** Structure for managing a specific user document */
export class UserDocument extends Document {
  /** User id */
  userID: string;

  constructor(userID: string) {
    super(`users/${userID}`);
    this.userID = userID;
  }
}

/** Structure for managing guild documents */
export class GuildsCollection extends Collection {
  constructor() {
    super(`guilds`);
  }

  /**
   * Fetch a guild document
   * @param guildID Guild id
   * @returns Guild document
   */
  async fetch(guildID: string): Promise<GuildDocument> {
    return new GuildDocument(guildID);
  }
}

/** Structure for managing a specific guild document */
export class GuildDocument extends Document {
  /** Guild id */
  guildID: string;
  /** Structure for managing member documents */
  members: MembersCollection;

  constructor(guildID: string) {
    super(`guilds/${guildID}`);
    this.guildID = guildID;
    this.members = new MembersCollection(guildID);
  }
}

/** Structure for managing member documents */
export class MembersCollection extends Collection {
  /** Guild id */
  guildID: string;

  constructor(guildID: string) {
    super(`guilds/${guildID}/members`);
    this.guildID = guildID;
  }

  /**
   * Fetch a member document
   * @param userID User id of a member
   * @returns 
   */
  async fetch(userID: string): Promise<MemberDocument> {
    return new MemberDocument(this.guildID, userID);
  }
}

/** Stucture for managing a specific member document */
export class MemberDocument extends Document {
  /** Guild id */
  guildID: string;
  /** User id of a member */
  userID: string;

  constructor(guildID: string, userID: string) {
    super(`guilds//${guildID}/members/${userID}`);
    this.guildID = guildID;
    this.userID = userID;
  }
}