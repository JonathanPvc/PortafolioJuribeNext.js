"use client";
import FadeIn from "@/components/FadeIn";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/translations";

const clientProjects: {
  title: { es: string; en: string };
  desc:  { es: string; en: string };
  stack: string[];
  type: "client";
  github: string | null;
  demo: string | null;
}[] = [
  {
    title: { es: "Pasteleria Azúcar Morena", en: "Azúcar Morena Bakery" },
    desc:  { es: "Landing page para panadería artesanal en Cali con galería, panel administrativo y Cloudinary.", en: "Landing page for an artisan bakery in Cali with gallery, admin panel and Cloudinary." },
    stack: ["Next.js", "NestJS", "PostgreSQL", "Cloudinary"],
    type: "client",
    github: null,
    demo: "https://azucarmorena.vercel.app",
  },
  {
    title: { es: "Iluminaciones Exito", en: "Exito Lighting" },
    desc:  { es: "Landing page para empresa de iluminación en Cali con galería, panel administrativo, dominio web y Cloudinary.", en: "Landing page for a lighting company in Cali with gallery, admin panel and Cloudinary." },
    stack: ["Next.js", "NestJS", "PostgreSQL", "Cloudinary"],
    type: "client",
    github: null,
    demo: "https://www.iluminacionesexito.com/",
  },
];

export default function Projects() {
  const { lang } = useLanguage();
  const p = t.projects;

  const allProjects = [
    ...clientProjects,
    ...p.items.map((item) => ({ ...item, github: null as string | null, demo: null as string | null })),
  ];

  return (
    <FadeIn>
      <section id="projects" className="py-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
          <div>
            <h2 className="text-4xl font-bold">{p.title[lang]}</h2>
            <p className="text-gray-400 mt-2">{p.sub[lang]}</p>
          </div>
          <a href="https://github.com/JonathanPvc" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition border border-gray-700 px-4 py-2 rounded-lg self-start md:self-auto">
            <FaGithub size={16} />{p.github[lang]}
          </a>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {allProjects.map((project, i) => {
            const badge = project.type === "client" ? p.badgeC[lang] : p.badgeP[lang];
            return (
              <div key={i} className="border border-gray-800 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gray-600 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs border px-2.5 py-1 rounded-full ${project.type === "client" ? "text-emerald-400 border-emerald-400/30 bg-emerald-400/5" : "text-blue-400 border-blue-400/30 bg-blue-400/5"}`}>
                    {badge}
                  </span>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition">
                      <FaGithub size={16} />
                    </a>
                  )}
                </div>

                <h3 className="text-xl font-semibold mb-3">{project.title[lang]}</h3>
                <p className="text-gray-400 mb-6 leading-7 flex-1">{project.desc[lang]}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech) => (
                    <span key={tech} className="text-sm border border-gray-700 px-2.5 py-1 rounded-lg text-gray-300">{tech}</span>
                  ))}
                </div>

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto flex items-center justify-center gap-2 text-sm font-medium border border-gray-700 hover:border-gray-500 hover:bg-gray-800/50 transition px-4 py-2.5 rounded-xl text-white"
                  >
                    {lang === "es" ? "Ver proyecto" : "View project"}
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </FadeIn>
  );
}
