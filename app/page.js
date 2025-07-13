import About from "./components/About";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import TimelineDemo from "./components/TimelineDemo";
import { FooterTransition } from "./components/ui/footer-transition";
import { ScrollIndicator } from "./components/ui/ScrollIndicator";
import { SectionTransition } from "./components/ui/section-transition";

export default function Home() {
  return (
    <div className="font-sans">
      <section id="about" className="min-h-screen px-4 md:px-36 pt-20 relative">
        <div className="flex flex-col md:flex-row max-w-7xl mx-auto gap-12 md:gap-32">
          <About />
          <TechStack />
        </div>
      </section>

      <ScrollIndicator />
      <SectionTransition />

      {/* <section id="projects" className="min-h-screen bg-[#121212]">
        <div className="max-w-7xl mx-auto py-12 px-4 md:px-9">
          <h1 className="text-4xl font-bold mb-8 text-shadow-gray-100 pt-16">
            My Project's
          </h1>
          <p className="text-gray-300 mb-12 max-w-2xl">
            Here's a timeline of my projects and development journey over the
            years. Scroll down to explore my work and progress.
          </p>
          <TimelineDemo />
        </div>
      </section> */}

      <section id="projects">
        <Projects />
      </section>

      <FooterTransition />
    </div>
  );
}
