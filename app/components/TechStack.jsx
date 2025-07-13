'use client';

import React, { useState } from 'react';
import {
    SiReact,
    SiNodedotjs,
    SiExpress,
    SiTailwindcss,
    SiJavascript,
    SiVercel,
    SiNextdotjs,
    SiMongodb,
    SiMysql,
} from 'react-icons/si';
import { FaJava } from "react-icons/fa6";

export default function TechStack() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const icons = [
        { icon: SiNodedotjs, color: '#3C873A', label: 'Node.js' },
        { icon: SiExpress, color: '#000000', label: 'Express' },
        { icon: SiMongodb, color: '#47A248', label: 'MongoDB' },
        { icon: SiJavascript, color: '#F7DF1E', label: 'JavaScript' },
        { icon: SiReact, color: '#61DAFB', label: 'React' },
        { icon: SiNextdotjs, color: '#000000', label: 'Next.js' },
        { icon: FaJava, color: '#007396', label: 'Java' },
        { icon: SiTailwindcss, color: '#38BDF8', label: 'Tailwind' },
        { icon: SiMysql, color: '#4479A1', label: 'MySQL' },
    ];

    return (
        <div className="w-full px-8 py-28 ml-12">
            <div className="grid grid-cols-3 gap-14 place-items-center">
                {icons.map(({ icon: Icon, color, label }, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center space-y-2 transition-transform hover:scale-110"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <Icon size={48} color={hoveredIndex === index ? color : '#9CA3AF'} />
                    </div>
                ))}
            </div>
        </div>
    );
}
