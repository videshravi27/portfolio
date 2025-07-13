'use client';

import { SiGithub, SiLinkedin } from "react-icons/si";

const Social = () => {
    return (
        <div className="mt-4 ml-3">
            <div className="mt-4 md:mt-0 flex gap-10">
                <a
                    href="https://github.com/videshravi27"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition"
                >
                    <SiGithub size={24} />  
                </a>
                <a
                    href="https://www.linkedin.com/in/videsh-r-v-544461243/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition"
                >
                    <SiLinkedin size={24} />  
                </a>
            </div>
        </div>
    )
}

export default Social;
