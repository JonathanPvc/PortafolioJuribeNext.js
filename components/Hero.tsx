import ProfileImage from "@/components/ProfileImage";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="grid lg:grid-cols-2 gap-16 items-center w-full">

        {/* Left Side */}
        <div>
          <span className="inline-flex items-center gap-2 text-sm text-emerald-400 font-medium mb-6 border border-emerald-400/30 bg-emerald-400/5 px-3 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for work & freelance projects
          </span>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Full Stack<br />Developer
          </h1>

          <p className="text-xl text-gray-400 mt-5">
            React · React Native · Node.js · AWS
          </p>

          <p className="mt-6 text-lg text-gray-400 leading-8 max-w-xl">
            I build fast, scalable web and mobile applications that help
            businesses grow. 4+ years delivering production-ready software
            for companies in Colombia and beyond.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="#projects"
              className="bg-white text-black px-6 py-3 rounded-xl font-medium transition hover:scale-105"
            >
              See My Work
            </a>
            <a
              href="#contact"
              className="border border-gray-700 px-6 py-3 rounded-xl transition hover:border-gray-400 hover:text-white"
            >
              Work With Me
            </a>
            <a
              href="/Jonathan-Uribe-CV.pdf"
              download
              className="border border-gray-700 px-6 py-3 rounded-xl transition hover:border-gray-500 text-gray-400 hover:text-white"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <ProfileImage />
        </div>

      </div>
    </section>
  );
}
