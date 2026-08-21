export type UniversityOption = {
  id: string;
  universityName: string;
  country: string;
  city?: string;
  programmeTitle: string;
  level: "undergraduate" | "postgraduate" | "professional";
  officialUrl: string;
  verificationDate: string;
  optionType: "nigeria" | "international";
  notes?: string;
};

export type CoursePathway = {
  id: string;
  courseDataId?: string;
  title: string;
  category: string;
  summary: string;
  relatedCareers: string[];
  keySubjects: string[];
  skillsDeveloped: string[];
  trendingTags: string[];
  universityOptions: UniversityOption[];
  lastReviewed: string;
};

export const COURSE_CATALOGUE: CoursePathway[] = [
  {
    id: "pw-ai-01",
    title: "Artificial Intelligence",
    category: "Technology",
    summary:
      "A modern programme focusing on machine learning, neural networks, natural language processing, and AI ethics to solve complex real-world problems.",
    relatedCareers: [
      "AI Engineer",
      "Machine Learning Researcher",
      "Data Scientist",
      "Robotics Engineer",
    ],
    keySubjects: ["Mathematics", "Physics", "Computer Studies"],
    skillsDeveloped: [
      "Machine Learning",
      "Python Programming",
      "Deep Learning",
      "Algorithmic Problem Solving",
    ],
    trendingTags: ["emerging", "ai", "digital"],
    lastReviewed: "2024-05-15",
    universityOptions: [
      {
        id: "uni-ai-ful-01",
        universityName: "Federal University Lokoja",
        country: "Nigeria",
        programmeTitle: "B.Sc. Artificial Intelligence",
        level: "undergraduate",
        officialUrl: "https://fulokoja.edu.ng/",
        verificationDate: "2024-05-15",
        optionType: "nigeria",
      },
      {
        id: "uni-ai-veritas-01",
        universityName: "Veritas University",
        country: "Nigeria",
        programmeTitle: "B.Sc. Artificial Intelligence",
        level: "undergraduate",
        officialUrl: "https://www.veritas.edu.ng/software_engineering/ai.php",
        verificationDate: "2024-05-15",
        optionType: "nigeria",
      },
      {
        id: "uni-ai-miva-01",
        universityName: "Miva Open University",
        country: "Nigeria",
        programmeTitle: "B.Sc. Computer Science (AI Specialization)",
        level: "undergraduate",
        officialUrl: "https://miva.university/programmes/computer-science/",
        verificationDate: "2024-05-15",
        optionType: "nigeria",
      },
      {
        id: "uni-ai-cmu-01",
        universityName: "Carnegie Mellon University",
        country: "United States",
        programmeTitle: "B.S. in Artificial Intelligence",
        level: "undergraduate",
        officialUrl: "https://www.cs.cmu.edu/bs-in-artificial-intelligence",
        verificationDate: "2024-05-15",
        optionType: "international",
      },
      {
        id: "uni-ai-nus-01",
        universityName: "National University of Singapore",
        country: "Singapore",
        programmeTitle:
          "Bachelor of Computing in Computer Science (Focus in AI)",
        level: "undergraduate",
        officialUrl: "https://www.comp.nus.edu.sg/programmes/ug/cs/",
        verificationDate: "2024-05-15",
        optionType: "international",
      },
    ],
  },
  {
    id: "pw-cyber-01",
    title: "Cybersecurity",
    category: "Technology",
    summary:
      "Study the protection of computer systems, networks, and data from digital attacks, focusing on ethical hacking, cryptography, and risk management.",
    relatedCareers: [
      "Cybersecurity Analyst",
      "Information Security Officer",
      "Ethical Hacker",
      "Security Architect",
    ],
    keySubjects: ["Mathematics", "Physics", "Computer Studies"],
    skillsDeveloped: [
      "Network Security",
      "Cryptography",
      "Risk Assessment",
      "Penetration Testing",
    ],
    trendingTags: ["emerging", "cybersecurity", "digital"],
    lastReviewed: "2024-05-15",
    universityOptions: [
      {
        id: "uni-cyber-ful-01",
        universityName: "Federal University Lokoja",
        country: "Nigeria",
        programmeTitle: "B.Sc. Cyber Security",
        level: "undergraduate",
        officialUrl: "https://fulokoja.edu.ng/",
        verificationDate: "2024-05-15",
        optionType: "nigeria",
      },
      {
        id: "uni-cyber-veritas-01",
        universityName: "Veritas University",
        country: "Nigeria",
        programmeTitle: "B.Sc. Cybersecurity",
        level: "undergraduate",
        officialUrl: "https://www.veritas.edu.ng/",
        verificationDate: "2024-05-15",
        optionType: "nigeria",
      },
      {
        id: "uni-cyber-miva-01",
        universityName: "Miva Open University",
        country: "Nigeria",
        programmeTitle: "B.Sc. Cybersecurity",
        level: "undergraduate",
        officialUrl: "https://miva.university/programmes/cybersecurity/",
        verificationDate: "2024-05-15",
        optionType: "nigeria",
      },
      {
        id: "uni-cyber-mit-01",
        universityName: "Massachusetts Institute of Technology (MIT)",
        country: "United States",
        programmeTitle: "Computer Science and Engineering (Security focus)",
        level: "undergraduate",
        officialUrl:
          "https://www.eecs.mit.edu/academics/undergraduate-programs/",
        verificationDate: "2024-05-15",
        optionType: "international",
      },
      {
        id: "uni-cyber-oxford-01",
        universityName: "University of Oxford",
        country: "United Kingdom",
        programmeTitle: "BA Computer Science",
        level: "undergraduate",
        officialUrl: "https://www.cs.ox.ac.uk/admissions/undergraduate/",
        verificationDate: "2024-05-15",
        optionType: "international",
        notes:
          "Cybersecurity is covered extensively within the Computer Science curriculum.",
      },
    ],
  },
  {
    id: "pw-ds-01",
    title: "Data Science and Analytics",
    category: "Technology",
    summary:
      "Learn to extract actionable insights from large datasets using statistics, machine learning, and data visualization techniques.",
    relatedCareers: [
      "Data Scientist",
      "Data Analyst",
      "Business Intelligence Analyst",
      "Data Engineer",
    ],
    keySubjects: ["Mathematics", "Computer Studies", "Economics"],
    skillsDeveloped: [
      "Statistical Analysis",
      "Data Visualization",
      "SQL",
      "Machine Learning",
    ],
    trendingTags: ["emerging", "data", "digital"],
    lastReviewed: "2024-05-15",
    universityOptions: [
      {
        id: "uni-ds-ful-01",
        universityName: "Federal University Lokoja",
        country: "Nigeria",
        programmeTitle: "B.Sc. Data Science",
        level: "undergraduate",
        officialUrl: "https://fulokoja.edu.ng/",
        verificationDate: "2024-05-15",
        optionType: "nigeria",
      },
      {
        id: "uni-ds-miva-01",
        universityName: "Miva Open University",
        country: "Nigeria",
        programmeTitle: "B.Sc. Data Science",
        level: "undergraduate",
        officialUrl: "https://miva.university/programmes/data-science/",
        verificationDate: "2024-05-15",
        optionType: "nigeria",
      },
      {
        id: "uni-ds-berkeley-01",
        universityName: "University of California, Berkeley",
        country: "United States",
        programmeTitle: "B.A. in Data Science",
        level: "undergraduate",
        officialUrl:
          "https://cdss.berkeley.edu/academics/undergraduate-programs/data-science-major",
        verificationDate: "2024-05-15",
        optionType: "international",
      },
      {
        id: "uni-ds-ubc-01",
        universityName: "University of British Columbia",
        country: "Canada",
        programmeTitle: "B.Sc. in Data Science",
        level: "undergraduate",
        officialUrl: "https://science.ubc.ca/students/degree/data-science",
        verificationDate: "2024-05-15",
        optionType: "international",
      },
    ],
  },
  {
    id: "pw-cloud-01",
    title: "Cloud Computing",
    category: "Technology",
    summary:
      "Focuses on the delivery of computing services over the internet, covering cloud architecture, deployment, virtualization, and distributed systems.",
    relatedCareers: [
      "Cloud Architect",
      "Cloud Engineer",
      "DevOps Engineer",
      "Sysadmin",
    ],
    keySubjects: ["Mathematics", "Physics", "Computer Studies"],
    skillsDeveloped: [
      "Cloud Architecture",
      "Virtualization",
      "DevOps",
      "Networking",
    ],
    trendingTags: ["emerging", "cloud", "digital"],
    lastReviewed: "2024-05-15",
    universityOptions: [
      {
        id: "uni-cloud-miva-01",
        universityName: "Miva Open University",
        country: "Nigeria",
        programmeTitle: "B.Sc. Cloud Computing",
        level: "undergraduate",
        officialUrl: "https://miva.university/",
        verificationDate: "2024-05-15",
        optionType: "nigeria",
      },
      {
        id: "uni-cloud-toronto-01",
        universityName: "University of Toronto",
        country: "Canada",
        programmeTitle: "B.Sc. Computer Science (Focus in Systems and Cloud)",
        level: "undergraduate",
        officialUrl: "https://web.cs.toronto.edu/undergraduate",
        verificationDate: "2024-05-15",
        optionType: "international",
      },
    ],
  },
  {
    id: "pw-se-01",
    courseDataId: "Software Engineering",
    title: "Software Engineering",
    category: "Technology",
    summary:
      "The systematic application of engineering approaches to the development of software, covering algorithms, architecture, testing, and lifecycle management.",
    relatedCareers: [
      "Software Engineer",
      "Full Stack Developer",
      "Systems Architect",
      "Mobile App Developer",
    ],
    keySubjects: ["Mathematics", "Physics", "Computer Studies"],
    skillsDeveloped: [
      "Software Development",
      "System Architecture",
      "Agile Methodologies",
      "Programming Languages",
    ],
    trendingTags: ["emerging", "digital"],
    lastReviewed: "2024-05-15",
    universityOptions: [
      {
        id: "uni-se-ful-01",
        universityName: "Federal University Lokoja",
        country: "Nigeria",
        programmeTitle: "B.Sc. Software Engineering",
        level: "undergraduate",
        officialUrl: "https://fulokoja.edu.ng/",
        verificationDate: "2024-05-15",
        optionType: "nigeria",
      },
      {
        id: "uni-se-miva-01",
        universityName: "Miva Open University",
        country: "Nigeria",
        programmeTitle: "B.Sc. Software Engineering",
        level: "undergraduate",
        officialUrl: "https://miva.university/programmes/software-engineering/",
        verificationDate: "2024-05-15",
        optionType: "nigeria",
      },
      {
        id: "uni-se-cambridge-01",
        universityName: "University of Cambridge",
        country: "United Kingdom",
        programmeTitle: "BA Computer Science",
        level: "undergraduate",
        officialUrl:
          "https://www.undergraduate.study.cam.ac.uk/courses/computer-science",
        verificationDate: "2024-05-15",
        optionType: "international",
      },
    ],
  },
  {
    id: "pw-renewable-01",
    title: "Renewable Energy / Sustainable Energy",
    category: "Engineering",
    summary:
      "Study of sustainable energy technologies, green power generation, and the environmental impact of energy systems.",
    relatedCareers: [
      "Renewable Energy Engineer",
      "Sustainability Consultant",
      "Energy Analyst",
      "Solar Engineer",
    ],
    keySubjects: ["Mathematics", "Physics", "Chemistry"],
    skillsDeveloped: [
      "Energy Systems Analysis",
      "Solar Technology",
      "Wind Power Systems",
      "Sustainability Assessment",
    ],
    trendingTags: ["emerging", "climate", "renewable-energy"],
    lastReviewed: "2024-05-15",
    universityOptions: [
      {
        id: "uni-ren-unn-01",
        universityName: "University of Nigeria, Nsukka / ACE-SPED",
        country: "Nigeria",
        programmeTitle:
          "Sustainable Energy Engineering (via ACE-SPED initiatives)",
        level: "undergraduate",
        officialUrl: "https://www.unn.edu.ng/",
        verificationDate: "2024-05-15",
        optionType: "nigeria",
        notes:
          "Part of the Africa Centre of Excellence for Sustainable Power and Energy Development (ACE-SPED).",
      },
      {
        id: "uni-ren-tud-01",
        universityName: "Delft University of Technology",
        country: "Netherlands",
        programmeTitle:
          "BSc Sustainable Energy Technology / Aerospace & Energy",
        level: "undergraduate",
        officialUrl:
          "https://www.tudelft.nl/en/education/programmes/bachelors/",
        verificationDate: "2024-05-15",
        optionType: "international",
      },
    ],
  },
  {
    id: "pw-fintech-01",
    title: "Financial Technology / FinTech",
    category: "Business",
    summary:
      "The intersection of finance and technology, covering digital banking, blockchain, cryptocurrencies, and algorithmic trading.",
    relatedCareers: [
      "FinTech Analyst",
      "Blockchain Developer",
      "Quantitative Analyst",
      "Financial Product Manager",
    ],
    keySubjects: ["Mathematics", "Economics", "Computer Studies"],
    skillsDeveloped: [
      "Financial Modeling",
      "Blockchain Technologies",
      "Digital Payments",
      "Data Analytics",
    ],
    trendingTags: ["emerging", "fintech", "digital"],
    lastReviewed: "2024-05-15",
    universityOptions: [
      {
        id: "uni-fintech-nus-01",
        universityName: "National University of Singapore",
        country: "Singapore",
        programmeTitle: "B.Sc. in Business Analytics (FinTech focus)",
        level: "undergraduate",
        officialUrl: "https://bschool.nus.edu.sg/",
        verificationDate: "2024-05-15",
        optionType: "international",
      },
      {
        id: "uni-fintech-ucl-01",
        universityName: "University College London",
        country: "United Kingdom",
        programmeTitle: "BSc Information Management for Business",
        level: "undergraduate",
        officialUrl:
          "https://www.ucl.ac.uk/prospective-students/undergraduate/degrees/information-management-business-bsc",
        verificationDate: "2024-05-15",
        optionType: "international",
        notes: "Excellent pathway for FinTech careers.",
      },
    ],
  },
  {
    id: "pw-healthinfo-01",
    title: "Health Informatics",
    category: "Health Sciences",
    summary:
      "Combining healthcare, information technology, and business to improve patient care through effective data and system management.",
    relatedCareers: [
      "Health Informatics Specialist",
      "Clinical Data Analyst",
      "Electronic Health Records Manager",
    ],
    keySubjects: ["Biology", "Computer Studies", "Mathematics"],
    skillsDeveloped: [
      "Healthcare Systems",
      "Data Management",
      "Medical Coding",
      "Information Governance",
    ],
    trendingTags: ["emerging", "health-tech", "digital"],
    lastReviewed: "2024-05-15",
    universityOptions: [
      {
        id: "uni-hi-melb-01",
        universityName: "University of Melbourne",
        country: "Australia",
        programmeTitle: "Bachelor of Biomedicine (Digital Health focus)",
        level: "undergraduate",
        officialUrl:
          "https://study.unimelb.edu.au/find/courses/undergraduate/bachelor-of-biomedicine/",
        verificationDate: "2024-05-15",
        optionType: "international",
      },
    ],
  },
  {
    id: "pw-agriecon-01",
    courseDataId: "Agricultural Economics",
    title: "Agricultural Economics / Agribusiness",
    category: "Agriculture",
    summary:
      "Application of economic principles to agriculture, covering crop production, farming systems, market structures, and agricultural policy.",
    relatedCareers: [
      "Agricultural Economist",
      "Farm Manager",
      "Agribusiness Consultant",
      "Commodity Broker",
    ],
    keySubjects: ["Agricultural Science", "Economics", "Mathematics"],
    skillsDeveloped: [
      "Economic Analysis",
      "Farm Management",
      "Market Research",
      "Policy Evaluation",
    ],
    trendingTags: ["agritech"],
    lastReviewed: "2024-05-15",
    universityOptions: [
      {
        id: "uni-agri-ful-01",
        universityName: "Federal University Lokoja",
        country: "Nigeria",
        programmeTitle: "B.Sc. Agricultural Economics",
        level: "undergraduate",
        officialUrl: "https://fulokoja.edu.ng/",
        verificationDate: "2024-05-15",
        optionType: "nigeria",
      },
    ],
  },
  {
    id: "pw-fisheries-01",
    courseDataId: "Fisheries & Aquaculture",
    title: "Fisheries and Aquaculture",
    category: "Agriculture",
    summary:
      "Study of fish cultivation, aquatic ecosystem management, marine biology, and sustainable aquatic food production.",
    relatedCareers: [
      "Aquaculturist",
      "Fisheries Officer",
      "Marine Biologist",
      "Hatchery Manager",
    ],
    keySubjects: ["Biology", "Chemistry", "Agricultural Science"],
    skillsDeveloped: [
      "Aquatic Ecosystem Management",
      "Fish Breeding",
      "Water Quality Management",
      "Sustainable Fishing",
    ],
    trendingTags: ["agritech"],
    lastReviewed: "2024-05-15",
    universityOptions: [
      {
        id: "uni-fish-ful-01",
        universityName: "Federal University Lokoja",
        country: "Nigeria",
        programmeTitle: "B.Sc. Fisheries and Aquaculture",
        level: "undergraduate",
        officialUrl: "https://fulokoja.edu.ng/",
        verificationDate: "2024-05-15",
        optionType: "nigeria",
      },
    ],
  },
  {
    id: "pw-mecha-01",
    courseDataId: "Mechatronics Engineering",
    title: "Mechatronics / Automation",
    category: "Engineering",
    summary:
      "A multidisciplinary field combining mechanical, electrical, computer, and software engineering to create automated systems and robotics.",
    relatedCareers: [
      "Robotics Engineer",
      "Automation Engineer",
      "Control Systems Engineer",
      "Electro-mechanical Engineer",
    ],
    keySubjects: ["Mathematics", "Physics", "Chemistry"],
    skillsDeveloped: [
      "Robotics",
      "Control Systems",
      "Sensors and Actuators",
      "Automation",
    ],
    trendingTags: ["emerging", "digital"],
    lastReviewed: "2024-05-15",
    universityOptions: [
      {
        id: "uni-mecha-eth-01",
        universityName: "ETH Zurich",
        country: "Switzerland",
        programmeTitle: "BSc Mechanical Engineering (Robotics and Systems)",
        level: "undergraduate",
        officialUrl:
          "https://ethz.ch/en/studies/bachelor/bachelors-degree-programmes/engineering-sciences/mechanical-engineering.html",
        verificationDate: "2024-05-15",
        optionType: "international",
      },
    ],
  },
  {
    id: "pw-ux-01",
    title: "Product Design / UX/UI",
    category: "Arts and Design",
    summary:
      "Designing digital and physical products with a focus on user experience, interface design, prototyping, and usability testing.",
    relatedCareers: [
      "UX Designer",
      "UI Designer",
      "Product Designer",
      "Interaction Designer",
    ],
    keySubjects: ["Computer Studies", "Fine Arts", "Mathematics"],
    skillsDeveloped: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Visual Design",
    ],
    trendingTags: ["emerging", "creative-tech", "digital"],
    lastReviewed: "2024-05-15",
    universityOptions: [
      {
        id: "uni-ux-cmu-01",
        universityName: "Carnegie Mellon University",
        country: "United States",
        programmeTitle: "Bachelor of Design (BDes)",
        level: "undergraduate",
        officialUrl: "https://design.cmu.edu/",
        verificationDate: "2024-05-15",
        optionType: "international",
      },
    ],
  },
  {
    id: "pw-psych-01",
    courseDataId: "Psychology",
    title: "Psychology",
    category: "Social Sciences",
    summary:
      "The scientific study of the human mind and behaviour, exploring cognition, emotion, development, and social interaction.",
    relatedCareers: [
      "Clinical Psychologist",
      "Counseling Psychologist",
      "Human Resources Specialist",
      "UX Researcher",
    ],
    keySubjects: ["Biology", "Mathematics", "English"],
    skillsDeveloped: [
      "Critical Thinking",
      "Research Methods",
      "Data Analysis",
      "Communication",
    ],
    trendingTags: [],
    lastReviewed: "2024-05-15",
    universityOptions: [
      {
        id: "uni-psych-cambridge-01",
        universityName: "University of Cambridge",
        country: "United Kingdom",
        programmeTitle: "BA Psychological and Behavioural Sciences",
        level: "undergraduate",
        officialUrl:
          "https://www.undergraduate.study.cam.ac.uk/courses/psychological-and-behavioural-sciences",
        verificationDate: "2024-05-15",
        optionType: "international",
      },
      {
        id: "uni-psych-ubc-01",
        universityName: "University of British Columbia",
        country: "Canada",
        programmeTitle: "B.A. or B.Sc. in Psychology",
        level: "undergraduate",
        officialUrl: "https://psych.ubc.ca/undergraduate/",
        verificationDate: "2024-05-15",
        optionType: "international",
      },
    ],
  },
  {
    id: "pw-publichealth-01",
    courseDataId: "Public Health",
    title: "Public Health",
    category: "Health Sciences",
    summary:
      "Protecting and improving the health of communities through education, policy-making, and research for disease and injury prevention.",
    relatedCareers: [
      "Epidemiologist",
      "Public Health Educator",
      "Health Services Manager",
      "Environmental Health Officer",
    ],
    keySubjects: ["Biology", "Chemistry", "Mathematics"],
    skillsDeveloped: [
      "Epidemiology",
      "Data Analysis",
      "Policy Evaluation",
      "Health Promotion",
    ],
    trendingTags: [],
    lastReviewed: "2024-05-15",
    universityOptions: [
      {
        id: "uni-ph-jhu-01",
        universityName: "Johns Hopkins University",
        country: "United States",
        programmeTitle: "BA in Public Health Studies",
        level: "undergraduate",
        officialUrl:
          "https://publichealth.jhu.edu/academics/ba-in-public-health-studies",
        verificationDate: "2024-05-15",
        optionType: "international",
      },
      {
        id: "uni-ph-melb-01",
        universityName: "University of Melbourne",
        country: "Australia",
        programmeTitle: "Bachelor of Science (Population Health major)",
        level: "undergraduate",
        officialUrl:
          "https://study.unimelb.edu.au/find/courses/major/population-health/",
        verificationDate: "2024-05-15",
        optionType: "international",
      },
    ],
  },
  {
    id: "pw-digitalmedia-01",
    title: "Digital Media, Film and Multimedia",
    category: "Arts and Design",
    summary:
      "Focuses on the creative and technical aspects of digital content creation, including film production, animation, and interactive media.",
    relatedCareers: [
      "Film Director",
      "Multimedia Designer",
      "Video Editor",
      "Digital Content Producer",
    ],
    keySubjects: ["Literature", "Fine Arts", "Computer Studies"],
    skillsDeveloped: [
      "Video Editing",
      "Animation",
      "Storytelling",
      "Digital Content Creation",
    ],
    trendingTags: ["creative-tech", "digital"],
    lastReviewed: "2024-05-15",
    universityOptions: [
      {
        id: "uni-media-ntu-01",
        universityName: "Nanyang Technological University",
        country: "Singapore",
        programmeTitle: "Bachelor of Fine Arts in Design Art / Media Art",
        level: "undergraduate",
        officialUrl:
          "https://adm.ntu.edu.sg/Programmes/Undergraduate/Pages/BFA-Media-Art.aspx",
        verificationDate: "2024-05-15",
        optionType: "international",
      },
    ],
  },
  {
    id: "pw-infosys-01",
    title: "Information Systems",
    category: "Technology",
    summary:
      "The study of networks of hardware and software that people and organizations use to collect, filter, process, create, and distribute data.",
    relatedCareers: [
      "Information Systems Manager",
      "Systems Analyst",
      "IT Consultant",
      "Business Analyst",
    ],
    keySubjects: ["Computer Studies", "Economics", "Mathematics"],
    skillsDeveloped: [
      "Systems Analysis",
      "Database Management",
      "Business Processes",
      "IT Strategy",
    ],
    trendingTags: ["digital"],
    lastReviewed: "2024-05-15",
    universityOptions: [
      {
        id: "uni-infosys-nus-01",
        universityName: "National University of Singapore",
        country: "Singapore",
        programmeTitle: "Bachelor of Computing in Information Systems",
        level: "undergraduate",
        officialUrl: "https://www.comp.nus.edu.sg/programmes/ug/is/",
        verificationDate: "2024-05-15",
        optionType: "international",
      },
    ],
  },
  {
    id: "pw-biomed-01",
    title: "Biomedical Engineering",
    category: "Engineering",
    summary:
      "Applies engineering principles to medicine and biology for healthcare purposes, developing medical devices, diagnostic equipment, and artificial organs.",
    relatedCareers: [
      "Biomedical Engineer",
      "Clinical Engineer",
      "Medical Device Designer",
      "Biomaterials Developer",
    ],
    keySubjects: ["Biology", "Mathematics", "Physics"],
    skillsDeveloped: [
      "Medical Device Design",
      "Biomechanics",
      "Biomaterials",
      "Data Analysis",
    ],
    trendingTags: ["health-tech", "emerging"],
    lastReviewed: "2024-05-15",
    universityOptions: [
      {
        id: "uni-biomed-ic-01",
        universityName: "Imperial College London",
        country: "United Kingdom",
        programmeTitle: "MEng Biomedical Engineering",
        level: "undergraduate",
        officialUrl:
          "https://www.imperial.ac.uk/study/courses/undergraduate/biomedical-engineering/",
        verificationDate: "2024-05-15",
        optionType: "international",
      },
    ],
  },
  {
    id: "pw-biotech-01",
    title: "Biotechnology",
    category: "Sciences",
    summary:
      "The use of living systems and organisms to develop or make products, spanning agricultural, medical, and industrial applications.",
    relatedCareers: [
      "Biotechnologist",
      "Research Scientist",
      "Quality Control Analyst",
      "Process Engineer",
    ],
    keySubjects: ["Biology", "Chemistry", "Mathematics"],
    skillsDeveloped: [
      "Molecular Biology",
      "Genetic Engineering",
      "Bioinformatics",
      "Laboratory Techniques",
    ],
    trendingTags: ["emerging", "health-tech", "agritech"],
    lastReviewed: "2024-05-15",
    universityOptions: [
      {
        id: "uni-biotech-eth-01",
        universityName: "ETH Zurich",
        country: "Switzerland",
        programmeTitle: "BSc Biology (Biotechnology track)",
        level: "undergraduate",
        officialUrl:
          "https://ethz.ch/en/studies/bachelor/bachelors-degree-programmes/system-oriented-natural-sciences/biology.html",
        verificationDate: "2024-05-15",
        optionType: "international",
      },
    ],
  },
  {
    id: "pw-foodsci-01",
    title: "Food Science and Technology",
    category: "Agriculture",
    summary:
      "The application of scientific disciplines to the study of food, including its chemistry, microbiology, engineering, and preservation.",
    relatedCareers: [
      "Food Scientist",
      "Quality Assurance Manager",
      "Product Development Scientist",
      "Food Safety Inspector",
    ],
    keySubjects: ["Chemistry", "Biology", "Mathematics"],
    skillsDeveloped: [
      "Food Chemistry",
      "Microbiology",
      "Quality Control",
      "Product Development",
    ],
    trendingTags: ["agritech"],
    lastReviewed: "2024-05-15",
    universityOptions: [
      {
        id: "uni-foodsci-unsw-01",
        universityName: "UNSW Sydney",
        country: "Australia",
        programmeTitle: "Bachelor of Science (Food Science)",
        level: "undergraduate",
        officialUrl:
          "https://www.unsw.edu.au/study/undergraduate/bachelor-of-science?studentType=Domestic",
        verificationDate: "2024-05-15",
        optionType: "international",
      },
    ],
  },
  {
    id: "pw-envmgmt-01",
    title: "Environmental Management",
    category: "Sciences",
    summary:
      "Focuses on the management of environmental issues, promoting sustainability, conservation, and regulatory compliance.",
    relatedCareers: [
      "Environmental Consultant",
      "Sustainability Manager",
      "Conservation Officer",
      "Environmental Planner",
    ],
    keySubjects: ["Geography", "Biology", "Chemistry"],
    skillsDeveloped: [
      "Environmental Impact Assessment",
      "Sustainability Planning",
      "Policy Analysis",
      "Conservation Strategies",
    ],
    trendingTags: ["climate"],
    lastReviewed: "2024-05-15",
    universityOptions: [
      {
        id: "uni-envmgmt-melb-01",
        universityName: "University of Melbourne",
        country: "Australia",
        programmeTitle: "Bachelor of Environment",
        level: "undergraduate",
        officialUrl:
          "https://study.unimelb.edu.au/find/courses/undergraduate/bachelor-of-environment/",
        verificationDate: "2024-05-15",
        optionType: "international",
      },
    ],
  },
  {
    id: "pw-business-analytics-01",
    title: "Business Analytics",
    category: "Business",
    summary:
      "Combines business knowledge with data analysis, teaching students how to use statistical models and data visualization to drive business strategy.",
    relatedCareers: [
      "Business Analyst",
      "Data Analyst",
      "Management Consultant",
      "Market Research Analyst",
    ],
    keySubjects: ["Mathematics", "Economics", "Computer Studies"],
    skillsDeveloped: [
      "Data Analysis",
      "Business Strategy",
      "Statistical Modeling",
      "Data Visualization",
    ],
    trendingTags: ["data", "digital"],
    lastReviewed: "2024-05-15",
    universityOptions: [
      {
        id: "uni-busana-nus-01",
        universityName: "National University of Singapore",
        country: "Singapore",
        programmeTitle: "Bachelor of Science (Business Analytics)",
        level: "undergraduate",
        officialUrl:
          "https://bschool.nus.edu.sg/programmes/bba/business-analytics/",
        verificationDate: "2024-05-15",
        optionType: "international",
      },
    ],
  },
  {
    id: "pw-supplychain-01",
    title: "Supply Chain and Logistics",
    category: "Business",
    summary:
      "Focuses on the efficient flow of goods, services, and information from origin to consumer, covering procurement, transportation, and inventory management.",
    relatedCareers: [
      "Supply Chain Manager",
      "Logistics Analyst",
      "Procurement Officer",
      "Operations Manager",
    ],
    keySubjects: ["Economics", "Mathematics", "Accounting"],
    skillsDeveloped: [
      "Logistics Management",
      "Operations Analysis",
      "Procurement",
      "Inventory Control",
    ],
    trendingTags: [],
    lastReviewed: "2024-05-15",
    universityOptions: [
      {
        id: "uni-supply-mit-01",
        universityName: "Massachusetts Institute of Technology (MIT)",
        country: "United States",
        programmeTitle: "BS in Management (Supply Chain concentration)",
        level: "undergraduate",
        officialUrl: "https://mitsloan.mit.edu/undergraduate/bs-management",
        verificationDate: "2024-05-15",
        optionType: "international",
      },
    ],
  },
];
