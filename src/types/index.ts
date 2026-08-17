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