import type { VercelRequest, VercelResponse } from "@vercel/node";

let handler: ((req: VercelRequest, res: VercelResponse) => Promise<void>) | null = null;

async function createHandler() {
  const { neon } = await import("@neondatabase/serverless");
  const { drizzle } = await import("drizzle-orm/neon-http");
  const { pgTable, text, serial } = await import("drizzle-orm/pg-core");
  const { eq, desc } = await import("drizzle-orm");

  const submissions = pgTable("submissions", {
    id: serial("id").primaryKey(),
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
    tablesReady = true;
  }

  return async (req: VercelRequest, res: VercelResponse) => {
    await ensureTables();
    const db = getDb();
    const url = req.url || "";
    const method = req.method || "GET";

    // GET /api/submissions
    if (method === "GET" && (url === "/api/submissions" || url === "/api" || url === "/api/")) {
      const all = await db.select().from(submissions).orderBy(desc(submissions.createdAt));
      return res.json(all);
    }

    // GET /api/submissions/:id
    const idMatch = url.match(/\/api\/submissions\/(\d+)/);
    if (method === "GET" && idMatch) {
      const id = parseInt(idMatch[1]);
      const rows = await db.select().from(submissions).where(eq(submissions.id, id));
      if (!rows[0]) return res.status(404).json({ error: "Not found" });
      return res.json(rows[0]);
    }

    // POST /api/submissions
    if (method === "POST") {
      const data = req.body;
      const rows = await db.insert(submissions).values({
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
