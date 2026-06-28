import FadeIn from "@/components/FadeIn";

export default function About() {
  return (
    <FadeIn>
      <section id="about">
        <h2 className="text-4xl font-bold mb-8">About Me</h2>

        <div className="max-w-4xl space-y-5 text-gray-400 leading-8 text-lg">
          <p>
            I'm a Full Stack Developer based in Cali, Colombia, with 4+ years
            of professional experience building web and mobile products used
            by real businesses and real users.
          </p>
          <p>
            My core stack is <span className="text-white">React, React Native, Node.js and TypeScript</span>, with
            solid experience in REST and GraphQL APIs, payment gateway integrations,
            and cloud deployments on AWS. I've led migrations from legacy codebases,
            built microservices, and shipped mobile apps from scratch.
          </p>
          <p>
            I work with both companies looking for a reliable engineer and
            entrepreneurs or small businesses that need a website or web app
            built right the first time. If you have a project in mind,{" "}
            <a href="#contact" className="text-white underline underline-offset-4 hover:text-blue-400 transition">
              let's talk
            </a>.
          </p>
        </div>
      </section>
    </FadeIn>
  );
}
