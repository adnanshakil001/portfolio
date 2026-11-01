"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface OrangeButtonProps {
  title: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  icon?: React.ReactNode;
  showArrow?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  disabled?: boolean;
}

const OrangeButton: React.FC<OrangeButtonProps> = ({
  title,
  onClick,
  className = "",
  type = "button",
  icon,
  showArrow = false,
  href,
  target,
  rel,
  disabled = false,
}) => {
  const baseClasses = `group inline-flex items-center justify-center gap-2 sm:gap-2.5 min-h-[44px] sm:min-h-[48px] px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-[#FD853A] hover:bg-[#e46e24] text-white font-semibold text-sm sm:text-base tracking-wide whitespace-nowrap cursor-pointer transition-[transform,background-color,box-shadow] duration-200 ease-out hover:scale-105 active:scale-95 shadow-md shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FD853A] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#0b0b0e] disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed ${className}`;

  const content = (
    <>
      {icon && (
        <span className="shrink-0 transition-transform duration-200 group-hover:scale-110">
          {icon}
        </span>
      )}
      <span>{title}</span>
      {showArrow && (
        <ArrowUpRight className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        target={target}
        rel={target === "_blank" ? rel || "noopener noreferrer" : rel}
        className={baseClasses}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
    >
      {content}
    </button>
  );
};

export default OrangeButton;

