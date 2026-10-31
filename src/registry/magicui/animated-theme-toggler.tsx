'use client';

import React, { useEffect, useState, useRef } from 'react';
import { Moon, Sun } from 'lucide-react';

interface AnimatedThemeTogglerProps {
  className?: string;
  size?: number;
}

export function AnimatedThemeToggler({ className = '', size = 20 }: AnimatedThemeTogglerProps) {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = stored === 'dark' || (!stored && prefersDark);

    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  const toggleTheme = (event?: React.MouseEvent<HTMLButtonElement>) => {
    const nextDark = !isDark;

    // Fallback if View Transitions API is not supported in this browser
    if (!document.startViewTransition) {
      if (nextDark) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      setIsDark(nextDark);
      return;
    }

    // Determine coordinate origin for expanding circular clip-path
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;

    if (event) {
      x = event.clientX;
      y = event.clientY;
    } else if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      x = rect.left + rect.width / 2;
      y = rect.top + rect.height / 2;
    }

    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = document.startViewTransition(() => {
      if (nextDark) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      setIsDark(nextDark);
    });

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 500,
          easing: 'ease-in-out',
          pseudoElement: '::view-transition-new(root)',
        }
      );
    });
  };

  if (!mounted) {
    return (
      <div className={`w-11 h-11 rounded-full bg-white/80 dark:bg-[#1f1f23]/80 border border-neutral-200 dark:border-neutral-700/50 ${className}`} />
    );
  }

  return (
    <button
      ref={buttonRef}
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`group relative flex items-center justify-center w-11 h-11 rounded-full bg-white/90 dark:bg-[#1a1a1f]/90 text-neutral-800 dark:text-neutral-100 backdrop-blur-md border border-neutral-300/70 dark:border-white/20 shadow-md hover:shadow-xl hover:scale-110 active:scale-95 dark:hover:bg-[#262633] dark:hover:border-[#FD853A]/70 dark:hover:shadow-[0_0_24px_rgba(253,133,58,0.45)] transition-[transform,background-color,border-color,box-shadow] duration-200 cursor-pointer overflow-hidden ${className}`}
    >
      {/* Subtle ambient gradient highlight on hover */}
      <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#FD853A]/25 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div className="relative w-5 h-5 flex items-center justify-center">
        {/* Sun Icon (Visible in dark mode with interactive hover rotation) */}
        <Sun
          size={size}
          className={`absolute text-[#FD853A] transition-[opacity,transform] duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] ${
            isDark
              ? 'opacity-100 rotate-0 scale-100 group-hover:rotate-45 group-hover:scale-110'
              : 'opacity-0 -rotate-90 scale-50 pointer-events-none'
          }`}
        />

        {/* Moon Icon (Visible in light mode with interactive hover tilt) */}
        <Moon
          size={size}
          className={`absolute text-[#171717] dark:text-neutral-100 transition-[opacity,transform] duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] ${
            !isDark
              ? 'opacity-100 rotate-0 scale-100 group-hover:-rotate-12 group-hover:scale-110'
              : 'opacity-0 rotate-90 scale-50 pointer-events-none'
          }`}
        />
      </div>
    </button>
  );
}

export function AnimatedThemeTogglerDemo() {
  return (
    <div className="flex justify-center p-6">
      <AnimatedThemeToggler />
    </div>
  );
}

export default AnimatedThemeToggler;
