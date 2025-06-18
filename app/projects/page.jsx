import TimelineDemo from "../components/TimelineDemo"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-8 text-gray-100">My Project Journey</h1>
        <p className="text-gray-300 mb-12 max-w-2xl">
          Here's a timeline of my projects and development journey over the years. Scroll down to explore my work and
          progress.
        </p>
        <TimelineDemo />
      </div>
    </div>
  )
}
