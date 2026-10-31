"use client";

import Navbar from "@/components/Navbar";
import CustomeText from "@/components/ui/CustomeText";
import DualToggleButtons from "@/components/ui/DualButtons";
import Image from "next/image";
import Link from "next/link";
import { Star, Github, Linkedin } from "lucide-react";
import OrangeButton from "@/components/ui/OrangeButton";
import { experiences, skills } from '../data/data';
import ClientOnly from "@/components/ui/ClientOnly";
import TechStackSection from "@/components/ui/TechStackSection";
import ProjectsSection from "@/components/ui/ProjectsSection";
import ContactSection from "@/components/ui/ContactSection";
import { motion, useReducedMotion, type Variants } from "framer-motion";

export default function Home() {
  const shouldReduceMotion = useReducedMotion();

  const projectTitleContainerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.06,
        delayChildren: shouldReduceMotion ? 0 : 0.05,
      },
    },
  };

  const projectTitleWordVariants: Variants = {
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
    <div className="relative min-h-screen w-full bg-white dark:bg-[#0b0b0e] py-10 flex flex-col items-center justify-start transition-colors duration-300">
      <Navbar />

      {/* Hero Section */}
      <div className="group flex flex-col md:flex-row w-full min-h-[600px] sm:min-h-[700px] lg:h-[700] lg:-mb-2 xl:mb-0 xl:h-[846px] px-4 sm:px-6 md:px-8 gap-6 sm:gap-8 md:gap-[71px] items-center justify-center mt-6">
        <div className="hidden lg:flex flex-col w-[328px] h-[138px] items-start justify-start transition-transform duration-300 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] group-hover:-translate-y-[250px]">
          <div className="text-[#344054] dark:text-neutral-400 text-[36px] leading-none">&quot;</div>
          <p className="text-[#344054] dark:text-neutral-300 text-[16px] font-medium leading-snug">
            Adnan&apos;s exceptional software development and problem-solving ensured our project&apos;s success.
            <br />
            Highly recommended.
          </p>
        </div>

        <div className="relative w-full flex flex-col items-center justify-center">
          <div className="z-30 flex flex-col items-center justify-center">
            <ClientOnly>
              <motion.div
                initial={{ scale: 1, opacity: shouldReduceMotion ? 1 : 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : {
                        type: "spring" as const,
                        stiffness: 300,
                        damping: 20,
                        delay: 0.2,
                      }
                }
              >
                <button className="h-[45px] px-[26px] py-[13px] translate-y-0 md:translate-y-10 rounded-full border border-[#171717] dark:border-white/20 flex items-center justify-center bg-white dark:bg-[#141418] text-[#171717] dark:text-white mt-10 hover:scale-105 active:scale-95 hover:border-[#FD853A] dark:hover:border-[#FD853A] hover:text-[#FD853A] dark:hover:text-[#FD853A] transition-[transform,colors,box-shadow] duration-200 cursor-pointer shadow-sm hover:shadow-md">
                  Hello!
                </button>
              </motion.div>
            </ClientOnly>
            <div className="flex gap-3 mt-4 translate-y-0 md:translate-y-10">
              <a
                href="https://github.com/adnanshakil001"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[42px] h-[42px] rounded-full border border-[#171717] dark:border-white/20 flex items-center justify-center bg-white dark:bg-[#141418] hover:bg-[#FD853A] hover:border-[#FD853A] hover:text-white dark:hover:bg-[#FD853A] dark:hover:border-[#FD853A] dark:hover:text-white text-[#171717] dark:text-neutral-200 hover:scale-110 active:scale-95 transition-[transform,colors,box-shadow] duration-200 shadow-sm hover:shadow-md hover:shadow-orange-500/25"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/adnanshakil001/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[42px] h-[42px] rounded-full border border-[#171717] dark:border-white/20 flex items-center justify-center bg-white dark:bg-[#141418] hover:bg-[#FD853A] hover:border-[#FD853A] hover:text-white dark:hover:bg-[#FD853A] dark:hover:border-[#FD853A] dark:hover:text-white text-[#171717] dark:text-neutral-200 hover:scale-110 active:scale-95 transition-[transform,colors,box-shadow] duration-200 shadow-sm hover:shadow-md hover:shadow-orange-500/25"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="flex w-full max-w-[952px] flex-col items-center justify-center transition-[transform,opacity] duration-300 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] group-hover:translate-y-[280px] group-hover:opacity-0 px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:gap-2 items-center sm:items-end mb-1 mt-6 sm:mt-8">
              <motion.div
                initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.35,
                  delay: shouldReduceMotion ? 0 : 0.08,
                  ease: [0.23, 1, 0.32, 1],
                }}
              >
                <CustomeText title="I&apos;m" className="text-[#171717] dark:text-white font-semibold text-4xl sm:text-5xl md:text-7xl xl:text-[88px]" />
              </motion.div>
              <motion.div
                initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.35,
                  delay: shouldReduceMotion ? 0 : 0.16,
                  ease: [0.23, 1, 0.32, 1],
                }}
                className="flex items-end"
              >
                <CustomeText title="Adnan" className="text-[#FD853A] font-semibold text-4xl sm:text-5xl md:text-7xl xl:text-[88px]" />
                <CustomeText title="," className="text-[#171717] dark:text-white font-semibold text-4xl sm:text-5xl md:text-7xl xl:text-[88px]" />
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.35,
                delay: shouldReduceMotion ? 0 : 0.24,
                ease: [0.23, 1, 0.32, 1],
              }}
            >
              <CustomeText title="Software Developer" className="text-[#171717] dark:text-white font-semibold text-4xl sm:text-5xl md:text-7xl xl:text-[88px] text-center" />
            </motion.div>
          </div>

          <div className="relative w-full max-w-[952px] aspect-[3/2] flex flex-col items-center justify-center -translate-y-[10%] sm:-translate-y-[15%] md:-translate-y-[20%] mx-auto px-4">
            <div className="absolute bottom-0 z-0 w-[90%] max-w-[812px] aspect-[2/1] overflow-hidden flex items-center justify-center pointer-events-auto">
              <div className="absolute w-full h-full bg-[#FEB273] rounded-t-full" />
            </div>

            <div className="absolute z-10 transition-[transform,opacity] duration-300 ease-in-out opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-105">
              <Image
                src="/Frame 68.svg"
                alt="Frame Decoration"
                width={1017}
                height={688}
                className="object-contain w-full h-auto"
                priority
              />
            </div>

            <motion.div
              initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.4,
                delay: shouldReduceMotion ? 0 : 0.22,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="relative z-20 w-full"
            >
              <Image
                src="/img.png"
                alt="Adnan"
                width={952}
                height={636}
                className="relative z-20 w-full h-auto object-contain mt-5"
                priority
              />
            </motion.div>

            <div className="absolute bottom-[10%] z-30 w-full hidden md:flex justify-center">
              <DualToggleButtons />
            </div>
          </div>
        </div>

        <div className="hidden lg:flex w-[240px] h-[125px] flex-col items-end justify-end gap-2 transition-transform duration-300 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] group-hover:-translate-y-[250px]">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={32} fill="#FD853A" stroke="#FD853A" />
            ))}
          </div>
          <h1 className="text-[24px] font-bold text-[#171717] dark:text-white leading-tight text-right">
            Final Year B.Tech
          </h1>
          <p className="text-sm font-medium text-[#171717] dark:text-neutral-300 text-right">Student at VIT</p>
        </div>
      </div>

      {/* Services */}
      <div id="services" className="relative flex flex-col w-full min-h-[878px] gap-16 sm:gap-[96px] items-center px-4 sm:px-6 lg:px-[71px] py-16 sm:py-[116px] bg-[#171717] rounded-[30px] sm:rounded-[50px] overflow-hidden -translate-y-8 sm:-translate-y-0 md:-translate-y-15 lg:translate-y-0 -mt-14 scroll-mt-24">
        <Image
          src="/Frame 77.svg"
          alt="image"
          fill
          className="object-cover absolute opacity-50"
        />

        <motion.div
          initial={{ opacity: shouldReduceMotion ? 1 : 0, x: shouldReduceMotion ? 0 : -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.6,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="w-full flex flex-col lg:flex-row items-start justify-between gap-6 relative z-10"
        >
          <div className="flex gap-2.5">
            <CustomeText title="My" className="font-semibold text-3xl sm:text-4xl lg:text-5xl text-[#FCFCFD]" />
            <CustomeText title="Tech Stack" className="font-semibold text-3xl sm:text-4xl lg:text-5xl text-[#FD853A]" />
          </div>
          <p className="w-full lg:w-[578px] font-medium text-base sm:text-lg lg:text-[20px] text-white">
            The technologies and tools I use to build full-stack applications, from frontend interfaces to cloud deployments.
          </p>
        </motion.div>

        <TechStackSection />
      </div>

      {/* How I Build Products */}
      <div id="process" className="w-full min-h-[600px] lg:min-h-[827px] flex flex-col items-start mx-auto px-4 sm:px-6 lg:px-[71px] py-12 lg:py-20 scroll-mt-24">
        <motion.div
          initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.6,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="w-full flex flex-wrap items-center justify-center gap-2.5 mb-10 lg:mb-20 text-center"
        >
          <CustomeText title="How" className="font-semibold text-4xl sm:text-5xl lg:text-6xl text-[#344054] dark:text-white" />
          <CustomeText title="I Build" className="font-semibold text-4xl sm:text-5xl lg:text-6xl text-[#FD853A]" />
          <CustomeText title="Products" className="font-semibold text-4xl sm:text-5xl lg:text-6xl text-[#FD853A]" />
        </motion.div>

        {/* Mobile View */}
        <div className="w-full lg:hidden">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.5,
                delay: shouldReduceMotion ? 0 : index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mb-8 last:mb-0"
            >
              <div className="flex items-start gap-4">
                <div className="relative flex-shrink-0 mt-2">
                  <div className="w-6 h-6 rounded-full border-2 border-dashed border-[#1D2939] dark:border-white/30 bg-white dark:bg-[#0b0b0e]" />
                  <div className={`absolute top-1 left-1 w-4 h-4 rounded-full ${exp.dotColor}`} />
                </div>

                <div className="flex-1">
                  <CustomeText title={exp.company} className="font-semibold text-[#1D2939] dark:text-white text-[20px] sm:text-[24px] mb-1" />
                  <CustomeText title={exp.duration} className="text-[#FD853A] font-medium text-[14px] sm:text-[16px] mb-2" />
                  <CustomeText title={exp.role} className="font-semibold text-[#1D2939] dark:text-white text-[18px] sm:text-[20px] mb-2" />
                  {exp.desc && (
                    <p className="text-[#667085] dark:text-neutral-400 text-[14px] sm:text-[16px] leading-relaxed">
                      {exp.desc}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop View */}
        <div className="relative w-full max-w-[1200px] mx-auto hidden lg:flex flex-col gap-14">
          <motion.div
            initial={{ scaleY: shouldReduceMotion ? 1 : 0, x: "-50%" }}
            whileInView={{ scaleY: 1, x: "-50%" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.8,
              ease: "easeInOut",
            }}
            style={{ transformOrigin: "top center" }}
            className="absolute left-1/2 top-6 bottom-6 w-[2px] border-l-2 border-dashed border-[#1D2939] dark:border-white/30"
          />
          {experiences.map((exp, index) => (
            <div key={index} className="grid grid-cols-12 items-center w-full z-10">
              {/* Left Column: Stage & Phase */}
              <motion.div
                initial={{ opacity: shouldReduceMotion ? 1 : 0, x: shouldReduceMotion ? 0 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.5,
                  delay: shouldReduceMotion ? 0 : index * 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="col-span-5 flex flex-col items-end text-right pr-12 gap-1.5"
              >
                <CustomeText title={exp.company} className="font-semibold text-[#1D2939] dark:text-white text-[34px] xl:text-[38px]" />
                <CustomeText title={exp.duration} className="text-xl text-[#FD853A] font-medium" />
              </motion.div>

              {/* Center Column: Dashed Circle & Dot */}
              <div className="col-span-2 flex items-center justify-center">
                <motion.div
                  initial={{ scale: shouldReduceMotion ? 1 : 0.85, opacity: shouldReduceMotion ? 1 : 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={
                    shouldReduceMotion
                      ? { duration: 0 }
                      : {
                          type: "spring" as const,
                          stiffness: 400,
                          damping: 25,
                          delay: 0.3 + index * 0.2,
                        }
                  }
                  className="relative flex items-center justify-center w-12 h-12"
                >
                  <div className="absolute w-12 h-12 rounded-full border-2 border-dashed border-[#1D2939] dark:border-white/30 bg-white dark:bg-[#0b0b0e]" />
                  <div className={`w-9 h-9 rounded-full z-10 ${exp.dotColor}`} />
                </motion.div>
              </div>

              {/* Right Column: Title & Description */}
              <motion.div
                initial={{ opacity: shouldReduceMotion ? 1 : 0, x: shouldReduceMotion ? 0 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.5,
                  delay: shouldReduceMotion ? 0 : index * 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="col-span-5 flex flex-col items-start pl-12 gap-2"
              >
                <CustomeText title={exp.role} className="font-semibold text-[#1D2939] dark:text-white text-[24px] xl:text-[28px]" />
                {exp.desc && (
                  <p className="text-base xl:text-lg text-[#667085] dark:text-neutral-400 leading-relaxed max-w-[440px]">
                    {exp.desc}
                  </p>
                )}
              </motion.div>
            </div>
          ))}
        </div>
      </div>



      {/* Featured Projects */}
      <div id="projects" className="w-full flex flex-col items-center px-4 sm:px-6 lg:px-[71px] py-12 sm:py-20 gap-10 lg:gap-14 scroll-mt-24">
        <div className="w-full max-w-[1290px] flex flex-col sm:flex-row justify-between items-start lg:items-center gap-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={projectTitleContainerVariants}
            className="font-semibold text-[32px] sm:text-[48px] lg:text-[64px] leading-[1.1] max-w-full lg:max-w-[643px]"
          >
            <motion.span variants={projectTitleWordVariants} className="inline-block text-[#344054] dark:text-white mr-[0.25em]">
              Lets
            </motion.span>
            <motion.span variants={projectTitleWordVariants} className="inline-block text-[#344054] dark:text-white mr-[0.25em]">
              Have
            </motion.span>
            <motion.span variants={projectTitleWordVariants} className="inline-block text-[#344054] dark:text-white mr-[0.25em]">
              a
            </motion.span>
            <motion.span variants={projectTitleWordVariants} className="inline-block text-[#344054] dark:text-white mr-[0.25em]">
              look
            </motion.span>
            <motion.span variants={projectTitleWordVariants} className="inline-block text-[#344054] dark:text-white">
              at
            </motion.span>
            <br />
            <motion.span variants={projectTitleWordVariants} className="inline-block text-[#344054] dark:text-white mr-[0.25em]">
              my
            </motion.span>
            <motion.span variants={projectTitleWordVariants} className="inline-block text-[#FD853A]">
              Projects
            </motion.span>
          </motion.h2>

          <motion.div
            initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.5,
              delay: shouldReduceMotion ? 0 : 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="shrink-0"
          >
            <Link
              href="https://github.com/adnanshakil001"
              target="_blank"
              rel="noopener noreferrer"
            >
              <OrangeButton title="All Repositories" />
            </Link>
          </motion.div>
        </div>

        <ProjectsSection />
      </div>

      {/* Skills Marquee Banner */}
      <div className="marquee-wrapper relative w-full h-[147px] bg-[#FB6514] rounded-tl-4xl rounded-br-4xl overflow-hidden my-8 sm:my-12">
        <div className="absolute w-[5000px] h-[63px] bg-white dark:bg-[#121217] -rotate-2 -mt-2 md:mt-0 md:-rotate-[1.9deg] z-10 -ml-2 flex items-center border-y border-transparent dark:border-white/10">
          <div className="marquee flex gap-8 w-max">
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-5 text-[#000000] dark:text-white text-[48px] whitespace-nowrap"
              >
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.4828 0.257982L21.715 12.3411L34.2082 16.5003L22.1251 21.7324L17.9659 34.2256L12.7337 22.1425L0.240553 17.9833L12.3237 12.7512L16.4828 0.257982Z"
                    fill="#FD853A"
                  />
                </svg>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pre-Footer: Contact & Connect */}
      <ContactSection />

    </div>
  );
}