import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWaitlistSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export function registerRoutes(app: Express): Server {
  app.post("/api/waitlist", async (req, res) => {
    try {
      const data = insertWaitlistSchema.parse(req.body);
      
      const isRegistered = await storage.isEmailRegistered(data.email);
      if (isRegistered) {
        return res.status(400).json({ 
          message: "This email is already registered" 
        });
      }

      const entry = await storage.addToWaitlist(data);
      res.status(201).json(entry);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ 
          message: fromZodError(error).message 
        });
      } else {
        res.status(500).json({ 
          message: "An unexpected error occurred" 
        });
      }
    }
  });

  app.get("/api/waitlist/count", async (_req, res) => {
    try {
      const count = await storage.getWaitlistCount();
      res.json({ count });
    } catch (error) {
      res.status(500).json({ 
        message: "Failed to get waitlist count" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
