import type {
  PersonalInfo,
  Experience,
  Project,
  SkillCategory,
  Stat,
  NavItem,
} from "@/types";

export interface Education {
  id: string;
  institution: string;
  degree: string;
  date: string;
  details: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
}

// ─── Personal Info ────────────────────────────────────────────────────────────
export const personalInfo = {
  name: "Vinith",
  fullName: "Vinith Gomez",
  title: "AI & Full-Stack Engineer",
  roles: [
    "Software Engineer",
    "Full-Stack Developer",
    "AI Enthusiast",
    "Generative AI Enthusiast",
  ],
  bio: "I am a passionate software engineer specializing in AI engineering and full-stack development. I build intelligent, scalable applications by leveraging Generative AI, modern frontend frameworks, and robust backend architectures. My goal is to create products that solve real-world problems with elegant code and intuitive user experiences.",
  location: "Thoothukkudi, Tamil Nadu",
  email: "vinithgomez36@gmail.com",
  phone: "+91 8015976603",
  availability: true,
  github: "https://github.com/vinithgomez",
  linkedin: "https://www.linkedin.com/in/vinith-gomez-8a1003203",
  twitter: "https://x.com/VinithGomez36",
  resume: "/Vinith Gomez Resume.pdf",
};

// ─── Navigation ──────────────────────────────────────────────────────────────
export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];



// ─── Experience ──────────────────────────────────────────────────────────────
export const experiences: Experience[] = [
  {
    id: "exp-1",
    company: "DermRecord AI",
    role: "Full-Stack AI Developer",
    type: "Project / Independent",
    startDate: "2026-05",
    endDate: "2026-05",
    current: false,
    description: [
      "Built a full-stack clinical suite using Generative AI, NLP, and RAG to automate dermatological reporting and multimodal medical image analysis.",
      "Engineered real-time patient timeline management with Supabase Row Level Security (RLS) ensuring strict data privacy and role-based access control.",
      "Designed a responsive UI that enables dermatologists to view diagnostic support, patient histories, and directory records from a single dashboard."
    ],
    tech: ["Generative AI", "NLP", "RAG", "Supabase", "React", "Tailwind CSS"],
  },
  {
    id: "exp-2",
    company: "Genospark",
    role: "QA Testing Intern",
    type: "Internship",
    startDate: "2026-01",
    endDate: "2026-02",
    current: false,
    description: [
      "Tested specific modules across the company website and backend database to identify bugs and functional defects.",
      "Documented and filed issue queries for each bug discovered, detailing reproduction steps and expected vs. actual behavior.",
      "Re-tested fixed modules to verify patches and confirm resolution before sign-off.",
    ],
    tech: ["Manual Testing", "QA", "Bug Tracking", "Database Testing"],
  },
  {
    id: "exp-3",
    company: "JPMorgan Chase",
    role: "Software Engineering Virtual Experience",
    type: "Forage",
    startDate: "2026-01",
    endDate: "2026-01",
    current: false,
    description: [
      "Integrated Apache Kafka into a Spring Boot microservice to consume and deserialize high-volume transaction messages using a configurable topic.",
      "Implemented transaction validation and persistence with Spring Data JPA and an H2 SQL database.",
      "Connected the service to an external REST Incentive API via RestTemplate and developed a balance-query endpoint returning structured JSON.",
      "Verified end-to-end system behavior using Maven test suites with debugger-driven inspection.",
    ],
    tech: ["Java", "Spring Boot", "Apache Kafka", "REST API", "Maven", "JPA/Hibernate"],
  },
  {
    id: "exp-4",
    company: "Boron Digital Pvt. Ltd.",
    role: "App Tester Intern",
    type: "Internship",
    startDate: "2025-12",
    endDate: "2025-12",
    current: false,
    description: [
      "Performed manual testing of Android application modules, identifying UI/UX issues and functional bugs across multiple device configurations.",
      "Verified bug fixes through regression testing to confirm resolved issues did not introduce new failures.",
    ],
    tech: ["Android Testing", "UI/UX QA", "Regression Testing"],
  },
];

// ─── Education ──────────────────────────────────────────────────────────────
export const educationData: Education[] = [
  {
    id: "edu-1",
    institution: "SRM IST – Kattankulathur",
    degree: "B.Tech · Computer Science and Engineering",
    date: "2023 – 2027",
    details: "CGPA – 8.19",
  },
  {
    id: "edu-2",
    institution: "The Vikasa School, Thoothukudi",
    degree: "Class XII · CISCE Board",
    date: "2021 – 2023",
    details: "Higher Secondary Education",
  },
  {
    id: "edu-3",
    institution: "The Vikasa School, Sawyerpuram",
    degree: "Class X · IGCSE Board",
    date: "2014 – 2021",
    details: "Secondary Education",
  },
];

// ─── Certifications ─────────────────────────────────────────────────────────
export const certificationsData: Certification[] = [
  {
    id: "cert-1",
    title: "GitHub Copilot",
    issuer: "Microsoft",
    date: "Apr 2026 – Apr 2028",
  },
  {
    id: "cert-2",
    title: "SAP Certified – SAP Generative AI Developer",
    issuer: "SAP",
    date: "Feb 2026 – Feb 2027",
  },
  {
    id: "cert-3",
    title: "IBM Full Stack Developer",
    issuer: "Coursera",
    date: "Oct 2025",
  },
  {
    id: "cert-4",
    title: "Oracle Cloud Infrastructure 2024 Certified Foundations Associate",
    issuer: "Oracle",
    date: "Feb 2025",
  },
  {
    id: "cert-5",
    title: "Programming in Java",
    issuer: "NPTEL",
    date: "Dec 2024",
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────
export const projects: Project[] = [
  {
    id: "proj-1",
    title: "Neby.ai – AI-Powered Multimodal Chat App",
    description: "A multimodal chat application integrating Gemini 1.5 and Veo models for text, image, and video generation.",
    longDescription:
      "Neby.ai is a state-of-the-art multimodal chat application built to explore the boundaries of generative AI. Using React 19 and Google's GenAI SDK, the platform seamlessly integrates Gemini 1.5 and Veo models to support text, image, and video generation in a single unified interface. The application features voice conversation support, creative content generation, and dynamic model switching. Firebase handles robust user authentication and real-time session history management.",
    category: "fullstack",
    tech: ["React 19", "Google GenAI SDK", "Gemini 1.5", "Veo", "Firebase"],
    github: "https://github.com/vinithgomez/neby.ai",
    live: "",
    featured: true,
    status: "completed",
    year: "Jan 2026",
    highlights: [
      "Integrated Gemini 1.5 and Veo for multimodal generation (text, image, video).",
      "Implemented seamless voice conversation capabilities.",
      "Built dynamic model switching architecture.",
      "Managed authentication and session history with Firebase.",
    ],
  },
  {
    id: "proj-2",
    title: "DermRecord AI",
    description: "A full-stack clinical suite using Generative AI, NLP, and RAG for dermatological reporting and image analysis.",
    longDescription:
      "DermRecord AI revolutionizes clinical workflows for dermatologists by automating complex reporting tasks and medical image analysis. Built as a comprehensive full-stack suite, it leverages Generative AI, NLP, and Retrieval-Augmented Generation (RAG). The platform features real-time patient timeline management powered by Supabase, utilizing strict Row Level Security (RLS) to guarantee data privacy and role-based access control. The responsive UI provides a single, intuitive dashboard for diagnostic support, patient histories, and directory records.",
    category: "fullstack",
    tech: ["Generative AI", "NLP", "RAG", "Supabase", "React", "Next.js"],
    github: "https://github.com/vinithgomez/dermrecord-ai",
    live: "",
    featured: true,
    status: "completed",
    year: "May 2026",
    highlights: [
      "Automated dermatological reporting using NLP and RAG.",
      "Engineered secure, real-time patient timelines with Supabase RLS.",
      "Designed an intuitive dashboard consolidating diagnostic support and patient histories.",
      "Integrated multimodal medical image analysis.",
    ],
  },
  {
    id: "proj-3",
    title: "Express Book Review API",
    description: "A RESTful book review API built with Node.js and Express, supporting full CRUD operations and JWT authentication.",
    longDescription:
      "Developed as an IBM Course Project, the Express Book Review API is a robust backend service designed to handle book reviews. Built with Node.js and Express, it provides comprehensive RESTful endpoints for CRUD operations on book records and user reviews. The API implements secure user authentication via JSON Web Tokens (JWT) and utilizes Axios for asynchronous route handling, demonstrating strong foundational backend engineering principles.",
    category: "backend",
    tech: ["Node.js", "Express.js", "JWT", "Axios", "REST API"],
    github: "https://github.com/vinithgomez/express-book-review",
    live: "",
    featured: true,
    status: "completed",
    year: "Jun 2025",
    highlights: [
      "Developed comprehensive RESTful endpoints for CRUD operations.",
      "Implemented secure user authentication and authorization using JWT.",
      "Managed asynchronous route handling and external requests with Axios.",
      "Followed scalable backend architecture patterns.",
    ],
  },
];

// ─── Skills ───────────────────────────────────────────────────────────────────
export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    label: "Languages",
    icon: "Code2",
    skills: [
      { name: "Java", level: "advanced" },
      { name: "C++", level: "advanced" },
      { name: "Python", level: "advanced" },
      { name: "JavaScript", level: "expert" },
      { name: "C", level: "intermediate" },
      { name: "HTML/CSS", level: "expert" },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    icon: "Monitor",
    skills: [
      { name: "React", level: "expert" },
      { name: "Tailwind CSS", level: "expert" },
      { name: "React Native", level: "advanced" },
      { name: "Next.js", level: "advanced" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    icon: "Server",
    skills: [
      { name: "Node.js", level: "expert" },
      { name: "Express.js", level: "expert" },
      { name: "REST APIs", level: "expert" },
    ],
  },
  {
    id: "database",
    label: "Databases",
    icon: "Database",
    skills: [
      { name: "MySQL", level: "advanced" },
      { name: "PostgreSQL", level: "advanced" },
      { name: "MongoDB", level: "advanced" },
      { name: "Supabase", level: "advanced" },
      { name: "Firebase", level: "advanced" },
    ],
  },
  {
    id: "ai",
    label: "AI & Tools",
    icon: "Cloud",
    skills: [
      { name: "Generative AI", level: "advanced" },
      { name: "RAG & NLP", level: "intermediate" },
      { name: "AutoCAD", level: "intermediate" },
      { name: "Figma", level: "advanced" },
      { name: "Git & GitHub", level: "expert" },
    ],
  },
];

// ─── Stats (Dynamically Calculated) ──────────────────────────────────────────
export const stats: Stat[] = [
  { label: "Projects Built", value: projects.length, suffix: "+", description: "Full-stack & AI applications" },
  { label: "Certifications", value: certificationsData.length, suffix: "", description: "From SAP, IBM, Microsoft, Oracle" },
  { label: "Technologies", value: skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0), suffix: "+", description: "Languages, frameworks & databases" },
  { label: "CGPA", value: 8.19, suffix: "", description: "SRM IST Computer Science" },
];
