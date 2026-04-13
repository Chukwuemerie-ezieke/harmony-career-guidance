import type { VercelRequest, VercelResponse } from "@vercel/node";
import crypto from "crypto";

let handler: ((req: VercelRequest, res: VercelResponse) => Promise<void>) | null = null;

// Simple token generation from password
function makeToken(password: string): string {
  return crypto.createHash("sha256").update(password).digest("hex").slice(0, 32);
}

function checkAuth(req: VercelRequest): boolean {
  const dashPwd = process.env.DASHBOARD_PASSWORD;
  if (!dashPwd) return true; // No password set = open access (backward compat)
  const auth = req.headers["authorization"] || "";
  const token = auth.replace("Bearer ", "");
  return token === makeToken(dashPwd);
}

async function createHandler() {
  const { neon } = await import("@neondatabase/serverless");
  const { drizzle } = await import("drizzle-orm/neon-http");
  const { pgTable, text, serial } = await import("drizzle-orm/pg-core");
  const { eq, desc } = await import("drizzle-orm");

  const submissions = pgTable("submissions", {
    id: serial("id").primaryKey(),
    schoolName: text("school_name").notNull(),
    schoolCode: text("school_code").notNull(),
    firstName: text("first_name").notNull(),
    studentClass: text("student_class").notNull(),
    strongestSubjects: text("strongest_subjects").notNull(),
    interests: text("interests").notNull(),
    universityType: text("university_type").notNull(),
    preferredState: text("preferred_state").notNull(),
    gradeRange: text("grade_range").notNull(),
    recommendations: text("recommendations").notNull(),
    createdAt: text("created_at").notNull(),
  });

  function getDb() {
    const url = process.env.DATABASE_URL;
    if (!url) throw new Error("DATABASE_URL not set");
    return drizzle(neon(url));
  }

  let tablesReady = false;
  async function ensureTables() {
    if (tablesReady) return;
    const sql = neon(process.env.DATABASE_URL!);
    await sql(`
      CREATE TABLE IF NOT EXISTS submissions (
        id SERIAL PRIMARY KEY,
        school_name TEXT NOT NULL DEFAULT '',
        school_code TEXT NOT NULL DEFAULT '',
        first_name TEXT NOT NULL,
        student_class TEXT NOT NULL,
        strongest_subjects TEXT NOT NULL,
        interests TEXT NOT NULL,
        university_type TEXT NOT NULL,
        preferred_state TEXT NOT NULL,
        grade_range TEXT NOT NULL,
        recommendations TEXT NOT NULL,
        created_at TEXT NOT NULL
      )
    `);
    // Add columns to existing tables if they don't exist yet
    await sql(`ALTER TABLE submissions ADD COLUMN IF NOT EXISTS school_name TEXT NOT NULL DEFAULT ''`);
    await sql(`ALTER TABLE submissions ADD COLUMN IF NOT EXISTS school_code TEXT NOT NULL DEFAULT ''`);
    tablesReady = true;
  }

  return async (req: VercelRequest, res: VercelResponse) => {
    await ensureTables();
    const db = getDb();
    const url = req.url || "";
    const method = req.method || "GET";

    // POST /api/auth — verify dashboard password, return token
    if (method === "POST" && url.startsWith("/api/auth")) {
      const body = req.body || {};
      const password = typeof body === "string" ? JSON.parse(body).password : body.password;
      const dashPwd = process.env.DASHBOARD_PASSWORD;
      if (!dashPwd) {
        // No password configured — grant access
        return res.json({ success: true, token: "open" });
      }
      if (!password || password.trim() !== dashPwd.trim()) {
        return res.status(401).json({ error: "Incorrect password" });
      }
      return res.json({ success: true, token: makeToken(dashPwd) });
    }

    // POST /api/submissions — public (students submit without auth)
    if (method === "POST" && !url.startsWith("/api/auth")) {
      const data = req.body;
      const rows = await db.insert(submissions).values({
        schoolName: data.schoolName || "",
        schoolCode: data.schoolCode || "",
        firstName: data.firstName,
        studentClass: data.studentClass,
        strongestSubjects: data.strongestSubjects,
        interests: data.interests,
        universityType: data.universityType,
        preferredState: data.preferredState,
        gradeRange: data.gradeRange,
        recommendations: data.recommendations,
        createdAt: data.createdAt || new Date().toISOString(),
      }).returning();
      return res.json(rows[0]);
    }

    // ---- Everything below requires auth (dashboard operations) ----

    // GET /api/submissions/:id — public (for student results page)
    const idMatch = url.match(/\/api\/submissions\/(\d+)/);
    if (method === "GET" && idMatch) {
      const id = parseInt(idMatch[1]);
      const rows = await db.select().from(submissions).where(eq(submissions.id, id));
      if (!rows[0]) return res.status(404).json({ error: "Not found" });
      return res.json(rows[0]);
    }

    // GET /api/submissions (list all) — requires auth
    if (method === "GET" && (url.startsWith("/api/submissions") && !idMatch || url === "/api" || url === "/api/")) {
      if (!checkAuth(req)) return res.status(401).json({ error: "Unauthorized" });
      const urlObj = new URL(url, "http://localhost");
      const schoolCodeParam = urlObj.searchParams.get("schoolCode");
      let query = db.select().from(submissions).orderBy(desc(submissions.createdAt));
      if (schoolCodeParam && schoolCodeParam.trim()) {
        const all = await db.select().from(submissions).where(eq(submissions.schoolCode, schoolCodeParam)).orderBy(desc(submissions.createdAt));
        return res.json(all);
      }
      const all = await query;
      return res.json(all);
    }

    // DELETE /api/submissions (bulk) — requires auth
    if (method === "DELETE" && (url === "/api/submissions" || url === "/api" || url === "/api/")) {
      if (!checkAuth(req)) return res.status(401).json({ error: "Unauthorized" });
      const { ids } = req.body || {};
      if (!ids || !Array.isArray(ids) || ids.length === 0) {
        return res.status(400).json({ error: "Provide { ids: [1,2,3] }" });
      }
      const { inArray } = await import("drizzle-orm");
      await db.delete(submissions).where(inArray(submissions.id, ids));
      return res.json({ success: true, deleted: ids });
    }

    // DELETE /api/submissions/:id — requires auth
    if (method === "DELETE" && idMatch) {
      if (!checkAuth(req)) return res.status(401).json({ error: "Unauthorized" });
      const id = parseInt(idMatch[1]);
      const existing = await db.select().from(submissions).where(eq(submissions.id, id));
      if (!existing[0]) return res.status(404).json({ error: "Not found" });
      await db.delete(submissions).where(eq(submissions.id, id));
      return res.json({ success: true, deleted: id });
    }

    // Health check
    if (url.startsWith("/api/health")) {
      return res.json({ status: "ok" });
    }

    return res.status(404).json({ error: "Not found" });
  };
}

export default async function main(req: VercelRequest, res: VercelResponse) {
  try {
    if (!handler) {
      handler = await createHandler();
    }
    await handler(req, res);
  } catch (error: any) {
    console.error("API Error:", error);
    return res.status(500).json({ error: error.message });
  }
}
