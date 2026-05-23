const experiences = [
  {
    company: "TU COMPRA S.A.S",
    role: "Software Developer",
    period: "Aug 2025 - Nov 2025",
    achievements: [
      "Development and maintenance of backend services using Java and Spring Boot.",
      "Participation in technical analysis and design of solutions for electronic payment processes.",
      "Implementation and consumption of REST APIs for commercial platform integrations.",
      "Support for transactional flows and validation of payment operations.",
      "Collaboration with technical and business teams to ensure service stability and continuity.",
    ],
    stack: ["Java", "Spring Boot", "REST APIs"],
  },
  {
    company: "Play Technologies S.A.S",
    role: "Software Developer",
    period: "Oct 2022 - Jul 2025",
    achievements: [
      "Development of web applications using React, Angular and TypeScript.",
      "Development of mobile applications using React Native.",
      "Creation of APIs and microservices with Node.js, REST and GraphQL.",
      "Migration of legacy applications from VanillaJS to React 18.",
      "Migration of mobile applications from Expo to React Native CLI.",
      "Integration of payment gateways for commercial platforms.",
      "Deployment and maintenance of applications on Linux servers using PM2, Nginx and Apache.",
      "Work under Scrum methodology in agile development teams.",
    ],
    stack: [
      "React",
      "React Native",
      "Node.js",
      "GraphQL",
      "TypeScript",
      "Angular",
      "Linux",
    ],
  },
  {
    company: "PYSEL S.A.S",
    role: "Development Assistant",
    period: "Oct 2021 - Sept 2022",
    achievements: [
      "Development of web interfaces using HTML5, CSS3 and JavaScript.",
      "Implementation of frontend functionalities.",
      "Testing, maintenance and adjustment of web applications.",
      "Collaboration with development teams in software delivery processes.",
    ],
    stack: ["JavaScript", "HTML5", "CSS3"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <h2 className="text-4xl font-bold mb-12">
        Professional Experience
      </h2>

      <div className="space-y-8">
        {experiences.map((exp) => (
          <div
            key={exp.company}
            className="border border-gray-800 rounded-2xl p-8 hover:border-gray-600 transition-all"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
              <div>
                <h3 className="text-2xl font-semibold">
                  {exp.company}
                </h3>

                <p className="text-blue-400">
                  {exp.role}
                </p>
              </div>

              <span className="text-gray-400 mt-2 md:mt-0">
                {exp.period}
              </span>
            </div>

            <ul className="space-y-2 text-gray-300 mb-6">
              {exp.achievements.map((achievement) => (
                <li key={achievement}>
                  • {achievement}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {exp.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm rounded-full border border-gray-700"
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