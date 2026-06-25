export default function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-24">
      <div className="max-w-6xl mx-auto px-8 py-8 flex flex-col md:flex-row justify-between text-gray-500 text-sm">
        <p>
          © {new Date().getFullYear()} Jonathan Uribe
        </p>

        <p>
          Built with Next.js, TypeScript and Tailwind CSS
        </p>
      </div>
    </footer>
  );
}