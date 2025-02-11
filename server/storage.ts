import { waitlist, type Waitlist, type InsertWaitlist } from "@shared/schema";

export interface IStorage {
  addToWaitlist(email: InsertWaitlist): Promise<Waitlist>;
  isEmailRegistered(email: string): Promise<boolean>;
  getWaitlistCount(): Promise<number>;
}

export class MemStorage implements IStorage {
  private waitlist: Map<number, Waitlist>;
  private currentId: number;

  constructor() {
    this.waitlist = new Map();
    this.currentId = 1;
  }

  async addToWaitlist(insertData: InsertWaitlist): Promise<Waitlist> {
    const id = this.currentId++;
    const entry: Waitlist = {
      ...insertData,
      id,
      createdAt: new Date(),
    };
    this.waitlist.set(id, entry);
    return entry;
  }

  async isEmailRegistered(email: string): Promise<boolean> {
    return Array.from(this.waitlist.values()).some(
      (entry) => entry.email === email
    );
  }

  async getWaitlistCount(): Promise<number> {
    return this.waitlist.size;
  }
}

export const storage = new MemStorage();
