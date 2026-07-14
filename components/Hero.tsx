"use client";
import ProfileImage from "@/components/ProfileImage";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/translations";

export default function Hero() {
  const { lang } = useLanguage();
  const h = t.hero;
  return (
    <section className="min-h-screen flex items-center">
      <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
        <div>
          <span className="inline-flex items-center gap-2 text-sm text-emerald-400 font-medium mb-6 border border-emerald-400/30 bg-emerald-400/5 px-3 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            {h.badge[lang]}
          </span>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight whitespace-pre-line">
            {h.title[lang]}
          </h1>
          <p className="text-xl text-gray-400 mt-5">{h.sub[lang]}</p>
          <p className="mt-6 text-lg text-gray-400 leading-8 max-w-xl">{h.desc[lang]}</p>
          <div className="flex flex-wrap gap-4 mt-10">
            <a href="#projects" className="bg-white text-black px-6 py-3 rounded-xl font-medium transition hover:scale-105">{h.cta1[lang]}</a>
            <a href="#contact" className="border border-gray-700 px-6 py-3 rounded-xl transition hover:border-gray-400 hover:text-white">{h.cta2[lang]}</a>
            <a href="/Jonathan-Uribe-CV.pdf" download className="border border-gray-700 px-6 py-3 rounded-xl transition hover:border-gray-500 text-gray-400 hover:text-white">{h.cta3[lang]}</a>
          </div>
        </div>
        <div className="flex justify-center"><ProfileImage /></div>
      </div>
    </section>
  );
}