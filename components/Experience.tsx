import FadeIn from "@/components/FadeIn";

const experiences = [
  {
    company: "TU COMPRA S.A.S",
    role: "Software Developer",
    period: "Aug 2025 – Nov 2025",
    summary: "Backend development for a fintech focused on electronic payments.",
    achievements: [
      "Built and maintained backend services in Java and Spring Boot for payment processing flows.",
      "Designed and consumed REST APIs for integrations with commercial platforms.",
      "Collaborated with business and technical teams to ensure 99.9% uptime on transactional services.",
      "Participated in technical analysis and solution design for new payment features.",
    ],
    stack: ["Java", "Spring Boot", "REST APIs"],
  },
  {
    company: "Play Technologies S.A.S",
    role: "Software Developer",
    period: "Oct 2022 – Jul 2025",
    summary: "Full stack development of web and mobile products across multiple client projects.",
    achievements: [
      "Developed and maintained web applications using React, Angular and TypeScript.",
      "Built cross-platform mobile apps with React Native (CLI), serving thousands of users.",
      "Created REST and GraphQL APIs with Node.js for diverse commercial integrations.",
      "Led migration of legacy VanillaJS apps to React 18, improving DX and performance.",
      "Migrated mobile apps from Expo to React Native CLI for greater native control.",
      "Integrated payment gateways (PSE, credit cards) into commercial platforms.",
      "Deployed and maintained applications on Linux using PM2, Nginx and Apache.",
    ],
    stack: ["React", "React Native", "Node.js", "GraphQL", "TypeScript", "Angular", "Linux"],
  },
  {
    company: "PYSEL S.A.S",
    role: "Development Assistant",
    period: "Oct 2021 – Sep 2022",
    summary: "Frontend development and maintenance of web applications.",
    achievements: [
      "Built web interfaces using HTML5, CSS3 and JavaScript.",
      "Implemented frontend features and maintained existing applications.",
      "Collaborated with the dev team through the full software delivery lifecycle.",
    ],
    stack: ["JavaScript", "HTML5", "CSS3"],
  },
];

export default function Experience() {
  return (
    <FadeIn>
      <section id="experience" className="py-24">
        <h2 className="text-4xl font-bold mb-12">Professional Experience</h2>

        <div className="space-y-6">
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="border border-gray-800 rounded-2xl p-8 hover:border-gray-600 transition-all"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div>
                  <h3 className="text-2xl font-semibold">{exp.company}</h3>
                  <p className="text-blue-400 mt-1">{exp.role}</p>
                </div>
                <span className="text-gray-500 text-sm mt-2 md:mt-1 shrink-0">{exp.period}</span>
              </div>

              <p className="text-gray-500 text-sm mb-5 italic">{exp.summary}</p>

              <ul className="space-y-2 text-gray-300 mb-6">
                {exp.achievements.map((a) => (
                  <li key={a} className="flex gap-2">
                    <span className="text-blue-400 mt-1 shrink-0">›</span>
                    {a}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm rounded-full bg-gray-900 border border-gray-800 text-gray-300"
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
