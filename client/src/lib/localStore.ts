// LocalStorage-based data store for GitHub Pages static deployment
// Replaces the server-side SQLite database

const SUBMISSIONS_KEY = "career_guidance_submissions";

export interface LocalSubmission {
  id: number;
  firstName: string;
  studentClass: string;
  strongestSubjects: string;
  interests: string;
  universityType: string;
  preferredState: string;
  gradeRange: string;
  recommendations: string;
  createdAt: string;
}

function getAll(): LocalSubmission[] {
  try {
    const raw = localStorage.getItem(SUBMISSIONS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveAll(submissions: LocalSubmission[]) {
  localStorage.setItem(SUBMISSIONS_KEY, JSON.stringify(submissions));
}

export function createSubmission(
  data: Omit<LocalSubmission, "id" | "createdAt">
): LocalSubmission {
  const all = getAll();
  const id = all.length > 0 ? Math.max(...all.map((s) => s.id)) + 1 : 1;
  const submission: LocalSubmission = {
    ...data,
    id,
    createdAt: new Date().toISOString(),
  };
  all.push(submission);
  saveAll(all);
  return submission;
}

export function getSubmission(id: number): LocalSubmission | undefined {
  return getAll().find((s) => s.id === id);
}

export function getSubmissions(): LocalSubmission[] {
  return getAll().sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}
