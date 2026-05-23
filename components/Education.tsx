const education = [
  {
    title: "Software Development Technology",
    institution: "UNAD",
    period: "2023 - Present",
  },
  {
    title: "Professional Economist",
    institution: "Universidad Libre",
    period: "2018 - 2023",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24">
      <h2 className="text-4xl font-bold mb-12">
        Education
      </h2>

      <div className="space-y-6">
        {education.map((item) => (
          <div
            key={item.title}
            className="border border-gray-800 rounded-2xl p-6"
          >
            <h3 className="text-xl font-semibold">
              {item.title}
            </h3>

            <p className="text-gray-400">
              {item.institution}
            </p>

            <p className="text-sm text-gray-500 mt-2">
              {item.period}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}