'use client';

import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useScrollPosition } from '../hooks/useScrollPosition';
import Social from './Social';

const About = () => {
    const controls = useAnimation();
    const { isScrolled } = useScrollPosition();

    React.useEffect(() => {
        if (isScrolled) {
            controls.start({ opacity: 0, y: -50, scale: 0.8 });
        } else {
            controls.start({ opacity: 1, y: 0, scale: 1 });
        }
    }, [isScrolled, controls]);

    return (
        <div className="flex flex-col mt-5 md:mt-28 space-y-4">
            <div className="text-3xl md:text-5xl font-bold mb-3">hey, I'm</div>
            <motion.div
                id="hero-videsh"
                className="text-7xl md:text-9xl font-extrabold text-violet-600"
                initial={{ opacity: 1, y: 0, scale: 1 }}
                animate={controls}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{
                    transformOrigin: 'left center',
                    position: 'relative',
                    zIndex: isScrolled ? -1 : 1
                }}
            >
                videsh
            </motion.div>
            <div className="text-3xl md:text-5xl font-bold ">a Full Stack Developer</div>
            <div className="ml-1 text-xl">
                <p>📍 India 🇮🇳</p>
                {/* <p>🎓 Sri Eshwar College of Engineering, <span className="ml-0 md:ml-8">Coimbatore</span></p> */}
            </div>

            <Social />
        </div>
    );
};

export default About;