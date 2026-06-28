import FadeIn from "@/components/FadeIn";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Real-Time Automation Platform",
    description:
      "Desktop app built with Electron and Node.js for real-time monitoring, automated workflows, and multi-account management. Reduced manual operations by ~70% for the business using it.",
    stack: ["Electron", "Node.js", "Playwright", "REST APIs"],
    type: "Professional",
    github: null,
    demo: null,
  },
  {
    title: "Payment Gateway Integration",
    description:
      "End-to-end integration of electronic payment solutions (PSE, credit cards) into commercial web platforms. Handled edge cases, refunds, and webhook validation for transactional reliability.",
    stack: ["Node.js", "REST", "TypeScript", "Spring Boot"],
    type: "Professional",
    github: null,
    demo: null,
  },
  {
    title: "Legacy App Migration to React 18",
    description:
      "Migrated a large VanillaJS application to React 18, introducing component architecture, TypeScript and a modern state management approach. Improved maintainability and cut load time significantly.",
    stack: ["React 18", "TypeScript", "Vite"],
    type: "Professional",
    github: null,
    demo: null,
  },
  {
    title: "Cross-Platform Mobile Apps",
    description:
      "Built and maintained commercial and administrative mobile applications for Android and iOS using React Native CLI. Migrated existing Expo apps to bare workflow for greater native control.",
    stack: ["React Native", "REST APIs", "TypeScript"],
    type: "Professional",
    github: null,
    demo: null,
  },
];

export default function Projects() {
  return (
    <FadeIn>
      <section id="projects" className="py-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
          <div>
            <h2 className="text-4xl font-bold">Featured Projects</h2>
            <p className="text-gray-400 mt-2">
              Work delivered in production environments for real clients.
            </p>
          </div>
          <a
            href="https://github.com/JonathanPvc"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition border border-gray-700 px-4 py-2 rounded-lg self-start md:self-auto"
          >
            <FaGithub size={16} />
            View GitHub
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border border-gray-800 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gray-600 flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-blue-400 border border-blue-400/30 bg-blue-400/5 px-2.5 py-1 rounded-full">
                  {project.type}
                </span>
                <div className="flex gap-3">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition">
                      <FaGithub size={16} />
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition">
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-400 mb-6 leading-7 flex-1">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm border border-gray-700 px-2.5 py-1 rounded-lg text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </FadeIn>
  );
}
