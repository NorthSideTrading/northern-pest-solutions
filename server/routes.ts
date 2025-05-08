import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint to handle contact form submissions
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, phone, service, message } = req.body;
      
      // Validate required fields
      if (!name || !email || !phone || !message) {
        return res.status(400).json({ message: 'Missing required fields' });
      }
      
      // In a real application, you would store this data or send an email
      // For now, just return success
      return res.status(200).json({ 
        message: 'Message received successfully',
        data: { name, email, phone, service, message }
      });
    } catch (error) {
      console.error('Error handling contact form submission:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
