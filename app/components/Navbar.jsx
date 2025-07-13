'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollPosition } from '../hooks/useScrollPosition';

const Navbar = () => {
    const pathname = usePathname();
    const router = useRouter();
    const isHomePage = pathname === '/';
    const { isScrolled } = useScrollPosition();

    const handleProjectsClick = async (e) => {
        e.preventDefault();

        if (pathname !== '/') {
            router.push('/', { scroll: false });

            setTimeout(() => {
                const el = document.getElementById('projects');
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                }
            }, 10);
        } else {
            const el = document.getElementById('projects');
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#1C1C1C] py-4 px-6 text-white">
            <div className="container mx-auto">
                <div className="flex justify-center items-center">
                    <AnimatePresence>
                        {isScrolled && (
                            <motion.div
                                initial={{ opacity: 0, y: -20, scale: 0.8 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -20, scale: 0.8 }}
                                transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.1 }}
                                className="mr-8"
                            >
                                <Link href="/" className="text-xl font-bold text-violet-600">
                                    videsh
                                </Link>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <div className="flex space-x-8">
                        <button
                            onClick={handleProjectsClick}
                            className="hover:text-gray-300 transition-colors"
                        >
                            Projects
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
