'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const ScrollIndicator = () => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY <= 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: visible ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 mb-5"
        >
            <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"                  
                    height="40"                 
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"      
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-violet-600" 
                >
                    <path d="m7 6 5 5 5-5" />
                    <path d="m7 13 5 5 5-5" />
                </svg>
            </motion.div>
        </motion.div>
    );
};