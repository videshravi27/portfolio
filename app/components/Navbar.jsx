'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname();
    const isHomePage = pathname === '/';
    const isAboutPage = pathname === '/about';
    const isProjectsPage = pathname === '/projects';
    const isContactPage = pathname === '/contact';

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#1C1C1C] py-4 px-6 text-white">
            <div className="container mx-auto">
                <div className="flex justify-center items-center">
                    {!isHomePage && (
                        <Link href="/" className="text-xl font-bold mr-8">
                            videsh
                        </Link>
                    )}

                    <div className="flex space-x-8">
                        {!isAboutPage && (
                            <Link href="/about" className="hover:text-gray-300 transition-colors">
                                About
                            </Link>
                        )}

                        {!isProjectsPage && (
                            <Link href="/projects" className="hover:text-gray-300 transition-colors">
                                Projects
                            </Link>
                        )}

                        {!isContactPage && (
                            <Link href="/contact" className="hover:text-gray-300 transition-colors">
                                Contact
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;