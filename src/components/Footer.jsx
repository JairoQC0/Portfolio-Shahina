export default function Footer() {
  return (
    <footer className="relative text-center py-8 text-sm">
      {/* Contenido */}
      <p className="text-gray-400">
        © {new Date().getFullYear()}{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-semibold">
          Shahina Rustamova
        </span>
        . All rights reserved.
      </p>

      {/* Links */}
      <div className="mt-3 flex justify-center gap-6 text-gray-500">
        <a
          href="https://www.linkedin.com/in/shahina-rustamova-2931ab368"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors"
        >
          LinkedIn
        </a>

        <a
          href="mailto:Moonshahina@icloud.com"
          className="hover:text-pink-400 transition-colors"
        >
          Contact
        </a>
      </div>
    </footer>
  );
}
