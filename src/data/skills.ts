import { Code, Layout, Server, Database, Wrench, Sparkles, type LucideIcon } from "lucide-react";

export type SkillGroup = { title: string; icon: LucideIcon; items: string[] };

export const skillGroups: SkillGroup[] = [
  { title: "Programming Languages", icon: Code, items: ["JavaScript", "Python", "C#", "SQL", "HTML5", "CSS3"] },
  { title: "Frontend Development", icon: Layout, items: ["React.js", "HTML5", "CSS3"] },
  { title: "Backend Development", icon: Server, items: ["Node.js", "Express.js", ".NET", "Flask", "RESTful APIs", "JWT Authentication", "Socket.io"] },
  { title: "Databases", icon: Database, items: ["MySQL", "MongoDB", "PostgreSQL", "Prisma ORM"] },
  { title: "Tools & Technologies", icon: Wrench, items: ["Git", "GitHub", "Docker", "Nginx", "Visual Studio Code", "Windows Forms", ".NET 8"] },
  { title: "Areas of Interest", icon: Sparkles, items: ["Full-Stack Development", "Artificial Intelligence", "Machine Learning", "Software Engineering", "Web Application Development"] },
];
