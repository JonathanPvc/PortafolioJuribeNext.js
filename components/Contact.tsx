"use client";
import FadeIn from "@/components/FadeIn";
import { Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/translations";

export default function Contact() {
  const { lang } = useLanguage();
  const c = t.contact;
  return (
    <FadeIn>
      <section id="contact" className="py-24">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">{c.title[lang]}</h2>
          <p className="text-gray-400 text-lg leading-8">{c.sub[lang]}</p>
        </div>
        <div className="max-w-xl mx-auto border border-gray-800 rounded-2xl p-8 space-y-5">
          <a href="mailto:jonathan13pvc@gmail.com" className="flex items-center gap-4 text-gray-400 hover:text-white transition group">
            <div className="w-9 h-9 rounded-lg bg-gray-900 border border-gray-700 flex items-center justify-center group-hover:border-gray-500 transition"><Mail size={16} /></div>
            <div><p className="text-xs text-gray-600 mb-0.5">Email</p><span>jonathan13pvc@gmail.com</span></div>
          </a>
          <a href="https://wa.me/573163957047" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-400 hover:text-white transition group">
            <div className="w-9 h-9 rounded-lg bg-gray-900 border border-gray-700 flex items-center justify-center group-hover:border-gray-500 transition"><FaWhatsapp size={16} /></div>
            <div><p className="text-xs text-gray-600 mb-0.5">WhatsApp</p><span>{c.available[lang]}</span></div>
          </a>
          <a href="https://www.linkedin.com/in/jonathan-uribe-agredo-112a39230/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-400 hover:text-white transition group">
            <div className="w-9 h-9 rounded-lg bg-gray-900 border border-gray-700 flex items-center justify-center group-hover:border-gray-500 transition"><FaLinkedin size={16} /></div>
            <div><p className="text-xs text-gray-600 mb-0.5">LinkedIn</p><span>linkedin.com/in/jonathan-uribe-agredo</span></div>
          </a>
          <a href="https://github.com/JonathanPvc" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-400 hover:text-white transition group">
            <div className="w-9 h-9 rounded-lg bg-gray-900 border border-gray-700 flex items-center justify-center group-hover:border-gray-500 transition"><FaGithub size={16} /></div>
            <div><p className="text-xs text-gray-600 mb-0.5">GitHub</p><span>github.com/JonathanPvc</span></div>
          </a>
          <div className="flex items-center gap-4 text-gray-500">
            <div className="w-9 h-9 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center"><MapPin size={16} /></div>
            <div><p className="text-xs text-gray-600 mb-0.5">Ubicación / Location</p><span>{c.location[lang]}</span></div>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}