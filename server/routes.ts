import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  // Save a student submission
  app.post("/api/submissions", async (req, res) => {
    try {
      const data = req.body;
      const submission = await storage.createSubmission({
        firstName: data.firstName,
        studentClass: data.studentClass,
        strongestSubjects: data.strongestSubjects,
        interests: data.interests,
        universityType: data.universityType,
        preferredState: data.preferredState,
        gradeRange: data.gradeRange,
        recommendations: data.recommendations,
        createdAt: new Date().toISOString(),
      });
      res.json(submission);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  // Get all submissions (for counsellor dashboard)
  app.get("/api/submissions", async (_req, res) => {
    try {
      const all = await storage.getSubmissions();
      res.json(all);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  // Get single submission
  app.get("/api/submissions/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const submission = await storage.getSubmission(id);
      if (!submission) {
        return res.status(404).json({ error: "Submission not found" });
      }
      res.json(submission);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  return httpServer;
}
