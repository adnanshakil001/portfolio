'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

export default function DualToggleButtons() {
  const [active, setActive] = useState<"portfolio" | "hire">("portfolio");
  const shouldReduceMotion = useReducedMotion();

  const springTransition = shouldReduceMotion
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 400, damping: 28 };

  return (
    <div className="flex border-b-2 border-white/80 bg-white/10 dark:bg-[#121217]/60 backdrop-blur-[10px] rounded-full gap-[10px] p-[10px] w-[367px] h-[82px] items-center justify-center shadow-xl">
      {/* Portfolio Button */}
      <motion.div
        layout
        transition={springTransition}
        className={active === "portfolio" ? "w-[208px]" : "w-[129px]"}
      >
        <Link
          href="#projects"
          onMouseEnter={() => setActive("portfolio")}
          onFocus={() => setActive("portfolio")}
          className={`group flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-[60px] cursor-pointer w-full h-[62px] transition-[background-color,border-color,box-shadow,color] duration-200 ${
            active === "portfolio"
              ? "bg-[#FD853A] text-white font-medium text-[22px] sm:text-[24px] border border-[#D0D5DD] shadow-md shadow-orange-500/20"
              : "bg-transparent text-white/90 hover:text-white font-light text-[18px]"
          }`}
        >
          <span>Portfolio</span>
          <ArrowUpRight
            size={18}
            className={`transition-[opacity,transform] duration-200 ${
              active === "portfolio"
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-1 pointer-events-none w-0 -mr-2"
            }`}
          />
        </Link>
      </motion.div>

      {/* Hire Me Button */}
      <motion.div
        layout
        transition={springTransition}
        className={active === "hire" ? "w-[208px]" : "w-[129px]"}
      >
        <Link
          href="#contact"
          onMouseEnter={() => setActive("hire")}
          onFocus={() => setActive("hire")}
          className={`group flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-[60px] cursor-pointer w-full h-[62px] transition-[background-color,border-color,box-shadow,color] duration-200 ${
            active === "hire"
              ? "bg-[#FD853A] text-white font-medium text-[22px] sm:text-[24px] border border-[#D0D5DD] shadow-md shadow-orange-500/20"
              : "bg-transparent text-white/90 hover:text-white font-light text-[18px]"
          }`}
        >
          <span>Hire me</span>
          <ArrowUpRight
            size={18}
            className={`transition-[opacity,transform] duration-200 ${
              active === "hire"
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-1 pointer-events-none w-0 -mr-2"
            }`}
          />
        </Link>
      </motion.div>
    </div>
  );
}
