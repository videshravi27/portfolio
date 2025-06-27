'use client';

import {
    SiReact,
    SiNodedotjs,
    SiExpress,
    SiTailwindcss,
    SiJavascript,
    SiVercel,
    SiNextdotjs,
    SiMongodb,
} from 'react-icons/si';
import { FaJava } from "react-icons/fa6";

export default function TechStack() {
    const icons = [
        <SiNodedotjs size={48} color="#3C873A" />,
        <SiExpress size={48} color="#000000" />,
        <SiMongodb size={48} color="#47A248" />,
        <SiJavascript size={48} color="#F7DF1E" />,
        <SiReact size={48} color="#61DAFB" />,
        <SiNextdotjs size={48} color="#000000" />,
        <FaJava size={48} color="#007396" />,
        <SiTailwindcss size={48} color="#38BDF8" />,
        <SiVercel size={48} color="#000000" />,
    ];

    return (
        <div className="tech-scroll-wrapper w-full md:w-1/2 md:mt-48 ">
            <div className="tech-scroll-container">
                <div className="tech-scroll-track">
                    {[...icons, ...icons].map((icon, index) => (
                        <div className="tech-icon" key={index}>
                            {icon}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}  