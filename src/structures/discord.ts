import { Document } from "./firestore";

/** Structure for managing a specific guild document */
export class GuildDocument extends Document {
  /** Guild id */
  public readonly id: string;

  constructor(id: string) {
    super(`guilds/${id}`);
    this.id = id;
  }
}