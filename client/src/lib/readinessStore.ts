// Local storage wrapper for readiness
export type LocalSubjectData = {
  utmeSubjects: string[];
  oLevelSubjects: { subject: string; grade?: string }[];
  creditCount?: number;
};

const READINESS_KEY = "pathverge_readiness_data";

export function getLocalSubjectData(): LocalSubjectData {
  try {
    const data = localStorage.getItem("pathverge_readiness_data");
    if (data) {
      const parsed = JSON.parse(data);
      if (parsed && typeof parsed === 'object') {
        return {
          utmeSubjects: Array.isArray(parsed.utmeSubjects) ? parsed.utmeSubjects : [],
          oLevelSubjects: Array.isArray(parsed.oLevelSubjects) ? parsed.oLevelSubjects : [],
          creditCount: typeof parsed.creditCount === 'number' ? parsed.creditCount : undefined
        };
      }
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
