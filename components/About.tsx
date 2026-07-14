"use client";
import FadeIn from "@/components/FadeIn";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/translations";

export default function About() {
  const { lang } = useLanguage();
  const a = t.about;
  return (
    <FadeIn>
      <section id="about">
        <h2 className="text-4xl font-bold mb-8">{a.title[lang]}</h2>
        <div className="max-w-4xl space-y-5 text-gray-400 leading-8 text-lg">
          <p>{a.p1[lang]}</p>
          <p>
            {lang === "es"
              ? <>Mi stack principal es <span className="text-white">React, React Native, Node.js y TypeScript</span>, con sólida experiencia en APIs REST y GraphQL, integraciones de pasarelas de pago y despliegues en AWS. He liderado migraciones desde bases de código legacy, construido microservicios y lanzado apps móviles desde cero.</>
              : <>My core stack is <span className="text-white">React, React Native, Node.js and TypeScript</span>, with solid experience in REST and GraphQL APIs, payment gateway integrations, and cloud deployments on AWS. I've led migrations from legacy codebases, built microservices, and shipped mobile apps from scratch.</>
            }
          </p>
          <p>
            {a.p3[lang]}{" "}
            <a href="#contact" className="text-white underline underline-offset-4 hover:text-blue-400 transition">
              {a.cta[lang]}
            </a>
          </p>
        </div>
      </section>
    </FadeIn>
  );
}