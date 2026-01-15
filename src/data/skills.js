import { Code2, Database, Layout, Server, Settings, Smartphone } from 'lucide-react';

export const skills = [
    {
        category: "Frontend",
        icon: Layout,
        items: ["React", "JavaScript (ES6+)", "TypeScript", "Next.js", "Tailwind CSS", "SCSS", "Redux Toolkit", "React Query", "Framer Motion", "Jest", "Vue.js"]
    },
    {
        category: "Backend",
        icon: Server,
        items: [
            "Node.js",
            "Express",
            "GraphQL",
            "Python",
            "REST APIs",
            "JWT",
            "MongoDB",
            "Redis"
        ]

    },
    {
        category: "Database",
        icon: Database,
        items: ["MongoDB", "PostgreSQL", "Redis", "Firebase", "Supabase", "Prisma"]
    },
    {
        category: "DevOps & Tools",
        icon: Settings,
        items: [
            "Git",
            "Vercel",
            "Netlify",
            "Linux",
            "Jest",
            "Playwright",
            "ESLint",
            "Prettier"
        ]
    }
];
