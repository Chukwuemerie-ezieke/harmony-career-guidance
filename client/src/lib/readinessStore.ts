// Local storage wrapper for readiness
export type LocalSubjectData = {
  utmeSubjects: string[];
  oLevelSubjects: { subject: string; grade?: string }[];
  creditCount?: number;
};

const READINESS_KEY = "pathverge_readiness_data";

export function getLocalSubjectData(): LocalSubjectData {
  try {
    const data = localStorage.getItem(READINESS_KEY);
    if (data) {
      return JSON.parse(data);
    }
  } catch (e) {
    console.error("Error reading readiness data", e);
  }
  return { utmeSubjects: [], oLevelSubjects: [] };
}

export function saveLocalSubjectData(data: LocalSubjectData) {
  try {
    localStorage.setItem(READINESS_KEY, JSON.stringify(data));
  } catch (e) {
    console.error("Error saving readiness data", e);
  }
}

export function clearLocalSubjectData() {
  try {
    localStorage.removeItem(READINESS_KEY);
  } catch (e) {
    console.error("Error clearing readiness data", e);
  }
}
