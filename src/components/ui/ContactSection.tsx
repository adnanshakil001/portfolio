'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { Mail, Check, Copy, ArrowUpRight, Github, Linkedin } from 'lucide-react';
import CustomeText from './CustomeText';
import { motion, AnimatePresence, useReducedMotion, useInView } from 'framer-motion';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = 'adnanshakil001@gmail.com';
  const shouldReduceMotion = useReducedMotion();
  const quoteRef = useRef<HTMLDivElement>(null);
  const isQuoteInView = useInView(quoteRef, { once: true, amount: 0.3 });

  const handleCopy = () => {
    try {
      if (typeof navigator !== 'undefined' && navigator?.clipboard?.writeText) {
        navigator.clipboard.writeText(email).catch(() => {});
      }
    } catch {
      // Safe fallback
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div id="contact" className="w-full bg-white dark:bg-[#0b0b0e] flex flex-col items-center justify-center py-16 sm:py-24 px-4 sm:px-6 lg:px-[71px] gap-8 sm:gap-10 transition-colors duration-300">
      {/* Headings */}
      <div className="w-full max-w-3xl text-center flex flex-col items-center gap-3">
        <motion.div
          initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.5,
            delay: shouldReduceMotion ? 0 : 0,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <CustomeText
            title="Have an exciting project or opportunity?"
            className="font-medium text-xl sm:text-2xl md:text-3xl text-[#475467] dark:text-neutral-400"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.5,
            delay: shouldReduceMotion ? 0 : 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="flex flex-wrap justify-center items-center gap-3"
        >
          <CustomeText
            title="Let's"
            className="font-bold text-4xl sm:text-5xl lg:text-6xl text-[#344054] dark:text-white"
          />
          <CustomeText
            title="Connect"
            className="font-bold text-4xl sm:text-5xl lg:text-6xl text-[#FD853A]"
          />
        </motion.div>

        {/* User's signature statement */}
        <motion.div
          ref={quoteRef}
          initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.5,
            delay: shouldReduceMotion ? 0 : 0.16,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-3 max-w-2xl text-center"
        >
          <p className="text-base sm:text-lg lg:text-xl text-[#344054] dark:text-neutral-200 font-medium leading-relaxed">
            &ldquo;I solve and automate real-life problems, engineer scalable digital solutions,
            <span className={`block mt-1 text-[#FD853A] font-semibold ${isQuoteInView && !shouldReduceMotion ? 'quote-shimmer' : ''}`}>
              and make humans a little lazier — one line of code at a time.&rdquo;
            </span>
          </p>
          <p className="mt-3 text-sm sm:text-base text-[#667085] dark:text-neutral-400">
            Currently open to Software Development Engineer (SDE) roles, technical internships, and collaborative software engineering projects.
          </p>
        </motion.div>
      </div>

      {/* Interactive Email Bar */}
      <motion.div
        initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : {
                type: 'spring' as const,
                stiffness: 300,
                damping: 22,
                delay: 0.2,
              }
        }
        className="w-full max-w-2xl flex flex-col sm:flex-row items-center justify-between gap-3 p-2.5 sm:p-3 rounded-2xl sm:rounded-full border border-[#E4E7EC] dark:border-white/10 bg-[#F9FAFB] dark:bg-[#141418] shadow-xs hover:border-[#FD853A]/40 transition-colors duration-200"
      >
        <div className="flex items-center gap-3 px-3 py-1.5 w-full sm:w-auto justify-center sm:justify-start">
          <div className="w-10 h-10 rounded-full bg-[#FFEAD5] dark:bg-[#FD853A]/20 flex items-center justify-center shrink-0">
            <Mail className="w-5 h-5 text-[#FD853A]" />
          </div>
          <span className="font-mono text-sm sm:text-base font-semibold text-[#1D2939] dark:text-white select-all">
            {email}
          </span>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto justify-center">
          <button
            onClick={handleCopy}
            className="inline-flex items-center justify-center min-w-[96px] gap-2 px-4 py-2.5 rounded-full bg-white dark:bg-[#1e1e24] hover:bg-[#F2F4F7] dark:hover:bg-[#25252d] hover:border-[#FD853A]/50 dark:hover:border-[#FD853A]/50 text-[#344054] dark:text-white text-xs sm:text-sm font-semibold border border-[#D0D5DD] dark:border-white/10 hover:scale-105 active:scale-95 transition-transform duration-300 cursor-pointer shadow-xs overflow-hidden"
            title="Copy email to clipboard"
          >
            <div className="relative w-4 h-4 flex items-center justify-center">
              <AnimatePresence mode="wait" initial={false}>
                {copied ? (
                  <motion.span
                    key="check"
                    initial={{ scale: shouldReduceMotion ? 1 : 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: shouldReduceMotion ? 1 : 0.8, opacity: 0 }}
                    transition={
                      shouldReduceMotion
                        ? { duration: 0 }
                        : {
                            type: 'spring' as const,
                            stiffness: 400,
                            damping: 22,
                            duration: 0.2,
                          }
                    }
                    className="absolute text-[#12B76A] flex items-center justify-center"
                  >
                    <Check className="w-4 h-4" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="copy"
                    initial={{ scale: shouldReduceMotion ? 1 : 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: shouldReduceMotion ? 1 : 0.8, opacity: 0 }}
                    transition={
                      shouldReduceMotion
                        ? { duration: 0 }
                        : {
                            type: 'spring' as const,
                            stiffness: 400,
                            damping: 22,
                            duration: 0.2,
                          }
                    }
                    className="absolute flex items-center justify-center"
                  >
                    <Copy className="w-4 h-4" />
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
            <span className={copied ? "text-[#12B76A] transition-colors duration-200" : "transition-colors duration-200"}>
              {copied ? 'Copied!' : 'Copy'}
            </span>
          </button>

          <Link
            href={`mailto:${email}`}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#FD853A] hover:bg-[#e4752f] text-white text-xs sm:text-sm font-semibold hover:scale-105 active:scale-95 transition-[transform,background-color,box-shadow] duration-200 shadow-sm hover:shadow-orange-500/30 cursor-pointer"
          >
            <span>Send Mail</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </motion.div>

      {/* Direct Social Links */}
      <div className="flex flex-wrap justify-center items-center gap-3.5 pt-2">
        <motion.div
          initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.4,
            delay: shouldReduceMotion ? 0 : 0,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <Link
            href="https://www.linkedin.com/in/adnanshakil001/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F2F4F7] dark:bg-[#141418] border border-[#D0D5DD]/60 dark:border-white/10 hover:border-[#0077B5] dark:hover:border-[#0077B5] hover:bg-white dark:hover:bg-[#1a1a24] text-[#344054] dark:text-neutral-200 hover:text-[#0077B5] dark:hover:text-[#0077B5] font-semibold text-sm hover:scale-105 active:scale-95 transition-[transform,colors,border-color] duration-200 cursor-pointer shadow-xs"
          >
            <Linkedin className="w-4 h-4 text-[#0077B5]" />
            <span>LinkedIn Profile</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.4,
            delay: shouldReduceMotion ? 0 : 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <Link
            href="https://github.com/adnanshakil001"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F2F4F7] dark:bg-[#141418] border border-[#D0D5DD]/60 dark:border-white/10 hover:border-[#FD853A] dark:hover:border-[#FD853A] hover:bg-white dark:hover:bg-[#1a1a24] text-[#344054] dark:text-neutral-200 hover:text-[#FD853A] dark:hover:text-[#FD853A] font-semibold text-sm hover:scale-105 active:scale-95 transition-[transform,colors,border-color] duration-200 cursor-pointer shadow-xs"
          >
            <Github className="w-4 h-4" />
            <span>GitHub Profile</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
