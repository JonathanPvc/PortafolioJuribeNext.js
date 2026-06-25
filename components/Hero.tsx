import ProfileImage from "@/components/ProfileImage";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="grid lg:grid-cols-2 gap-16 items-center w-full">

        {/* Left Side */}
        <div>
          <p className="text-blue-400 mb-4 text-lg font-medium">
            Hi, I'm Jonathan Uribe
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Software Engineer
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-400 mt-6">
            React • React Native • Node.js • AWS
          </h2>

          <p className="mt-8 text-lg text-gray-400 leading-8 max-w-2xl">
            Full Stack Developer with over 4 years of experience
            building web and mobile applications using React,
            React Native, Node.js and TypeScript.

            Experienced in REST and GraphQL APIs, payment
            gateway integrations, cloud deployments and
            scalable backend architectures.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">

            <a
              href="#experience"
              className="
                bg-white
                text-black
                px-6
                py-3
                rounded-xl
                font-medium
                transition
                hover:scale-105
              "
            >
              View Experience
            </a>

            <a
              href="/Jonathan-Uribe-CV.pdf"
              download
              className="
                border
                border-gray-700
                px-6
                py-3
                rounded-xl
                transition
                hover:border-gray-500
              "
            >
              Download CV
            </a>

            <a
              href="#contact"
              className="
                border
                border-gray-700
                px-6
                py-3
                rounded-xl
                transition
                hover:border-gray-500
              "
            >
              Contact
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