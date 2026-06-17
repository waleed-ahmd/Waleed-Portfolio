export interface NavItem {
  label: string;
  href: string;
}

export interface SkillGroup {
  title: string;
  icon: string;
  skills: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  imageLabel: string;
  github?: string;
  liveDemo?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface Service {
  title: string;
  description: string;
}

export interface SocialLink {
  label: string;
  href: string;
}
