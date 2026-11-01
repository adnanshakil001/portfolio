'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, Github, ArrowUpRight, Truck, GraduationCap, ShieldAlert } from 'lucide-react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  status: string;
  isFlagship?: boolean;
  icon: React.ReactNode;
  summary: string;
  keyPoints: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    id: 'zonedrop',
    title: 'ZoneDrop',
    subtitle: 'Last-Mile Delivery & Automated Logistics Platform',
    category: 'Full-Stack Logistics',
    status: 'Live Web App',
    isFlagship: true,
    icon: <Truck className="w-5 h-5 text-[#FD853A]" />,
    summary:
      'A multi-portal delivery and logistics management ecosystem engineered to automate end-to-end order dispatch and driver assignment.',
    keyPoints: [
      'Automated order lifecycle across 3 role-specific portals (Customer, Delivery Agent, Admin) with dynamic volumetric parcel pricing.',
      'Integrated Clerk authentication, Google OAuth, and OpenStreetMap/React-Leaflet with real-time reverse geocoding.',
      'Safeguarded reliability with a 70+ backend test suite covering rate calculations and status transitions prior to deployment.',
    ],
    techStack: [
      'React (Vite)',
      'TypeScript',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Prisma ORM',
      'Tailwind CSS',
      'Clerk Auth',
      'React-Leaflet',
    ],
    liveUrl: 'https://zone-drop.vercel.app/',
    githubUrl: 'https://github.com/adnanshakil001/ZoneDrop',
  },
  {
    id: 'campuslens',
    title: 'CampusLens',
    subtitle: 'College Discovery & Decision Platform',
    category: 'EdTech & Relational Data',
    status: 'Live Web App',
    icon: <GraduationCap className="w-5 h-5 text-[#FD853A]" />,
    summary:
      'A centralized college discovery engine empowering students with multi-tier rank prediction, criteria filtering, and side-by-side college comparisons.',
    keyPoints: [
      'Structured and indexed relational data in PostgreSQL (Neon) to power a rank-based college predictor and multi-parameter filter engine.',
      'Built a decoupled Next.js frontend and Express.js REST backend with cursor-based infinite scrolling and URL-synced filter state.',
    ],
    techStack: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Express.js',
      'PostgreSQL (Neon)',
      'REST APIs',
    ],
    liveUrl: 'https://campus-lens-gray.vercel.app/',
    githubUrl: 'https://github.com/adnanshakil001/CampusLens',
  },
  {
    id: 'jansamadhan',
    title: 'JanSamadhan',
    subtitle: 'Citizen Grievance & Civic Complaint Management System',
    category: 'Civic Tech & Workflow Engine',
    status: 'Enterprise MVC',
    icon: <ShieldAlert className="w-5 h-5 text-[#FD853A]" />,
    summary:
      'An enterprise complaint tracking architecture with role-based access control, technician dispatch routing, and administrative performance analytics.',
    keyPoints: [
      'Modeled a full complaint lifecycle (Open → In Progress → Resolved) across Citizen, Technician, and Admin portals using role-based access control (RBAC).',
      'Engineered automated routing and escalation rules to assign tickets to technicians, coupled with an interactive GIS mapping dashboard.',
    ],
    techStack: [
      'ASP.NET Core MVC',
      'C#',
      'Entity Framework Core',
      'SQL Server',
      'Bootstrap',
      'Leaflet.js',
    ],
    githubUrl: 'https://github.com/adnanshakil001/JanSamadhan',
  },
];

export default function ProjectsSection() {
  const shouldReduceMotion = useReducedMotion();
  const flagship = projects.find((p) => p.isFlagship);
  const otherProjects = projects.filter((p) => !p.isFlagship);

  const cardVariants: Variants = {
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0,
      y: shouldReduceMotion ? 0 : 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.6,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  const pillsContainerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.03,
        delayChildren: shouldReduceMotion ? 0 : 0.2,
      },
    },
  };

  const pillVariants: Variants = {
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0,
      y: shouldReduceMotion ? 0 : 5,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.2,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <div className="w-full flex flex-col gap-10 max-w-[1290px] mx-auto">
      {/* 1. Flagship Hero Card (ZoneDrop) */}
      {flagship && (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={cardVariants}
          className="group relative w-full bg-[#171717] border border-white/10 hover:border-[#FD853A]/60 rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 lg:p-12 transition-[border-color,box-shadow] duration-300 shadow-xl hover:shadow-2xl overflow-hidden"
        >
          {/* Flowing Lines Background Image matching Tech Stack */}
          <Image
            src="/Frame 77.svg"
            alt=""
            fill
            className="object-cover absolute inset-0 opacity-40 pointer-events-none select-none transition-opacity duration-300 group-hover:opacity-50"
          />

          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-[#FD853A]/10 to-transparent rounded-full blur-3xl pointer-events-none -mr-20 -mt-20 group-hover:from-[#FD853A]/15 transition-colors duration-500" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start gap-5">
              {/* Badges Row */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-white tracking-wide uppercase shadow-xs">
                  {flagship.icon}
                  {flagship.category}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ECFDF3]/15 border border-[#ABEFC6]/30 text-xs font-semibold text-[#34C759]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#12B76A] animate-pulse" />
                  {flagship.status}
                </span>
                <motion.span
                  initial={{ scale: 1 }}
                  whileInView={shouldReduceMotion ? { scale: 1 } : { scale: [1, 1.08, 1] }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={
                    shouldReduceMotion
                      ? { duration: 0 }
                      : { delay: 0.4, duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }
                  }
                  className="px-2.5 py-1 rounded-full bg-[#FD853A]/20 border border-[#FD853A]/30 text-xs font-bold text-[#FD853A] uppercase tracking-wider inline-block origin-left"
                >
                  Featured Flagship
                </motion.span>
              </div>

              {/* Title & Tagline */}
              <div>
                <h3 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-white group-hover:text-[#FD853A] transition-colors duration-200">
                  {flagship.title}
                </h3>
                <p className="text-base sm:text-lg text-[#D0D5DD] font-medium mt-1">
                  {flagship.subtitle}
                </p>
              </div>

              {/* Description & Key Points */}
              <ul className="flex flex-col gap-2.5 text-sm sm:text-base text-[#D0D5DD] leading-relaxed">
                {flagship.keyPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FD853A] mt-2 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack Tags with Cascade */}
              <motion.div
                variants={pillsContainerVariants}
                className="flex flex-wrap gap-2 pt-2"
              >
                {flagship.techStack.map((tech) => (
                  <motion.span
                    key={tech}
                    variants={pillVariants}
                    className="px-3 py-1 bg-white/10 hover:bg-white/15 border border-white/15 text-white/90 rounded-lg text-xs font-medium shadow-xs transition-colors"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-4">
                {flagship.liveUrl && (
                  <Link
                    href={flagship.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FD853A] hover:bg-[#e4752f] text-white font-semibold text-sm sm:text-base hover:scale-105 active:scale-95 transition-[transform,background-color,box-shadow] duration-200 shadow-md hover:shadow-orange-500/30 cursor-pointer"
                  >
                    <span>View Live Demo</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </Link>
                )}
                <Link
                  href={flagship.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40 font-semibold text-sm sm:text-base hover:scale-105 active:scale-95 transition-[transform,background-color,color,border-color] duration-200 shadow-xs cursor-pointer"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </Link>
              </div>
            </div>

            {/* Right Mockup Display Card */}
            <div className="lg:col-span-5 w-full">
              <div className="w-full bg-[#0b0b0e]/90 backdrop-blur-md rounded-[24px] p-5 sm:p-6 text-white shadow-2xl border border-white/15 flex flex-col gap-4">
                {/* Simulated Browser Bar */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                    <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                    <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
                  </div>
                  <span className="text-xs text-[#98A2B3] font-mono tracking-tight bg-white/5 px-3 py-1 rounded-full">
                    zone-drop.vercel.app
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#98A2B3]" />
                </div>

                {/* Logistics Engine Metrics Card */}
                <div className="flex flex-col gap-3 py-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider text-[#98A2B3] font-semibold">
                      Automated Order Pipeline
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded bg-[#FD853A]/20 text-[#FD853A] font-semibold">
                      Active
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex flex-col">
                      <span className="text-xs text-[#98A2B3]">Pricing Engine</span>
                      <span className="text-sm font-semibold text-white mt-0.5">Dynamic / Distance</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex flex-col">
                      <span className="text-xs text-[#98A2B3]">Test Suite</span>
                      <span className="text-sm font-semibold text-[#12B76A] mt-0.5">70+ Backend Tests</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-2">
                    <span className="text-xs text-[#98A2B3]">Role-Based Access Portals</span>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="px-2 py-0.5 rounded bg-white/10 text-xs text-white">Customer</span>
                      <span className="px-2 py-0.5 rounded bg-white/10 text-xs text-white">Delivery Agent</span>
                      <span className="px-2 py-0.5 rounded bg-white/10 text-xs text-white">Administrator</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-gradient-to-r from-[#FD853A]/15 to-transparent border border-[#FD853A]/30 flex items-center justify-between">
                    <span className="text-xs text-white font-medium">Reverse Geocoding</span>
                    <span className="text-xs font-mono text-[#FD853A]">Leaflet + OpenStreetMap</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* 2. Paired Secondary Cards (CampusLens & JanSamadhan) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
        {otherProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: {
                opacity: shouldReduceMotion ? 1 : 0,
                y: shouldReduceMotion ? 0 : 30,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: shouldReduceMotion ? 0 : 0.6,
                  delay: shouldReduceMotion ? 0 : index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                },
              },
            }}
            className="group relative flex flex-col justify-between bg-[#171717] border border-white/10 hover:border-[#FD853A]/60 rounded-[32px] p-6 sm:p-8 lg:p-10 transition-[border-color,box-shadow] duration-300 shadow-xl hover:shadow-2xl overflow-hidden"
          >
            {/* Flowing Lines Background Image matching Tech Stack */}
            <Image
              src="/Frame 77.svg"
              alt=""
              fill
              className="object-cover absolute inset-0 opacity-40 pointer-events-none select-none transition-opacity duration-300 group-hover:opacity-50"
            />

            {/* Subtle Accent Glow */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-br from-[#FD853A]/10 to-transparent rounded-full blur-3xl pointer-events-none -mr-16 -mt-16 group-hover:from-[#FD853A]/15 transition-colors duration-500" />

            <div className="relative z-10 flex flex-col gap-5">
              {/* Badge Row */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-white tracking-wide uppercase shadow-xs">
                  {project.icon}
                  {project.category}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ECFDF3]/15 border border-[#ABEFC6]/30 text-xs font-semibold text-[#34C759]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#12B76A]" />
                  {project.status}
                </span>
              </div>

              {/* Title & Tagline */}
              <div>
                <h3 className="font-bold text-2xl sm:text-3xl text-white group-hover:text-[#FD853A] transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-[#D0D5DD] font-medium mt-1">
                  {project.subtitle}
                </p>
              </div>

              {/* Description & Key Points */}
              <ul className="flex flex-col gap-2 text-sm text-[#D0D5DD] leading-relaxed">
                {project.keyPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FD853A] mt-1.5 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack Tags with Cascade */}
              <motion.div
                variants={pillsContainerVariants}
                className="flex flex-wrap gap-2 pt-2"
              >
                {project.techStack.map((tech) => (
                  <motion.span
                    key={tech}
                    variants={pillVariants}
                    className="px-2.5 py-1 bg-white/10 hover:bg-white/15 border border-white/15 text-white/90 rounded-lg text-xs font-medium shadow-xs transition-colors"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            {/* Action Buttons */}
            <div className="relative z-10 flex flex-wrap items-center gap-3 pt-6 mt-6 border-t border-white/10">
              {project.liveUrl && (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FD853A] hover:bg-[#e4752f] text-white font-semibold text-sm hover:scale-105 active:scale-95 transition-[transform,background-color,box-shadow] duration-200 shadow-sm hover:shadow-orange-500/30 cursor-pointer"
                >
                  <span>Live Demo</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </Link>
              )}
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40 font-semibold text-sm hover:scale-105 active:scale-95 transition-[transform,background-color,color,border-color] duration-200 shadow-xs cursor-pointer"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
