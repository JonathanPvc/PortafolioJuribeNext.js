import FadeIn from "@/components/FadeIn";

const education = [
  {
    title: "Software Development Technology",
    institution: "UNAD",
    period: "2023 – Present",
    note: "Currently pursuing",
  },
  {
    title: "Professional Economist",
    institution: "Universidad Libre",
    period: "2018 – 2023",
    note: "Graduated",
  },
];

const certifications = [
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    status: "In progress",
  },
  {
    title: "NestJS + Microservices",
    issuer: "Udemy",
    status: "In progress",
  },
];

export default function Education() {
  return (
    <FadeIn>
      <section id="education" className="py-24">
        <h2 className="text-4xl font-bold mb-12">Education & Certifications</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-300 mb-5 uppercase tracking-widest text-xs">
              Education
            </h3>
            <div className="space-y-4">
              {education.map((item) => (
                <div key={item.title} className="border border-gray-800 rounded-2xl p-6 hover:border-gray-600 transition-all">
                  <h4 className="text-lg font-semibold">{item.title}</h4>
                  <p className="text-blue-400 text-sm mt-1">{item.institution}</p>
                  <p className="text-gray-500 text-sm mt-2">{item.note} · {item.period}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-gray-300 mb-5 uppercase tracking-widest">
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((item) => (
                <div key={item.title} className="border border-gray-800 rounded-2xl p-6 hover:border-gray-600 transition-all">
                  <h4 className="text-lg font-semibold">{item.title}</h4>
                  <p className="text-blue-400 text-sm mt-1">{item.issuer}</p>
                  <span className="inline-block mt-2 text-xs text-emerald-400 border border-emerald-400/30 bg-emerald-400/5 px-2 py-0.5 rounded-full">
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}
