export default function FeaturedTech() {
  const techs = [
    "React",
    "React Native",
    "Node.js",
    "TypeScript",
    "NestJS",
    "AWS",
  ];

  return (
    <section className="py-16">
      <div className="flex flex-wrap justify-center gap-4">
        {techs.map((tech) => (
          <div
            key={tech}
            className="
              px-5
              py-3
              rounded-xl
              border
              border-gray-800
              bg-gray-900
            "
          >
            {tech}
          </div>
        ))}
      </div>
    </section>
  );
}