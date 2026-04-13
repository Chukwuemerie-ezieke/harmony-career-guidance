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
  scholarships: string[];
  postUtmeTips: string;
  professionalBodies: string[];
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
    relatedInterests: ["helping", "science"],
    scholarships: [
      "Agbami Medical & Engineering Scholarship",
      "NNPC/TotalEnergies National Merit Scholarship",
      "Shell Nigeria Scholarship",
      "Petroleum Technology Development Fund (PTDF) Scholarship",
      "Federal Government BEA Scholarship",
      "Dangote Foundation Scholarship",
      "MTN Foundation Science & Technology Scholarship",
      "State Government Merit Scholarships"
    ],
    postUtmeTips: "Medicine post-UTME is highly competitive. Focus heavily on Biology and Chemistry — expect detailed questions on cell biology, genetics, organic chemistry, and human physiology. Most schools (UI, UNILAG, OAU) use a combination of written MCQ tests and, for shortlisted candidates, an oral interview. Practise past post-UTME papers from your target university. A score of 75%+ in post-UTME is often required to offset any JAMB shortfall. Ensure all O'Level results are in one sitting if possible for UNILAG and UI.",
    professionalBodies: [
      "Nigerian Medical Association (NMA)",
      "Medical and Dental Council of Nigeria (MDCN)",
      "Nigerian Medical Rehabilitation Council (NMRC)",
      "Society of Gynaecology and Obstetrics of Nigeria (SOGON)",
      "Nigerian Society of Anaesthetists (NSA)"
    ]
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
    relatedInterests: ["law", "communication"],
    scholarships: [
      "Federal Government BEA Scholarship",
      "MTN Foundation Scholarship",
      "Dangote Foundation Scholarship",
      "State Government Merit Scholarships",
      "University of Lagos Merit Scholarship",
      "NEEDS Assessment Fund",
      "Nigerian Bar Association Foundation Scholarship"
    ],
    postUtmeTips: "Law post-UTME tests English comprehension, logical reasoning, and current affairs. Dedicate extra study time to English grammar, essay writing, and comprehension passages. Many top law faculties (UNILAG, UI, OAU) set cut-off scores above 55 on a 100-point scale. Read national newspapers regularly to boost current affairs performance. Note that Literature-in-English is compulsory at O'Level — confirm your result is strong.",
    professionalBodies: [
      "Nigerian Bar Association (NBA)",
      "Body of Benchers",
      "Nigerian Institute of Advanced Legal Studies (NIALS)",
      "International Federation of Women Lawyers (FIDA Nigeria)"
    ]
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
    relatedInterests: ["technology", "numbers", "building"],
    scholarships: [
      "MTN Foundation Science & Technology Scholarship",
      "Google Generation Scholarship",
      "Petroleum Technology Development Fund (PTDF) Scholarship",
      "Federal Government BEA Scholarship",
      "TETFUND Scholarship",
      "Dangote Foundation Scholarship",
      "Nigerian Communications Commission (NCC) Scholarship",
      "University-specific merit scholarships"
    ],
    postUtmeTips: "Computer Science post-UTME is Mathematics-heavy. Expect questions on algebra, sequences and series, logic, sets, and basic programming concepts at some institutions. Practise speed-solving MCQ Maths problems. At FUTA and UNILAG, Physics questions also appear. Strong performance in Further Mathematics at O'Level is a major advantage. Aim for 70%+ in the post-UTME screening exercise.",
    professionalBodies: [
      "Nigeria Computer Society (NCS)",
      "Computer Professionals Registration Council of Nigeria (CPN)",
      "Institute of Software Practitioners of Nigeria (ISPON)",
      "Information Security Society of Africa – Nigeria (ISSAN)"
    ]
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
    relatedInterests: ["numbers", "business"],
    scholarships: [
      "ICAN Foundation Scholarship",
      "Federal Government BEA Scholarship",
      "MTN Foundation Scholarship",
      "Dangote Foundation Scholarship",
      "TETFUND Scholarship",
      "State Government Merit Scholarships",
      "University merit scholarships",
      "NEEDS Assessment Fund"
    ],
    postUtmeTips: "Accounting post-UTME focuses on Mathematics and Economics. Expect questions on financial mathematics, profit/loss calculations, ratio analysis, and basic economics theory. Practise WAEC/NECO Accounting and Economics questions as a warm-up. At institutions like UNILAG and ABU, the post-UTME may include an essay component — ensure your written English is polished.",
    professionalBodies: [
      "Institute of Chartered Accountants of Nigeria (ICAN)",
      "Association of National Accountants of Nigeria (ANAN)",
      "Chartered Institute of Taxation of Nigeria (CITN)",
      "Institute of Chartered Secretaries and Administrators of Nigeria (ICSAN)"
    ]
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
    relatedInterests: ["building", "science", "technology"],
    scholarships: [
      "NNPC/TotalEnergies National Merit Scholarship",
      "Shell Nigeria Scholarship",
      "Agbami Engineering Scholarship",
      "Petroleum Technology Development Fund (PTDF) Scholarship",
      "Nigerian Women in Engineering Scholarship",
      "Federal Government BEA Scholarship",
      "TETFUND Scholarship",
      "MTN Foundation Science & Technology Scholarship"
    ],
    postUtmeTips: "Mechanical Engineering post-UTME is dominated by Physics and Mathematics. Expect mechanics, energy, heat transfer, and calculus questions. Further Mathematics preparation gives you a clear edge. Work through past JAMB Physics and Maths questions at speed — most post-UTME exams are timed at 30–40 minutes for 50–60 questions. FUTO and UNILAG post-UTME scores count alongside JAMB scores for admission ranking.",
    professionalBodies: [
      "Nigerian Society of Engineers (NSE)",
      "Council for the Regulation of Engineering in Nigeria (COREN)",
      "Nigerian Institution of Mechanical Engineers (NIMechE)",
      "Society of Automotive Engineers Nigeria (SAE Nigeria)"
    ]
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
    relatedInterests: ["building", "technology", "science"],
    scholarships: [
      "NNPC/TotalEnergies National Merit Scholarship",
      "Shell Nigeria Scholarship",
      "Nigerian Women in Engineering Scholarship",
      "MTN Foundation Science & Technology Scholarship",
      "Petroleum Technology Development Fund (PTDF) Scholarship",
      "Federal Government BEA Scholarship",
      "TETFUND Scholarship",
      "Nigerian Communications Commission (NCC) Scholarship"
    ],
    postUtmeTips: "Electrical/Electronics Engineering post-UTME tests Physics deeply — focus on electricity and magnetism, circuits, waves, and modern physics. Mathematics (especially calculus and trigonometry) is also tested. ABU Zaria and UNILAG are among the most competitive; aim for 70%+ to be safe. Practise questions from previous years and spend extra time on Further Mathematics topics like matrices and complex numbers.",
    professionalBodies: [
      "Nigerian Society of Engineers (NSE)",
      "Council for the Regulation of Engineering in Nigeria (COREN)",
      "Nigerian Institution of Electrical & Electronic Engineers (NIEEE)",
      "Institute of Electrical and Electronics Engineers (IEEE) Nigeria Section"
    ]
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
    relatedInterests: ["building", "science"],
    scholarships: [
      "NNPC/TotalEnergies National Merit Scholarship",
      "Shell Nigeria Scholarship",
      "Nigerian Women in Engineering Scholarship",
      "Federal Government BEA Scholarship",
      "Petroleum Technology Development Fund (PTDF) Scholarship",
      "TETFUND Scholarship",
      "Julius Berger Nigeria Scholarship",
      "NEEDS Assessment Fund"
    ],
    postUtmeTips: "Civil Engineering post-UTME emphasises Mathematics and Physics. Structural mechanics, statics, fluid dynamics concepts, and trigonometry come up frequently. Geography knowledge (especially physical geography and hydrology) can also be an advantage. At FUTA, the post-UTME is strongly Mathematics-based; at UNILAG, Physics is equally weighted. Aim for a combined JAMB + post-UTME ranking score that places you in the top 30% of applicants.",
    professionalBodies: [
      "Nigerian Society of Engineers (NSE)",
      "Council for the Regulation of Engineering in Nigeria (COREN)",
      "Nigerian Institution of Civil Engineers (NICE)",
      "Nigerian Building and Road Research Institute (NBRRI)"
    ]
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
    relatedInterests: ["science", "helping"],
    scholarships: [
      "Agbami Medical & Engineering Scholarship",
      "NNPC/TotalEnergies National Merit Scholarship",
      "Shell Nigeria Scholarship",
      "Petroleum Technology Development Fund (PTDF) Scholarship",
      "Federal Government BEA Scholarship",
      "MTN Foundation Science & Technology Scholarship",
      "Dangote Foundation Scholarship",
      "State Government Merit Scholarships"
    ],
    postUtmeTips: "Pharmacy post-UTME is Chemistry-intensive. Expect organic chemistry (functional groups, reactions, isomers), physical chemistry (equilibrium, thermodynamics), and biological chemistry. Biology questions on cell biology, pharmacology basics, and human systems are also common. OAU and UNILAG pharmacy cut-off scores are among the highest in Nigeria; practise under timed conditions and target 75%+ in the post-UTME component.",
    professionalBodies: [
      "Pharmaceutical Society of Nigeria (PSN)",
      "Pharmacists Council of Nigeria (PCN)",
      "Association of Industrial Pharmacists of Nigeria (AIPON)",
      "Nigerian Association of Pharmacists in Academia (NAPA)"
    ]
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
    relatedInterests: ["helping", "science"],
    scholarships: [
      "Federal Government BEA Scholarship",
      "Agbami Medical Scholarship",
      "Shell Nigeria Scholarship",
      "MTN Foundation Scholarship",
      "State Government Merit Scholarships",
      "Dangote Foundation Scholarship",
      "NEEDS Assessment Fund",
      "University-specific merit scholarships"
    ],
    postUtmeTips: "Nursing Science post-UTME focuses on Biology and Chemistry. Human anatomy, physiology, basic pharmacology, and health science concepts feature prominently. Some schools also test general English comprehension. Practise at speed — most post-UTME papers are 50–60 questions in 30–40 minutes. Babcock University requires separate aptitude and English tests in addition to subject screening.",
    professionalBodies: [
      "Nursing and Midwifery Council of Nigeria (NMCN)",
      "National Association of Nigeria Nurses and Midwives (NANNM)",
      "National Council of Nigerian Nurses and Midwives"
    ]
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
    relatedInterests: ["numbers", "business"],
    scholarships: [
      "Federal Government BEA Scholarship",
      "MTN Foundation Scholarship",
      "Dangote Foundation Scholarship",
      "TETFUND Scholarship",
      "Central Bank of Nigeria (CBN) Scholarship",
      "State Government Merit Scholarships",
      "World Bank Nigeria Scholarship",
      "University merit scholarships"
    ],
    postUtmeTips: "Economics post-UTME tests both mathematical ability and economic theory. Expect supply/demand graphs, elasticity calculations, national income accounting, and government fiscal policy questions. Mathematics questions (algebra, statistics, percentages) are frequently included. UI and OAU Economics departments are especially competitive — practise past WAEC Economics papers alongside JAMB past questions to build speed and accuracy.",
    professionalBodies: [
      "Nigerian Economic Society (NES)",
      "Nigerian Institute of Management (NIM)",
      "Chartered Institute of Economists of Nigeria (CIEN)",
      "African Finance and Economics Association (AFEA)"
    ]
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
    relatedInterests: ["communication", "art"],
    scholarships: [
      "Federal Government BEA Scholarship",
      "MTN Foundation Scholarship",
      "Dangote Foundation Scholarship",
      "State Government Merit Scholarships",
      "NEEDS Assessment Fund",
      "University-specific merit scholarships",
      "Nigerian Press Foundation Scholarship"
    ],
    postUtmeTips: "Mass Communication post-UTME heavily emphasises English language proficiency — comprehension passages, grammar, and essay writing are standard. Current affairs knowledge is essential; read national newspapers (Punch, Vanguard, ThisDay) daily. UNILAG and UNN require both written test and, for some candidates, a brief oral assessment. Practise writing clear, concise paragraphs and build your general knowledge of Nigerian and global events.",
    professionalBodies: [
      "Nigerian Institute of Public Relations (NIPR)",
      "Advertising Practitioners Council of Nigeria (APCON)",
      "Nigerian Guild of Editors (NGE)",
      "Broadcasting Organisation of Nigeria (BON)",
      "Nigeria Union of Journalists (NUJ)"
    ]
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
    relatedInterests: ["building", "art"],
    scholarships: [
      "Federal Government BEA Scholarship",
      "Shell Nigeria Scholarship",
      "MTN Foundation Scholarship",
      "Dangote Foundation Scholarship",
      "TETFUND Scholarship",
      "State Government Merit Scholarships",
      "University-specific merit scholarships",
      "NEEDS Assessment Fund"
    ],
    postUtmeTips: "Architecture post-UTME includes Mathematics, Physics, and sometimes a drawing/spatial reasoning component. OAU Ile-Ife is renowned for its freehand drawing test — practise sketching geometric forms and basic floor plans. At ABU Zaria, expect more emphasis on Physics and Maths. Your Fine Arts O'Level result is a bonus. A strong post-UTME performance is critical given how few spaces are available in top architecture departments.",
    professionalBodies: [
      "Nigerian Institute of Architects (NIA)",
      "Architects Registration Council of Nigeria (ARCON)",
      "Association of Consulting Architects Nigeria (ACAN)"
    ]
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
    relatedInterests: ["farming", "science"],
    scholarships: [
      "Federal Government BEA Scholarship",
      "Dangote Foundation Scholarship",
      "MTN Foundation Scholarship",
      "TETFUND Scholarship",
      "Notore Chemical Industries Scholarship",
      "State Government Merit Scholarships",
      "Petroleum Technology Development Fund (PTDF) Scholarship",
      "NEEDS Assessment Fund"
    ],
    postUtmeTips: "Agricultural Science post-UTME focuses on Biology and Chemistry, with Agricultural Science forming a significant portion at specialist universities like FUNAAB and MOUA. Expect soil science, plant physiology, animal husbandry, and crop production questions. Chemistry questions focus on organic matter and basic reactions relevant to agronomy. Practise with WAEC Agricultural Science past questions — many post-UTME questions draw directly from that syllabus.",
    professionalBodies: [
      "Agricultural Society of Nigeria (ASN)",
      "Nigerian Institute of Agricultural Engineers (NIAE)",
      "Nigerian Institute of Food Science and Technology (NIFST)",
      "Soil Science Society of Nigeria (SSSN)"
    ]
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
    relatedInterests: ["business", "numbers"],
    scholarships: [
      "Federal Government BEA Scholarship",
      "MTN Foundation Scholarship",
      "Dangote Foundation Scholarship",
      "TETFUND Scholarship",
      "State Government Merit Scholarships",
      "University merit scholarships",
      "NEEDS Assessment Fund",
      "Tony Elumelu Foundation Scholarship"
    ],
    postUtmeTips: "Business Administration post-UTME tests Economics, Mathematics, and English comprehension. Expect questions on business principles, simple financial calculations, graphs, and essay writing. Practise commercial arithmetic (profit, loss, VAT, interest rates) and basic microeconomics. Pan-Atlantic University (Lagos Business School) has an additional aptitude assessment. Build your vocabulary and writing skills as some schools include a personal statement or essay component.",
    professionalBodies: [
      "Nigerian Institute of Management (NIM)",
      "Chartered Institute of Personnel Management (CIPM)",
      "Nigerian Institute of Marketing (NIMN)",
      "Institute of Directors Nigeria (IoD Nigeria)"
    ]
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
    relatedInterests: ["science"],
    scholarships: [
      "Federal Government BEA Scholarship",
      "MTN Foundation Science & Technology Scholarship",
      "Shell Nigeria Scholarship",
      "Agbami Medical & Engineering Scholarship",
      "Dangote Foundation Scholarship",
      "TETFUND Scholarship",
      "State Government Merit Scholarships",
      "University-specific merit scholarships"
    ],
    postUtmeTips: "Biochemistry post-UTME is a mix of Biology and Chemistry questions. Focus on metabolic pathways, enzyme kinetics, cell biology, organic chemistry reactions, and molecular biology basics. UI and OAU are the top schools — their post-UTME cut-off scores are competitive. Practise past JAMB Biology and Chemistry questions, paying special attention to carbohydrate and protein chemistry, which appear frequently.",
    professionalBodies: [
      "Nigerian Society of Biochemistry and Molecular Biology (NSBMB)",
      "Biotechnology Society of Nigeria (BSN)",
      "Nigerian Institute of Food Science and Technology (NIFST)"
    ]
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
    relatedInterests: ["science"],
    scholarships: [
      "Federal Government BEA Scholarship",
      "MTN Foundation Science & Technology Scholarship",
      "Shell Nigeria Scholarship",
      "Dangote Foundation Scholarship",
      "TETFUND Scholarship",
      "State Government Merit Scholarships",
      "University merit scholarships",
      "NEEDS Assessment Fund"
    ],
    postUtmeTips: "Microbiology post-UTME is Biology-dominant. Expect questions on cell structure, microbial metabolism, sterilisation, disease mechanisms, and immunology basics. Chemistry (organic and physical) also appears. Practise WAEC/JAMB Biology past questions — especially genetics, ecology, and human physiology. Top schools like UNN and UI are competitive; a post-UTME score of 60%+ is typically required for serious consideration.",
    professionalBodies: [
      "Nigerian Society for Microbiology (NSM)",
      "Nigerian Institute of Medical Research (NIMR)",
      "Biotechnology Society of Nigeria (BSN)"
    ]
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
    relatedInterests: ["law", "communication"],
    scholarships: [
      "Federal Government BEA Scholarship",
      "MTN Foundation Scholarship",
      "Dangote Foundation Scholarship",
      "TETFUND Scholarship",
      "State Government Merit Scholarships",
      "NEEDS Assessment Fund",
      "University-specific merit scholarships"
    ],
    postUtmeTips: "Political Science post-UTME tests Government, English comprehension, and current affairs. Master Nigeria's constitutional history, electoral processes, and foreign policy. Read newspapers and follow political commentary. UI and UNILAG are the most selective — they often weight Government performance heavily. Writing clear, analytical essay responses in post-UTME oral assessments (where applicable) will distinguish you from competitors.",
    professionalBodies: [
      "Nigerian Political Science Association (NPSA)",
      "African Association of Political Science (AAPS)",
      "Nigerian Institute of International Affairs (NIIA)"
    ]
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
    relatedInterests: ["helping", "science"],
    scholarships: [
      "Agbami Medical & Engineering Scholarship",
      "NNPC/TotalEnergies National Merit Scholarship",
      "Shell Nigeria Scholarship",
      "Federal Government BEA Scholarship",
      "Petroleum Technology Development Fund (PTDF) Scholarship",
      "MTN Foundation Scholarship",
      "State Government Merit Scholarships",
      "Dangote Foundation Scholarship"
    ],
    postUtmeTips: "Dentistry post-UTME mirrors Medicine in its difficulty. Expect Biology (anatomy, physiology, cell biology) and Chemistry (organic, physical) to feature heavily. UNILAG Dentistry is among the hardest to gain admission to in West Africa. You need consistent A's and B's at O'Level and a post-UTME score of at least 75%. Attend dedicated post-UTME prep classes and simulate exam conditions in your practice sessions.",
    professionalBodies: [
      "Nigerian Dental Association (NDA)",
      "Medical and Dental Council of Nigeria (MDCN)",
      "West African College of Surgeons – Dental Faculty"
    ]
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
    relatedInterests: ["numbers", "business"],
    scholarships: [
      "Federal Government BEA Scholarship",
      "Central Bank of Nigeria (CBN) Scholarship",
      "MTN Foundation Scholarship",
      "Dangote Foundation Scholarship",
      "TETFUND Scholarship",
      "State Government Merit Scholarships",
      "University merit scholarships",
      "NEEDS Assessment Fund"
    ],
    postUtmeTips: "Banking & Finance post-UTME tests Mathematics and Economics primarily. Financial mathematics (simple/compound interest, annuities, present value), demand and supply analysis, and monetary policy questions are common. Practise past WAEC Economics and commercial mathematics questions. At Covenant University, an additional aptitude reasoning test is part of the screening. Good performance in JAMB Economics and Mathematics is crucial.",
    professionalBodies: [
      "Chartered Institute of Bankers of Nigeria (CIBN)",
      "Securities and Exchange Commission (SEC) Nigeria",
      "Nigerian Stock Exchange (NGX) – Professional Members",
      "Institute of Capital Market Registrars (ICMR)"
    ]
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
    relatedInterests: ["communication", "art"],
    scholarships: [
      "Federal Government BEA Scholarship",
      "MTN Foundation Scholarship",
      "Dangote Foundation Scholarship",
      "TETFUND Scholarship",
      "State Government Merit Scholarships",
      "University-specific merit scholarships",
      "NEEDS Assessment Fund"
    ],
    postUtmeTips: "English & Literary Studies post-UTME is almost entirely language and literature-based. Expect comprehension passages, literary analysis (prose, poetry, drama), and grammar questions. Familiarity with set texts in Nigerian literature (Chinua Achebe, Wole Soyinka, Chimamanda Adichie) is a plus. UI's post-UTME is particularly known for testing literary criticism skills. Write clearly and analytically in essay sections, demonstrating awareness of literary devices.",
    professionalBodies: [
      "Nigerian English Studies Association (NESA)",
      "Association of Nigerian Authors (ANA)",
      "Linguistics Association of Nigeria (LAN)",
      "Nigeria Publishers Association (NPA)"
    ]
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
    relatedInterests: ["art", "building"],
    scholarships: [
      "Federal Government BEA Scholarship",
      "MTN Foundation Scholarship",
      "Dangote Foundation Scholarship",
      "State Government Merit Scholarships",
      "TETFUND Scholarship",
      "University merit scholarships",
      "NEEDS Assessment Fund"
    ],
    postUtmeTips: "Fine & Applied Arts post-UTME typically includes a practical/studio component — a freehand drawing or design task — alongside written questions on art history and colour theory. ABU Zaria and UNN are the most prestigious art schools in Nigeria. Practise life drawings, still life compositions, and colour mixing. Review art history (Nigerian traditional art, contemporary African art movements) to prepare for written theory questions.",
    professionalBodies: [
      "Society of Nigerian Artists (SNA)",
      "Graphic Designers Association of Nigeria (GDAN)",
      "National Gallery of Art Nigeria (NGA)",
      "Association of Industrial Designers of Nigeria (AIDN)"
    ]
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
    relatedInterests: ["science", "farming"],
    scholarships: [
      "Federal Government BEA Scholarship",
      "MTN Foundation Scholarship",
      "Dangote Foundation Scholarship",
      "TETFUND Scholarship",
      "Notore Chemical Industries Scholarship",
      "State Government Merit Scholarships",
      "University merit scholarships",
      "NEEDS Assessment Fund"
    ],
    postUtmeTips: "Food Science post-UTME focuses on Chemistry and Biology. Expect food chemistry, nutrition, microbiology of food, and food processing principles. FUNAAB post-UTME includes Agricultural Science questions alongside the sciences. Review WAEC Chemistry (especially organic chemistry) and Biology (nutrition, digestion, photosynthesis). A strong performance in Food & Nutrition at O'Level is an additional advantage.",
    professionalBodies: [
      "Nigerian Institute of Food Science and Technology (NIFST)",
      "Nutrition Society of Nigeria (NSN)",
      "Nigeria Food Safety Management (NAFDAC aligned bodies)",
      "Agricultural Society of Nigeria (ASN)"
    ]
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
    relatedInterests: ["business", "building"],
    scholarships: [
      "Federal Government BEA Scholarship",
      "MTN Foundation Scholarship",
      "Dangote Foundation Scholarship",
      "TETFUND Scholarship",
      "State Government Merit Scholarships",
      "University merit scholarships",
      "NEEDS Assessment Fund"
    ],
    postUtmeTips: "Estate Management post-UTME tests Mathematics, Economics, and Geography. Expect questions on land use, property economics, basic surveying concepts, and commercial calculations. UNILAG and OAU are the most competitive. Review urban geography and map reading skills from Geography, and practise Economics of land and property. A good O'Level Geography result is important for admission.",
    professionalBodies: [
      "Nigerian Institution of Estate Surveyors and Valuers (NIESV)",
      "Estate Surveyors and Valuers Registration Board of Nigeria (ESVARBON)",
      "International Real Estate Federation (FIABCI) Nigeria Chapter"
    ]
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
    relatedInterests: ["law", "communication"],
    scholarships: [
      "Federal Government BEA Scholarship",
      "MTN Foundation Scholarship",
      "Dangote Foundation Scholarship",
      "TETFUND Scholarship",
      "State Government Merit Scholarships",
      "NEEDS Assessment Fund",
      "Nigerian Institute of International Affairs (NIIA) Fellowship"
    ],
    postUtmeTips: "International Relations post-UTME tests Government and general knowledge of global affairs. Stay updated on African Union decisions, UN resolutions, ECOWAS policies, and Nigeria's foreign policy positions. English writing proficiency is tested through essays at schools like OAU. Read editorials and opinion pieces from ThisDay, The Nation, and Premium Times. Geography of world regions and major international treaties is also regularly tested.",
    professionalBodies: [
      "Nigerian Institute of International Affairs (NIIA)",
      "Nigerian Society of International Law (NSIL)",
      "African Association of Political Science (AAPS)"
    ]
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
    relatedInterests: ["building", "science", "technology"],
    scholarships: [
      "NNPC/TotalEnergies National Merit Scholarship",
      "Shell Nigeria Scholarship",
      "Agbami Engineering Scholarship",
      "Petroleum Technology Development Fund (PTDF) Scholarship",
      "Chevron Nigeria Scholarship",
      "Nigerian Women in Engineering Scholarship",
      "Federal Government BEA Scholarship",
      "ExxonMobil Nigeria Scholarship"
    ],
    postUtmeTips: "Petroleum Engineering post-UTME is very competitive. Mathematics (calculus, trigonometry, mechanics) and Physics (fluid dynamics, thermodynamics, mechanics) are the core subjects tested. UNIBEN and FUTO are the leading schools — both run rigorous post-UTME screening. Further Mathematics at O'Level is a major differentiator. Practise engineering-style problem-solving questions and ensure your JAMB score is at least 220 before applying.",
    professionalBodies: [
      "Nigerian Society of Engineers (NSE)",
      "Council for the Regulation of Engineering in Nigeria (COREN)",
      "Society of Petroleum Engineers (SPE) Nigeria Section",
      "Nigerian Association of Petroleum Explorationists (NAPE)"
    ]
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
    relatedInterests: ["helping", "communication"],
    scholarships: [
      "Federal Government BEA Scholarship",
      "TETFUND Scholarship",
      "MTN Foundation Scholarship",
      "Dangote Foundation Scholarship",
      "State Government Merit Scholarships",
      "NEEDS Assessment Fund",
      "Universal Basic Education Commission (UBEC) Scholarship"
    ],
    postUtmeTips: "Education post-UTME usually tests subjects relevant to your chosen teaching specialization alongside English comprehension and general studies. For Education/Mathematics, expect Maths questions; for Education/Biology, expect science questions. UI's Education faculty is especially competitive. Review educational theory basics (Piaget, Bloom's taxonomy) as some schools include general education theory in their screening papers.",
    professionalBodies: [
      "Teachers Registration Council of Nigeria (TRCN)",
      "Nigerian Academy of Education (NAE)",
      "Science Teachers Association of Nigeria (STAN)",
      "Mathematical Association of Nigeria (MAN)"
    ]
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
    relatedInterests: ["law", "communication"],
    scholarships: [
      "Federal Government BEA Scholarship",
      "MTN Foundation Scholarship",
      "Dangote Foundation Scholarship",
      "TETFUND Scholarship",
      "State Government Merit Scholarships",
      "NEEDS Assessment Fund",
      "University merit scholarships"
    ],
    postUtmeTips: "Public Administration post-UTME focuses on Government, Economics, and English comprehension. Study Nigeria's government structure (federal, state, local government), civil service reforms, and budgeting processes. Current affairs about Nigerian governance is regularly tested. Essay writing on public policy topics may be included at UI and OAU. Reading the Nigerian constitution and understanding the 1999 Constitution (as amended) is highly recommended.",
    professionalBodies: [
      "Nigerian Institute of Management (NIM)",
      "Institute of Chartered Secretaries and Administrators of Nigeria (ICSAN)",
      "Association of Senior Civil Servants of Nigeria (ASCSN)"
    ]
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
    relatedInterests: ["farming", "science"],
    scholarships: [
      "Federal Government BEA Scholarship",
      "MTN Foundation Scholarship",
      "Shell Nigeria Scholarship",
      "Dangote Foundation Scholarship",
      "TETFUND Scholarship",
      "State Government Merit Scholarships",
      "NEEDS Assessment Fund",
      "University merit scholarships"
    ],
    postUtmeTips: "Geography post-UTME tests physical geography (geomorphology, climatology, hydrology), human geography, and map/statistical interpretation. Mathematics questions on statistics, graphs, and spatial data analysis appear frequently. UI and OAU are the top schools. Review WAEC Geography thoroughly — especially the map reading section, as practical map questions are commonly reproduced in post-UTME screenings.",
    professionalBodies: [
      "Nigerian Geographical Association (NGA)",
      "Nigerian Environmental Society (NES)",
      "Remote Sensing and Photogrammetry Society of Nigeria (RSPSN)",
      "Nigerian Institute of Town Planners (NITP)"
    ]
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
    relatedInterests: ["science", "helping"],
    scholarships: [
      "Agbami Medical & Engineering Scholarship",
      "Federal Government BEA Scholarship",
      "Shell Nigeria Scholarship",
      "MTN Foundation Scholarship",
      "Dangote Foundation Scholarship",
      "State Government Merit Scholarships",
      "University merit scholarships",
      "NEEDS Assessment Fund"
    ],
    postUtmeTips: "Medical Laboratory Science post-UTME is Biology and Chemistry-intensive. Expect haematology basics, clinical chemistry, microbiology, and human physiology questions. UNILAG and UNN MLS departments are competitive with scores of 65%+ generally needed. Review blood typing, disease diagnosis mechanisms, and laboratory safety standards. Physics questions on optics and instrumentation (microscopy, spectrophotometry) also appear at some schools.",
    professionalBodies: [
      "Medical Laboratory Science Council of Nigeria (MLSCN)",
      "Association of Medical Laboratory Scientists of Nigeria (AMLSN)",
      "Nigerian Society for Microbiology (NSM)"
    ]
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
    relatedInterests: ["technology", "building"],
    scholarships: [
      "NNPC/TotalEnergies National Merit Scholarship",
      "MTN Foundation Science & Technology Scholarship",
      "Shell Nigeria Scholarship",
      "Nigerian Women in Engineering Scholarship",
      "Federal Government BEA Scholarship",
      "Petroleum Technology Development Fund (PTDF) Scholarship",
      "TETFUND Scholarship",
      "Google Nigeria Scholarship"
    ],
    postUtmeTips: "Computer Engineering post-UTME is Mathematics and Physics-heavy. Expect questions on digital logic, binary number systems, circuits, and computer principles alongside standard Maths and Physics. Further Mathematics at O'Level is a strong differentiator. FUTA post-UTME is known for its rigour — practise under strict time conditions. Aim for 70%+ and ensure your JAMB score reflects strength in both Mathematics and Physics.",
    professionalBodies: [
      "Nigerian Society of Engineers (NSE)",
      "Council for the Regulation of Engineering in Nigeria (COREN)",
      "Nigeria Computer Society (NCS)",
      "Computer Professionals Registration Council of Nigeria (CPN)"
    ]
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
    relatedInterests: ["helping", "science"],
    scholarships: [
      "Federal Government BEA Scholarship",
      "MTN Foundation Scholarship",
      "Dangote Foundation Scholarship",
      "TETFUND Scholarship",
      "State Government Merit Scholarships",
      "NEEDS Assessment Fund",
      "University merit scholarships"
    ],
    postUtmeTips: "Psychology post-UTME tests Biology (nervous system, human behaviour, endocrinology), English comprehension, and sometimes social sciences. UI's post-UTME is known for including a critical reasoning component. Read introductory psychology concepts (classical conditioning, cognitive development, personality theories) to gain an edge. Essay-writing ability and logical reasoning are valued in oral assessments at some institutions.",
    professionalBodies: [
      "Nigerian Psychological Association (NPA)",
      "Association of Psychiatrists in Nigeria (APN)",
      "International Union of Psychological Science (IUPsyS) Nigeria affiliate"
    ]
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
    relatedInterests: ["numbers", "building"],
    scholarships: [
      "Federal Government BEA Scholarship",
      "MTN Foundation Scholarship",
      "Dangote Foundation Scholarship",
      "TETFUND Scholarship",
      "State Government Merit Scholarships",
      "Julius Berger Nigeria Scholarship",
      "NEEDS Assessment Fund",
      "University merit scholarships"
    ],
    postUtmeTips: "Quantity Surveying post-UTME is Mathematics-focused. Expect mensuration (area, volume, perimeter), financial mathematics, and basic Physics (structures, forces). Commercial arithmetic from Economics is also relevant. OAU and FUTA are the top schools and have competitive cut-offs. Practise past WAEC Mathematics questions — particularly the mensuration and statistics sections — to build speed in these areas.",
    professionalBodies: [
      "Nigerian Institute of Quantity Surveyors (NIQS)",
      "Quantities Surveyors Registration Board of Nigeria (QSRBN)"
    ]
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
    relatedInterests: ["helping", "science"],
    scholarships: [
      "Agbami Medical & Engineering Scholarship",
      "Federal Government BEA Scholarship",
      "Shell Nigeria Scholarship",
      "MTN Foundation Scholarship",
      "Dangote Foundation Scholarship",
      "State Government Merit Scholarships",
      "NEEDS Assessment Fund",
      "University merit scholarships"
    ],
    postUtmeTips: "Physiotherapy post-UTME focuses on Biology (human anatomy, musculoskeletal system, nervous system) and Chemistry. Physics questions on mechanics and biomechanics basics also appear. UI and UNILAG have very limited spaces and require post-UTME scores above 70%. Study the body's major systems in detail — especially the skeletal, muscular, and nervous systems — as these are the foundation of physiotherapy and heavily tested.",
    professionalBodies: [
      "Nigerian Society of Physiotherapy (NSP)",
      "Medical Rehabilitation Therapists (Registration) Board of Nigeria (MRTB)"
    ]
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
    relatedInterests: ["business", "communication"],
    scholarships: [
      "Federal Government BEA Scholarship",
      "MTN Foundation Scholarship",
      "Dangote Foundation Scholarship",
      "TETFUND Scholarship",
      "State Government Merit Scholarships",
      "University merit scholarships",
      "Nigerian Institute of Marketing Scholarship",
      "NEEDS Assessment Fund"
    ],
    postUtmeTips: "Marketing post-UTME tests Economics, Mathematics, and English. Expect consumer behaviour concepts, pricing theory, commercial arithmetic, and marketing mix questions. Current knowledge of Nigerian brands and advertising campaigns can help in oral assessments. At UNILAG and UNN, preparation in Economics past questions is key. Communication skills are assessed in the oral/essay component — practise writing persuasive and analytical short essays.",
    professionalBodies: [
      "Chartered Institute of Marketing (CIM) Nigeria",
      "Nigerian Institute of Marketing (NIMN)",
      "Advertising Practitioners Council of Nigeria (APCON)"
    ]
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
    relatedInterests: ["helping", "law"],
    scholarships: [
      "Federal Government BEA Scholarship",
      "MTN Foundation Scholarship",
      "Dangote Foundation Scholarship",
      "TETFUND Scholarship",
      "State Government Merit Scholarships",
      "NEEDS Assessment Fund",
      "University merit scholarships"
    ],
    postUtmeTips: "Sociology post-UTME tests social sciences broadly — expect Government, Economics, and current Nigerian social issues. Essay writing on social problems (poverty, gender inequality, urbanisation) is common at schools like UI and OAU. Read widely about Nigerian society and global social trends. Practise analytical writing — post-UTME oral assessments reward candidates who can discuss social issues intelligently and use relevant sociological terminology.",
    professionalBodies: [
      "Nigerian Anthropological and Sociological Association (NASA)",
      "Association of Social Workers of Nigeria (ASWON)",
      "Nigerian Institute of Social and Economic Research (NISER)"
    ]
  },

  // ===== 20 NEW COURSES =====

  {
    name: "Theatre Arts",
    category: "Arts & Humanities",
    description: "Study of dramatic performance, stagecraft, directing, scriptwriting, costume design, and the history of theatre. Covers both traditional Nigerian performance arts and contemporary drama.",
    jambSubjects: ["Use of English", "Literature-in-English", "Government", "CRS"],
    olevelRequirements: "Five O'Level credits including English Language, Literature-in-English, and any three from Government, CRS, History, Fine Arts, Economics",
    cutoffMarks: { federal: 180, state: 160, private: 140 },
    topUniversities: [
      { name: "University of Ibadan", type: "Federal" },
      { name: "Obafemi Awolowo University", type: "Federal" },
      { name: "University of Nigeria, Nsukka", type: "Federal" },
      { name: "University of Lagos", type: "Federal" },
      { name: "Benue State University", type: "State" }
    ],
    careers: ["Actor/Actress", "Stage Director", "Scriptwriter", "Theatre Producer", "Drama Lecturer", "Film Director", "Arts Administrator", "TV/Film Production Manager"],
    yearsOfStudy: "4 years",
    relatedSubjects: ["Literature-in-English", "English Language", "Fine Arts", "CRS"],
    relatedInterests: ["art", "communication"],
    scholarships: [
      "Federal Government BEA Scholarship",
      "MTN Foundation Scholarship",
      "Dangote Foundation Scholarship",
      "State Government Merit Scholarships",
      "TETFUND Scholarship",
      "University merit scholarships",
      "NEEDS Assessment Fund"
    ],
    postUtmeTips: "Theatre Arts post-UTME usually includes a practical audition component alongside a written test. The written component tests English comprehension, literary appreciation, and knowledge of Nigerian dramatic literature (J.P. Clark, Wole Soyinka, Ola Rotimi). Prepare a short monologue or dramatic piece for the audition. Review Greek drama, African performance traditions, and key stagecraft terminology. UI Theatre Arts is one of Nigeria's most respected — its audition is competitive.",
    professionalBodies: [
      "Society of Nigerian Theatre Artists (SONTA)",
      "Performing Musicians Association of Nigeria (PMAN)",
      "Association of Nigerian Authors (ANA)",
      "Nigerian Film Corporation (NFC)"
    ]
  },
  {
    name: "Music",
    category: "Arts & Humanities",
    description: "Study of music theory, composition, performance, ethnomusicology, and music technology. Covers Western classical music, African traditional music, and contemporary Nigerian genres.",
    jambSubjects: ["Use of English", "Literature-in-English", "Government", "CRS"],
    olevelRequirements: "Five O'Level credits including English Language, Literature-in-English, and any three from Government, CRS, History, Fine Arts",
    cutoffMarks: { federal: 180, state: 160, private: 140 },
    topUniversities: [
      { name: "University of Nigeria, Nsukka", type: "Federal" },
      { name: "Obafemi Awolowo University", type: "Federal" },
      { name: "University of Ibadan", type: "Federal" },
      { name: "Ahmadu Bello University", type: "Federal" },
      { name: "University of Lagos", type: "Federal" }
    ],
    careers: ["Musician/Performer", "Music Producer", "Music Educator", "Ethnomusicologist", "Music Director (Church/Events)", "Sound Engineer", "Music Therapist", "Composer/Arranger"],
    yearsOfStudy: "4 years",
    relatedSubjects: ["Literature-in-English", "English Language", "Fine Arts", "CRS"],
    relatedInterests: ["art", "communication"],
    scholarships: [
      "Federal Government BEA Scholarship",
      "MTN Foundation Scholarship",
      "Dangote Foundation Scholarship",
      "State Government Merit Scholarships",
      "TETFUND Scholarship",
      "University merit scholarships",
      "NEEDS Assessment Fund"
    ],
    postUtmeTips: "Music admission typically includes an aptitude/audition test covering music theory (notation, scales, intervals, harmony) and practical performance on an instrument or voice. Prepare to sight-read simple musical passages and demonstrate proficiency on at least one instrument. Written theory questions on harmony, African music traditions, and music history (WAEC Music syllabus) are included. UNN and OAU music departments are well-regarded — start practical preparation at least 3 months in advance.",
    professionalBodies: [
      "Society of Nigerian Musicians (SNM)",
      "Performing Musicians Association of Nigeria (PMAN)",
      "Music Educators Association of Nigeria (MEAN)",
      "Copyright Society of Nigeria (COSON)"
    ]
  },
  {
    name: "History & International Studies",
    category: "Arts & Humanities",
    description: "Study of Nigerian, African, and world history — covering pre-colonial, colonial, and post-colonial periods — alongside diplomatic history and historiography.",
    jambSubjects: ["Use of English", "Government", "Literature-in-English", "CRS"],
    olevelRequirements: "Five O'Level credits including English Language, History or Government, and any three from Literature-in-English, Economics, Geography, CRS",
    cutoffMarks: { federal: 180, state: 160, private: 140 },
    topUniversities: [
      { name: "University of Ibadan", type: "Federal" },
      { name: "Obafemi Awolowo University", type: "Federal" },
      { name: "University of Nigeria, Nsukka", type: "Federal" },
      { name: "Ahmadu Bello University", type: "Federal" },
      { name: "University of Calabar", type: "Federal" }
    ],
    careers: ["Historian", "Diplomat", "Archivist", "Museum Curator", "Heritage Manager", "Lecturer/Researcher", "Documentary Filmmaker", "Intelligence Analyst"],
    yearsOfStudy: "4 years",
    relatedSubjects: ["Government", "Literature-in-English", "CRS", "Geography"],
    relatedInterests: ["communication", "law"],
    scholarships: [
      "Federal Government BEA Scholarship",
      "MTN Foundation Scholarship",
      "Dangote Foundation Scholarship",
      "TETFUND Scholarship",
      "State Government Merit Scholarships",
      "NEEDS Assessment Fund",
      "University merit scholarships"
    ],
    postUtmeTips: "History post-UTME tests Government, general history knowledge, and English essay writing. Study key periods: pre-colonial Nigerian kingdoms, the British colonial era, Nigerian independence, and major African historical events. Familiarise yourself with the contributions of prominent historians such as J.F. Ade Ajayi and Kenneth Onwuka Dike. Essay questions reward analytical reasoning over rote memorisation — practise writing structured historical arguments.",
    professionalBodies: [
      "Historical Society of Nigeria (HSN)",
      "Nigerian Institute of International Affairs (NIIA)",
      "National Archives of Nigeria",
      "Association of African Historians (AAH)"
    ]
  },
  {
    name: "Philosophy",
    category: "Arts & Humanities",
    description: "Study of logic, ethics, metaphysics, epistemology, African philosophy, and the philosophy of mind and language.",
    jambSubjects: ["Use of English", "Literature-in-English", "Government", "CRS"],
    olevelRequirements: "Five O'Level credits including English Language and any four from Literature-in-English, Government, Economics, History, CRS, Geography",
    cutoffMarks: { federal: 180, state: 160, private: 140 },
    topUniversities: [
      { name: "University of Ibadan", type: "Federal" },
      { name: "Obafemi Awolowo University", type: "Federal" },
      { name: "University of Nigeria, Nsukka", type: "Federal" },
      { name: "University of Lagos", type: "Federal" },
      { name: "Bayero University, Kano", type: "Federal" }
    ],
    careers: ["Philosopher/Lecturer", "Ethicist", "Legal Consultant", "Public Policy Analyst", "Counsellor", "Journalist", "Theologian", "Corporate Ethics Officer"],
    yearsOfStudy: "4 years",
    relatedSubjects: ["Literature-in-English", "Government", "CRS", "English Language"],
    relatedInterests: ["communication", "law"],
    scholarships: [
      "Federal Government BEA Scholarship",
      "MTN Foundation Scholarship",
      "Dangote Foundation Scholarship",
      "TETFUND Scholarship",
      "State Government Merit Scholarships",
      "NEEDS Assessment Fund",
      "University merit scholarships"
    ],
    postUtmeTips: "Philosophy post-UTME emphasises English comprehension, logical reasoning, and essay writing. Some schools include basic logic questions (syllogisms, argument analysis). Familiarise yourself with key philosophical terms (epistemology, ontology, deductive/inductive reasoning) and African philosophical thought. Practise writing clear, well-argued essays. UI's Philosophy department is one of Africa's finest — their post-UTME values clarity of thought and argument above rote learning.",
    professionalBodies: [
      "Nigerian Philosophical Association (NPA)",
      "African Philosophy Network",
      "Philosophy Documentation Center (PDC) Nigeria affiliate"
    ]
  },
  {
    name: "Library & Information Science",
    category: "Social Sciences",
    description: "Study of information management, library operations, cataloguing, archiving, database management, and knowledge organisation.",
    jambSubjects: ["Use of English", "Government", "Economics", "Geography"],
    olevelRequirements: "Five O'Level credits including English Language and any four from Government, Economics, Literature-in-English, History, Geography, CRS",
    cutoffMarks: { federal: 180, state: 160, private: 140 },
    topUniversities: [
      { name: "University of Ibadan", type: "Federal" },
      { name: "University of Nigeria, Nsukka", type: "Federal" },
      { name: "Ahmadu Bello University", type: "Federal" },
      { name: "Obafemi Awolowo University", type: "Federal" },
      { name: "University of Lagos", type: "Federal" }
    ],
    careers: ["Librarian", "Information Manager", "Archivist", "Records Manager", "Knowledge Management Officer", "School Librarian", "Database Administrator", "Digital Library Specialist"],
    yearsOfStudy: "4 years",
    relatedSubjects: ["English Language", "Government", "Economics", "Literature-in-English"],
    relatedInterests: ["communication", "technology"],
    scholarships: [
      "Federal Government BEA Scholarship",
      "MTN Foundation Scholarship",
      "TETFUND Scholarship",
      "Dangote Foundation Scholarship",
      "State Government Merit Scholarships",
      "NEEDS Assessment Fund",
      "University merit scholarships"
    ],
    postUtmeTips: "Library & Information Science post-UTME tests English comprehension, general knowledge, and information management basics. Read widely across all subjects — breadth of knowledge is a core professional skill tested in aptitude sections. UI's Department of Library, Archival and Information Studies (LARIS) is West Africa's premier library school. Familiarise yourself with the Dewey Decimal System and basic cataloguing concepts. Essay writing on the role of information in national development features in some post-UTME papers.",
    professionalBodies: [
      "Nigerian Library Association (NLA)",
      "Cataloguing Classification and Indexing Society of Nigeria (CCISN)",
      "Nigerian School Library Association (NSLA)"
    ]
  },
  {
    name: "Statistics",
    category: "Sciences",
    description: "Study of data collection, analysis, interpretation, and presentation methods — covering probability theory, regression analysis, biostatistics, and computational statistics.",
    jambSubjects: ["Use of English", "Mathematics", "Further Mathematics", "Economics"],
    olevelRequirements: "Five O'Level credits including English Language, Mathematics, Further Mathematics or Physics, and any two others",
    cutoffMarks: { federal: 200, state: 180, private: 160 },
    topUniversities: [
      { name: "University of Ibadan", type: "Federal" },
      { name: "University of Lagos", type: "Federal" },
      { name: "University of Nigeria, Nsukka", type: "Federal" },
      { name: "Obafemi Awolowo University", type: "Federal" },
      { name: "Federal University of Technology, Akure", type: "Federal" }
    ],
    careers: ["Statistician", "Data Analyst", "Actuarial Analyst", "Research Scientist", "Biostatistician", "Economic Analyst", "Demographer", "Data Scientist"],
    yearsOfStudy: "4 years",
    relatedSubjects: ["Mathematics", "Further Mathematics", "Economics", "Physics"],
    relatedInterests: ["numbers", "science", "technology"],
    scholarships: [
      "Federal Government BEA Scholarship",
      "MTN Foundation Science & Technology Scholarship",
      "TETFUND Scholarship",
      "Dangote Foundation Scholarship",
      "Central Bank of Nigeria (CBN) Scholarship",
      "State Government Merit Scholarships",
      "University merit scholarships",
      "NEEDS Assessment Fund"
    ],
    postUtmeTips: "Statistics post-UTME is Mathematics-intensive. Expect calculus, probability, permutation/combination, statistics (mean, variance, standard deviation), and algebraic reasoning. Further Mathematics at O'Level gives you a crucial edge — most Statistics programmes recommend it. UI and UNILAG Statistics departments are among the best in Nigeria. Practise WAEC Further Mathematics past questions and JAMBMathematics MCQs under timed conditions.",
    professionalBodies: [
      "Nigerian Statistical Association (NSA)",
      "National Bureau of Statistics (NBS) – Professional Community",
      "Statistical Society of Nigeria (SSN)",
      "International Statistical Institute (ISI) Nigeria Chapter"
    ]
  },
  {
    name: "Industrial Chemistry",
    category: "Sciences",
    description: "Study of chemical processes used in industry — petrochemicals, polymer science, industrial catalysis, environmental chemistry, and quality control.",
    jambSubjects: ["Use of English", "Chemistry", "Mathematics", "Physics"],
    olevelRequirements: "Five O'Level credits including English Language, Mathematics, Chemistry, Physics, and Biology or Further Mathematics",
    cutoffMarks: { federal: 190, state: 170, private: 150 },
    topUniversities: [
      { name: "Federal University of Technology, Owerri", type: "Federal" },
      { name: "University of Nigeria, Nsukka", type: "Federal" },
      { name: "Federal University of Technology, Akure", type: "Federal" },
      { name: "Ahmadu Bello University", type: "Federal" },
      { name: "University of Benin", type: "Federal" }
    ],
    careers: ["Industrial Chemist", "Quality Control Manager", "Petrochemical Analyst", "Environmental Chemist", "Laboratory Scientist", "Paint/Coating Formulator", "Food/Pharmaceutical QA Officer"],
    yearsOfStudy: "4 years",
    relatedSubjects: ["Chemistry", "Mathematics", "Physics", "Biology"],
    relatedInterests: ["science", "technology"],
    scholarships: [
      "NNPC/TotalEnergies National Merit Scholarship",
      "Shell Nigeria Scholarship",
      "Agbami Engineering Scholarship",
      "Federal Government BEA Scholarship",
      "Petroleum Technology Development Fund (PTDF) Scholarship",
      "MTN Foundation Scholarship",
      "TETFUND Scholarship",
      "State Government Merit Scholarships"
    ],
    postUtmeTips: "Industrial Chemistry post-UTME focuses heavily on Chemistry — organic reactions, physical chemistry (thermodynamics, kinetics), and quantitative analysis are key topics. Mathematics (especially calculus and algebra) also features. FUTO and UNN are top choices. Revise WAEC and JAMB Chemistry thoroughly, paying attention to industrial applications such as Haber process, Contact process, and fractional distillation of crude oil, which directly relate to the course.",
    professionalBodies: [
      "Chemical Society of Nigeria (CSN)",
      "Institute of Chartered Chemists of Nigeria (ICCON)",
      "Nigerian Society for Chemical Engineers (NSChE)"
    ]
  },
  {
    name: "Geology",
    category: "Sciences",
    description: "Study of the Earth's structure, minerals, rocks, plate tectonics, geophysics, and economic geology. Critical for Nigeria's oil and solid minerals sectors.",
    jambSubjects: ["Use of English", "Mathematics", "Physics", "Chemistry"],
    olevelRequirements: "Five O'Level credits including English Language, Mathematics, Physics, Chemistry, and Geography or Biology",
    cutoffMarks: { federal: 190, state: 170, private: 150 },
    topUniversities: [
      { name: "Ahmadu Bello University", type: "Federal" },
      { name: "University of Ibadan", type: "Federal" },
      { name: "University of Benin", type: "Federal" },
      { name: "University of Nigeria, Nsukka", type: "Federal" },
      { name: "Federal University of Technology, Akure", type: "Federal" }
    ],
    careers: ["Geologist", "Petroleum Geologist", "Mining Engineer", "Hydrogeologist", "Geophysicist", "Environmental Geologist", "Mineral Exploration Specialist", "Geotechnical Engineer"],
    yearsOfStudy: "4-5 years",
    relatedSubjects: ["Chemistry", "Physics", "Mathematics", "Geography"],
    relatedInterests: ["science", "farming"],
    scholarships: [
      "NNPC/TotalEnergies National Merit Scholarship",
      "Shell Nigeria Scholarship",
      "Petroleum Technology Development Fund (PTDF) Scholarship",
      "Agbami Engineering Scholarship",
      "Federal Government BEA Scholarship",
      "MTN Foundation Scholarship",
      "TETFUND Scholarship",
      "Chevron Nigeria Scholarship"
    ],
    postUtmeTips: "Geology post-UTME tests Chemistry, Physics, and Geography. Expect questions on Earth structure, rock types, mineral identification, map reading, and basic geophysics. Geography (physical geography and map reading) is particularly relevant — practise topographic map interpretation. ABU Zaria and UI Geology are prestigious programmes. A strong Chemistry background is essential for mineralogy and geochemistry modules in later years.",
    professionalBodies: [
      "Nigerian Mining and Geosciences Society (NMGS)",
      "Nigerian Association of Petroleum Explorationists (NAPE)",
      "Society of Petroleum Engineers (SPE) Nigeria Section",
      "Council of Nigerian Mining Engineers and Geoscientists (COMEG)"
    ]
  },
  {
    name: "Surveying & Geoinformatics",
    category: "Environmental Sciences",
    description: "Study of land measurement, mapping, GPS/GIS technology, remote sensing, hydrographic surveying, and cadastral surveys for land administration.",
    jambSubjects: ["Use of English", "Mathematics", "Physics", "Geography"],
    olevelRequirements: "Five O'Level credits including English Language, Mathematics, Physics, Geography, and one other science or social science subject",
    cutoffMarks: { federal: 180, state: 160, private: 140 },
    topUniversities: [
      { name: "Ahmadu Bello University", type: "Federal" },
      { name: "University of Lagos", type: "Federal" },
      { name: "Federal University of Technology, Akure", type: "Federal" },
      { name: "Federal University of Technology, Minna", type: "Federal" },
      { name: "University of Nigeria, Nsukka", type: "Federal" }
    ],
    careers: ["Land Surveyor", "GIS Analyst", "Cadastral Surveyor", "Hydrographic Surveyor", "Remote Sensing Specialist", "Urban Mapping Specialist", "GPS/Navigation Engineer"],
    yearsOfStudy: "5 years",
    relatedSubjects: ["Mathematics", "Physics", "Geography", "Further Mathematics"],
    relatedInterests: ["building", "science", "technology"],
    scholarships: [
      "Federal Government BEA Scholarship",
      "Shell Nigeria Scholarship",
      "MTN Foundation Scholarship",
      "TETFUND Scholarship",
      "Dangote Foundation Scholarship",
      "State Government Merit Scholarships",
      "NEEDS Assessment Fund",
      "University merit scholarships"
    ],
    postUtmeTips: "Surveying & Geoinformatics post-UTME is Mathematics and Physics-heavy. Expect trigonometry, coordinate geometry, map projection, and basic Physics (optics, vectors). Map reading skills from Geography are directly applicable. ABU Zaria and FUTA are top institutions. Practise trigonometry — bearings, angles of elevation/depression, and traverse calculations — as these are fundamental to surveying and regularly appear in admission screening tests.",
    professionalBodies: [
      "Nigerian Institution of Surveyors (NIS)",
      "Survey Coordinating Council of Nigeria (SCCN)",
      "Global Geospatial Information Management (UN-GGIM) Nigeria affiliate"
    ]
  },
  {
    name: "Urban & Regional Planning",
    category: "Environmental Sciences",
    description: "Study of land use planning, urban design, housing policy, regional development, transportation planning, and environmental impact assessment.",
    jambSubjects: ["Use of English", "Geography", "Mathematics", "Economics"],
    olevelRequirements: "Five O'Level credits including English Language, Mathematics, Geography, Economics, and one other relevant subject",
    cutoffMarks: { federal: 180, state: 160, private: 140 },
    topUniversities: [
      { name: "Obafemi Awolowo University", type: "Federal" },
      { name: "Ahmadu Bello University", type: "Federal" },
      { name: "University of Lagos", type: "Federal" },
      { name: "Federal University of Technology, Akure", type: "Federal" },
      { name: "University of Nigeria, Nsukka", type: "Federal" }
    ],
    careers: ["Urban Planner", "Regional Development Officer", "Transport Planner", "Housing Policy Analyst", "Environmental Impact Assessor", "Land Use Consultant", "GIS Planner"],
    yearsOfStudy: "5 years",
    relatedSubjects: ["Geography", "Mathematics", "Economics", "Further Mathematics"],
    relatedInterests: ["building", "farming", "law"],
    scholarships: [
      "Federal Government BEA Scholarship",
      "Shell Nigeria Scholarship",
      "MTN Foundation Scholarship",
      "TETFUND Scholarship",
      "Dangote Foundation Scholarship",
      "State Government Merit Scholarships",
      "NEEDS Assessment Fund",
      "University merit scholarships"
    ],
    postUtmeTips: "Urban & Regional Planning post-UTME tests Geography, Mathematics, and Economics. Map reading, population statistics, urban growth concepts, and land use theory are key areas. OAU's Department of Urban and Regional Planning is the most prestigious in Nigeria. Review Nigeria's urban challenges (Lagos megacity growth, housing deficits, informal settlements) as essay questions on contemporary planning issues appear in some schools' screenings.",
    professionalBodies: [
      "Nigerian Institute of Town Planners (NITP)",
      "Town Planners Registration Council of Nigeria (TOPREC)",
      "African Association of Planning Schools (AAPS)"
    ]
  },
  {
    name: "Criminology & Security Studies",
    category: "Social Sciences",
    description: "Study of crime causation, criminal justice systems, policing, national security, intelligence, and conflict management in Nigerian and global contexts.",
    jambSubjects: ["Use of English", "Government", "Economics", "CRS"],
    olevelRequirements: "Five O'Level credits including English Language, Government, and any three from Economics, CRS, Literature-in-English, Geography, History",
    cutoffMarks: { federal: 180, state: 160, private: 140 },
    topUniversities: [
      { name: "University of Lagos", type: "Federal" },
      { name: "Obafemi Awolowo University", type: "Federal" },
      { name: "University of Ibadan", type: "Federal" },
      { name: "Covenant University", type: "Private" },
      { name: "Edo State University, Uzairue", type: "State" }
    ],
    careers: ["Criminologist", "Security Consultant", "Intelligence Analyst", "Prison Officer", "Police Officer", "Crime Prevention Officer", "National Security Adviser", "NGO Peace & Conflict Analyst"],
    yearsOfStudy: "4 years",
    relatedSubjects: ["Government", "Economics", "English Language", "Geography"],
    relatedInterests: ["law", "helping"],
    scholarships: [
      "Federal Government BEA Scholarship",
      "MTN Foundation Scholarship",
      "Dangote Foundation Scholarship",
      "TETFUND Scholarship",
      "State Government Merit Scholarships",
      "NEEDS Assessment Fund",
      "University merit scholarships"
    ],
    postUtmeTips: "Criminology & Security Studies post-UTME focuses on Government, general knowledge, and current affairs in security. Stay informed about Nigerian security challenges (Boko Haram, banditry, cybercrime, EFCC operations) and government security policies. Essay questions on crime prevention and national security are common. Analytical writing and logical reasoning are tested — practise structuring clear arguments with evidence from Nigeria's socio-political context.",
    professionalBodies: [
      "Criminological Society of Nigeria (CSN)",
      "Nigerian Security and Civil Defence Corps (NSCDC) – Professional Community",
      "Institute of Security Studies (ISS) Nigeria affiliate",
      "Association of Nigerian Security Practitioners (ANSP)"
    ]
  },
  {
    name: "Public Health",
    category: "Medical Sciences",
    description: "Study of disease prevention, health promotion, epidemiology, environmental health, maternal and child health, and health systems management at population level.",
    jambSubjects: ["Use of English", "Biology", "Chemistry", "Physics"],
    olevelRequirements: "Five O'Level credits including English Language, Mathematics, Biology, Chemistry, and Physics or Economics",
    cutoffMarks: { federal: 200, state: 180, private: 160 },
    topUniversities: [
      { name: "University of Ibadan", type: "Federal" },
      { name: "University of Lagos", type: "Federal" },
      { name: "Obafemi Awolowo University", type: "Federal" },
      { name: "University of Nigeria, Nsukka", type: "Federal" },
      { name: "Babcock University", type: "Private" }
    ],
    careers: ["Public Health Officer", "Epidemiologist", "Health Educator", "Environmental Health Scientist", "Biostatistician", "WHO/UNICEF Programme Officer", "Health Policy Analyst", "Disease Surveillance Officer"],
    yearsOfStudy: "4-5 years",
    relatedSubjects: ["Biology", "Chemistry", "Physics", "Mathematics"],
    relatedInterests: ["helping", "science"],
    scholarships: [
      "Agbami Medical & Engineering Scholarship",
      "Federal Government BEA Scholarship",
      "Shell Nigeria Scholarship",
      "MTN Foundation Scholarship",
      "TETFUND Scholarship",
      "Dangote Foundation Scholarship",
      "WHO Nigeria Scholarship",
      "State Government Merit Scholarships"
    ],
    postUtmeTips: "Public Health post-UTME mirrors Medical Sciences screening — Biology and Chemistry dominate, with emphasis on human physiology, epidemiology basics, disease transmission, and nutrition. At UI, the post-UTME is rigorous and competitive. Familiarise yourself with Nigeria's major public health challenges (malaria, tuberculosis, maternal mortality, HIV/AIDS) and the roles of NCDC, WHO, and UNICEF. Demonstrate awareness of preventive healthcare concepts in any essay component.",
    professionalBodies: [
      "Nigerian Institute of Public Health (NIPH)",
      "Environmental Health Officers Registration Council of Nigeria (EHORECON)",
      "Association of Public Health Physicians of Nigeria (APHPN)",
      "Community Health Practitioners Registration Board of Nigeria (CHPRBN)"
    ]
  },
  {
    name: "Radiography",
    category: "Medical Sciences",
    description: "Study of diagnostic imaging (X-ray, CT, MRI, ultrasound) and radiation therapy for treating cancer. Combines physics, anatomy, and patient care.",
    jambSubjects: ["Use of English", "Biology", "Chemistry", "Physics"],
    olevelRequirements: "Five O'Level credits including English Language, Mathematics, Biology, Chemistry, and Physics",
    cutoffMarks: { federal: 200, state: 180, private: 160 },
    topUniversities: [
      { name: "University of Lagos", type: "Federal" },
      { name: "University of Ibadan", type: "Federal" },
      { name: "Nnamdi Azikiwe University, Awka", type: "Federal" },
      { name: "University of Maiduguri", type: "Federal" },
      { name: "College of Medicine, University of Nigeria, Enugu", type: "Federal" }
    ],
    careers: ["Diagnostic Radiographer", "Radiation Therapist", "MRI Technologist", "Ultrasound Specialist", "Nuclear Medicine Technologist", "Medical Imaging Manager", "Radiography Lecturer"],
    yearsOfStudy: "5 years + 1 year internship",
    relatedSubjects: ["Physics", "Biology", "Chemistry", "Mathematics"],
    relatedInterests: ["science", "helping", "technology"],
    scholarships: [
      "Agbami Medical & Engineering Scholarship",
      "Federal Government BEA Scholarship",
      "Shell Nigeria Scholarship",
      "MTN Foundation Scholarship",
      "Dangote Foundation Scholarship",
      "State Government Merit Scholarships",
      "NEEDS Assessment Fund",
      "University merit scholarships"
    ],
    postUtmeTips: "Radiography post-UTME is Physics-intensive — expect radiation physics, optics, wave properties, nuclear physics, and electromagnetic spectrum questions alongside Biology (anatomy, organ systems). UNILAG Radiography is highly competitive with very few spaces. Practise past JAMB Physics extensively, focusing on nuclear reactions, X-ray production, and electromagnetic waves. A strong O'Level Physics result (A1 or B2) is almost essential for serious consideration.",
    professionalBodies: [
      "Society of Radiographers in Nigeria (SRN)",
      "Radiographers Registration Board of Nigeria (RRBN)",
      "Medical Imaging and Radiation Sciences Society of Nigeria (MIRSSN)"
    ]
  },
  {
    name: "Optometry",
    category: "Medical Sciences",
    description: "Study of vision science, ocular diseases, contact lens practice, low vision rehabilitation, and eye care management.",
    jambSubjects: ["Use of English", "Biology", "Chemistry", "Physics"],
    olevelRequirements: "Five O'Level credits including English Language, Mathematics, Biology, Chemistry, and Physics",
    cutoffMarks: { federal: 200, state: 180, private: 175 },
    topUniversities: [
      { name: "University of Benin", type: "Federal" },
      { name: "Abia State University, Uturu", type: "State" },
      { name: "Imo State University, Owerri", type: "State" },
      { name: "University of Nigeria, Nsukka", type: "Federal" },
      { name: "Madonna University", type: "Private" }
    ],
    careers: ["Optometrist", "Eye Care Specialist", "Contact Lens Practitioner", "Low Vision Specialist", "Ophthalmic Researcher", "Clinical Director", "Vision Rehabilitation Specialist"],
    yearsOfStudy: "5 years + 1 year internship",
    relatedSubjects: ["Biology", "Physics", "Chemistry", "Mathematics"],
    relatedInterests: ["science", "helping"],
    scholarships: [
      "Agbami Medical & Engineering Scholarship",
      "Federal Government BEA Scholarship",
      "Shell Nigeria Scholarship",
      "MTN Foundation Scholarship",
      "Dangote Foundation Scholarship",
      "State Government Merit Scholarships",
      "NEEDS Assessment Fund",
      "University merit scholarships"
    ],
    postUtmeTips: "Optometry post-UTME combines Biology and Physics questions — optics (lenses, refraction, light waves) is particularly important as it forms the physical basis of the profession. Human eye anatomy, visual system physiology, and basic chemistry also feature. UNIBEN is the pioneer and most respected Optometry school in Nigeria. Post-UTME scores of 65%+ are generally needed. Practise optics calculations from WAEC/NECO Physics as part of your preparation.",
    professionalBodies: [
      "Optometrists and Dispensing Opticians Registration Board of Nigeria (ODORBN)",
      "Nigerian Optometric Association (NOA)",
      "Vision 2020 Nigeria (International Agency for the Prevention of Blindness affiliate)"
    ]
  },
  {
    name: "Veterinary Medicine",
    category: "Medical Sciences",
    description: "Study of animal health, disease diagnosis, surgery, reproduction, public health, and the One Health interface between animal and human medicine.",
    jambSubjects: ["Use of English", "Biology", "Chemistry", "Physics"],
    olevelRequirements: "Five O'Level credits including English Language, Mathematics, Biology, Chemistry, and Physics, at not more than two sittings",
    cutoffMarks: { federal: 230, state: 200, private: 180 },
    topUniversities: [
      { name: "Ahmadu Bello University", type: "Federal" },
      { name: "University of Ibadan", type: "Federal" },
      { name: "University of Nigeria, Nsukka", type: "Federal" },
      { name: "Michael Okpara University, Umudike", type: "Federal" },
      { name: "University of Maiduguri", type: "Federal" }
    ],
    careers: ["Veterinary Surgeon", "Animal Health Officer", "Public Health Veterinarian", "Wildlife Veterinarian", "Livestock Production Manager", "Pharmaceutical Veterinarian", "Veterinary Researcher"],
    yearsOfStudy: "6 years + 1 year internship",
    relatedSubjects: ["Biology", "Chemistry", "Physics", "Agricultural Science"],
    relatedInterests: ["helping", "science", "farming"],
    scholarships: [
      "Federal Government BEA Scholarship",
      "Agbami Medical & Engineering Scholarship",
      "Shell Nigeria Scholarship",
      "NNPC/TotalEnergies National Merit Scholarship",
      "Dangote Foundation Scholarship",
      "MTN Foundation Scholarship",
      "State Government Merit Scholarships",
      "TETFUND Scholarship"
    ],
    postUtmeTips: "Veterinary Medicine post-UTME mirrors human Medicine screening — Biology and Chemistry are the core subjects. Animal physiology, zoology, genetics, organic chemistry, and biochemistry basics are all tested. ABU Zaria and UI are the top Vet schools and have very competitive cut-offs. Agricultural Science knowledge (animal husbandry, livestock diseases) is an additional advantage. Aim for JAMB scores above 220 and post-UTME performance above 70%.",
    professionalBodies: [
      "Nigerian Veterinary Medical Association (NVMA)",
      "Veterinary Council of Nigeria (VCN)",
      "World Veterinary Association (WVA) Nigeria affiliate"
    ]
  },
  {
    name: "Chemical Engineering",
    category: "Engineering",
    description: "Study of industrial chemical processes — design of reactors, distillation columns, and processing plants for petroleum, pharmaceuticals, food, and materials industries.",
    jambSubjects: ["Use of English", "Mathematics", "Chemistry", "Physics"],
    olevelRequirements: "Five O'Level credits including English Language, Mathematics, Chemistry, Physics, and Further Mathematics or Biology",
    cutoffMarks: { federal: 210, state: 190, private: 170 },
    topUniversities: [
      { name: "Ahmadu Bello University", type: "Federal" },
      { name: "University of Lagos", type: "Federal" },
      { name: "Federal University of Technology, Owerri", type: "Federal" },
      { name: "Obafemi Awolowo University", type: "Federal" },
      { name: "Covenant University", type: "Private" }
    ],
    careers: ["Chemical Engineer", "Process Engineer", "Petroleum Refinery Engineer", "Materials Engineer", "Environmental Engineer", "Polymer Engineer", "Production Plant Manager"],
    yearsOfStudy: "5 years",
    relatedSubjects: ["Chemistry", "Mathematics", "Physics", "Further Mathematics"],
    relatedInterests: ["science", "building", "technology"],
    scholarships: [
      "NNPC/TotalEnergies National Merit Scholarship",
      "Shell Nigeria Scholarship",
      "Agbami Engineering Scholarship",
      "Petroleum Technology Development Fund (PTDF) Scholarship",
      "Nigerian Women in Engineering Scholarship",
      "Federal Government BEA Scholarship",
      "ExxonMobil Nigeria Scholarship",
      "TETFUND Scholarship"
    ],
    postUtmeTips: "Chemical Engineering post-UTME tests both Chemistry and Mathematics extensively. Physical chemistry (thermodynamics, kinetics, equilibrium), organic chemistry, stoichiometry, and calculus appear regularly. Further Mathematics at O'Level is strongly recommended. ABU Zaria and UNILAG Chemical Engineering departments are highly competitive — a JAMB score of 220+ alongside a post-UTME score of 70%+ is usually needed. Practise chemistry problem-solving under timed conditions.",
    professionalBodies: [
      "Nigerian Society of Chemical Engineers (NSChE)",
      "Council for the Regulation of Engineering in Nigeria (COREN)",
      "Nigerian Society of Engineers (NSE)",
      "Chemical Society of Nigeria (CSN)"
    ]
  },
  {
    name: "Marine Engineering",
    category: "Engineering",
    description: "Study of ship propulsion systems, marine diesel engines, naval architecture basics, offshore structures, and maritime safety engineering.",
    jambSubjects: ["Use of English", "Mathematics", "Physics", "Chemistry"],
    olevelRequirements: "Five O'Level credits including English Language, Mathematics, Physics, Chemistry, and one other science subject",
    cutoffMarks: { federal: 200, state: 180, private: 160 },
    topUniversities: [
      { name: "Federal University of Petroleum Resources, Effurun", type: "Federal" },
      { name: "Rivers State University", type: "State" },
      { name: "Maritime Academy of Nigeria, Oron", type: "Federal" },
      { name: "Niger Delta University", type: "State" },
      { name: "University of Lagos", type: "Federal" }
    ],
    careers: ["Marine Engineer", "Ship Engineer", "Offshore Engineer", "Port Operations Manager", "Naval Architect", "Maritime Safety Officer", "Oil Platform Engineer", "Marine Surveyor"],
    yearsOfStudy: "5 years",
    relatedSubjects: ["Mathematics", "Physics", "Chemistry", "Further Mathematics"],
    relatedInterests: ["building", "science", "technology"],
    scholarships: [
      "NNPC/TotalEnergies National Merit Scholarship",
      "Shell Nigeria Scholarship",
      "Agbami Engineering Scholarship",
      "Petroleum Technology Development Fund (PTDF) Scholarship",
      "Nigerian Women in Engineering Scholarship",
      "Federal Government BEA Scholarship",
      "NIMASA Scholarship",
      "Chevron Nigeria Scholarship"
    ],
    postUtmeTips: "Marine Engineering post-UTME is Mathematics and Physics-focused. Fluid mechanics, thermodynamics, buoyancy, and waves are particularly relevant topics. FUPRE (Effurun) and Maritime Academy of Nigeria (Oron) are specialist schools — their post-UTME reflects the unique physics of marine environments. Further Mathematics preparation is valuable. Study the basics of Nigeria's maritime sector (NIMASA, Nigerian ports, offshore platforms) for any current affairs component.",
    professionalBodies: [
      "Nigerian Society of Engineers (NSE)",
      "Council for the Regulation of Engineering in Nigeria (COREN)",
      "Nigerian Institution of Marine Engineers and Naval Architects (NIMENA)",
      "Nigerian Maritime Administration and Safety Agency (NIMASA) – Professional Community"
    ]
  },
  {
    name: "Fisheries & Aquaculture",
    category: "Agriculture",
    description: "Study of fish biology, aquaculture (fish farming), fisheries management, marine ecology, and post-harvest fish technology for Nigeria's inland and coastal waters.",
    jambSubjects: ["Use of English", "Biology", "Chemistry", "Agricultural Science"],
    olevelRequirements: "Five O'Level credits including English Language, Mathematics, Biology, Chemistry, and Agricultural Science or Geography",
    cutoffMarks: { federal: 180, state: 160, private: 140 },
    topUniversities: [
      { name: "University of Agriculture, Abeokuta", type: "Federal" },
      { name: "University of Ibadan", type: "Federal" },
      { name: "Rivers State University", type: "State" },
      { name: "Federal University, Oye-Ekiti", type: "Federal" },
      { name: "Cross River University of Technology", type: "State" }
    ],
    careers: ["Fisheries Officer", "Aquaculture Manager", "Marine Biologist", "Fish Processing Technologist", "Fisheries Extension Officer", "Environmental Consultant", "Fish Farmer/Entrepreneur"],
    yearsOfStudy: "4 years",
    relatedSubjects: ["Biology", "Chemistry", "Agricultural Science", "Geography"],
    relatedInterests: ["farming", "science"],
    scholarships: [
      "Federal Government BEA Scholarship",
      "MTN Foundation Scholarship",
      "Dangote Foundation Scholarship",
      "TETFUND Scholarship",
      "State Government Merit Scholarships",
      "NEEDS Assessment Fund",
      "Notore Chemical Industries Scholarship",
      "University merit scholarships"
    ],
    postUtmeTips: "Fisheries & Aquaculture post-UTME focuses on Biology (aquatic biology, ecology, fish physiology) and Chemistry. Agricultural Science knowledge (animal husbandry, water management) is also tested. FUNAAB is the flagship school in Nigeria for this course. Review WAEC Biology (aquatic ecosystems, food chains) and Agricultural Science (fisheries section) thoroughly. Awareness of Nigeria's Blue Economy policy and fish production statistics may feature in general knowledge sections.",
    professionalBodies: [
      "Fisheries Society of Nigeria (FISON)",
      "Aquaculture Association of Nigeria (AAN)",
      "Nigerian Institute of Oceanography and Marine Research (NIOMR)"
    ]
  },
  {
    name: "Forestry & Wildlife Management",
    category: "Agriculture",
    description: "Study of forest resources, timber production, wildlife conservation, national park management, biodiversity, and environmental sustainability.",
    jambSubjects: ["Use of English", "Biology", "Chemistry", "Geography"],
    olevelRequirements: "Five O'Level credits including English Language, Biology, Chemistry, Geography, and Agricultural Science or Mathematics",
    cutoffMarks: { federal: 180, state: 160, private: 140 },
    topUniversities: [
      { name: "University of Agriculture, Abeokuta", type: "Federal" },
      { name: "University of Ibadan", type: "Federal" },
      { name: "Ahmadu Bello University", type: "Federal" },
      { name: "Federal University of Agriculture, Makurdi", type: "Federal" },
      { name: "University of Port Harcourt", type: "Federal" }
    ],
    careers: ["Forest Officer", "Wildlife Manager", "Conservation Biologist", "National Park Ranger", "Environmental Consultant", "Timber Technologist", "Biodiversity Researcher", "Carbon Credit Specialist"],
    yearsOfStudy: "4 years",
    relatedSubjects: ["Biology", "Chemistry", "Geography", "Agricultural Science"],
    relatedInterests: ["farming", "science"],
    scholarships: [
      "Federal Government BEA Scholarship",
      "Shell Nigeria Scholarship",
      "MTN Foundation Scholarship",
      "Dangote Foundation Scholarship",
      "TETFUND Scholarship",
      "State Government Merit Scholarships",
      "NEEDS Assessment Fund",
      "WWF-Nigeria Scholarship (where available)"
    ],
    postUtmeTips: "Forestry & Wildlife Management post-UTME tests Biology (ecology, plant biology, wildlife behaviour), Chemistry, and Geography (physical geography, vegetation). FUNAAB and UI are the top schools. Review forest ecosystems, Nigerian vegetation zones (derived savanna, mangrove, rainforest), endangered wildlife species in Nigeria, and basic conservation principles. Awareness of Nigeria's National Park systems and the Forestry Research Institute of Nigeria (FRIN) helps in current affairs sections.",
    professionalBodies: [
      "Forestry Association of Nigeria (FAN)",
      "Wildlife Society of Nigeria (WSN)",
      "Forestry Research Institute of Nigeria (FRIN) – Professional Community",
      "Nigerian Conservation Foundation (NCF)"
    ]
  },
  {
    name: "Insurance",
    category: "Business",
    description: "Study of risk management, insurance principles, life assurance, general insurance, marine insurance, claims management, and actuarial fundamentals.",
    jambSubjects: ["Use of English", "Mathematics", "Economics", "Accounting"],
    olevelRequirements: "Five O'Level credits including English Language, Mathematics, Economics, Accounting, and one other relevant subject",
    cutoffMarks: { federal: 190, state: 170, private: 150 },
    topUniversities: [
      { name: "University of Lagos", type: "Federal" },
      { name: "Obafemi Awolowo University", type: "Federal" },
      { name: "University of Nigeria, Nsukka", type: "Federal" },
      { name: "Lagos State University", type: "State" },
      { name: "Covenant University", type: "Private" }
    ],
    careers: ["Insurance Underwriter", "Claims Manager", "Insurance Broker", "Risk Manager", "Actuary", "Insurance Regulatory Officer", "Loss Adjuster", "Bancassurance Officer"],
    yearsOfStudy: "4 years",
    relatedSubjects: ["Mathematics", "Economics", "Accounting", "Commerce"],
    relatedInterests: ["numbers", "business"],
    scholarships: [
      "Federal Government BEA Scholarship",
      "MTN Foundation Scholarship",
      "Dangote Foundation Scholarship",
      "TETFUND Scholarship",
      "State Government Merit Scholarships",
      "Nigerian Insurers Association (NIA) Scholarship",
      "University merit scholarships",
      "NEEDS Assessment Fund"
    ],
    postUtmeTips: "Insurance post-UTME focuses on Mathematics (financial mathematics, probability, statistics) and Economics. Practise interest rate calculations, probability concepts, and risk assessment scenarios. UNILAG Insurance is the most prestigious programme in Nigeria. Familiarity with the Nigerian insurance industry (NAICOM, NIA, key insurance companies) and basic actuarial concepts will strengthen your performance in general knowledge and essay components.",
    professionalBodies: [
      "Chartered Insurance Institute of Nigeria (CIIN)",
      "Nigerian Insurers Association (NIA)",
      "National Insurance Commission (NAICOM) – Professional Community",
      "West African Insurance Institute (WAII)"
    ]
  },
  {
    name: "Actuarial Science",
    category: "Sciences",
    description: "Application of mathematical, statistical, and financial methods to evaluate risk and uncertainty in insurance, pensions, finance, and healthcare. One of the highest-earning professions globally.",
    jambSubjects: ["Use of English", "Mathematics", "Further Mathematics", "Economics"],
    olevelRequirements: "Five O'Level credits including English Language, Mathematics, Further Mathematics, and any two of Economics, Physics, Chemistry, Accounting",
    cutoffMarks: { federal: 220, state: 200, private: 180 },
    topUniversities: [
      { name: "University of Lagos", type: "Federal" },
      { name: "University of Nigeria, Nsukka", type: "Federal" },
      { name: "Ahmadu Bello University", type: "Federal" },
      { name: "Covenant University", type: "Private" },
      { name: "University of Ibadan", type: "Federal" }
    ],
    careers: ["Actuary", "Risk Analyst", "Pension Fund Manager", "Investment Analyst", "Insurance Pricing Specialist", "Financial Modeller", "Data Scientist", "Reinsurance Analyst"],
    yearsOfStudy: "4 years",
    relatedSubjects: ["Mathematics", "Further Mathematics", "Economics", "Accounting"],
    relatedInterests: ["numbers", "business", "science"],
    scholarships: [
      "Federal Government BEA Scholarship",
      "Central Bank of Nigeria (CBN) Scholarship",
      "MTN Foundation Science & Technology Scholarship",
      "Dangote Foundation Scholarship",
      "TETFUND Scholarship",
      "Nigerian Insurers Association (NIA) Scholarship",
      "University merit scholarships",
      "Actuarial Society of Nigeria (ASN) Scholarship"
    ],
    postUtmeTips: "Actuarial Science is one of the most Mathematics-demanding courses in Nigerian universities. Post-UTME tests advanced Mathematics — calculus, probability, statistics, financial mathematics, and algebraic proofs. Further Mathematics at O'Level is essentially compulsory; schools like UNILAG and UNN will expect A1 or B2 in Further Mathematics. Practise A-Level style Mathematics problems and work through WAEC Further Mathematics past questions extensively. This course rewards those who genuinely love Mathematics.",
    professionalBodies: [
      "Actuarial Society of Nigeria (ASN)",
      "Institute and Faculty of Actuaries (IFoA) Nigeria Chapter",
      "Society of Actuaries (SOA) Nigeria affiliate",
      "Chartered Insurance Institute of Nigeria (CIIN)"
    ]
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
