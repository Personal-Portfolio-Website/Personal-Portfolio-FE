import { SkillCategory } from "@/types";

export const SKILL_CATEGORIES: SkillCategory[] = [
    {
        title: "Frontend Engineering",
        description: "Building responsive, modern, and accessible user interfaces.",
        skills: ["Next.js (App Router)", "React", "TypeScript", "Tailwind CSS", "HTML5/CSS3"],
    },
    {
        title: "Backend Engineering",
        description: "Designing robust server-side systems and RESTful services.",
        skills: ["Java", "Spring Boot", "RESTful APIs", "Authentication / JWT", ".NET Basics"],
    },
    {
        title: "Database & Storage",
        description: "Structuring relational models and optimizing queries.",
        skills: ["PostgreSQL", "MySQL", "Database Design"],
    },
    {
        title: "Tools",
        description: "Version control, containerization, and development workflow.",
        skills: ["Git & GitHub", "Docker Basics", "Visual Studio", "VS Code", "IntelliJ IDEA"],
    },
];