import { pgTable, text, serial } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const submissions = pgTable("submissions", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  studentClass: text("student_class").notNull(),
  strongestSubjects: text("strongest_subjects").notNull(), // JSON array
  interests: text("interests").notNull(), // JSON array
  universityType: text("university_type").notNull(),
  preferredState: text("preferred_state").notNull(),
  gradeRange: text("grade_range").notNull(),
  recommendations: text("recommendations").notNull(), // JSON array of recommendations
  createdAt: text("created_at").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertSubmissionSchema = createInsertSchema(submissions).omit({
  id: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertSubmission = z.infer<typeof insertSubmissionSchema>;
export type Submission = typeof submissions.$inferSelect;

// Student form input type
export const studentFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  studentClass: z.string().min(1, "Class is required"),
  strongestSubjects: z.array(z.string()).min(3, "Select exactly 3 subjects").max(3, "Select exactly 3 subjects"),
  interests: z.array(z.string()).min(1, "Select at least one interest"),
  universityType: z.string().min(1, "University type is required"),
  preferredState: z.string().min(1, "Preferred state is required"),
  gradeRange: z.string().min(1, "Grade range is required"),
});

export type StudentFormInput = z.infer<typeof studentFormSchema>;
