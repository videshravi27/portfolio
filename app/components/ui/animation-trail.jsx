'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useScrollPosition } from '../../hooks/useScrollPosition';

export function AnimationTrail() {
    const { isScrolled } = useScrollPosition();

    const particles = Array.from({ length: 5 });

    return (
        <>
            {isScrolled && (
                <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-30">
                    {particles.map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 rounded-full bg-violet-500/30"
                            initial={{
                                x: window.innerWidth / 2,
                                y: 200,
                                scale: 2,
                                opacity: 0.8
                            }}
                            animate={{
                                x: window.innerWidth / 2 - 50 + i * 10,
                                y: 32,
                                scale: 0.5,
                                opacity: 0
                            }}
                            transition={{
                                duration: 0.8,
                                delay: i * 0.08,
                                ease: "easeInOut"
                            }}
                        />
                    ))}
                </div>
            )}
        </>
    );
}
