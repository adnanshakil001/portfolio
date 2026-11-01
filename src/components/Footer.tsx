'use client';

import React, { useRef } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { motion, useInView, useReducedMotion, type Variants } from "framer-motion";

const Footer = () => {
    const shouldReduceMotion = useReducedMotion();
    const nameRef = useRef<HTMLDivElement>(null);
    const isNameInView = useInView(nameRef, { once: true, amount: 0.2 });
    const headlineRef = useRef<HTMLHeadingElement>(null);
    const isHeadlineInView = useInView(headlineRef, { once: true, amount: 0.3 });

    const navigation = [
        { name: "Home", href: "#" },
        { name: "Tech Stack", href: "#services" },
        { name: "Process", href: "#process" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    const socials = [
        { icon: Linkedin, url: "https://www.linkedin.com/in/adnanshakil001/", label: "LinkedIn" },
        { icon: Github, url: "https://github.com/adnanshakil001", label: "GitHub" },
        { icon: Mail, url: "mailto:adnanshakil001@gmail.com", label: "Email" },
    ];

    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: shouldReduceMotion ? 0 : 0.06,
            },
        },
    };

    const wordVariants: Variants = {
        hidden: {
            clipPath: shouldReduceMotion ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)",
            opacity: 1,
        },
        visible: {
            clipPath: "inset(0 0% 0 0)",
            opacity: 1,
            transition: {
                duration: shouldReduceMotion ? 0 : 0.6,
                ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
            },
        },
    };

    return (
        <footer className="w-full bg-[#171717] rounded-t-3xl sm:rounded-t-[48px] text-white pt-16 sm:pt-20 lg:pt-24 pb-0 px-6 sm:px-12 lg:px-20 overflow-hidden relative flex flex-col justify-between">
            <div className="w-full max-w-[1340px] mx-auto flex flex-col">

                {/* Big Headline & Quote Row */}
                <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 lg:gap-12 w-full">
                    <motion.h2
                        ref={headlineRef}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                        variants={containerVariants}
                        className="font-semibold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.08] text-[#FCFCFD]"
                    >
                        <motion.span variants={wordVariants} className="inline-block text-[#FCFCFD] mr-[0.25em]">
                            Let&apos;s
                        </motion.span>
                        <motion.span variants={wordVariants} className="inline-block text-[#FCFCFD]">
                            make
                        </motion.span>
                        <br />
                        <motion.span variants={wordVariants} className="inline-block text-white mr-[0.25em]">
                            incredible
                        </motion.span>
                        <motion.span variants={wordVariants} className="inline-block text-white mr-[0.25em]">
                            work
                        </motion.span>
                        <motion.span variants={wordVariants} className="inline-block text-[#FD853A]">
                            <motion.span
                                initial={{ scale: 1 }}
                                animate={isHeadlineInView && !shouldReduceMotion ? { scale: [1, 1.08, 1], filter: ["drop-shadow(0 0 0px rgba(253,133,58,0))", "drop-shadow(0 0 14px rgba(253,133,58,0.7))", "drop-shadow(0 0 0px rgba(253,133,58,0))"] } : { scale: 1 }}
                                whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                                transition={{
                                    delay: shouldReduceMotion ? 0 : 0.85,
                                    duration: shouldReduceMotion ? 0 : 0.5,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                className="inline-block origin-left cursor-default transition-transform"
                            >
                                together.
                            </motion.span>
                        </motion.span>
                    </motion.h2>

                    {/* Signature statement on the right */}
                    <div className="max-w-md lg:max-w-md xl:max-w-lg lg:pb-3 shrink-0">
                        <p className="text-sm sm:text-base lg:text-lg text-[#D0D5DD] leading-relaxed">
                            &ldquo;I solve and automate real-life problems, engineer scalable digital solutions,
                            <span className="block mt-1 text-[#FD853A] font-medium">
                                and make humans a little lazier — one line of code at a time.&rdquo;
                            </span>
                        </p>
                    </div>
                </div>

                {/* Email & Socials Row */}
                <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mt-14 sm:mt-16 lg:mt-20">
                    <div className="flex flex-col gap-1.5">
                        <span className="text-xs sm:text-sm text-[#98A2B3] uppercase tracking-wider font-medium">
                            Email
                        </span>
                        <Link
                            href="mailto:adnanshakil001@gmail.com"
                            className="text-base sm:text-xl lg:text-2xl font-medium text-white hover:text-[#FD853A] transition-colors"
                        >
                            adnanshakil001@gmail.com
                        </Link>
                    </div>

                    <div className="flex flex-col gap-2.5 sm:items-end">
                        <span className="text-xs sm:text-sm text-[#98A2B3] uppercase tracking-wider font-medium">
                            Socials
                        </span>
                        <div className="flex items-center gap-3">
                            {socials.map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                    <Link
                                        key={idx}
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={item.label}
                                        className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 hover:bg-[#FD853A] hover:text-white text-white flex items-center justify-center transition-[transform,colors] duration-200 border border-white/10 hover:scale-105 active:scale-95"
                                    >
                                        <Icon size={18} />
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Divider Line */}
                <div className="w-full border-t border-white/10 my-8 sm:my-10" />

                {/* Navigation Links Row */}
                <div className="flex flex-wrap items-center gap-6 sm:gap-10 text-sm sm:text-base font-medium">
                    {navigation.map((item, idx) => (
                        <Link
                            key={idx}
                            href={item.href}
                            className="text-[#D0D5DD] hover:text-[#FD853A] transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Location & Copyright Row */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs sm:text-sm text-[#98A2B3] mt-8 mb-4 sm:mb-6">
                    <span>Based in Kolkata, West Bengal, India</span>
                    <span>© 2026 Adnan Shakil</span>
                </div>

            </div>

            {/* Massive Bottom Name Display */}
            <div
                ref={nameRef}
                className="w-full flex justify-center items-end overflow-hidden pt-4 sm:pt-6 -mb-3 sm:-mb-6 lg:-mb-10 pointer-events-none select-none"
            >
                <span className={`text-[14vw] sm:text-[15.5vw] font-bold text-white tracking-tighter leading-none whitespace-nowrap opacity-95 ${isNameInView ? 'name-shimmer' : ''}`}>
                    Adnan Shakil
                </span>
            </div>
        </footer>
    );
};

export default Footer;
