import FadeIn from "@/components/FadeIn";



export default function About() {
  return (
    <FadeIn>
    <section id="about">
      <h2 className="text-4xl font-bold mb-8">
        About
      </h2>

      <div className="max-w-4xl">
        <p className="text-gray-400 leading-8 text-lg">
          Full Stack Developer with professional experience building web and mobile
          applications using React, React Native, Node.js and TypeScript.

          Experienced in REST and GraphQL APIs, payment gateway integrations,
          software modernization projects and cloud deployments.

          Passionate about scalable backend architectures, software quality and
          continuous learning.
        </p>
      </div>
    </section>
     </FadeIn>
  );
}