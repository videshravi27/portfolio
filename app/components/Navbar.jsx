'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollPosition } from '../hooks/useScrollPosition';

const Navbar = () => {
    const pathname = usePathname();
    const isHomePage = pathname === '/';
    const { isScrolled } = useScrollPosition();

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#1C1C1C] py-4 px-6 text-white">
            <div className="container mx-auto">
                <div className="flex justify-center items-center">
                    <AnimatePresence>
                        {isScrolled && (<motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.8 }}
                            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.1 }}
                            className="mr-8"
                        >
                            <Link href="/" className="text-xl font-bold text-violet-600">
                                videsh
                            </Link>
                        </motion.div>
                        )}
                    </AnimatePresence>

                    <div className="flex space-x-8">
                        {isHomePage ? (
                            <>
                                <button
                                    onClick={() => scrollToSection('projects')}
                                    className="hover:text-gray-300 transition-colors"
                                >
                                    Projects
                                </button>
                            </>
                        ) : (
                            <Link href="/#projects" className="hover:text-gray-300 transition-colors">
                                Projects
                            </Link>
                        )}
                    </div>
                </div>
            </div>        </nav>
    );
};

export default Navbar;