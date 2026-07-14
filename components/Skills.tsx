"use client";
import FadeIn from "@/components/FadeIn";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/translations";

export default function Skills() {
  const { lang } = useLanguage();
  const s = t.skills;
  return (
    <FadeIn>
      <section id="skills" className="py-24">
        <h2 className="text-4xl font-bold mb-3">{s.title[lang]}</h2>
        <p className="text-gray-400 mb-12">{s.sub[lang]}</p>
        <div className="grid md:grid-cols-3 gap-8">
          {s.categories.map((cat) => (
            <div key={cat.label.en} className="border border-gray-800 rounded-2xl p-6 hover:border-gray-600 transition-all">
              <h3 className="text-lg font-semibold mb-5 text-white">{cat.label[lang]}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill} className="border border-gray-700 px-3 py-1.5 rounded-lg text-sm text-gray-300 hover:border-gray-500 hover:text-white transition">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </FadeIn>
  );
}