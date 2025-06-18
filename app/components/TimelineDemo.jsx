import { Timeline } from "./ui/timeline"

export default function TimelineDemo() {
    const data = [
        {
            title: "2024",
            content: (
                <div>
                    <p className="mb-8 text-xs font-normal text-gray-300 md:text-sm">
                        Built and launched my portfolio website from scratch
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="https://assets.aceternity.com/templates/startup-1.webp"
                            alt="project screenshot"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
                        />
                        <img
                            src="https://assets.aceternity.com/templates/startup-2.webp"
                            alt="project screenshot"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
                        />
                        <img
                            src="https://assets.aceternity.com/templates/startup-3.webp"
                            alt="project screenshot"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
                        />
                        <img
                            src="https://assets.aceternity.com/templates/startup-4.webp"
                            alt="project screenshot"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "Early 2023",
            content: (
                <div>
                    <p className="mb-8 text-xs font-normal text-gray-300 md:text-sm">
                        Developed several web applications using React and Next.js
                    </p>
                    <p className="mb-8 text-xs font-normal text-gray-300 md:text-sm">
                        Focused on improving my skills in frontend development and UI/UX design. Here are some of the projects I
                        worked on.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="https://assets.aceternity.com/pro/hero-sections.png"
                            alt="project screenshot"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
                        />
                        <img
                            src="https://assets.aceternity.com/features-section.png"
                            alt="project screenshot"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
                        />
                        <img
                            src="https://assets.aceternity.com/pro/bento-grids.png"
                            alt="project screenshot"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
                        />
                        <img
                            src="https://assets.aceternity.com/cards.png"
                            alt="project screenshot"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "2022",
            content: (
                <div>
                    <p className="mb-4 text-xs font-normal text-gray-300 md:text-sm">
                        Started learning web development and completed several key milestones:
                    </p>
                    <div className="mb-8">
                        <div className="flex items-center gap-2 text-xs text-gray-300 md:text-sm">
                            ✅ Learned HTML, CSS, and JavaScript
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-300 md:text-sm">
                            ✅ Built my first responsive website
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-300 md:text-sm">✅ Started learning React</div>
                        <div className="flex items-center gap-2 text-xs text-gray-300 md:text-sm">
                            ✅ Completed several online courses
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-300 md:text-sm">
                            ✅ Built a portfolio of small projects
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="https://assets.aceternity.com/pro/hero-sections.png"
                            alt="project screenshot"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
                        />
                        <img
                            src="https://assets.aceternity.com/features-section.png"
                            alt="project screenshot"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
                        />
                    </div>
                </div>
            ),
        },
    ]
    return (
        <div className="relative w-full overflow-clip">
            <Timeline data={data} />
        </div>
    )
}
