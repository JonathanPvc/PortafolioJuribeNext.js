"use client";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/translations";

export default function Footer() {
  const { lang } = useLanguage();
  return (
    <footer className="border-t border-gray-800 mt-24">
      <div className="max-w-6xl mx-auto px-8 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Jonathan Uribe · {t.footer.rights[lang]}</p>
        <div className="flex items-center gap-6">
          <a href="https://github.com/JonathanPvc" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">GitHub</a>
          <a href="https://www.linkedin.com/in/jonathan-uribe-agredo-112a39230/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">LinkedIn</a>
          <a href="mailto:jonathan13pvc@gmail.com" className="hover:text-white transition">Email</a>
        </div>
        <p>{t.footer.built[lang]}</p>
      </div>
    </footer>
  );
}