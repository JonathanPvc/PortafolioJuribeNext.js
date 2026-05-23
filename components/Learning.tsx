const learning = [
  "NestJS",
  "Microservices",
  "Docker",
  "Kubernetes",
  "NATS",
  "CI/CD",
  "Google Cloud",
];

export default function Learning() {
  return (
    <section className="py-24">
      <h2 className="text-4xl font-bold mb-10">
        Currently Learning
      </h2>

      <div className="flex flex-wrap gap-3">
        {learning.map((item) => (
          <span
            key={item}
            className="border border-gray-700 px-4 py-2 rounded-lg"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}