export interface PersonalInfo {
  name: string;
  fullName: string;
  title: string;
  headline: string;
  badge: string;
  description: string;
  location: string;
  email: string;
  phone: string;
  profileImage: string;
  cvUrl: string;
  statusBadge: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  whatsapp: string;
  email: string;
  phone: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  type?: string;
  location?: string;
  startDate: string;
  endDate?: string;
  description: string;
  features: string[];
  workflowNodes: string[];
  technologies?: string[];
  statusTag?: string;
}

export type ProjectFilterCategory =
  | 'All'
  | 'ASP.NET Core'
  | 'Web API'
  | 'MVC'
  | 'Clean Architecture'
  | 'E-Commerce'
  | 'Authentication'
  | 'Payments';

export interface ProjectArchitectureNode {
  label: string;
  sublabel?: string;
  isCore?: boolean;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  filterCategories: ProjectFilterCategory[];
  description: string;
  technologies: string[];
  features: string[];
  githubUrl: string;
  liveUrl?: string;
  architectureSteps: string[];
  orbitalNodes?: string[];
  statusBadge: string;
}

export interface SkillItem {
  name: string;
  tag?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: SkillItem[];
  iconName: string;
  metricLabel: string;
}

export interface ArchitectureLayer {
  number: string;
  name: string;
  tagline: string;
  details: string;
  technologies: string[];
  orbitLabel: string;
}

export interface ConstellationNode {
  id: string;
  name: string;
  role: string;
  x: number; // percentage in coordinate space
  y: number; // percentage in coordinate space
  category: 'core' | 'framework' | 'database' | 'security' | 'processing' | 'container';
  isCenter?: boolean;
  connections: string[];
}

export interface Education {
  id: string;
  institution: string;
  field: string;
  expectedGraduation: string;
  gpa: string;
  location?: string;
  highlights?: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  location: string;
  year?: string;
  grade?: string;
  topics?: string[];
}

export interface Language {
  id: string;
  language: string;
  level: string;
  details?: string;
}
