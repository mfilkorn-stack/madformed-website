import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.post("/api/contact", async (req, res) => {
    try {
      const ip = req.ip || req.socket.remoteAddress || "unknown";
      
      if (!storage.checkRateLimit(ip)) {
        return res.status(429).json({ 
          error: "Zu viele Anfragen. Bitte versuchen Sie es später erneut." 
        });
      }
      
      const validationResult = contactFormSchema.safeParse(req.body);
      
      if (!validationResult.success) {
        return res.status(400).json({ 
          error: "Ungültige Eingabe",
          details: validationResult.error.flatten().fieldErrors 
        });
      }
      
      const { honeypot, ...leadData } = validationResult.data;
      
      if (honeypot && honeypot.length > 0) {
        return res.status(200).json({ success: true });
      }
      
      const lead = await storage.createContactLead({
        name: leadData.name,
        firma: leadData.firma,
        email: leadData.email,
        telefon: leadData.telefon || null,
        thema: leadData.thema,
        nachricht: leadData.nachricht,
      });
      
      return res.status(201).json({ 
        success: true, 
        message: "Ihre Nachricht wurde erfolgreich gesendet." 
      });
      
    } catch (error) {
      console.error("Contact form error:", error);
      return res.status(500).json({ 
        error: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut." 
      });
    }
  });

  return httpServer;
}
