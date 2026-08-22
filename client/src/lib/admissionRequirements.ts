
export type RequirementStatus = "verified" | "needs-review";

export type AdmissionRequirement = {
  pathwayId: string;
  pathwayTitle: string;
  requiredUtmeSubjects: string[];
  recommendedOLevelSubjects: string[];
  minimumOLevelCreditCount?: number;
  notes?: string[];
  sourceUrl: string;
  verificationDate: string;
  status: RequirementStatus;
};

// Based on general JAMB IBASS/Brochure guidance for Nigerian Universities
export const ADMISSION_REQUIREMENTS: AdmissionRequirement[] = [
  {
    pathwayId: "pw-ai-01",
    pathwayTitle: "Artificial Intelligence",
    requiredUtmeSubjects: ["Mathematics", "Physics", "Chemistry"],
    recommendedOLevelSubjects: ["English Language", "Mathematics", "Physics", "Chemistry", "Biology"],
    minimumOLevelCreditCount: 5,
    notes: ["Computer Studies/Data Processing may be accepted in place of Biology by some institutions."],
    sourceUrl: "https://jamb.gov.ng/ibass",
    verificationDate: "2024-05-20",
    status: "verified"
  },
  {
    pathwayId: "pw-cyber-01",
    pathwayTitle: "Cybersecurity",
    requiredUtmeSubjects: ["Mathematics", "Physics", "Chemistry"],
    recommendedOLevelSubjects: ["English Language", "Mathematics", "Physics", "Chemistry", "Biology"],
    minimumOLevelCreditCount: 5,
    notes: ["Computer Studies/Data Processing may be accepted in place of Biology by some institutions."],
    sourceUrl: "https://jamb.gov.ng/ibass",
    verificationDate: "2024-05-20",
    status: "verified"
  },
  {
    pathwayId: "pw-ds-01",
    pathwayTitle: "Data Science and Analytics",
    requiredUtmeSubjects: ["Mathematics", "Physics", "Chemistry"],
    recommendedOLevelSubjects: ["English Language", "Mathematics", "Physics", "Chemistry", "Biology"],
    minimumOLevelCreditCount: 5,
    sourceUrl: "https://jamb.gov.ng/ibass",
    verificationDate: "2024-05-20",
    status: "verified"
  },
  {
    pathwayId: "pw-se-01",
    pathwayTitle: "Software Engineering",
    requiredUtmeSubjects: ["Mathematics", "Physics", "Chemistry"],
    recommendedOLevelSubjects: ["English Language", "Mathematics", "Physics", "Chemistry", "Biology"],
    minimumOLevelCreditCount: 5,
    sourceUrl: "https://jamb.gov.ng/ibass",
    verificationDate: "2024-05-20",
    status: "verified"
  },
  {
    pathwayId: "pw-cloud-01",
    pathwayTitle: "Cloud Computing",
    requiredUtmeSubjects: ["Mathematics", "Physics", "Chemistry"],
    recommendedOLevelSubjects: ["English Language", "Mathematics", "Physics", "Chemistry", "Biology"],
    minimumOLevelCreditCount: 5,
    sourceUrl: "https://jamb.gov.ng/ibass",
    verificationDate: "2024-05-20",
    status: "verified"
  },
  {
    pathwayId: "pw-mecha-01",
    pathwayTitle: "Mechatronics / Automation",
    requiredUtmeSubjects: ["Mathematics", "Physics", "Chemistry"],
    recommendedOLevelSubjects: ["English Language", "Mathematics", "Physics", "Chemistry", "Further Mathematics"],
    minimumOLevelCreditCount: 5,
    sourceUrl: "https://jamb.gov.ng/ibass",
    verificationDate: "2024-05-20",
    status: "verified"
  },
  {
    pathwayId: "pw-biomed-01",
    pathwayTitle: "Biomedical Engineering",
    requiredUtmeSubjects: ["Mathematics", "Physics", "Chemistry"],
    recommendedOLevelSubjects: ["English Language", "Mathematics", "Physics", "Chemistry", "Biology"],
    minimumOLevelCreditCount: 5,
    sourceUrl: "https://jamb.gov.ng/ibass",
    verificationDate: "2024-05-20",
    status: "verified"
  },
  {
    pathwayId: "pw-renewable-01",
    pathwayTitle: "Renewable Energy / Sustainable Energy",
    requiredUtmeSubjects: ["Mathematics", "Physics", "Chemistry"],
    recommendedOLevelSubjects: ["English Language", "Mathematics", "Physics", "Chemistry", "Biology"],
    minimumOLevelCreditCount: 5,
    sourceUrl: "https://jamb.gov.ng/ibass",
    verificationDate: "2024-05-20",
    status: "verified"
  },
  {
    pathwayId: "Medicine & Surgery",
    pathwayTitle: "Medicine & Surgery",
    requiredUtmeSubjects: ["Biology", "Chemistry", "Physics"],
    recommendedOLevelSubjects: ["English Language", "Mathematics", "Physics", "Chemistry", "Biology"],
    minimumOLevelCreditCount: 5,
    notes: ["All 5 O'Level credits must typically be obtained at one sitting."],
    sourceUrl: "https://jamb.gov.ng/ibass",
    verificationDate: "2024-05-20",
    status: "verified"
  },
  {
    pathwayId: "Nursing / Nursing Science",
    pathwayTitle: "Nursing / Nursing Science",
    requiredUtmeSubjects: ["Physics", "Chemistry", "Biology"],
    recommendedOLevelSubjects: ["English Language", "Mathematics", "Physics", "Chemistry", "Biology"],
    minimumOLevelCreditCount: 5,
    sourceUrl: "https://jamb.gov.ng/ibass",
    verificationDate: "2024-05-20",
    status: "verified"
  },
  {
    pathwayId: "Pharmacy",
    pathwayTitle: "Pharmacy",
    requiredUtmeSubjects: ["Biology", "Physics", "Chemistry"],
    recommendedOLevelSubjects: ["English Language", "Mathematics", "Physics", "Chemistry", "Biology"],
    minimumOLevelCreditCount: 5,
    sourceUrl: "https://jamb.gov.ng/ibass",
    verificationDate: "2024-05-20",
    status: "verified"
  },
  {
    pathwayId: "Law",
    pathwayTitle: "Law",
    requiredUtmeSubjects: ["Literature in English", "any two Arts or Social Science subjects"],
    recommendedOLevelSubjects: ["English Language", "Mathematics", "Literature in English"],
    minimumOLevelCreditCount: 5,
    notes: ["A credit in Mathematics is now required by most top universities.", "A pass in Mathematics might be acceptable in a few institutions, but a credit is safest."],
    sourceUrl: "https://jamb.gov.ng/ibass",
    verificationDate: "2024-05-20",
    status: "verified"
  },
  {
    pathwayId: "Accounting",
    pathwayTitle: "Accounting",
    requiredUtmeSubjects: ["Mathematics", "Economics", "any other Commercial/Social Science subject"],
    recommendedOLevelSubjects: ["English Language", "Mathematics", "Economics", "Accounting"],
    minimumOLevelCreditCount: 5,
    sourceUrl: "https://jamb.gov.ng/ibass",
    verificationDate: "2024-05-20",
    status: "verified"
  },
  {
    pathwayId: "Business Administration",
    pathwayTitle: "Business Administration",
    requiredUtmeSubjects: ["Mathematics", "Economics", "any other Commercial/Social Science subject"],
    recommendedOLevelSubjects: ["English Language", "Mathematics", "Economics", "Commerce"],
    minimumOLevelCreditCount: 5,
    sourceUrl: "https://jamb.gov.ng/ibass",
    verificationDate: "2024-05-20",
    status: "verified"
  },
  {
    pathwayId: "Economics",
    pathwayTitle: "Economics",
    requiredUtmeSubjects: ["Mathematics", "Economics", "any of Government, History, Geography, Literature in English, French or CRK/IRK"],
    recommendedOLevelSubjects: ["English Language", "Mathematics", "Economics"],
    minimumOLevelCreditCount: 5,
    sourceUrl: "https://jamb.gov.ng/ibass",
    verificationDate: "2024-05-20",
    status: "verified"
  },
  {
    pathwayId: "Mass Communication",
    pathwayTitle: "Mass Communication",
    requiredUtmeSubjects: ["Literature in English", "any two Arts or Social Science subjects"],
    recommendedOLevelSubjects: ["English Language", "Mathematics", "Literature in English"],
    minimumOLevelCreditCount: 5,
    notes: ["A pass in Mathematics might be acceptable in some institutions, but a credit is highly recommended."],
    sourceUrl: "https://jamb.gov.ng/ibass",
    verificationDate: "2024-05-20",
    status: "verified"
  },
  {
    pathwayId: "pw-psych-01",
    pathwayTitle: "Psychology",
    requiredUtmeSubjects: ["Any three subjects from Arts or Social Sciences"],
    recommendedOLevelSubjects: ["English Language", "Mathematics", "Biology"],
    minimumOLevelCreditCount: 5,
    notes: ["Biology is often required at O'Level for Psychology. UTME subject requirements can vary widely (e.g. some accept science subjects)."],
    sourceUrl: "https://jamb.gov.ng/ibass",
    verificationDate: "2024-05-20",
    status: "needs-review"
  },
  {
    pathwayId: "pw-agriecon-01",
    pathwayTitle: "Agricultural Economics / Agribusiness",
    requiredUtmeSubjects: ["Chemistry", "Biology/Agricultural Science", "Mathematics or Physics"],
    recommendedOLevelSubjects: ["English Language", "Mathematics", "Chemistry", "Biology/Agricultural Science"],
    minimumOLevelCreditCount: 5,
    sourceUrl: "https://jamb.gov.ng/ibass",
    verificationDate: "2024-05-20",
    status: "verified"
  }
];

export function getAdmissionRequirement(pathwayId: string | undefined): AdmissionRequirement | undefined {
  if (!pathwayId) return undefined;
  return ADMISSION_REQUIREMENTS.find(req => req.pathwayId === pathwayId);
}
