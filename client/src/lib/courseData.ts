// Comprehensive Nigerian university course data

export const SUBJECTS = [
  "Mathematics", "English Language", "Biology", "Chemistry", "Physics",
  "Economics", "Government", "Literature-in-English", "Geography",
  "Agricultural Science", "Further Mathematics", "Accounting", "Commerce",
  "Computer Studies", "Fine Arts", "Food & Nutrition", "CRS"
] as const;

export const INTERESTS = [
  { id: "numbers", label: "Working with numbers and data", icon: "calculator" },
  { id: "helping", label: "Helping and caring for people", icon: "heart" },
  { id: "building", label: "Building and designing things", icon: "hammer" },
  { id: "communication", label: "Writing, speaking, and communicating", icon: "pen" },
  { id: "science", label: "Science experiments and research", icon: "flask" },
  { id: "business", label: "Business, money, and entrepreneurship", icon: "briefcase" },
  { id: "technology", label: "Technology and computers", icon: "laptop" },
  { id: "art", label: "Art, music, and creativity", icon: "palette" },
  { id: "farming", label: "Farming, environment, and nature", icon: "sprout" },
  { id: "law", label: "Law, justice, and governance", icon: "scale" },
] as const;

export const CLASSES = ["SS3A", "SS3B", "SS3C", "SS3D", "SS3E", "SS3F"];

export const NIGERIAN_STATES = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue",
  "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu",
  "FCT Abuja", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina",
  "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo",
  "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara"
];

export const UNIVERSITY_TYPES = ["Federal", "State", "Private", "No preference"];

export const GRADE_RANGES = [
  "Mostly A's (A1-B2)",
  "Mostly B's (B2-B3)",
  "Mostly C's (C4-C6)",
  "Mixed grades"
];

export interface CourseData {
  name: string;
  category: string;
  description: string;
  jambSubjects: string[];
  olevelRequirements: string;
  cutoffMarks: { federal: number; state: number; private: number };
  topUniversities: { name: string; type: string }[];
  careers: string[];
  yearsOfStudy: string;
  relatedSubjects: string[];
  relatedInterests: string[];
}

export const COURSES: CourseData[] = [
  {
    name: "Medicine & Surgery",
    category: "Medical Sciences",
    description: "Study of human diseases, diagnosis, treatment, and prevention. You'll learn anatomy, physiology, pharmacology, and clinical medicine over 6 years.",
    jambSubjects: ["Use of English", "Biology", "Chemistry", "Physics"],
    olevelRequirements: "Five O'Level credits including English Language, Mathematics, Biology, Chemistry, and Physics at not more than two sittings",
    cutoffMarks: { federal: 250, state: 200, private: 180 },
    topUniversities: [
      { name: "University of Ibadan", type: "Federal" },
      { name: "University of Lagos", type: "Federal" },
      { name: "Obafemi Awolowo University", type: "Federal" },
      { name: "Nnamdi Azikiwe University, Awka", type: "Federal" },
      { name: "Babcock University", type: "Private" }
    ],
    careers: ["Medical Doctor", "Surgeon", "Public Health Officer", "Medical Researcher", "Hospital Administrator", "Specialist Physician", "Psychiatrist"],
    yearsOfStudy: "6 years + 1 year housemanship",
    relatedSubjects: ["Biology", "Chemistry", "Physics", "Mathematics"],
    relatedInterests: ["helping", "science"]
  },
  {
    name: "Law",
    category: "Law",
    description: "Study of legal systems, constitutional law, criminal law, commercial law, and jurisprudence. Prepares you for the Nigerian Bar.",
    jambSubjects: ["Use of English", "Literature-in-English", "Government", "CRS"],
    olevelRequirements: "Five O'Level credits including English Language, Literature-in-English, and any three from Government, Economics, CRS, History",
    cutoffMarks: { federal: 250, state: 200, private: 180 },
    topUniversities: [
      { name: "University of Lagos", type: "Federal" },
      { name: "University of Ibadan", type: "Federal" },
      { name: "Obafemi Awolowo University", type: "Federal" },
      { name: "Afe Babalola University", type: "Private" },
      { name: "Ambrose Alli University", type: "State" }
    ],
    careers: ["Barrister/Solicitor", "Judge", "Legal Adviser", "Human Rights Advocate", "Corporate Lawyer", "Magistrate", "State Counsel"],
    yearsOfStudy: "5 years + 1 year Law School",
    relatedSubjects: ["Literature-in-English", "Government", "CRS", "English Language"],
    relatedInterests: ["law", "communication"]
  },
  {
    name: "Computer Science",
    category: "Technology",
    description: "Study of computing, programming, algorithms, data structures, artificial intelligence, and software engineering.",
    jambSubjects: ["Use of English", "Mathematics", "Physics", "Chemistry"],
    olevelRequirements: "Five O'Level credits including English Language, Mathematics, Physics, and any two of Chemistry, Further Mathematics, Computer Studies",
    cutoffMarks: { federal: 200, state: 180, private: 160 },
    topUniversities: [
      { name: "University of Lagos", type: "Federal" },
      { name: "University of Ibadan", type: "Federal" },
      { name: "Covenant University", type: "Private" },
      { name: "Federal University of Technology, Akure", type: "Federal" },
      { name: "Obafemi Awolowo University", type: "Federal" }
    ],
    careers: ["Software Developer", "Data Scientist", "Cybersecurity Analyst", "Systems Administrator", "AI/ML Engineer", "Database Administrator", "Web Developer"],
    yearsOfStudy: "4 years",
    relatedSubjects: ["Mathematics", "Physics", "Computer Studies", "Further Mathematics"],
    relatedInterests: ["technology", "numbers", "building"]
  },
  {
    name: "Accounting",
    category: "Business",
    description: "Study of financial recording, reporting, auditing, taxation, and management accounting. Essential for every business sector.",
    jambSubjects: ["Use of English", "Mathematics", "Economics", "Accounting"],
    olevelRequirements: "Five O'Level credits including English Language, Mathematics, Economics, Accounting, and one other relevant subject",
    cutoffMarks: { federal: 200, state: 180, private: 160 },
    topUniversities: [
      { name: "University of Lagos", type: "Federal" },
      { name: "Ahmadu Bello University", type: "Federal" },
      { name: "University of Nigeria, Nsukka", type: "Federal" },
      { name: "Covenant University", type: "Private" },
      { name: "Lagos State University", type: "State" }
    ],
    careers: ["Chartered Accountant", "Auditor", "Tax Consultant", "Financial Analyst", "Bank Manager", "Forensic Accountant", "Management Consultant"],
    yearsOfStudy: "4 years",
    relatedSubjects: ["Accounting", "Mathematics", "Economics", "Commerce"],
    relatedInterests: ["numbers", "business"]
  },
  {
    name: "Engineering (Mechanical)",
    category: "Engineering",
    description: "Design, manufacture, and maintenance of mechanical systems. Covers thermodynamics, materials science, and machine design.",
    jambSubjects: ["Use of English", "Mathematics", "Physics", "Chemistry"],
    olevelRequirements: "Five O'Level credits including English Language, Mathematics, Physics, Chemistry, and one other science subject",
    cutoffMarks: { federal: 200, state: 180, private: 160 },
    topUniversities: [
      { name: "University of Lagos", type: "Federal" },
      { name: "University of Ibadan", type: "Federal" },
      { name: "Federal University of Technology, Owerri", type: "Federal" },
      { name: "Covenant University", type: "Private" },
      { name: "Obafemi Awolowo University", type: "Federal" }
    ],
    careers: ["Mechanical Engineer", "Automotive Engineer", "Manufacturing Engineer", "Energy Consultant", "Project Manager", "Design Engineer", "Plant Manager"],
    yearsOfStudy: "5 years",
    relatedSubjects: ["Mathematics", "Physics", "Chemistry", "Further Mathematics"],
    relatedInterests: ["building", "science", "technology"]
  },
  {
    name: "Engineering (Electrical/Electronics)",
    category: "Engineering",
    description: "Study of electrical systems, electronics, power generation, telecommunications, and control systems.",
    jambSubjects: ["Use of English", "Mathematics", "Physics", "Chemistry"],
    olevelRequirements: "Five O'Level credits including English Language, Mathematics, Physics, Chemistry, and one other science subject",
    cutoffMarks: { federal: 200, state: 180, private: 160 },
    topUniversities: [
      { name: "University of Lagos", type: "Federal" },
      { name: "Ahmadu Bello University", type: "Federal" },
      { name: "University of Nigeria, Nsukka", type: "Federal" },
      { name: "Covenant University", type: "Private" },
      { name: "Obafemi Awolowo University", type: "Federal" }
    ],
    careers: ["Electrical Engineer", "Telecommunications Engineer", "Power Systems Engineer", "Electronics Designer", "Control Systems Engineer", "Network Engineer", "Renewable Energy Specialist"],
    yearsOfStudy: "5 years",
    relatedSubjects: ["Mathematics", "Physics", "Chemistry", "Further Mathematics"],
    relatedInterests: ["building", "technology", "science"]
  },
  {
    name: "Engineering (Civil)",
    category: "Engineering",
    description: "Design and construction of infrastructure — roads, bridges, buildings, dams, and water supply systems.",
    jambSubjects: ["Use of English", "Mathematics", "Physics", "Chemistry"],
    olevelRequirements: "Five O'Level credits including English Language, Mathematics, Physics, Chemistry, and one other science subject",
    cutoffMarks: { federal: 200, state: 180, private: 160 },
    topUniversities: [
      { name: "University of Lagos", type: "Federal" },
      { name: "Federal University of Technology, Akure", type: "Federal" },
      { name: "Federal University of Technology, Minna", type: "Federal" },
      { name: "Covenant University", type: "Private" },
      { name: "Obafemi Awolowo University", type: "Federal" }
    ],
    careers: ["Civil Engineer", "Structural Engineer", "Construction Manager", "Urban Planner", "Geotechnical Engineer", "Transportation Engineer", "Water Resources Engineer"],
    yearsOfStudy: "5 years",
    relatedSubjects: ["Mathematics", "Physics", "Chemistry", "Further Mathematics", "Geography"],
    relatedInterests: ["building", "science"]
  },
  {
    name: "Pharmacy",
    category: "Medical Sciences",
    description: "Study of drugs — their composition, effects, dosage, and interaction with the human body. Combines chemistry with healthcare.",
    jambSubjects: ["Use of English", "Biology", "Chemistry", "Physics"],
    olevelRequirements: "Five O'Level credits including English Language, Mathematics, Biology, Chemistry, and Physics",
    cutoffMarks: { federal: 230, state: 200, private: 180 },
    topUniversities: [
      { name: "University of Lagos", type: "Federal" },
      { name: "Obafemi Awolowo University", type: "Federal" },
      { name: "University of Benin", type: "Federal" },
      { name: "Nnamdi Azikiwe University, Awka", type: "Federal" },
      { name: "Madonna University", type: "Private" }
    ],
    careers: ["Pharmacist", "Drug Researcher", "Pharmaceutical Sales Rep", "Hospital Pharmacist", "Regulatory Affairs Specialist", "Quality Control Analyst", "Toxicologist"],
    yearsOfStudy: "5 years + 1 year internship",
    relatedSubjects: ["Chemistry", "Biology", "Physics", "Mathematics"],
    relatedInterests: ["science", "helping"]
  },
  {
    name: "Nursing Science",
    category: "Medical Sciences",
    description: "Study of patient care, health assessment, clinical nursing, community health, and midwifery practice.",
    jambSubjects: ["Use of English", "Biology", "Chemistry", "Physics"],
    olevelRequirements: "Five O'Level credits including English Language, Mathematics, Biology, Chemistry, and Physics",
    cutoffMarks: { federal: 180, state: 160, private: 150 },
    topUniversities: [
      { name: "University of Ibadan", type: "Federal" },
      { name: "Obafemi Awolowo University", type: "Federal" },
      { name: "University of Nigeria, Nsukka", type: "Federal" },
      { name: "Nnamdi Azikiwe University, Awka", type: "Federal" },
      { name: "Babcock University", type: "Private" }
    ],
    careers: ["Registered Nurse", "Midwife", "Nurse Educator", "Public Health Nurse", "Clinical Nurse Specialist", "Nurse Administrator", "Community Health Worker"],
    yearsOfStudy: "5 years",
    relatedSubjects: ["Biology", "Chemistry", "Physics", "English Language"],
    relatedInterests: ["helping", "science"]
  },
  {
    name: "Economics",
    category: "Social Sciences",
    description: "Study of how societies allocate scarce resources — covering microeconomics, macroeconomics, econometrics, and development economics.",
    jambSubjects: ["Use of English", "Mathematics", "Economics", "Government"],
    olevelRequirements: "Five O'Level credits including English Language, Mathematics, Economics, and any two of Government, Geography, Commerce, Accounting",
    cutoffMarks: { federal: 200, state: 180, private: 160 },
    topUniversities: [
      { name: "University of Ibadan", type: "Federal" },
      { name: "University of Lagos", type: "Federal" },
      { name: "University of Nigeria, Nsukka", type: "Federal" },
      { name: "Covenant University", type: "Private" },
      { name: "Obafemi Awolowo University", type: "Federal" }
    ],
    careers: ["Economist", "Financial Analyst", "Policy Analyst", "Development Consultant", "Investment Banker", "Research Analyst", "Budget Planner"],
    yearsOfStudy: "4 years",
    relatedSubjects: ["Economics", "Mathematics", "Government", "Geography"],
    relatedInterests: ["numbers", "business"]
  },
  {
    name: "Mass Communication",
    category: "Arts & Humanities",
    description: "Study of media, journalism, advertising, public relations, broadcasting, and film production.",
    jambSubjects: ["Use of English", "Literature-in-English", "Government", "Economics"],
    olevelRequirements: "Five O'Level credits including English Language, Literature-in-English, and any three from Government, Economics, CRS, History",
    cutoffMarks: { federal: 200, state: 180, private: 160 },
    topUniversities: [
      { name: "University of Lagos", type: "Federal" },
      { name: "University of Nigeria, Nsukka", type: "Federal" },
      { name: "Lagos State University", type: "State" },
      { name: "Covenant University", type: "Private" },
      { name: "Bayero University, Kano", type: "Federal" }
    ],
    careers: ["Journalist", "TV/Radio Presenter", "Public Relations Officer", "Advertising Executive", "Film Producer", "Social Media Manager", "Content Creator"],
    yearsOfStudy: "4 years",
    relatedSubjects: ["Literature-in-English", "English Language", "Government", "Economics"],
    relatedInterests: ["communication", "art"]
  },
  {
    name: "Architecture",
    category: "Environmental Sciences",
    description: "Art and science of designing buildings and spaces. Combines creativity with structural engineering and environmental planning.",
    jambSubjects: ["Use of English", "Mathematics", "Physics", "Chemistry"],
    olevelRequirements: "Five O'Level credits including English Language, Mathematics, Physics, Chemistry, and Fine Arts or Geography",
    cutoffMarks: { federal: 200, state: 180, private: 160 },
    topUniversities: [
      { name: "Obafemi Awolowo University", type: "Federal" },
      { name: "Ahmadu Bello University", type: "Federal" },
      { name: "University of Lagos", type: "Federal" },
      { name: "Covenant University", type: "Private" },
      { name: "Federal University of Technology, Akure", type: "Federal" }
    ],
    careers: ["Architect", "Urban Planner", "Interior Designer", "Landscape Architect", "Construction Manager", "Real Estate Developer", "Building Consultant"],
    yearsOfStudy: "5 years + 2 years professional practice",
    relatedSubjects: ["Mathematics", "Physics", "Fine Arts", "Geography"],
    relatedInterests: ["building", "art"]
  },
  {
    name: "Agricultural Science/Engineering",
    category: "Agriculture",
    description: "Study of crop production, animal husbandry, soil science, agricultural economics, and food technology.",
    jambSubjects: ["Use of English", "Biology", "Chemistry", "Agricultural Science"],
    olevelRequirements: "Five O'Level credits including English Language, Mathematics, Biology, Chemistry, and Agricultural Science",
    cutoffMarks: { federal: 180, state: 160, private: 140 },
    topUniversities: [
      { name: "University of Agriculture, Abeokuta", type: "Federal" },
      { name: "Ahmadu Bello University", type: "Federal" },
      { name: "University of Ibadan", type: "Federal" },
      { name: "Michael Okpara University, Umudike", type: "Federal" },
      { name: "Landmark University", type: "Private" }
    ],
    careers: ["Agricultural Scientist", "Farm Manager", "Agribusiness Consultant", "Food Technologist", "Soil Scientist", "Agricultural Extension Officer", "Livestock Specialist"],
    yearsOfStudy: "4-5 years",
    relatedSubjects: ["Agricultural Science", "Biology", "Chemistry", "Geography"],
    relatedInterests: ["farming", "science"]
  },
  {
    name: "Business Administration",
    category: "Business",
    description: "Study of management principles, marketing, human resources, finance, and organizational behaviour for running businesses.",
    jambSubjects: ["Use of English", "Mathematics", "Economics", "Accounting"],
    olevelRequirements: "Five O'Level credits including English Language, Mathematics, Economics, and any two from Accounting, Commerce, Government",
    cutoffMarks: { federal: 200, state: 180, private: 160 },
    topUniversities: [
      { name: "University of Lagos", type: "Federal" },
      { name: "Obafemi Awolowo University", type: "Federal" },
      { name: "Ahmadu Bello University", type: "Federal" },
      { name: "Pan-Atlantic University", type: "Private" },
      { name: "University of Nigeria, Nsukka", type: "Federal" }
    ],
    careers: ["Business Manager", "Marketing Executive", "HR Manager", "Entrepreneur", "Management Consultant", "Operations Manager", "Business Analyst"],
    yearsOfStudy: "4 years",
    relatedSubjects: ["Economics", "Accounting", "Mathematics", "Commerce"],
    relatedInterests: ["business", "numbers"]
  },
  {
    name: "Biochemistry",
    category: "Sciences",
    description: "Study of chemical processes in living organisms — molecular biology, enzymology, metabolism, and biotechnology.",
    jambSubjects: ["Use of English", "Biology", "Chemistry", "Physics"],
    olevelRequirements: "Five O'Level credits including English Language, Mathematics, Biology, Chemistry, and Physics",
    cutoffMarks: { federal: 200, state: 180, private: 160 },
    topUniversities: [
      { name: "University of Ibadan", type: "Federal" },
      { name: "University of Nigeria, Nsukka", type: "Federal" },
      { name: "University of Lagos", type: "Federal" },
      { name: "Covenant University", type: "Private" },
      { name: "Obafemi Awolowo University", type: "Federal" }
    ],
    careers: ["Biochemist", "Research Scientist", "Pharmaceutical Researcher", "Clinical Laboratory Scientist", "Biotechnologist", "Quality Control Analyst", "Food Scientist"],
    yearsOfStudy: "4 years",
    relatedSubjects: ["Biology", "Chemistry", "Physics", "Mathematics"],
    relatedInterests: ["science"]
  },
  {
    name: "Microbiology",
    category: "Sciences",
    description: "Study of microorganisms — bacteria, viruses, fungi, and parasites. Covers medical microbiology, industrial microbiology, and biotechnology.",
    jambSubjects: ["Use of English", "Biology", "Chemistry", "Physics"],
    olevelRequirements: "Five O'Level credits including English Language, Mathematics, Biology, Chemistry, and Physics",
    cutoffMarks: { federal: 190, state: 170, private: 150 },
    topUniversities: [
      { name: "University of Nigeria, Nsukka", type: "Federal" },
      { name: "University of Lagos", type: "Federal" },
      { name: "University of Ibadan", type: "Federal" },
      { name: "Nnamdi Azikiwe University, Awka", type: "Federal" },
      { name: "Babcock University", type: "Private" }
    ],
    careers: ["Microbiologist", "Medical Lab Scientist", "Virologist", "Quality Assurance Officer", "Brewery/Distillery Scientist", "Environmental Microbiologist", "Pharmaceutical Microbiologist"],
    yearsOfStudy: "4 years",
    relatedSubjects: ["Biology", "Chemistry", "Physics"],
    relatedInterests: ["science"]
  },
  {
    name: "Political Science",
    category: "Social Sciences",
    description: "Study of government, political systems, public policy, international relations, and political theory.",
    jambSubjects: ["Use of English", "Government", "Economics", "Geography"],
    olevelRequirements: "Five O'Level credits including English Language, Government, and any three from Economics, Literature, History, CRS, Geography",
    cutoffMarks: { federal: 200, state: 180, private: 160 },
    topUniversities: [
      { name: "University of Ibadan", type: "Federal" },
      { name: "University of Lagos", type: "Federal" },
      { name: "Ahmadu Bello University", type: "Federal" },
      { name: "University of Nigeria, Nsukka", type: "Federal" },
      { name: "Covenant University", type: "Private" }
    ],
    careers: ["Politician", "Diplomat", "Policy Analyst", "Political Consultant", "NGO Director", "Public Administrator", "International Relations Officer"],
    yearsOfStudy: "4 years",
    relatedSubjects: ["Government", "Economics", "Geography", "English Language"],
    relatedInterests: ["law", "communication"]
  },
  {
    name: "Dentistry",
    category: "Medical Sciences",
    description: "Study of oral health, dental diseases, dental surgery, orthodontics, and prosthodontics.",
    jambSubjects: ["Use of English", "Biology", "Chemistry", "Physics"],
    olevelRequirements: "Five O'Level credits including English Language, Mathematics, Biology, Chemistry, and Physics",
    cutoffMarks: { federal: 230, state: 200, private: 180 },
    topUniversities: [
      { name: "University of Lagos", type: "Federal" },
      { name: "University of Ibadan", type: "Federal" },
      { name: "Obafemi Awolowo University", type: "Federal" },
      { name: "University of Benin", type: "Federal" },
      { name: "Bayero University, Kano", type: "Federal" }
    ],
    careers: ["Dentist", "Orthodontist", "Oral Surgeon", "Dental Researcher", "Public Health Dentist", "Prosthodontist", "Dental Consultant"],
    yearsOfStudy: "6 years + 1 year housemanship",
    relatedSubjects: ["Biology", "Chemistry", "Physics"],
    relatedInterests: ["helping", "science"]
  },
  {
    name: "Banking & Finance",
    category: "Business",
    description: "Study of banking operations, financial markets, investment analysis, corporate finance, and risk management.",
    jambSubjects: ["Use of English", "Mathematics", "Economics", "Accounting"],
    olevelRequirements: "Five O'Level credits including English Language, Mathematics, Economics, Accounting, and one other relevant subject",
    cutoffMarks: { federal: 200, state: 180, private: 160 },
    topUniversities: [
      { name: "University of Lagos", type: "Federal" },
      { name: "University of Nigeria, Nsukka", type: "Federal" },
      { name: "Ahmadu Bello University", type: "Federal" },
      { name: "Covenant University", type: "Private" },
      { name: "Obafemi Awolowo University", type: "Federal" }
    ],
    careers: ["Investment Banker", "Financial Analyst", "Bank Manager", "Stockbroker", "Insurance Underwriter", "Risk Manager", "Credit Analyst"],
    yearsOfStudy: "4 years",
    relatedSubjects: ["Accounting", "Economics", "Mathematics", "Commerce"],
    relatedInterests: ["numbers", "business"]
  },
  {
    name: "English & Literary Studies",
    category: "Arts & Humanities",
    description: "Study of English literature, creative writing, linguistics, literary theory, and African literature.",
    jambSubjects: ["Use of English", "Literature-in-English", "Government", "CRS"],
    olevelRequirements: "Five O'Level credits including English Language, Literature-in-English, and any three Arts/Social Science subjects",
    cutoffMarks: { federal: 200, state: 180, private: 160 },
    topUniversities: [
      { name: "University of Ibadan", type: "Federal" },
      { name: "Obafemi Awolowo University", type: "Federal" },
      { name: "University of Nigeria, Nsukka", type: "Federal" },
      { name: "University of Lagos", type: "Federal" },
      { name: "Covenant University", type: "Private" }
    ],
    careers: ["Writer/Author", "Editor", "Lecturer", "Literary Critic", "Content Developer", "Scriptwriter", "Publishing Manager"],
    yearsOfStudy: "4 years",
    relatedSubjects: ["Literature-in-English", "English Language", "CRS", "Government"],
    relatedInterests: ["communication", "art"]
  },
  {
    name: "Fine & Applied Arts",
    category: "Arts & Humanities",
    description: "Study of painting, sculpture, graphics, textiles, ceramics, and art history for creative expression and commercial application.",
    jambSubjects: ["Use of English", "Fine Arts", "Literature-in-English", "Geography"],
    olevelRequirements: "Five O'Level credits including English Language, Fine Arts, and any three relevant subjects",
    cutoffMarks: { federal: 180, state: 160, private: 140 },
    topUniversities: [
      { name: "Ahmadu Bello University", type: "Federal" },
      { name: "University of Nigeria, Nsukka", type: "Federal" },
      { name: "Obafemi Awolowo University", type: "Federal" },
      { name: "Yaba College of Technology", type: "Federal" },
      { name: "University of Benin", type: "Federal" }
    ],
    careers: ["Graphic Designer", "Fine Artist", "Art Director", "Textile Designer", "Ceramics Artist", "Art Teacher", "Animation Artist"],
    yearsOfStudy: "4 years",
    relatedSubjects: ["Fine Arts", "English Language", "Literature-in-English"],
    relatedInterests: ["art", "building"]
  },
  {
    name: "Food Science & Technology",
    category: "Sciences",
    description: "Study of food processing, preservation, quality control, nutrition, and food safety standards.",
    jambSubjects: ["Use of English", "Chemistry", "Biology", "Physics"],
    olevelRequirements: "Five O'Level credits including English Language, Mathematics, Biology, Chemistry, and any one of Physics, Food & Nutrition",
    cutoffMarks: { federal: 180, state: 160, private: 140 },
    topUniversities: [
      { name: "University of Agriculture, Abeokuta", type: "Federal" },
      { name: "University of Nigeria, Nsukka", type: "Federal" },
      { name: "Federal University of Technology, Owerri", type: "Federal" },
      { name: "Obafemi Awolowo University", type: "Federal" },
      { name: "Bells University", type: "Private" }
    ],
    careers: ["Food Technologist", "Quality Control Manager", "Nutritionist", "Food Safety Inspector", "Product Development Scientist", "Beverage Technologist", "Food Researcher"],
    yearsOfStudy: "4 years",
    relatedSubjects: ["Chemistry", "Biology", "Food & Nutrition", "Physics"],
    relatedInterests: ["science", "farming"]
  },
  {
    name: "Estate Management",
    category: "Environmental Sciences",
    description: "Study of real estate valuation, property management, land law, urban planning, and facilities management.",
    jambSubjects: ["Use of English", "Mathematics", "Economics", "Geography"],
    olevelRequirements: "Five O'Level credits including English Language, Mathematics, Economics, Geography, and one other relevant subject",
    cutoffMarks: { federal: 180, state: 160, private: 140 },
    topUniversities: [
      { name: "University of Lagos", type: "Federal" },
      { name: "Obafemi Awolowo University", type: "Federal" },
      { name: "Federal University of Technology, Akure", type: "Federal" },
      { name: "Covenant University", type: "Private" },
      { name: "Nnamdi Azikiwe University, Awka", type: "Federal" }
    ],
    careers: ["Estate Surveyor", "Property Manager", "Real Estate Developer", "Facilities Manager", "Land Administrator", "Valuer", "Property Consultant"],
    yearsOfStudy: "5 years",
    relatedSubjects: ["Mathematics", "Economics", "Geography"],
    relatedInterests: ["business", "building"]
  },
  {
    name: "International Relations",
    category: "Social Sciences",
    description: "Study of global politics, diplomacy, foreign policy, international law, and conflict resolution.",
    jambSubjects: ["Use of English", "Government", "Geography", "Economics"],
    olevelRequirements: "Five O'Level credits including English Language, Government, and any three from Economics, Geography, History, CRS, Literature",
    cutoffMarks: { federal: 200, state: 180, private: 160 },
    topUniversities: [
      { name: "Obafemi Awolowo University", type: "Federal" },
      { name: "University of Lagos", type: "Federal" },
      { name: "Covenant University", type: "Private" },
      { name: "Ahmadu Bello University", type: "Federal" },
      { name: "University of Calabar", type: "Federal" }
    ],
    careers: ["Diplomat", "Foreign Affairs Officer", "International Development Worker", "NGO Programme Manager", "Intelligence Analyst", "Trade Negotiator", "Peace & Conflict Specialist"],
    yearsOfStudy: "4 years",
    relatedSubjects: ["Government", "Economics", "Geography", "English Language"],
    relatedInterests: ["law", "communication"]
  },
  {
    name: "Petroleum Engineering",
    category: "Engineering",
    description: "Study of oil and gas exploration, drilling, production, and reservoir engineering. A key course for Nigeria's energy sector.",
    jambSubjects: ["Use of English", "Mathematics", "Physics", "Chemistry"],
    olevelRequirements: "Five O'Level credits including English Language, Mathematics, Physics, Chemistry, and one other science subject",
    cutoffMarks: { federal: 220, state: 200, private: 180 },
    topUniversities: [
      { name: "University of Benin", type: "Federal" },
      { name: "Federal University of Technology, Owerri", type: "Federal" },
      { name: "University of Ibadan", type: "Federal" },
      { name: "Covenant University", type: "Private" },
      { name: "Rivers State University", type: "State" }
    ],
    careers: ["Petroleum Engineer", "Drilling Engineer", "Reservoir Engineer", "Production Engineer", "Oil & Gas Consultant", "Pipeline Engineer", "Energy Analyst"],
    yearsOfStudy: "5 years",
    relatedSubjects: ["Mathematics", "Physics", "Chemistry", "Further Mathematics"],
    relatedInterests: ["building", "science", "technology"]
  },
  {
    name: "Education (Various)",
    category: "Education",
    description: "Study of teaching methods, curriculum development, educational psychology, and educational administration for any subject specialization.",
    jambSubjects: ["Use of English", "Economics", "Government", "Geography"],
    olevelRequirements: "Five O'Level credits including English Language, Mathematics, and three subjects related to your chosen specialization",
    cutoffMarks: { federal: 180, state: 160, private: 140 },
    topUniversities: [
      { name: "University of Ibadan", type: "Federal" },
      { name: "University of Nigeria, Nsukka", type: "Federal" },
      { name: "Ahmadu Bello University", type: "Federal" },
      { name: "University of Lagos", type: "Federal" },
      { name: "Nnamdi Azikiwe University, Awka", type: "Federal" }
    ],
    careers: ["Teacher", "School Administrator", "Curriculum Developer", "Education Consultant", "School Counsellor", "TRCN Officer", "Education Policy Maker"],
    yearsOfStudy: "4 years",
    relatedSubjects: ["English Language", "Mathematics", "Economics", "Government"],
    relatedInterests: ["helping", "communication"]
  },
  {
    name: "Public Administration",
    category: "Social Sciences",
    description: "Study of government administration, public policy, local government, and bureaucratic management.",
    jambSubjects: ["Use of English", "Government", "Economics", "Geography"],
    olevelRequirements: "Five O'Level credits including English Language, Government, Economics, and any two relevant subjects",
    cutoffMarks: { federal: 190, state: 170, private: 150 },
    topUniversities: [
      { name: "University of Lagos", type: "Federal" },
      { name: "Obafemi Awolowo University", type: "Federal" },
      { name: "Ahmadu Bello University", type: "Federal" },
      { name: "University of Nigeria, Nsukka", type: "Federal" },
      { name: "Covenant University", type: "Private" }
    ],
    careers: ["Civil Servant", "Public Policy Analyst", "Local Government Administrator", "Public Affairs Manager", "Programme Coordinator", "Budget Analyst", "Government Relations Officer"],
    yearsOfStudy: "4 years",
    relatedSubjects: ["Government", "Economics", "English Language", "Geography"],
    relatedInterests: ["law", "communication"]
  },
  {
    name: "Geography & Environmental Management",
    category: "Environmental Sciences",
    description: "Study of physical landscapes, climate, natural resources, environmental impact, and geographic information systems (GIS).",
    jambSubjects: ["Use of English", "Geography", "Mathematics", "Biology"],
    olevelRequirements: "Five O'Level credits including English Language, Geography, Mathematics, and any two of Biology, Chemistry, Physics, Economics",
    cutoffMarks: { federal: 180, state: 160, private: 140 },
    topUniversities: [
      { name: "University of Ibadan", type: "Federal" },
      { name: "University of Lagos", type: "Federal" },
      { name: "Obafemi Awolowo University", type: "Federal" },
      { name: "University of Nigeria, Nsukka", type: "Federal" },
      { name: "Federal University of Technology, Akure", type: "Federal" }
    ],
    careers: ["Geographer", "Environmental Consultant", "GIS Analyst", "Urban Planner", "Climate Scientist", "Natural Resource Manager", "Cartographer"],
    yearsOfStudy: "4 years",
    relatedSubjects: ["Geography", "Mathematics", "Biology", "Chemistry"],
    relatedInterests: ["farming", "science"]
  },
  {
    name: "Medical Laboratory Science",
    category: "Medical Sciences",
    description: "Study of laboratory diagnosis of diseases through analysis of blood, urine, tissues, and body fluids.",
    jambSubjects: ["Use of English", "Biology", "Chemistry", "Physics"],
    olevelRequirements: "Five O'Level credits including English Language, Mathematics, Biology, Chemistry, and Physics",
    cutoffMarks: { federal: 190, state: 170, private: 150 },
    topUniversities: [
      { name: "University of Lagos", type: "Federal" },
      { name: "University of Nigeria, Nsukka", type: "Federal" },
      { name: "Nnamdi Azikiwe University, Awka", type: "Federal" },
      { name: "University of Benin", type: "Federal" },
      { name: "Madonna University", type: "Private" }
    ],
    careers: ["Medical Lab Scientist", "Pathologist", "Lab Manager", "Research Scientist", "Blood Bank Technologist", "Histopathologist", "Clinical Biochemist"],
    yearsOfStudy: "5 years",
    relatedSubjects: ["Biology", "Chemistry", "Physics"],
    relatedInterests: ["science", "helping"]
  },
  {
    name: "Computer Engineering",
    category: "Engineering",
    description: "Combines electrical engineering and computer science — hardware design, embedded systems, networking, and software development.",
    jambSubjects: ["Use of English", "Mathematics", "Physics", "Chemistry"],
    olevelRequirements: "Five O'Level credits including English Language, Mathematics, Physics, Chemistry, and one of Further Mathematics, Computer Studies",
    cutoffMarks: { federal: 200, state: 180, private: 160 },
    topUniversities: [
      { name: "University of Lagos", type: "Federal" },
      { name: "Federal University of Technology, Akure", type: "Federal" },
      { name: "Obafemi Awolowo University", type: "Federal" },
      { name: "Covenant University", type: "Private" },
      { name: "Federal University of Technology, Owerri", type: "Federal" }
    ],
    careers: ["Computer Engineer", "Hardware Designer", "IoT Specialist", "Embedded Systems Developer", "Network Architect", "Robotics Engineer", "Firmware Developer"],
    yearsOfStudy: "5 years",
    relatedSubjects: ["Mathematics", "Physics", "Computer Studies", "Further Mathematics"],
    relatedInterests: ["technology", "building"]
  },
  {
    name: "Psychology",
    category: "Social Sciences",
    description: "Study of human behaviour, mental processes, counselling, clinical psychology, and organizational psychology.",
    jambSubjects: ["Use of English", "Biology", "Economics", "Government"],
    olevelRequirements: "Five O'Level credits including English Language, Biology, and any three from Economics, Government, Mathematics, Geography",
    cutoffMarks: { federal: 190, state: 170, private: 150 },
    topUniversities: [
      { name: "University of Lagos", type: "Federal" },
      { name: "University of Ibadan", type: "Federal" },
      { name: "Nnamdi Azikiwe University, Awka", type: "Federal" },
      { name: "University of Nigeria, Nsukka", type: "Federal" },
      { name: "Covenant University", type: "Private" }
    ],
    careers: ["Clinical Psychologist", "Counsellor", "HR Specialist", "Organizational Psychologist", "Child Psychologist", "School Counsellor", "Research Psychologist"],
    yearsOfStudy: "4 years",
    relatedSubjects: ["Biology", "Economics", "English Language", "Government"],
    relatedInterests: ["helping", "science"]
  },
  {
    name: "Quantity Surveying",
    category: "Environmental Sciences",
    description: "Study of construction cost estimation, contract management, project financial control, and procurement in building projects.",
    jambSubjects: ["Use of English", "Mathematics", "Physics", "Economics"],
    olevelRequirements: "Five O'Level credits including English Language, Mathematics, Physics, and any two of Economics, Geography, Chemistry",
    cutoffMarks: { federal: 180, state: 160, private: 140 },
    topUniversities: [
      { name: "Obafemi Awolowo University", type: "Federal" },
      { name: "Federal University of Technology, Akure", type: "Federal" },
      { name: "Ahmadu Bello University", type: "Federal" },
      { name: "University of Lagos", type: "Federal" },
      { name: "Covenant University", type: "Private" }
    ],
    careers: ["Quantity Surveyor", "Cost Engineer", "Construction Estimator", "Project Manager", "Contract Administrator", "Procurement Manager", "Building Economist"],
    yearsOfStudy: "5 years",
    relatedSubjects: ["Mathematics", "Physics", "Economics"],
    relatedInterests: ["numbers", "building"]
  },
  {
    name: "Physiotherapy",
    category: "Medical Sciences",
    description: "Study of physical rehabilitation, exercise therapy, musculoskeletal disorders, and neurorehabilitation.",
    jambSubjects: ["Use of English", "Biology", "Chemistry", "Physics"],
    olevelRequirements: "Five O'Level credits including English Language, Mathematics, Biology, Chemistry, and Physics",
    cutoffMarks: { federal: 200, state: 180, private: 160 },
    topUniversities: [
      { name: "University of Ibadan", type: "Federal" },
      { name: "University of Lagos", type: "Federal" },
      { name: "Obafemi Awolowo University", type: "Federal" },
      { name: "Nnamdi Azikiwe University, Awka", type: "Federal" },
      { name: "Bayero University, Kano", type: "Federal" }
    ],
    careers: ["Physiotherapist", "Sports Therapist", "Rehabilitation Specialist", "Orthopaedic Therapist", "Paediatric Physiotherapist", "Neurological Physiotherapist", "Private Practice Owner"],
    yearsOfStudy: "5 years + 1 year internship",
    relatedSubjects: ["Biology", "Chemistry", "Physics"],
    relatedInterests: ["helping", "science"]
  },
  {
    name: "Marketing",
    category: "Business",
    description: "Study of consumer behaviour, market research, advertising, brand management, digital marketing, and sales strategy.",
    jambSubjects: ["Use of English", "Mathematics", "Economics", "Accounting"],
    olevelRequirements: "Five O'Level credits including English Language, Mathematics, Economics, and any two of Commerce, Accounting, Government",
    cutoffMarks: { federal: 190, state: 170, private: 150 },
    topUniversities: [
      { name: "University of Lagos", type: "Federal" },
      { name: "University of Nigeria, Nsukka", type: "Federal" },
      { name: "Obafemi Awolowo University", type: "Federal" },
      { name: "Covenant University", type: "Private" },
      { name: "Lagos State University", type: "State" }
    ],
    careers: ["Marketing Manager", "Brand Manager", "Digital Marketer", "Market Research Analyst", "Sales Director", "Advertising Executive", "Product Manager"],
    yearsOfStudy: "4 years",
    relatedSubjects: ["Economics", "Commerce", "Accounting", "Mathematics"],
    relatedInterests: ["business", "communication"]
  },
  {
    name: "Sociology",
    category: "Social Sciences",
    description: "Study of human society, social institutions, culture, social change, criminology, and social research methods.",
    jambSubjects: ["Use of English", "Government", "Economics", "Geography"],
    olevelRequirements: "Five O'Level credits including English Language, and any four from Government, Economics, Geography, Literature, CRS, History",
    cutoffMarks: { federal: 190, state: 170, private: 150 },
    topUniversities: [
      { name: "University of Ibadan", type: "Federal" },
      { name: "University of Lagos", type: "Federal" },
      { name: "Obafemi Awolowo University", type: "Federal" },
      { name: "University of Nigeria, Nsukka", type: "Federal" },
      { name: "Covenant University", type: "Private" }
    ],
    careers: ["Social Worker", "Researcher", "Community Development Officer", "NGO Programme Officer", "Criminologist", "Social Policy Analyst", "Human Resource Manager"],
    yearsOfStudy: "4 years",
    relatedSubjects: ["Government", "Economics", "Geography", "English Language"],
    relatedInterests: ["helping", "law"]
  }
];

// Get unique categories for filtering
export function getCategories(): string[] {
  const cats = new Set(COURSES.map(c => c.category));
  return Array.from(cats).sort();
}

// Recommendation engine
export function getRecommendations(
  subjects: string[],
  interests: string[],
  _universityType: string,
  _gradeRange: string
): CourseData[] {
  const scored = COURSES.map(course => {
    let score = 0;

    // Subject matching (weighted heavily)
    subjects.forEach(subject => {
      if (course.relatedSubjects.includes(subject)) {
        score += 15;
      }
      if (course.jambSubjects.includes(subject)) {
        score += 10;
      }
    });

    // Interest matching
    interests.forEach(interest => {
      if (course.relatedInterests.includes(interest)) {
        score += 12;
      }
    });

    return { course, score };
  });

  // Sort by score descending
  scored.sort((a, b) => b.score - a.score);

  // Return top 3 unique recommendations
  return scored.slice(0, 3).map(s => s.course);
}

export function generateWhyText(
  course: CourseData,
  subjects: string[],
  interests: string[],
  firstName: string
): string {
  const matchedSubjects = subjects.filter(s =>
    course.relatedSubjects.includes(s) || course.jambSubjects.includes(s)
  );
  const matchedInterests = interests
    .filter(i => course.relatedInterests.includes(i))
    .map(i => INTERESTS.find(int => int.id === i)?.label || i);

  let text = `${firstName}, `;

  if (matchedSubjects.length > 0) {
    text += `your strength in ${matchedSubjects.join(", ")} `;
  }

  if (matchedInterests.length > 0) {
    if (matchedSubjects.length > 0) {
      text += `combined with your interest in ${matchedInterests.join(" and ")} `;
    } else {
      text += `your interest in ${matchedInterests.join(" and ")} `;
    }
  }

  text += `makes ${course.name} an excellent fit for you. `;
  text += `This course will allow you to build on what you're already good at and pursue a fulfilling career.`;

  return text;
}
