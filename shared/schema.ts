import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const contactLeads = pgTable("contact_leads", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  firma: text("firma").notNull(),
  email: text("email").notNull(),
  telefon: text("telefon"),
  thema: text("thema").notNull(),
  nachricht: text("nachricht").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertContactLeadSchema = createInsertSchema(contactLeads).omit({
  id: true,
  createdAt: true,
});

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name muss mindestens 2 Zeichen lang sein"),
  firma: z.string().min(1, "Bitte geben Sie Ihre Firma an"),
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein"),
  telefon: z.string().optional(),
  thema: z.enum(["cannabis", "medizintechnik", "allgemein"]),
  nachricht: z.string().min(10, "Nachricht muss mindestens 10 Zeichen lang sein"),
  honeypot: z.string().max(0).optional(),
});

export type InsertContactLead = z.infer<typeof insertContactLeadSchema>;
export type ContactLead = typeof contactLeads.$inferSelect;
export type ContactFormData = z.infer<typeof contactFormSchema>;
