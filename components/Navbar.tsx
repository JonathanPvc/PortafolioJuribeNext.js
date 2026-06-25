export default function Navbar() {
  return (
    <header
      className="
    sticky
    top-0
    z-50
    backdrop-blur-xl
    bg-black/30
    border-b
    border-gray-900
  "
    >
      <nav className="max-w-6xl mx-auto px-8 py-5 flex justify-between items-center">
        <h1 className="font-bold text-lg">
          Jonathan Uribe Agredo
        </h1>

        <div className="hidden md:flex gap-8 text-sm text-gray-400">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Tech Stack</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </header>
  );
}