import {
  Mail,
  MapPin,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <h2 className="text-4xl font-bold mb-10">
        Get In Touch
      </h2>

      <div className="space-y-5">
        <div className="flex items-center gap-3 text-gray-400">
          <Mail size={18} />
          <span>jonathan13pvc@gmail.com</span>
        </div>

        <div className="flex items-center gap-3 text-gray-400">
          <MapPin size={18} />
          <span>Cali, Colombia</span>
        </div>

        <div className="flex items-center gap-3 text-gray-400">
          <FaLinkedin size={18} />
          <a
            href="https://www.linkedin.com/in/jonathan-uribe-agredo-112a39230/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>
        </div>

        <div className="flex items-center gap-3 text-gray-400">
          <FaGithub size={18} />
          <a
            href="https://github.com/JonathanPvc"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}