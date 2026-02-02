import { type User, type InsertUser, type ContactLead, type InsertContactLead } from "@shared/schema";
import { randomUUID } from "crypto";
import * as fs from "fs";
import * as path from "path";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactLead(lead: InsertContactLead): Promise<ContactLead>;
  getContactLeads(): Promise<ContactLead[]>;
  checkRateLimit(ip: string): boolean;
}

const DATA_DIR = path.join(process.cwd(), "data");
const LEADS_FILE = path.join(DATA_DIR, "leads.json");

function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

function readLeadsFile(): ContactLead[] {
  ensureDataDir();
  if (!fs.existsSync(LEADS_FILE)) {
    return [];
  }
  try {
    const data = fs.readFileSync(LEADS_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

function writeLeadsFile(leads: ContactLead[]) {
  ensureDataDir();
  fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2));
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private rateLimitMap: Map<string, number>;
  private readonly RATE_LIMIT_WINDOW = 60000;

  constructor() {
    this.users = new Map();
    this.rateLimitMap = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactLead(lead: InsertContactLead): Promise<ContactLead> {
    const id = randomUUID();
    const createdAt = new Date();
    const contactLead: ContactLead = { ...lead, id, createdAt };
    
    const leads = readLeadsFile();
    leads.push(contactLead);
    writeLeadsFile(leads);
    
    console.log(`[Contact Lead] New inquiry from ${lead.name} (${lead.firma}) - Topic: ${lead.thema}`);
    console.log(`  Email: ${lead.email}`);
    console.log(`  Message: ${lead.nachricht.substring(0, 100)}...`);
    
    return contactLead;
  }

  async getContactLeads(): Promise<ContactLead[]> {
    return readLeadsFile();
  }

  checkRateLimit(ip: string): boolean {
    const now = Date.now();
    const lastRequest = this.rateLimitMap.get(ip);
    
    if (lastRequest && now - lastRequest < this.RATE_LIMIT_WINDOW) {
      return false;
    }
    
    this.rateLimitMap.set(ip, now);
    return true;
  }
}

export const storage = new MemStorage();
