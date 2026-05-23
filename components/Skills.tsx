const frontend = [
  "React",
  "React Native",
  "Angular",
  "Vue.js",
  "TypeScript",
];

const backend = [
  "Node.js",
  "NestJS",
  "Spring Boot",
  "GraphQL",
  "REST APIs",
];

const infrastructure = [
  "AWS",
  "Docker",
  "Linux",
  "Nginx",
  "PostgreSQL",
  "MongoDB",
];

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <h2 className="text-4xl font-bold mb-12">
        Tech Stack
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Frontend
          </h3>

          <div className="flex flex-wrap gap-2">
            {frontend.map((skill) => (
              <span
                key={skill}
                className="border border-gray-700 px-3 py-2 rounded-lg"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">
            Backend
          </h3>

          <div className="flex flex-wrap gap-2">
            {backend.map((skill) => (
              <span
                key={skill}
                className="border border-gray-700 px-3 py-2 rounded-lg"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">
            Infrastructure
          </h3>

          <div className="flex flex-wrap gap-2">
            {infrastructure.map((skill) => (
              <span
                key={skill}
                className="border border-gray-700 px-3 py-2 rounded-lg"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}