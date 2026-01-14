import { Code2, Database, Layout, Server, Settings, Smartphone } from 'lucide-react';

export const skills = [
    {
        category: "Frontend",
        icon: Layout,
        items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux Toolkit", "Framer Motion", "Vue.js"]
    },
    {
        category: "Backend",
        icon: Server,
        items: ["Node.js", "Express", "NestJS", "GraphQL", "Socket.io", "Python", "Go"]
    },
    {
        category: "Database",
        icon: Database,
        items: ["MongoDB", "PostgreSQL", "Redis", "Firebase", "Supabase", "Prisma"]
    },
    {
        category: "DevOps & Tools",
        icon: Settings,
        items: ["Docker", "Kubernetes", "AWS", "CI/CD", "Git", "Jest", "Cypress"]
    }
];
