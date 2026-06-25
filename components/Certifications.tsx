export default function Certifications() {
  const items = [
    {
      title: "AWS Cloud Practitioner",
      type: "Certification",
    },
    {
      title: "NestJS + Microservices",
      type: "Currently Learning",
    },
  ];

  return (
    <section className="py-24">
      <h2 className="text-4xl font-bold mb-10">
        Courses & Certifications
      </h2>

      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.title}
            className="border border-gray-800 rounded-xl p-5"
          >
            <h3 className="font-semibold text-lg">
              {item.title}
            </h3>

            <p className="text-gray-400 text-sm mt-1">
              {item.type}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}