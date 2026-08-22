import { type AdmissionRequirement } from "./admissionRequirements";

export type ReadinessStatus = 
  | "likely-aligned" 
  | "needs-verification" 
  | "potential-mismatch" 
  | "not-enough-info";

export type ReadinessResult = {
  status: ReadinessStatus;
  statusText: string;
  foundUtme: string[];
  missingUtme: string[];
  foundOLevel: string[];
  missingOLevel: string[];
  lowGrades: string[];
  suggestions: string[];
};

// Generic minimum credit grade representation in WAEC/NECO is C6
const CREDIT_GRADES = ["A1", "B2", "B3", "C4", "C5", "C6"];

export function evaluateReadiness(
  requirement: AdmissionRequirement | undefined,
  enteredUtme: string[],
  enteredOLevel: { subject: string; grade?: string }[]
): ReadinessResult {
  if (!requirement || (enteredUtme.length === 0 && enteredOLevel.length === 0)) {
    return {
      status: "not-enough-info",
      statusText: "Not enough information",
      foundUtme: [],
      missingUtme: [],
      foundOLevel: [],
      missingOLevel: [],
      lowGrades: [],
      suggestions: ["Requirements not yet available or subject data missing—verify with JAMB and your chosen institution."]
    };
  }

  const foundUtme: string[] = [];
  const missingUtme: string[] = [];
  const foundOLevel: string[] = [];
  const missingOLevel: string[] = [];
  const lowGrades: string[] = [];
  const suggestions: string[] = [];

  // Very simplified UTME subject check (real check requires semantic matching like 'Any two arts')
  // We do basic string inclusion checking for demonstration and robust general matching
  
  for (const reqSub of requirement.requiredUtmeSubjects) {
      // If it's a generic rule like "any two", we flag it as needs-review or assume matched if they have enough subjects. 
      // For simplicity in this logic, if it contains "any", we add to found if they have subjects, but flag needs verification.
      const lowerReq = reqSub.toLowerCase();
      if (lowerReq.includes("any")) {
         foundUtme.push(reqSub);
      } else {
         const match = enteredUtme.find(e => e.toLowerCase().includes(lowerReq) || lowerReq.includes(e.toLowerCase()));
         if (match) {
             foundUtme.push(reqSub);
         } else {
             missingUtme.push(reqSub);
         }
      }
  }

  for (const reqSub of requirement.recommendedOLevelSubjects) {
      const lowerReq = reqSub.toLowerCase();
      const match = enteredOLevel.find(e => {
          // handle Biology/Agricultural Science generic splits
          const parts = lowerReq.split("/");
          return parts.some(p => e.subject.toLowerCase().includes(p.trim()));
      });
      if (match) {
          foundOLevel.push(reqSub);
          if (match.grade && !CREDIT_GRADES.includes(match.grade.toUpperCase()) && match.grade.toUpperCase() !== "PENDING") {
              lowGrades.push(`${match.subject} (${match.grade})`);
          }
      } else {
          missingOLevel.push(reqSub);
      }
  }

  let status: ReadinessStatus = "likely-aligned";
  let statusText = "Likely aligned";

  if (missingUtme.length > 0 || lowGrades.length > 0) {
      status = "potential-mismatch";
      statusText = "Potential subject mismatch";
      if (missingUtme.length > 0) suggestions.push(`You may be missing required UTME subjects: ${missingUtme.join(", ")}.`);
      if (lowGrades.length > 0) suggestions.push(`Some relevant O'Level subjects are below a credit pass: ${lowGrades.join(", ")}.`);
  } else if (requirement.status === "needs-review" || requirement.requiredUtmeSubjects.some(s => s.toLowerCase().includes("any")) || enteredUtme.length < 4 || missingOLevel.length > 0) {
      status = "needs-verification";
      statusText = "Needs verification";
      if (missingOLevel.length > 0) suggestions.push(`Ensure you have relevant O'Level credits such as: ${missingOLevel.join(", ")}.`);
      suggestions.push("Please verify specific institution variations for 'any' subject options or alternative requirements.");
  } else {
      suggestions.push("Your subjects appear broadly aligned with general JAMB requirements for this pathway.");
  }

  return {
      status,
      statusText,
      foundUtme,
      missingUtme,
      foundOLevel,
      missingOLevel,
      lowGrades,
      suggestions
  };
}
