"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Tech Stack", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/30 border-b border-gray-900">
      <nav className="max-w-6xl mx-auto px-8 py-5 flex justify-between items-center">
        <span className="font-bold text-lg">Jonathan Uribe</span>

        {/* Desktop */}
        <div className="hidden md:flex gap-8 text-sm text-gray-400">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-white transition"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-white text-black px-4 py-1.5 rounded-lg text-sm font-medium hover:bg-gray-200 transition"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-gray-400 hover:text-white transition"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-900 bg-black/90 backdrop-blur-xl px-8 py-6 flex flex-col gap-5 text-gray-400">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="hover:text-white transition text-lg"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="bg-white text-black px-4 py-2 rounded-lg font-medium text-center hover:bg-gray-200 transition mt-2"
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
}
