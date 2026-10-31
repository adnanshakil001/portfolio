"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'

const Navbar = () => {
    const shouldReduceMotion = useReducedMotion();
    const leftItems = [
        { label: "Home", href: "#" },
        { label: "Tech Stack", href: "#services" },
    ];
    const rightItems = [
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contact" },
    ];
    const allItems = [...leftItems, ...rightItems];

    const [selected, setSelected] = useState("Home");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <motion.nav
            initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: shouldReduceMotion ? 0 : 0.35,
                ease: [0.23, 1, 0.32, 1],
            }}
            className="relative w-[calc(100%-8.5rem)] sm:w-[calc(100%-10rem)] lg:w-[92%] max-w-[960px] h-[72px] sm:h-[80px] lg:h-[86px] bg-[#171717]/95 text-white px-3 sm:px-5 lg:px-6 rounded-full backdrop-blur-[15px] border border-white/20 mx-auto flex items-center justify-between z-50 shadow-xl transition-colors duration-300"
        >
            {/* Left Menu (Desktop) */}
            <div className="hidden lg:flex flex-1 justify-start gap-2.5">
                {leftItems.map((item) => {
                    const isSelected = selected === item.label;
                    return (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={`px-6 lg:px-7 h-[50px] sm:h-[56px] lg:h-[60px] flex items-center justify-center rounded-full text-sm sm:text-base transition-colors duration-200 ${isSelected
                                    ? 'bg-[#FD853A] font-bold text-white shadow-md shadow-orange-500/20'
                                    : 'font-medium text-[#D0D5DD] hover:text-white hover:bg-white/10'
                                }`}
                            onClick={() => setSelected(item.label)}
                        >
                            {item.label}
                        </Link>
                    );
                })}
            </div>

            {/* Center Logo & Avatar Badge (Stacked matching reference style) */}
            <Link
                href="#"
                className="flex flex-col items-center justify-center cursor-pointer px-4 group transition-transform duration-200 hover:scale-105"
            >
                <div className="w-8 h-8 sm:w-9 sm:h-9 bg-[#FD853A] rounded-full flex items-center justify-center font-black text-white text-xs sm:text-sm tracking-tight shadow-sm">
                    AS
                </div>
                <span className="font-bold text-[10px] sm:text-xs tracking-widest text-white uppercase mt-0.5">
                    ADNAN
                </span>
            </Link>

            {/* Right Menu (Desktop) */}
            <div className="hidden lg:flex flex-1 justify-end gap-2.5">
                {rightItems.map((item) => {
                    const isSelected = selected === item.label;
                    return (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={`px-6 lg:px-7 h-[50px] sm:h-[56px] lg:h-[60px] flex items-center justify-center rounded-full text-sm sm:text-base transition-colors duration-200 ${isSelected
                                    ? 'bg-[#FD853A] font-bold text-white shadow-md shadow-orange-500/20'
                                    : 'font-medium text-[#D0D5DD] hover:text-white hover:bg-white/10'
                                }`}
                            onClick={() => setSelected(item.label)}
                        >
                            {item.label}
                        </Link>
                    );
                })}
            </div>

            {/* Mobile Menu Button */}
            <button
                className="lg:hidden flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#FD853A] hover:bg-[#e67a2e] text-white transition-colors duration-200 shadow-md shadow-orange-500/20"
                onClick={toggleMobileMenu}
                aria-label="Toggle navigation menu"
            >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.96, y: shouldReduceMotion ? 0 : -8 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.96, y: shouldReduceMotion ? 0 : -8 }}
                        transition={{
                            duration: shouldReduceMotion ? 0 : 0.2,
                            ease: [0.23, 1, 0.32, 1],
                        }}
                        style={{ transformOrigin: "top right" }}
                        className="absolute top-[100%] left-0 right-0 mt-3 bg-[#171717] rounded-[28px] border border-white/20 backdrop-blur-[15px] lg:hidden z-40 shadow-2xl overflow-hidden"
                    >
                        <div className="flex flex-col p-4 gap-2">
                            {allItems.map((item) => {
                                const isSelected = selected === item.label;
                                return (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        className={`w-full h-[50px] flex items-center justify-center rounded-full text-base transition-colors duration-200 ${isSelected
                                                ? 'bg-[#FD853A] font-bold text-white shadow-sm'
                                                : 'font-medium text-[#D0D5DD] hover:bg-white/10 hover:text-white'
                                            }`}
                                        onClick={() => {
                                            setSelected(item.label);
                                            setIsMobileMenuOpen(false);
                                        }}
                                    >
                                        {item.label}
                                    </Link>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}

export default Navbar;
