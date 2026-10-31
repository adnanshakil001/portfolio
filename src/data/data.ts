export interface Experience {
  company: string;
  duration: string;
  role: string;
  desc: string;
  dotColor: string;
}

export const experiences: Experience[] = [
  {
    company: "Understand",
    duration: "Phase 01",
    role: "Requirements & Data Models",
    desc: "Break down the core problem, establish business logic, and architect normalized database schemas before writing a single line of code.",
    dotColor: "bg-[#FD853A]",
  },
  {
    company: "Architect",
    duration: "Phase 02",
    role: "System & API Contracts",
    desc: "Design decoupled client-server architecture, type-safe REST API endpoints, authentication flows, and role-based permissions.",
    dotColor: "bg-[#1D2939]",
  },
  {
    company: "Develop",
    duration: "Phase 03",
    role: "Full-Stack Implementation",
    desc: "Build responsive, accessible Next.js interfaces with TypeScript and connect secure backend services, ORM queries, and third-party APIs.",
    dotColor: "bg-[#FD853A]",
  },
  {
    company: "Deploy & Scale",
    duration: "Phase 04",
    role: "Testing, Cloud & Iteration",
    desc: "Safeguard reliability with comprehensive tests, configure cloud infrastructure on AWS, and monitor performance metrics in production.",
    dotColor: "bg-[#1D2939]",
  },
];

export const skills: string[] = [
  "JavaScript",
  "TypeScript",
  "Next.js",
  "React",
  "Node.js",
  "Tailwind CSS",
  "MongoDB",
  "PostgreSQL",
  "Express",
];
