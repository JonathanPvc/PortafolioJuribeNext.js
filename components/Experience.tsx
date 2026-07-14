"use client";
import FadeIn from "@/components/FadeIn";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/translations";

export default function Experience() {
  const { lang } = useLanguage();
  const items = t.experience.items;
  return (
    <FadeIn>
      <section id="experience" className="py-24">
        <h2 className="text-4xl font-bold mb-12">{t.experience.title[lang]}</h2>
        <div className="space-y-6">
          {items.map((exp) => (
            <div key={exp.company} className="border border-gray-800 rounded-2xl p-8 hover:border-gray-600 transition-all">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div>
                  <h3 className="text-2xl font-semibold">{exp.company}</h3>
                  <p className="text-blue-400 mt-1">{exp.role[lang]}</p>
                </div>
                <span className="text-gray-500 text-sm mt-2 md:mt-1 shrink-0">{exp.period}</span>
              </div>
              <p className="text-gray-500 text-sm mb-5 italic">{exp.summary[lang]}</p>
              <ul className="space-y-2 text-gray-300 mb-6">
                {exp.achievements[lang].map((a) => (
                  <li key={a} className="flex gap-2">
                    <span className="text-blue-400 mt-1 shrink-0">›</span>
                    {a}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.stack.map((tech) => (
                  <span key={tech} className="px-3 py-1 text-sm rounded-full bg-gray-900 border border-gray-800 text-gray-300">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </FadeIn>
  );
}