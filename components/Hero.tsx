export default function Hero() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="max-w-4xl">
        <p className="text-blue-400 mb-4 text-lg">
          👋 Hi, I'm Jonathan
        </p>

        <h1 className="text-6xl md:text-7xl font-bold leading-tight">
          Software Engineer
        </h1>

        <h2 className="text-2xl text-gray-400 mt-4">
          React • React Native • Node.js • AWS
        </h2>

        <p className="mt-8 text-lg text-gray-400 max-w-3xl">
          Full Stack Developer with experience building web and mobile applications,
          REST and GraphQL APIs, payment integrations, cloud deployments and
          scalable backend services.
        </p>

        <div className="flex flex-wrap gap-4 mt-10">
          <a
            href="#experience"
            className="bg-white text-black px-6 py-3 rounded-xl font-medium"
          >
            Experience
          </a>

          <a
            href="#contact"
            className="bg-white text-black px-6 py-3 rounded-xl font-medium"
          >
            contact 
          </a>

          <a
            href="/Jonathan-Uribe-CV.pdf"
            download
            className="border border-gray-700 px-6 py-3 rounded-xl"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}