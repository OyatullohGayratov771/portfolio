import { FaGithub, FaTelegramPlane, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
      <footer className="py-12 px-6 bg-cream dark:bg-base text-muted dark:text-sand border-t border-muted/30 dark:border-sand/20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

        {/* Brand */}
        <h3 className="text-lg font-semibold text-base dark:text-cream tracking-wide">
          Goyatulloh
        </h3>

        {/* Navigation */}
        <nav className="flex gap-8 text-sm text-muted dark:text-sand">
          <a href="#about" className="hover:text-base dark:hover:text-cream transition">About</a>
          <a href="#projects" className="hover:text-base dark:hover:text-cream transition">Projects</a>
          <a href="#contact" className="hover:text-base dark:hover:text-cream transition">Contact</a>
        </nav>

        {/* Social */}
        <div className="flex items-center gap-6 text-xl text-muted dark:text-sand">
          <a href="https://github.com" target="_blank" className="hover:text-base dark:hover:text-cream transition">
            <FaGithub />
          </a>
          <a href="https://t.me" target="_blank" className="hover:text-base dark:hover:text-cream transition">
            <FaTelegramPlane />
          </a>
          <a href="mailto:example@gmail.com" className="hover:text-base dark:hover:text-cream transition">
            <FaEnvelope />
          </a>
        </div>

      </div>

      {/* Bottom note */}
      <div className="text-center text-xs text-muted dark:text-sand mt-10">
        © {new Date().getFullYear()} Goyatulloh — Crafted with intention.
      </div>
    </footer>
  );
}
