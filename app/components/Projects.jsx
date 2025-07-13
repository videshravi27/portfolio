'use client';

import { useState } from 'react';
import { SiGithub } from "react-icons/si";

const projects = [
  { id: '01', title: 'Chat-App', description: 'A real-time chat app built with React and Node.js.', github: 'https://github.com/videshravi27/Chat-App.git', live: 'https://chat-app-ten-ecru.vercel.app/' },
  { id: '02', title: 'Password-Manager', description: 'A secure password manager built with React and Node.js.', github: 'https://github.com/videshravi27/Password-Manager.git', live: 'https://vault-seven-chi.vercel.app/' },
  { id: '03', title: 'Issue-Tracker', description: 'An issue tracker built with Next.js and MySQL.', github: 'https://github.com/videshravi27/Issue-Tracker.git', live: 'https://issue-tracker-blue-five.vercel.app/' },
  { id: '04', title: 'Portfolio', description: 'A personal dev portfolio built with Next.js.', github: 'https://github.com/videshravi27/portfolio.git', live: 'https://portfolio-pi-rouge-79.vercel.app/' },
];

export default function Projects() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full py-20 px-6 md:px-20 bg-[#121212] text-[var(--foreground)]">
      <div className="max-w-5xl mx-auto space-y-12 mt-12">
        {projects.map((project, index) => (
          <div key={index} className="border-b border-gray-700 pb-10">
            <div className="flex items-center gap-8">
              <span className="text-gray-500 text-lg md:text-xl font-light w-12">
                {project.id}
              </span>
              <span className="text-2xl md:text-4xl font-semibold tracking-wide">
                {project.title}
              </span>
              <button
                onClick={() => toggle(index)}
                className="transition-transform duration-300 hover:scale-125"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`lucide lucide-chevron-down transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                    }`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
            </div>

            {openIndex === index && (
              <div className='flex flex-col ml-20'>
                <div className="mt-5 text-gray-400 text-base md:text-lg">
                  {project.description}
                </div>
                <div className='flex gap-5 mt-4 text-gray-300'>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <SiGithub size={20} className='mt-2' />
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right-icon lucide-arrow-up-right mt-1.5"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
                  </a>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
