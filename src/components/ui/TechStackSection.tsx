'use client';

import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';

interface TechItem {
  name: string;
  category: string;
  icon: React.ReactNode;
}

interface CapabilityItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
}

const techItems: TechItem[] = [
  {
    name: 'React',
    category: 'Frontend',
    icon: (
      <svg viewBox="0 0 115.3 100" className="w-8 h-8 fill-none stroke-current" strokeWidth="6">
        <ellipse cx="57.65" cy="50" rx="16.5" ry="50" transform="rotate(30 57.65 50)" />
        <ellipse cx="57.65" cy="50" rx="16.5" ry="50" transform="rotate(90 57.65 50)" />
        <ellipse cx="57.65" cy="50" rx="16.5" ry="50" transform="rotate(150 57.65 50)" />
        <circle cx="57.65" cy="50" r="8" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'Next.js',
    category: 'Framework',
    icon: (
      <svg viewBox="0 0 180 180" className="w-8 h-8 fill-current">
        <circle cx="90" cy="90" r="85" fill="none" stroke="currentColor" strokeWidth="10" />
        <path d="M117.5 130L62.5 50h-10v80h10V72.5l45 65.5h10V50h-10v80z" />
      </svg>
    ),
  },
  {
    name: 'TypeScript',
    category: 'Language',
    icon: (
      <div className="w-8 h-8 rounded bg-[#171717] text-white font-extrabold text-sm flex items-center justify-center tracking-tight">
        TS
      </div>
    ),
  },
  {
    name: 'Node.js',
    category: 'Runtime',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l8.5 4.9v9.8L12 21.6 3.5 16.7V6.9L12 2z" />
        <path d="M12 7.5a4.5 4.5 0 0 1 4.5 4.5v1.5a4.5 4.5 0 0 1-9 0v-1.5A4.5 4.5 0 0 1 12 7.5z" />
      </svg>
    ),
  },
  {
    name: 'Express',
    category: 'Backend',
    icon: (
      <div className="w-8 h-8 rounded-full border-2 border-current font-bold text-xs flex items-center justify-center tracking-tighter">
        ex
      </div>
    ),
  },
  {
    name: 'Python',
    category: 'Language',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
        <path d="M11.9 2C8.8 2 6.8 2.8 6.8 4.3v1.9h5.1v.9H4.8C3.2 7.1 2.4 8.2 2.4 9.7v3.5c0 1.5.8 2.3 2.4 2.3h1.6v-1.6c0-1.1.8-1.9 1.9-1.9h5.1c1 0 1.9-.8 1.9-1.9V6.2C15.3 4.6 14.4 2 11.9 2zm-2.1 1.4c.4 0 .7.3.7.7s-.3.7-.7.7-.7-.3-.7-.7.3-.7.7-.7zm2.3 9.8c-1 0-1.9.8-1.9 1.9v4.9c0 1.6.9 4.2 3.4 4.2 3.1 0 5.1-.8 5.1-2.3v-1.9h-5.1v-.9h7.2c1.6 0 2.4-1.1 2.4-2.6V14c0-1.5-.8-2.3-2.4-2.3h-1.6v1.6c0 1.1-.8 1.9-1.9 1.9h-5.2zm4 9.5c-.4 0-.7-.3-.7-.7s.3-.7.7-.7.7.3.7.7-.3.7-.7.7z" />
      </svg>
    ),
  },
  {
    name: 'PostgreSQL',
    category: 'Database',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3c-4.97 0-9 2.01-9 4.5S7.03 12 12 12s9-2.01 9-4.5S16.97 3 12 3z" />
        <path d="M3 7.5v4.5C3 14.49 7.03 16.5 12 16.5s9-2.01 9-4.5V7.5" />
        <path d="M3 12v4.5C3 18.99 7.03 21 12 21s9-2.01 9-4.5V12" />
      </svg>
    ),
  },
  {
    name: 'MySQL',
    category: 'Database',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 6c0 1.66 3.58 3 8 3s8-1.34 8-3-3.58-3-8-3-8 1.34-8 3z" />
        <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
        <path d="M4 18c0 1.66 3.58 3 8 3s8-1.34 8-3" />
      </svg>
    ),
  },
  {
    name: 'Prisma',
    category: 'ORM',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
        <path d="M21.577 18.067L13.11 1.95a1.27 1.27 0 0 0-2.22 0L2.423 18.067a1.27 1.27 0 0 0 1.11 1.854h16.934a1.27 1.27 0 0 0 1.11-1.854zm-8.8-13.627l6.837 13.001H4.386L11.223 4.44h1.554z" />
      </svg>
    ),
  },
  {
    name: 'AWS',
    category: 'Cloud',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      </svg>
    ),
  },
  {
    name: 'Tailwind',
    category: 'Styling',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
        <path d="M12 6c-2.4 0-3.9 1.2-4.5 3.6 1-.8 2.1-1.1 3.3-.9 1 .2 1.8 1 2.6 1.8C14.7 11.9 16.3 13 19 13c2.4 0 3.9-1.2 4.5-3.6-1 .8-2.1 1.1-3.3.9-1-.2-1.8-1-2.6-1.8C16.3 7.1 14.7 6 12 6zm-7 7c-2.4 0-3.9 1.2-4.5 3.6 1-.8 2.1-1.1 3.3-.9 1 .2 1.8 1 2.6 1.8 1.3 1.4 2.9 2.5 5.6 2.5 2.4 0 3.9-1.2 4.5-3.6-1 .8-2.1 1.1-3.3.9-1-.2-1.8-1-2.6-1.8-1.3-1.4-2.9-2.5-5.6-2.5z" />
      </svg>
    ),
  },
  {
    name: 'Git',
    category: 'Workflow',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="18" r="3" />
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <path d="M18 15V9a3 3 0 0 0-3-3H9" />
        <line x1="6" y1="9" x2="6" y2="15" />
      </svg>
    ),
  },
];

const capabilities: CapabilityItem[] = [
  {
    id: '01',
    title: 'Full Stack Development',
    subtitle: 'React • Next.js • TypeScript • Tailwind CSS • HTML & CSS',
    description: 'Architecting scalable frontends and server-rendered web applications with modern component architectures, type-safe data pipelines, and responsive design systems.',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML & CSS', 'Vite'],
  },
  {
    id: '02',
    title: 'Backend & API Engineering',
    subtitle: 'Node.js • Express.js • REST API Design • Django',
    description: 'Engineering resilient microservices, decoupled client-server architectures, type-safe API contracts, middleware validation, and asynchronous background jobs.',
    tags: ['Node.js', 'Express.js', 'REST API Design', 'Django', 'C#', 'ASP.NET Core'],
  },
  {
    id: '03',
    title: 'Database Architecture',
    subtitle: 'PostgreSQL • MySQL • Prisma ORM • Supabase • Neon • RDS',
    description: 'Designing normalized schemas, complex queries, indexing strategies, zero-downtime migrations, and ORM abstractions across relational and NoSQL databases.',
    tags: ['PostgreSQL', 'MySQL', 'Prisma ORM', 'Supabase', 'Neon', 'Amazon RDS'],
  },
  {
    id: '04',
    title: 'Cloud & Infrastructure',
    subtitle: 'AWS (EC2, S3, Lambda) • Docker • Vercel CI/CD',
    description: 'Configuring cloud hosting, containerized production environments, automated deployment pipelines, and global edge CDN distribution.',
    tags: ['AWS', 'EC2', 'S3', 'Docker', 'Vercel', 'Postman'],
  },
  {
    id: '05',
    title: 'Authentication & Integrations',
    subtitle: 'Clerk Auth • Google OAuth • JWT • Leaflet • OpenStreetMap',
    description: 'Implementing multi-tenant authentication, role-based access control (RBAC), token rotation, and interactive geospatial mapping systems.',
    tags: ['Clerk Auth', 'Google OAuth', 'JWT', 'React-Leaflet', 'OpenStreetMap', 'REST APIs'],
  },
  {
    id: '06',
    title: 'Developer Workflow',
    subtitle: 'Git & GitHub • System Design • Clean Code Craftsmanship',
    description: 'Practicing modular code organization, semantic Git branching, automated linting, test suites, and strict code quality standards.',
    tags: ['Git & GitHub', 'System Design', 'VS Code', 'Agile / Scrum'],
  },
];

export default function TechStackSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [toggledIndex, setToggledIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const gridContainerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.04,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0,
      y: shouldReduceMotion ? 0 : 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.5,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <div className="w-full max-w-[1299px] grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start relative z-10 pt-4">
      {/* Left Column: Tech Grid */}
      <div className="lg:col-span-5 flex flex-col gap-6">
        <motion.div
          initial={{ opacity: shouldReduceMotion ? 1 : 0, x: shouldReduceMotion ? 0 : -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.6,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="flex items-center gap-3"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#FD853A] animate-pulse" />
          <span className="text-sm font-semibold tracking-wider uppercase text-[#98A2B3]">
            Core Technologies
          </span>
        </motion.div>

        <motion.div
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-3 gap-3.5 sm:gap-4"
        >
          {techItems.map((tech) => (
            <motion.div
              key={tech.name}
              variants={cardVariants}
              className="h-full"
            >
              <div
                className="group flex flex-col items-center justify-center p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-[#1a1a22] text-[#171717] dark:text-white shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 hover:border-[#FD853A] border-2 border-transparent dark:border-white/5 transition-[transform,colors,box-shadow] duration-200 cursor-pointer h-full select-none"
              >
                <div className="text-[#171717] dark:text-white group-hover:text-[#FD853A] transition-colors duration-200">
                  {tech.icon}
                </div>
                <span className="mt-2 text-xs sm:text-sm font-semibold text-[#171717] dark:text-neutral-200 tracking-tight">
                  {tech.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Right Column: Capabilities List (Interactive Hover-Reveal Expandable Rows) */}
      <div className="lg:col-span-7 flex flex-col">
        <motion.div
          initial={{ opacity: shouldReduceMotion ? 1 : 0, x: shouldReduceMotion ? 0 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.6,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#FD853A]" />
          <span className="text-sm font-semibold tracking-wider uppercase text-[#98A2B3]">
            Capabilities & Disciplines
          </span>
        </motion.div>

        <div className="border-t border-white/15 divide-y divide-white/10">
          {capabilities.map((cap, index) => {
            const isOpen = hoveredIndex === index || toggledIndex === index;

            return (
              <div
                key={cap.id}
                onMouseEnter={() => {
                  if (typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
                    setHoveredIndex(index);
                  }
                }}
                onMouseLeave={() => {
                  if (typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
                    setHoveredIndex(null);
                  }
                }}
                onClick={() => setToggledIndex(toggledIndex === index ? null : index)}
                className={`group py-4 sm:py-5 px-3 sm:px-4 -mx-3 sm:-mx-4 rounded-2xl transition-colors duration-200 cursor-pointer select-none ${
                  isOpen
                    ? 'bg-white/[0.06] shadow-lg shadow-black/20 border border-white/10 -my-px'
                    : 'hover:bg-white/[0.03] border border-transparent'
                }`}
              >
                {/* Default Row Header */}
                <div className="flex items-center justify-between gap-3 sm:gap-4">
                  {/* Left: Title */}
                  <h3
                    className={`font-semibold text-base sm:text-lg lg:text-xl transition-colors duration-300 truncate min-w-0 ${
                      isOpen ? 'text-[#FD853A]' : 'text-white group-hover:text-white'
                    }`}
                  >
                    {cap.title}
                  </h3>

                  {/* Right: Subtitle preview + Indicator Icon */}
                  <div className="flex items-center gap-3 sm:gap-4 shrink-0">
                    <p
                      className={`hidden sm:block text-xs text-[#98A2B3] max-w-[200px] md:max-w-[260px] truncate transition-[transform,opacity,color] duration-200 ${
                        isOpen ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100 group-hover:text-white/80'
                      }`}
                    >
                      {cap.subtitle}
                    </p>

                    {/* Indicator Icon with smooth rotation on hover/open */}
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-[transform,colors,box-shadow] duration-200 border ${
                        isOpen
                          ? 'bg-[#FD853A] text-white border-[#FD853A] rotate-45 scale-105 shadow-sm shadow-orange-500/20'
                          : 'bg-white/5 text-[#98A2B3] border-white/10 group-hover:text-white group-hover:border-white/20'
                      }`}
                    >
                      <Plus size={16} strokeWidth={2.5} />
                    </div>
                  </div>
                </div>

                {/* Smooth Collapse Implementation via CSS Grid */}
                <div
                  style={{
                    gridTemplateRows: isOpen ? '1fr' : '0fr',
                    transition: shouldReduceMotion
                      ? 'none'
                      : 'grid-template-rows 350ms cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  className="grid"
                >
                  <div className="overflow-hidden">
                    <div
                      style={{
                        transition: shouldReduceMotion
                          ? 'opacity 200ms ease'
                          : isOpen
                          ? 'opacity 200ms cubic-bezier(0.16, 1, 0.3, 1) 100ms, transform 200ms cubic-bezier(0.16, 1, 0.3, 1) 100ms'
                          : 'opacity 150ms ease-out 0ms, transform 150ms ease-out 0ms',
                      }}
                      className={`pt-3.5 sm:pt-4 pb-1 ${
                        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                      }`}
                    >
                      {/* Detailed Description */}
                      <p className="text-xs sm:text-sm text-neutral-300/90 leading-relaxed max-w-2xl mb-3.5 font-normal">
                        {cap.description}
                      </p>

                      {/* Detailed Skill Badges / Pills */}
                      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                        {cap.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/95 border border-white/10 hover:border-[#FD853A]/60 hover:bg-[#FD853A]/15 hover:text-[#FD853A] hover:scale-105 transition-[transform,colors,border-color] duration-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
