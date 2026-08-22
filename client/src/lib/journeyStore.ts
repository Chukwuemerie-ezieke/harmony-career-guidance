export type JourneyTask = {
  id: string;
  stageId: string;
  title: string;
  description: string;
};

export type JourneyStage = {
  id: string;
  title: string;
  tasks: JourneyTask[];
};

export const JOURNEY_STAGES: JourneyStage[] = [
  {
    id: "stage-1",
    title: "1. Prepare for JAMB",
    tasks: [
      {
        id: "task-1-1",
        stageId: "stage-1",
        title: "Confirm intended course/pathway",
        description: "Ensure you have selected a pathway that aligns with your career interests and strengths."
      },
      {
        id: "task-1-2",
        stageId: "stage-1",
        title: "Check UTME subject combination",
        description: "Verify the required UTME subjects for your intended pathway using the official JAMB brochure."
      },
      {
        id: "task-1-3",
        stageId: "stage-1",
        title: "Check O'Level subject/credit readiness",
        description: "Review your O'Level subjects to ensure they meet the general requirements for your pathway."
      },
      {
        id: "task-1-4",
        stageId: "stage-1",
        title: "Review official JAMB brochure/IBASS guidance",
        description: "Consult the JAMB Interactive Brochure and Syllabus System (IBASS) for the most accurate and up-to-date subject requirements."
      },
      {
        id: "task-1-5",
        stageId: "stage-1",
        title: "Build a UTME revision plan",
        description: "Create a study schedule focusing on the official UTME syllabus for your chosen subjects."
      }
    ]
  },
  {
    id: "stage-2",
    title: "2. UTME",
    tasks: [
      {
        id: "task-2-1",
        stageId: "stage-2",
        title: "Register through official channels",
        description: "Complete your JAMB registration at an accredited CBT centre or official JAMB office."
      },
      {
        id: "task-2-2",
        stageId: "stage-2",
        title: "Confirm exam slip/details",
        description: "Print and verify your examination slip from the official JAMB portal to confirm your exam date, time, and centre."
      },
      {
        id: "task-2-3",
        stageId: "stage-2",
        title: "Sit for UTME",
        description: "Attend your scheduled UTME at the designated CBT centre."
      },
      {
        id: "task-2-4",
        stageId: "stage-2",
        title: "Record or review UTME score locally",
        description: "Once released, you can securely save your UTME score in this planner to guide your institution choices."
      },
      {
        id: "task-2-5",
        stageId: "stage-2",
        title: "Review suitable course/institution options",
        description: "Based on your score, evaluate your institution and course choices using official admissions pages."
      }
    ]
  },
  {
    id: "stage-3",
    title: "3. Post-UTME / Institution Steps",
    tasks: [
      {
        id: "task-3-1",
        stageId: "stage-3",
        title: "Confirm chosen institution's screening process",
        description: "Identify the specific screening methods, requirements, and deadlines for your selected institution."
      },
      {
        id: "task-3-2",
        stageId: "stage-3",
        title: "Check the official institution admissions page",
        description: "Rely only on the official website or portal of the university for admission criteria and screening updates."
      },
      {
        id: "task-3-3",
        stageId: "stage-3",
        title: "Submit any required screening application",
        description: "Complete the Post-UTME or screening registration accurately and within the stipulated timeline."
      },
      {
        id: "task-3-4",
        stageId: "stage-3",
        title: "Prepare required documents",
        description: "Gather necessary original documents, such as O'Level results, JAMB result slip, birth certificate, and state of origin."
      },
      {
        id: "task-3-5",
        stageId: "stage-3",
        title: "Monitor official announcements",
        description: "Regularly check the institution's official portal and verified channels for updates on screening dates or admission lists."
      }
    ]
  },
  {
    id: "stage-4",
    title: "4. JAMB CAPS",
    tasks: [
      {
        id: "task-4-1",
        stageId: "stage-4",
        title: "Check CAPS/admission status through official JAMB channels",
        description: "Log in to your JAMB e-Facility profile to monitor your Central Admissions Processing System (CAPS) status."
      },
      {
        id: "task-4-2",
        stageId: "stage-4",
        title: "Ensure O'Level results are uploaded where required",
        description: "Verify that your O'Level results are correctly uploaded to the JAMB portal; without this, admission cannot be processed."
      },
      {
        id: "task-4-3",
        stageId: "stage-4",
        title: "Review admission offer",
        description: "Carefully review any offer of admission on CAPS, ensuring it aligns with your chosen institution and programme."
      },
      {
        id: "task-4-4",
        stageId: "stage-4",
        title: "Accept or reject only through the official JAMB process",
        description: "Respond to your admission offer exclusively via the official JAMB CAPS interface."
      },
      {
        id: "task-4-5",
        stageId: "stage-4",
        title: "Keep a reminder to verify every status through JAMB",
        description: "Treat only the official JAMB CAPS status and formal institution portals as sources of truth for your admission."
      }
    ]
  },
  {
    id: "stage-5",
    title: "5. Admission and Clearance",
    tasks: [
      {
        id: "task-5-1",
        stageId: "stage-5",
        title: "Confirm admission with institution",
        description: "Verify that your admission is also reflected on your chosen university's official portal and print necessary documents."
      },
      {
        id: "task-5-2",
        stageId: "stage-5",
        title: "Pay only through approved institutional channels",
        description: "Make all required payments (acceptance fees, clearance) strictly through the university's designated payment platforms."
      },
      {
        id: "task-5-3",
        stageId: "stage-5",
        title: "Complete clearance/registration steps",
        description: "Follow the institution's official guidelines for physical or online clearance and registration."
      },
      {
        id: "task-5-4",
        stageId: "stage-5",
        title: "Prepare accommodation, documents, and resumption plan",
        description: "Organise your living arrangements, safely store all required original and photocopied documents, and plan for the resumption date."
      },
      {
        id: "task-5-5",
        stageId: "stage-5",
        title: "Save a final checklist of institution-specific steps",
        description: "Create a personalised list based on your university's specific requirements to ensure you miss no final enrollment steps."
      }
    ]
  }
];

export const TOTAL_JOURNEY_TASKS = JOURNEY_STAGES.reduce((acc, stage) => acc + stage.tasks.length, 0);

export type JourneyData = {
  completedTaskIds: string[];
  utmeScore?: number;
  pathwayId?: string;
  lastUpdated: number;
};

const JOURNEY_KEY = "pathverge_admission_journey";

const defaultJourneyData: JourneyData = {
  completedTaskIds: [],
  lastUpdated: Date.now()
};

export function getLocalJourneyData(): JourneyData {
  try {
    const dataStr = localStorage.getItem(JOURNEY_KEY);
    if (dataStr) {
      const parsed = JSON.parse(dataStr);
      // Ensure we have a valid structure in case of malformed data
      if (parsed && Array.isArray(parsed.completedTaskIds)) {
        return {
           completedTaskIds: parsed.completedTaskIds,
           utmeScore: typeof parsed.utmeScore === 'number' ? parsed.utmeScore : undefined,
           pathwayId: typeof parsed.pathwayId === 'string' ? parsed.pathwayId : undefined,
           lastUpdated: typeof parsed.lastUpdated === 'number' ? parsed.lastUpdated : Date.now()
        };
      }
    }
  } catch (e) {
    console.error("Failed to parse local journey data, returning fresh data.", e);
  }
  return { ...defaultJourneyData };
}

export function saveLocalJourneyData(data: JourneyData): void {
  try {
    data.lastUpdated = Date.now();
    localStorage.setItem(JOURNEY_KEY, JSON.stringify(data));
  } catch (e) {
    console.error("Failed to save local journey data.", e);
  }
}

export function clearLocalJourneyData(): void {
  try {
    localStorage.removeItem(JOURNEY_KEY);
  } catch (e) {
    console.error("Failed to clear local journey data.", e);
  }
}
