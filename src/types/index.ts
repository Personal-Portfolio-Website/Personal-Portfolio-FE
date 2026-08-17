//Base types for Developer Portfolio
export interface NavItem {
    label: string;
    href: string;
}

export interface HighlightItem {
    title: string;
    description: string;
}

export interface SkillCategory {
    title: string;
    description: string;
    skills: string[];
}

export interface ProjectItem {
    id: string;
    title: string;
    category: string;
    description: string;
    tags: string[];
    frontendUrl?: string;
    backendUrl?: string;
    githubUrl?: string;
    demoUrl?: string;
    featured?: boolean;
}

export interface ExperienceItem {
    period: string;
    role: string;
    organization: string;
    description: string;
    achievements: string[];
    skills: string[];
}

export interface ContactChannel {
    label: string;
    value: string;
    href: string;
    description: string;
}

export interface ContactChannel {
  label: string;
  value: string;
  href: string;
  description: string;
}