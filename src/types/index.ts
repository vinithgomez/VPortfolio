export interface PersonalInfo {
  name: string;
  fullName: string;
  title: string;
  roles: string[];
  bio: string;
  location: string;
  email: string;
  availability: boolean;
  github: string;
  linkedin: string;
  twitter: string;
  resume: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  type: string;
  startDate: string;
  endDate: string | null;
  current: boolean;
  description: string[];
  tech: string[];
  logo?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: "fullstack" | "frontend" | "backend" | "opensource";
  tech: string[];
  github?: string;
  live?: string;
  featured: boolean;
  status: "completed" | "in-progress" | "archived";
  year: string;
  highlights: string[];
}

export interface SkillCategory {
  id: string;
  label: string;
  icon: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: "beginner" | "intermediate" | "advanced" | "expert";
  icon?: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix: string;
  description: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
