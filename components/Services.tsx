"use client";
import FadeIn from "@/components/FadeIn";
import { Globe, Smartphone, Server, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/translations";

const icons = [Globe, Smartphone, Server];

export default function Services() {
  const { lang } = useLanguage();
  const s = t.services;
  return (
    <FadeIn>
      <section id="services" className="py-24">
        <h2 className="text-4xl font-bold mb-3">{s.title[lang]}</h2>
        <p className="text-gray-400 mb-12">{s.sub[lang]}</p>
        <div className="grid md:grid-cols-3 gap-6">
          {s.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <div key={i} className="border border-gray-800 rounded-2xl p-6 hover:border-gray-600 transition-all">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-5">
                  <Icon size={20} className="text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title[lang]}</h3>
                <p className="text-gray-400 leading-7 mb-5">{item.desc[lang]}</p>
                <ul className="space-y-1.5">
                  {item.examples[lang].map((ex) => (
                    <li key={ex} className="flex items-center gap-2 text-sm text-gray-500">
                      <ArrowRight size={13} className="text-blue-400 flex-shrink-0" />{ex}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="mt-10 text-center">
          <a href="#contact" className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-medium hover:scale-105 transition">
            {s.cta[lang]} <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </FadeIn>
  );
}