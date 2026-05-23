const projects = [
  {
    title: "Payment Gateway Integration",
    description:
      "Integration of electronic payment solutions into commercial web platforms.",
    stack: ["Node.js", "REST", "Payments"],
  },
  {
    title: "React 18 Migration",
    description:
      "Migration of legacy applications from VanillaJS to React 18.",
    stack: ["React", "TypeScript"],
  },
  {
    title: "React Native Applications",
    description:
      "Commercial and administrative mobile applications.",
    stack: ["React Native", "REST APIs"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <h2 className="text-4xl font-bold mb-12">
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="border border-gray-800 rounded-2xl p-6"
          >
            <h3 className="text-xl font-semibold mb-4">
              {project.title}
            </h3>

            <p className="text-gray-400 mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-sm border border-gray-700 px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}