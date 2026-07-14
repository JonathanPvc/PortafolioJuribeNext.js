export const t = {
  nav: {
    about:    { es: "Sobre mí",    en: "About" },
    exp:      { es: "Experiencia", en: "Experience" },
    stack:    { es: "Tecnologías", en: "Tech Stack" },
    projects: { es: "Proyectos",   en: "Projects" },
    contact:  { es: "Contacto",    en: "Contact" },
    hire:     { es: "Contáctame",  en: "Hire Me" },
  },
  hero: {
    badge: { es: "Disponible para proyectos y empleo", en: "Available for work & freelance projects" },
    title: { es: "Desarrollador\nFull Stack",          en: "Full Stack\nDeveloper" },
    sub:   { es: "React · React Native · Node.js · AWS", en: "React · React Native · Node.js · AWS" },
    desc:  { es: "Construyo aplicaciones web y móviles rápidas y escalables que ayudan a los negocios a crecer. +4 años entregando software listo para producción en Colombia y el mundo.", en: "I build fast, scalable web and mobile applications that help businesses grow. 4+ years delivering production-ready software for companies in Colombia and beyond." },
    cta1:  { es: "Ver mis proyectos", en: "See My Work" },
    cta2:  { es: "Trabajar conmigo",  en: "Work With Me" },
    cta3:  { es: "Descargar CV",      en: "Download CV" },
  },
  about: {
    title: { es: "Sobre mí",  en: "About Me" },
    p1:    { es: "Soy un Desarrollador Full Stack con sede en Cali, Colombia, con más de 4 años de experiencia profesional construyendo productos web y móviles usados por empresas reales.", en: "I'm a Full Stack Developer based in Cali, Colombia, with 4+ years of professional experience building web and mobile products used by real businesses and real users." },
    p3:    { es: "Trabajo tanto con empresas que buscan un desarrollador confiable como con emprendedores o pequeños negocios que necesitan una página web o app construida bien desde el principio. Si tienes un proyecto en mente,", en: "I work with both companies looking for a reliable engineer and entrepreneurs or small businesses that need a website or web app built right the first time. If you have a project in mind," },
    cta:   { es: "hablemos.", en: "let's talk." },
  },
  stats: {
    exp:       { es: "Años de experiencia",     en: "Years of Experience" },
    apps:      { es: "Aplicaciones entregadas", en: "Applications Delivered" },
    techs:     { es: "Tecnologías dominadas",   en: "Technologies Mastered" },
    countries: { es: "Países atendidos",        en: "Countries Served" },
  },
  services: {
    title: { es: "¿Qué construyo?", en: "What I Build" },
    sub:   { es: "Servicios para empresas y emprendedores que necesitan software hecho bien.", en: "Services for companies and entrepreneurs who need software done right." },
    cta:   { es: "Empezar un proyecto", en: "Start a Project" },
    items: [
      {
        title:    { es: "Desarrollo Web",    en: "Web Development" },
        desc:     { es: "Sitios y aplicaciones web personalizadas con React y Next.js. Rápidos, responsivos, SEO-friendly y listos para escalar.", en: "Custom websites and web apps built with React and Next.js. Fast, responsive, SEO-friendly, and ready to scale." },
        examples: { es: ["Landing pages", "Dashboards SaaS", "E-commerce", "Paneles de administración"], en: ["Landing pages", "SaaS dashboards", "E-commerce", "Admin panels"] },
      },
      {
        title:    { es: "Apps Móviles",  en: "Mobile Apps" },
        desc:     { es: "Apps iOS y Android multiplataforma con React Native. Un solo código, dos plataformas, rendimiento nativo.", en: "Cross-platform iOS and Android apps with React Native. One codebase, two platforms, native performance." },
        examples: { es: ["Apps comerciales", "Herramientas internas", "Migraciones Expo a RN CLI"], en: ["Commercial apps", "Internal tools", "Expo to RN CLI migrations"] },
      },
      {
        title:    { es: "Backend & APIs", en: "Backend & APIs" },
        desc:     { es: "APIs REST y GraphQL confiables con Node.js o NestJS. Desde CRUD simples hasta integraciones de pagos y microservicios.", en: "Reliable REST and GraphQL APIs with Node.js or NestJS. From simple CRUD to payment integrations and microservices." },
        examples: { es: ["APIs REST", "GraphQL", "Pasarelas de pago", "Microservicios"], en: ["REST APIs", "GraphQL", "Payment gateways", "Microservices"] },
      },
    ],
  },
  experience: {
    title: { es: "Experiencia profesional", en: "Professional Experience" },
    items: [
      {
        company: "TU COMPRA S.A.S",
        role:    { es: "Desarrollador de Software", en: "Software Developer" },
        period:  "Aug 2025 – Nov 2025",
        summary: { es: "Desarrollo backend para una fintech enfocada en pagos electrónicos.", en: "Backend development for a fintech focused on electronic payments." },
        achievements: {
          es: [
            "Desarrollé y mantuve servicios backend en Java y Spring Boot para flujos de pago.",
            "Diseñé y consumí APIs REST para integraciones con plataformas comerciales.",
            "Colaboré con equipos técnicos y de negocio para garantizar 99.9% de disponibilidad en servicios transaccionales.",
            "Participé en análisis técnico y diseño de soluciones para nuevas funcionalidades de pago.",
          ],
          en: [
            "Built and maintained backend services in Java and Spring Boot for payment processing flows.",
            "Designed and consumed REST APIs for integrations with commercial platforms.",
            "Collaborated with business and technical teams to ensure 99.9% uptime on transactional services.",
            "Participated in technical analysis and solution design for new payment features.",
          ],
        },
        stack: ["Java", "Spring Boot", "REST APIs"],
      },
      {
        company: "Play Technologies S.A.S",
        role:    { es: "Desarrollador de Software", en: "Software Developer" },
        period:  "Oct 2022 – Jul 2025",
        summary: { es: "Desarrollo full stack de productos web y móviles para múltiples clientes.", en: "Full stack development of web and mobile products across multiple client projects." },
        achievements: {
          es: [
            "Desarrollé y mantuve aplicaciones web con React, Angular y TypeScript.",
            "Construí apps móviles multiplataforma con React Native CLI para miles de usuarios.",
            "Creé APIs REST y GraphQL con Node.js para diversas integraciones comerciales.",
            "Lideré la migración de apps VanillaJS legacy a React 18, mejorando rendimiento.",
            "Migré apps móviles de Expo a React Native CLI para mayor control nativo.",
            "Integré pasarelas de pago (PSE, tarjetas de crédito) en plataformas comerciales.",
            "Desplegué y mantuve aplicaciones en Linux usando PM2, Nginx y Apache.",
          ],
          en: [
            "Developed and maintained web applications using React, Angular and TypeScript.",
            "Built cross-platform mobile apps with React Native (CLI), serving thousands of users.",
            "Created REST and GraphQL APIs with Node.js for diverse commercial integrations.",
            "Led migration of legacy VanillaJS apps to React 18, improving DX and performance.",
            "Migrated mobile apps from Expo to React Native CLI for greater native control.",
            "Integrated payment gateways (PSE, credit cards) into commercial platforms.",
            "Deployed and maintained applications on Linux using PM2, Nginx and Apache.",
          ],
        },
        stack: ["React", "React Native", "Node.js", "GraphQL", "TypeScript", "Angular", "Linux"],
      },
      {
        company: "PYSEL S.A.S",
        role:    { es: "Asistente de Desarrollo", en: "Development Assistant" },
        period:  "Oct 2021 – Sep 2022",
        summary: { es: "Desarrollo y mantenimiento frontend de aplicaciones web.", en: "Frontend development and maintenance of web applications." },
        achievements: {
          es: [
            "Construí interfaces web con HTML5, CSS3 y JavaScript.",
            "Implementé funcionalidades frontend y mantuve aplicaciones existentes.",
            "Colaboré con el equipo de desarrollo en todo el ciclo de entrega de software.",
          ],
          en: [
            "Built web interfaces using HTML5, CSS3 and JavaScript.",
            "Implemented frontend features and maintained existing applications.",
            "Collaborated with the dev team through the full software delivery lifecycle.",
          ],
        },
        stack: ["JavaScript", "HTML5", "CSS3"],
      },
    ],
  },
  skills: {
    title: { es: "Tecnologías", en: "Tech Stack" },
    sub:   { es: "Herramientas que uso para entregar software listo para producción.", en: "Technologies I use to ship production-ready software." },
    categories: [
      { label: { es: "Frontend",        en: "Frontend" },       skills: ["React", "React Native", "Angular", "Vue.js", "TypeScript", "Next.js"] },
      { label: { es: "Backend",         en: "Backend" },        skills: ["Node.js", "NestJS", "Spring Boot", "GraphQL", "REST APIs", "PostgreSQL", "MongoDB"] },
      { label: { es: "Infraestructura", en: "Infrastructure" }, skills: ["AWS", "Docker", "Linux", "Nginx", "PM2", "CI/CD"] },
    ],
  },
  projects: {
    title:  { es: "Proyectos destacados", en: "Featured Projects" },
    sub:    { es: "Trabajo entregado en entornos de producción para clientes reales.", en: "Work delivered in production environments for real clients." },
    github: { es: "Ver GitHub", en: "View GitHub" },
    badgeP: { es: "Profesional",  en: "Professional" },
    badgeC: { es: "Cliente",      en: "Client Project" },
    items: [
      {
        title: { es: "Plataforma de Automatización en Tiempo Real", en: "Real-Time Automation Platform" },
        desc:  { es: "App de escritorio con Electron y Node.js para monitoreo en tiempo real, flujos automatizados y gestión multi-cuenta. Redujo operaciones manuales en ~70%.", en: "Desktop app built with Electron and Node.js for real-time monitoring, automated workflows, and multi-account management. Reduced manual operations by ~70%." },
        stack: ["Electron", "Node.js", "Playwright", "REST APIs"],
        type: "professional" as const,
      },
      {
        title: { es: "Integración de Pasarela de Pagos", en: "Payment Gateway Integration" },
        desc:  { es: "Integración extremo a extremo de soluciones de pago electrónico (PSE, tarjetas de crédito). Manejo de casos borde, reembolsos y validación de webhooks.", en: "End-to-end integration of electronic payment solutions (PSE, credit cards). Handled edge cases, refunds, and webhook validation for transactional reliability." },
        stack: ["Node.js", "REST", "TypeScript", "Spring Boot"],
        type: "professional" as const,
      },
      {
        title: { es: "Migración de App Legacy a React 18", en: "Legacy App Migration to React 18" },
        desc:  { es: "Migración de una gran aplicación VanillaJS a React 18, introduciendo arquitectura de componentes, TypeScript y gestión de estado moderna.", en: "Migrated a large VanillaJS application to React 18, introducing component architecture, TypeScript and a modern state management approach." },
        stack: ["React 18", "TypeScript", "Vite"],
        type: "professional" as const,
      },
      {
        title: { es: "Apps Móviles Multiplataforma", en: "Cross-Platform Mobile Apps" },
        desc:  { es: "Desarrollo y mantenimiento de aplicaciones móviles comerciales y administrativas para Android e iOS con React Native CLI.", en: "Built and maintained commercial and administrative mobile applications for Android and iOS using React Native CLI." },
        stack: ["React Native", "REST APIs", "TypeScript"],
        type: "professional" as const,
      },
    ],
  },
  education: {
    title:      { es: "Educación & Certificaciones", en: "Education & Certifications" },
    eduLabel:   { es: "Educación",    en: "Education" },
    certLabel:  { es: "Certificaciones", en: "Certifications" },
    inProgress: { es: "En curso",    en: "In progress" },
    pursuing:   { es: "En curso",    en: "Currently pursuing" },
    graduated:  { es: "Graduado",    en: "Graduated" },
    items: [
      { title: { es: "Tecnología en Desarrollo de Software", en: "Software Development Technology" }, institution: "UNAD",             period: "2023 – Present", note: "pursuing" },
      { title: { es: "Economista Profesional",              en: "Professional Economist" },           institution: "Universidad Libre", period: "2018 – 2023",   note: "graduated" },
    ],
    certs: [
      { title: { es: "AWS Cloud Practitioner",  en: "AWS Cloud Practitioner" }, issuer: "Amazon Web Services" },
      { title: { es: "NestJS + Microservicios", en: "NestJS + Microservices" }, issuer: "Udemy" },
    ],
  },
  contact: {
    title:     { es: "Trabajemos juntos", en: "Let's Work Together" },
    sub:       { es: "Ya sea que necesites un desarrollador de tiempo completo o quieras construir algo desde cero — estoy abierto a conversaciones. Escríbeme y responderé en menos de 24 horas.", en: "Whether you need a full-time engineer or want to build something from scratch — I'm open to conversations. Send me a message and I'll get back to you within 24 hours." },
    location:  { es: "Cali, Colombia · Trabajo remoto y presencial", en: "Cali, Colombia · Remote-friendly and in-person" },
    available: { es: "+57 3163957047", en: "Available for quick chats +57 3163957047" },
  },
  footer: {
    rights: { es: "Todos los derechos reservados", en: "All rights reserved" },
    built:  { es: "Hecho con Next.js · TypeScript · Tailwind CSS", en: "Built with Next.js · TypeScript · Tailwind CSS" },
  },
};