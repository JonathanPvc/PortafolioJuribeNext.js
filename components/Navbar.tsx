"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/translations";

export default function Navbar() {
  const { lang, toggle } = useLanguage();
  const [open, setOpen] = useState(false);

  const links = [
    { label: t.nav.about[lang],    href: "#about" },
    { label: t.nav.exp[lang],      href: "#experience" },
    { label: t.nav.stack[lang],    href: "#skills" },
    { label: t.nav.projects[lang], href: "#projects" },
    { label: t.nav.contact[lang],  href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/30 border-b border-gray-900">
      <nav className="max-w-6xl mx-auto px-8 py-5 flex justify-between items-center">
        <span className="font-bold text-lg">Jonathan Uribe</span>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-white transition">{l.label}</a>
          ))}
          <button
            onClick={toggle}
            className="border border-gray-700 px-3 py-1.5 rounded-lg text-xs font-medium hover:border-gray-500 hover:text-white transition tracking-wider"
          >
            {lang === "es" ? "EN" : "ES"}
          </button>
          <a href="#contact" className="bg-white text-black px-4 py-1.5 rounded-lg text-sm font-medium hover:bg-gray-200 transition">
            {t.nav.hire[lang]}
          </a>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-3">
          <button onClick={toggle} className="border border-gray-700 px-2.5 py-1 rounded-lg text-xs font-medium hover:border-gray-500 hover:text-white transition">
            {lang === "es" ? "EN" : "ES"}
          </button>
          <button className="text-gray-400 hover:text-white transition" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-gray-900 bg-black/90 backdrop-blur-xl px-8 py-6 flex flex-col gap-5 text-gray-400">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="hover:text-white transition text-lg">{l.label}</a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="bg-white text-black px-4 py-2 rounded-lg font-medium text-center hover:bg-gray-200 transition mt-2">
            {t.nav.hire[lang]}
          </a>
        </div>
      )}
    </header>
  );
}