import FadeIn from "@/components/FadeIn";

const categories = [
  {
    label: "Frontend",
    skills: ["React", "React Native", "Angular", "Vue.js", "TypeScript", "Next.js"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "NestJS", "Spring Boot", "GraphQL", "REST APIs", "PostgreSQL", "MongoDB"],
  },
  {
    label: "Infrastructure",
    skills: ["AWS", "Docker", "Linux", "Nginx", "PM2", "CI/CD"],
  },
];

export default function Skills() {
  return (
    <FadeIn>
      <section id="skills" className="py-24">
        <h2 className="text-4xl font-bold mb-3">Tech Stack</h2>
        <p className="text-gray-400 mb-12">
          Technologies I use to ship production-ready software.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.label}
              className="border border-gray-800 rounded-2xl p-6 hover:border-gray-600 transition-all"
            >
              <h3 className="text-lg font-semibold mb-5 text-white">
                {cat.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="border border-gray-700 px-3 py-1.5 rounded-lg text-sm text-gray-300 hover:border-gray-500 hover:text-white transition"
                  >
                    {skill}
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
