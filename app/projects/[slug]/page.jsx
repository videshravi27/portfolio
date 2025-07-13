import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SiGithub } from "react-icons/si";

const projects = [
    {
        slug: 'Chat-App',
        title: 'Chat-App',
        github: 'https://github.com/videshravi27/Chat-App.git',
        live: 'https://chat-app-ten-ecru.vercel.app/',
        description: 'A real-time messaging platform built with React and Node.js.',
    },
    {
        slug: 'fishtrack',
        title: 'fishtrack.',
        github: 'https://github.com/videshravi27/Chat-App.git',
        live: 'https://chat-app-ten-ecru.vercel.app/',
        description: 'Track ocean fish migration in real time.',
        stack: '',

    },
    {
        slug: 'tcg-home',
        title: 'TCG-Home',
        github: 'https://github.com/videshravi27/Chat-App.git',
        live: 'https://chat-app-ten-ecru.vercel.app/',
        description: 'A card management dashboard for trading card games.',
        stack: '',

    },
    {
        slug: 'portfolio',
        title: 'Portfolio',
        github: 'https://github.com/videshravi27/Chat-App.git',
        live: 'https://chat-app-ten-ecru.vercel.app/',
        description: 'My personal dev portfolio built with Next.js and Tailwind.',
        stack: '',
    },
];

export default function ProjectDetail({ params }) {
    const project = projects.find((p) => p.slug === params.slug);

    if (!project) return notFound();

    return (
        <div className="min-h-screen bg-[#121212] text-white px-6 py-20">
            <div className="max-w-4xl mx-auto space-y-6 mt-28">
                <div className="flex items-center gap-10">
                    <h1 className="text-4xl font-bold">{project.title}</h1>
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-400 transition-colors mt-3"
                    >
                        <SiGithub size={24} />
                    </a>
                    <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-transform duration-300 hover:scale-125"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-move-up-right mt-4"
                        >
                            <path d="M13 5H19V11" />
                            <path d="M19 5L5 19" />
                        </svg>
                    </a>
                </div>
                <p className="text-lg text-gray-300">{project.description}</p>
                <p>Tech Stack</p>
            </div>
        </div>
    );
}
