"use client";
import FadeIn from "@/components/FadeIn";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/translations";

export default function Education() {
  const { lang } = useLanguage();
  const e = t.education;
  return (
    <FadeIn>
      <section id="education" className="py-24">
        <h2 className="text-4xl font-bold mb-12">{e.title[lang]}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xs font-semibold text-gray-300 mb-5 uppercase tracking-widest">{e.eduLabel[lang]}</h3>
            <div className="space-y-4">
              {e.items.map((item) => (
                <div key={item.title.en} className="border border-gray-800 rounded-2xl p-6 hover:border-gray-600 transition-all">
                  <h4 className="text-lg font-semibold">{item.title[lang]}</h4>
                  <p className="text-blue-400 text-sm mt-1">{item.institution}</p>
                  <p className="text-gray-500 text-sm mt-2">
                    {item.note === "pursuing" ? e.pursuing[lang] : e.graduated[lang]} · {item.period}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xs font-semibold text-gray-300 mb-5 uppercase tracking-widest">{e.certLabel[lang]}</h3>
            <div className="space-y-4">
              {e.certs.map((item) => (
                <div key={item.title.en} className="border border-gray-800 rounded-2xl p-6 hover:border-gray-600 transition-all">
                  <h4 className="text-lg font-semibold">{item.title[lang]}</h4>
                  <p className="text-blue-400 text-sm mt-1">{item.issuer}</p>
                  <span className="inline-block mt-2 text-xs text-emerald-400 border border-emerald-400/30 bg-emerald-400/5 px-2 py-0.5 rounded-full">
                    {e.inProgress[lang]}
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