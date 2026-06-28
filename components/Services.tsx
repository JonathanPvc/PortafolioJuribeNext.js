import FadeIn from "@/components/FadeIn";
import { Globe, Smartphone, Server, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Custom websites and web apps built with React and Next.js. Fast, responsive, SEO-friendly, and ready to scale.",
    examples: ["Landing pages", "SaaS dashboards", "E-commerce", "Admin panels"],
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Cross-platform iOS and Android apps with React Native. One codebase, two platforms, native performance.",
    examples: ["Commercial apps", "Internal tools", "Expo to RN CLI migrations"],
  },
  {
    icon: Server,
    title: "Backend & APIs",
    description:
      "Reliable REST and GraphQL APIs with Node.js or NestJS. From simple CRUD to payment integrations and microservices.",
    examples: ["REST APIs", "GraphQL", "Payment gateways", "Microservices"],
  },
];

export default function Services() {
  return (
    <FadeIn>
      <section id="services" className="py-24">
        <h2 className="text-4xl font-bold mb-3">What I Build</h2>
        <p className="text-gray-400 mb-12">
          Services for companies and entrepreneurs who need software done right.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="border border-gray-800 rounded-2xl p-6 hover:border-gray-600 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-5">
                  <Icon size={20} className="text-blue-400" />
                </div>

                <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
                <p className="text-gray-400 leading-7 mb-5">{s.description}</p>

                <ul className="space-y-1.5">
                  {s.examples.map((ex) => (
                    <li key={ex} className="flex items-center gap-2 text-sm text-gray-500">
                      <ArrowRight size={13} className="text-blue-400 flex-shrink-0" />
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-medium hover:scale-105 transition"
          >
            Start a Project
            <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </FadeIn>
  );
}
