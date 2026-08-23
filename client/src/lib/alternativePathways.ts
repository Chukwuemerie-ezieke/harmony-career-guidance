export type AlternativePathwayType =
  | "polytechnic"
  | "college-of-education"
  | "tvet"
  | "professional-certification"
  | "digital-skills";

export type ProviderOption = {
  id: string;
  providerName: string;
  providerType: string;
  location: string;
  country: "Nigeria";
  offeringTitle: string;
  officialUrl: string;
  verificationDate: string;
  status: "verified" | "needs-review";
};

export type AlternativePathway = {
  id: string;
  coursePathwayId?: string; // Link to CoursePathway.id where applicable
  title: string;
  pathwayType: AlternativePathwayType;
  summary: string;
  typicalDuration?: string;
  progressionOptions: string[];
  suitableFor: string[];
  relatedCareers: string[];
  keySubjects?: string[];
  providerOptions: ProviderOption[];
  sourceUrl?: string;
  verificationDate: string;
  status: "verified" | "needs-review";
};

export const ALTERNATIVE_PATHWAYS: AlternativePathway[] = [
  // Polytechnics
  {
    id: "alt-poly-cs-01",
    coursePathwayId: "pw-se-01", // Maps to Software Engineering / CS
    title: "ND/HND Computer Science",
    pathwayType: "polytechnic",
    summary: "A practical, hands-on diploma route focusing on software development, systems administration, and basic networking.",
    typicalDuration: "2 years (ND) + 1 year IT + 2 years (HND)",
    progressionOptions: ["HND in Computer Science", "Direct Entry to University B.Sc.", "Tech Industry Roles"],
    suitableFor: ["Students wanting hands-on coding skills early", "Students looking for a faster route to employability"],
    relatedCareers: ["Junior Software Developer", "IT Support Specialist", "Network Technician"],
    keySubjects: ["Mathematics", "Physics", "Computer Studies"],
    verificationDate: "2024-05-20",
    status: "verified",
    providerOptions: [
      {
        id: "prov-yabatech-cs",
        providerName: "Yaba College of Technology",
        providerType: "Federal Polytechnic",
        location: "Lagos",
        country: "Nigeria",
        offeringTitle: "ND Computer Science",
        officialUrl: "http://www.yabatech.edu.ng/",
        verificationDate: "2024-05-20",
        status: "verified"
      }
    ]
  },
  {
    id: "alt-poly-ee-01",
    title: "ND/HND Electrical/Electronics Engineering",
    pathwayType: "polytechnic",
    summary: "Practical engineering training covering circuit design, power systems, and electronic maintenance.",
    typicalDuration: "2 years (ND) + 1 year IT + 2 years (HND)",
    progressionOptions: ["HND in Electrical Engineering", "Direct Entry to University B.Eng."],
    suitableFor: ["Students with strong practical aptitude in physics and electronics"],
    relatedCareers: ["Electrical Technician", "Maintenance Engineer"],
    verificationDate: "2024-05-20",
    status: "verified",
    providerOptions: [
      {
        id: "prov-kano-ee",
        providerName: "Kano State Polytechnic",
        providerType: "State Polytechnic",
        location: "Kano",
        country: "Nigeria",
        offeringTitle: "ND Electrical/Electronics Engineering",
        officialUrl: "https://kanopoly.edu.ng/",
        verificationDate: "2024-05-20",
        status: "verified"
      }
    ]
  },
  {
    id: "alt-poly-mech-01",
    coursePathwayId: "pw-mecha-01", 
    title: "ND/HND Mechanical Engineering",
    pathwayType: "polytechnic",
    summary: "Training in the design, analysis, and maintenance of mechanical systems and machinery.",
    typicalDuration: "2 years (ND) + 1 year IT + 2 years (HND)",
    progressionOptions: ["HND in Mechanical Engineering", "Direct Entry to University B.Eng."],
    suitableFor: ["Students interested in machines, manufacturing, and automotive repair"],
    relatedCareers: ["Mechanical Technician", "Plant Operator"],
    verificationDate: "2024-05-20",
    status: "verified",
    providerOptions: []
  },
  {
    id: "alt-poly-bus-01",
    title: "ND/HND Business Administration",
    pathwayType: "polytechnic",
    summary: "Foundational business skills covering management, marketing, and office administration.",
    typicalDuration: "2 years (ND) + 1 year IT + 2 years (HND)",
    progressionOptions: ["HND in Business Administration", "Direct Entry to University B.Sc."],
    suitableFor: ["Students aspiring to run businesses or work in corporate administration"],
    relatedCareers: ["Administrative Assistant", "Sales Supervisor"],
    verificationDate: "2024-05-20",
    status: "verified",
    providerOptions: []
  },
  {
    id: "alt-poly-acc-01",
    title: "ND/HND Accountancy",
    pathwayType: "polytechnic",
    summary: "Practical training in bookkeeping, financial reporting, and taxation.",
    typicalDuration: "2 years (ND) + 1 year IT + 2 years (HND)",
    progressionOptions: ["HND in Accountancy", "ICAN/ICAN-ATS Certifications", "Direct Entry to University"],
    suitableFor: ["Detail-oriented students strong in mathematics and commerce"],
    relatedCareers: ["Accounting Clerk", "Audit Assistant"],
    verificationDate: "2024-05-20",
    status: "verified",
    providerOptions: []
  },
  {
    id: "alt-poly-masscomm-01",
    title: "ND/HND Mass Communication",
    pathwayType: "polytechnic",
    summary: "Skills-based training in journalism, broadcasting, and public relations.",
    typicalDuration: "2 years (ND) + 1 year IT + 2 years (HND)",
    progressionOptions: ["HND in Mass Communication", "Direct Entry to University B.A/B.Sc."],
    suitableFor: ["Excellent communicators interested in media production"],
    relatedCareers: ["Reporter", "Content Creator", "Broadcaster"],
    verificationDate: "2024-05-20",
    status: "verified",
    providerOptions: [
       {
        id: "prov-npi-mc",
        providerName: "Nigerian Institute of Journalism",
        providerType: "Monotechnic",
        location: "Lagos",
        country: "Nigeria",
        offeringTitle: "ND Mass Communication",
        officialUrl: "https://nij.edu.ng/",
        verificationDate: "2024-05-20",
        status: "verified"
      }
    ]
  },
  {
    id: "alt-poly-slt-01",
    title: "ND/HND Science Laboratory Technology",
    pathwayType: "polytechnic",
    summary: "Practical laboratory techniques for biological, chemical, and physical analyses.",
    typicalDuration: "2 years (ND) + 1 year IT + 2 years (HND)",
    progressionOptions: ["HND in SLT", "Direct Entry to University Sciences"],
    suitableFor: ["Students who enjoy practical science and lab work"],
    relatedCareers: ["Laboratory Technician", "Quality Control Assistant"],
    verificationDate: "2024-05-20",
    status: "verified",
    providerOptions: []
  },
  {
    id: "alt-poly-agric-01",
    coursePathwayId: "pw-agriecon-01",
    title: "ND/HND Agricultural Technology",
    pathwayType: "polytechnic",
    summary: "Training in modern farming techniques, crop production, and agribusiness.",
    typicalDuration: "2 years (ND) + 1 year IT + 2 years (HND)",
    progressionOptions: ["HND in Agricultural Technology", "Direct Entry to University"],
    suitableFor: ["Students interested in hands-on farming and agriculture business"],
    relatedCareers: ["Farm Supervisor", "Agricultural Extension Worker"],
    verificationDate: "2024-05-20",
    status: "verified",
    providerOptions: []
  },

  // Colleges of Education
  {
    id: "alt-nce-sci-01",
    title: "NCE Science Education",
    pathwayType: "college-of-education",
    summary: "Teacher training programme focusing on teaching primary and junior secondary science subjects.",
    typicalDuration: "3 years",
    progressionOptions: ["B.Ed. (Direct Entry)", "Teaching service"],
    suitableFor: ["Students passionate about teaching science to younger learners"],
    relatedCareers: ["Science Teacher", "Educational Assistant"],
    verificationDate: "2024-05-20",
    status: "verified",
    providerOptions: [
      {
        id: "prov-fce-akoka",
        providerName: "Federal College of Education (Technical), Akoka",
        providerType: "Federal College of Education",
        location: "Lagos",
        country: "Nigeria",
        offeringTitle: "NCE Science Education",
        officialUrl: "https://fcetakoka.edu.ng/",
        verificationDate: "2024-05-20",
        status: "verified"
      }
    ]
  },
  {
    id: "alt-nce-tech-01",
    title: "NCE Technical Education",
    pathwayType: "college-of-education",
    summary: "Trains teachers in technical and vocational subjects like woodwork, metalwork, and electrical installation.",
    typicalDuration: "3 years",
    progressionOptions: ["B.Ed. Technology (Direct Entry)", "Technical Instruction"],
    suitableFor: ["Students interested in technical skills and instruction"],
    relatedCareers: ["Technical Subject Teacher", "Workshop Instructor"],
    verificationDate: "2024-05-20",
    status: "verified",
    providerOptions: []
  },
  {
    id: "alt-nce-bus-01",
    title: "NCE Business Education",
    pathwayType: "college-of-education",
    summary: "Teacher training for business studies, accounting, and secretarial duties in schools.",
    typicalDuration: "3 years",
    progressionOptions: ["B.Ed. Business Education (Direct Entry)"],
    suitableFor: ["Students wanting to teach commerce or accounting fundamentals"],
    relatedCareers: ["Business Studies Teacher"],
    verificationDate: "2024-05-20",
    status: "verified",
    providerOptions: []
  },
  {
    id: "alt-nce-ece-01",
    title: "NCE Early Childhood / Primary Education",
    pathwayType: "college-of-education",
    summary: "Specialized training for teaching and managing early childhood and primary school classrooms.",
    typicalDuration: "3 years",
    progressionOptions: ["B.Ed. Early Childhood Education (Direct Entry)"],
    suitableFor: ["Students passionate about child development and foundational learning"],
    relatedCareers: ["Primary School Teacher", "Nursery Educator"],
    verificationDate: "2024-05-20",
    status: "verified",
    providerOptions: []
  },

  // TVET
  {
    id: "alt-tvet-solar-01",
    coursePathwayId: "pw-renewable-01",
    title: "Renewable-Energy / Solar Installation Training",
    pathwayType: "tvet",
    summary: "Short-term vocational training focusing on the installation and maintenance of solar panels and inverters.",
    typicalDuration: "3 to 6 months",
    progressionOptions: ["Advanced Solar Design Certifications", "Entrepreneurship"],
    suitableFor: ["Practical learners wanting immediate entry into the green energy sector"],
    relatedCareers: ["Solar Installer", "Renewable Energy Technician"],
    verificationDate: "2024-05-20",
    status: "verified",
    providerOptions: []
  },
  {
    id: "alt-tvet-elec-01",
    title: "Technical Electrical Installation",
    pathwayType: "tvet",
    summary: "Vocational route for domestic and industrial electrical wiring and maintenance.",
    typicalDuration: "1 to 2 years",
    progressionOptions: ["City & Guilds Certifications", "Trade Test progression"],
    suitableFor: ["Hands-on individuals wanting a direct trade skill"],
    relatedCareers: ["Electrician", "Maintenance Worker"],
    verificationDate: "2024-05-20",
    status: "verified",
    providerOptions: []
  },
  {
    id: "alt-tvet-weld-01",
    title: "Welding and Fabrication",
    pathwayType: "tvet",
    summary: "Industrial training in metal joining, cutting, and structural fabrication.",
    typicalDuration: "1 to 2 years",
    progressionOptions: ["Advanced Welding Certifications (e.g. underwater welding)"],
    suitableFor: ["Physically inclined students interested in construction and oil/gas sectors"],
    relatedCareers: ["Welder", "Fabricator"],
    verificationDate: "2024-05-20",
    status: "verified",
    providerOptions: []
  },
  {
    id: "alt-tvet-agric-01",
    title: "Agriculture/Agribusiness Skills",
    pathwayType: "tvet",
    summary: "Vocational courses in specific farming techniques (e.g. poultry, aquaculture, greenhouse farming).",
    typicalDuration: "3 to 12 months",
    progressionOptions: ["Farm Ownership", "Agricultural cooperatives"],
    suitableFor: ["Future farmers seeking practical, focused training rather than academic theory"],
    relatedCareers: ["Farm Manager", "Agri-entrepreneur"],
    verificationDate: "2024-05-20",
    status: "verified",
    providerOptions: []
  },
  {
    id: "alt-tvet-hosp-01",
    title: "Hospitality and Culinary Skills",
    pathwayType: "tvet",
    summary: "Vocational training in food preparation, baking, and hotel management.",
    typicalDuration: "6 to 18 months",
    progressionOptions: ["Advanced Culinary Arts", "Hospitality Management ND"],
    suitableFor: ["Creative individuals passionate about food and customer service"],
    relatedCareers: ["Chef", "Baker", "Hotel Supervisor"],
    verificationDate: "2024-05-20",
    status: "verified",
    providerOptions: []
  },
  {
    id: "alt-tvet-health-01",
    title: "Health-Support Training (CHEW)",
    pathwayType: "tvet",
    summary: "Community Health Extension Worker (CHEW) programmes for primary healthcare delivery. *Note: This is a support role, not equivalent to a Nursing or Medical degree.*",
    typicalDuration: "2 to 3 years",
    progressionOptions: ["Direct Entry to Public Health or related university courses"],
    suitableFor: ["Students wanting to work in community clinics and primary care"],
    relatedCareers: ["Community Health Worker", "Clinic Assistant"],
    verificationDate: "2024-05-20",
    status: "verified",
    providerOptions: [
      {
        id: "prov-chst-mkar",
        providerName: "College of Health Sciences and Technology, Mkar",
        providerType: "College of Health Technology",
        location: "Benue",
        country: "Nigeria",
        offeringTitle: "CHEW Programme",
        officialUrl: "https://www.chstmg.edu.ng/",
        verificationDate: "2024-05-20",
        status: "verified"
      }
    ]
  },

  // Digital Skills / Professional
  {
    id: "alt-digi-cloud-01",
    coursePathwayId: "pw-cloud-01",
    title: "Entry-Level Cloud Computing Certificates",
    pathwayType: "digital-skills",
    summary: "Vendor-specific training (e.g. AWS, Microsoft Azure) to learn cloud infrastructure basics.",
    typicalDuration: "3 to 6 months",
    progressionOptions: ["Associate and Professional Cloud Certifications", "Tech Employment"],
    suitableFor: ["Self-directed learners wanting to enter IT without a 4-year degree"],
    relatedCareers: ["Cloud Support Associate", "Junior Cloud Engineer"],
    verificationDate: "2024-05-20",
    status: "verified",
    providerOptions: [
      {
        id: "prov-aws-restart",
        providerName: "AWS re/Start Nigeria Partners",
        providerType: "Digital Skills Provider",
        location: "Online/Various",
        country: "Nigeria",
        offeringTitle: "AWS re/Start",
        officialUrl: "https://aws.amazon.com/training/restart/",
        verificationDate: "2024-05-20",
        status: "verified"
      }
    ]
  },
  {
    id: "alt-digi-data-01",
    coursePathwayId: "pw-ds-01",
    title: "Data Analytics Bootcamp",
    pathwayType: "digital-skills",
    summary: "Intensive training in SQL, Excel, Python, and data visualization tools.",
    typicalDuration: "3 to 6 months",
    progressionOptions: ["Advanced Data Science certifications"],
    suitableFor: ["Analytical thinkers looking for a fast track into tech"],
    relatedCareers: ["Junior Data Analyst"],
    verificationDate: "2024-05-20",
    status: "verified",
    providerOptions: []
  },
  {
    id: "alt-digi-cyber-01",
    coursePathwayId: "pw-cyber-01",
    title: "Cybersecurity Fundamentals Certification",
    pathwayType: "professional-certification",
    summary: "Foundational IT security training (e.g. CompTIA Security+, Cisco Security).",
    typicalDuration: "3 to 6 months",
    progressionOptions: ["Advanced Security Certifications (e.g. CISSP)"],
    suitableFor: ["IT enthusiasts wanting to specialise in security"],
    relatedCareers: ["Security Operations Center (SOC) Analyst"],
    verificationDate: "2024-05-20",
    status: "verified",
    providerOptions: []
  },
  {
    id: "alt-digi-product-01",
    coursePathwayId: "pw-ux-01",
    title: "Product Design (UI/UX) Bootcamp",
    pathwayType: "digital-skills",
    summary: "Short-term immersive training in user research, wireframing, and UI design tools like Figma.",
    typicalDuration: "3 to 6 months",
    progressionOptions: ["Portfolio building", "Freelance/Agency work"],
    suitableFor: ["Creative individuals interested in tech without heavy coding"],
    relatedCareers: ["Junior UI/UX Designer"],
    verificationDate: "2024-05-20",
    status: "verified",
    providerOptions: []
  }
];

export function getAlternativePathwaysByType(type: AlternativePathwayType): AlternativePathway[] {
  return ALTERNATIVE_PATHWAYS.filter(p => p.pathwayType === type);
}

export function getRelatedAlternatives(coursePathwayId: string): AlternativePathway[] {
  return ALTERNATIVE_PATHWAYS.filter(p => p.coursePathwayId === coursePathwayId);
}
