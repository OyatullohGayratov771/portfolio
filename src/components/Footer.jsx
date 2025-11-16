export default function Footer() {
  return (
    <footer
      className="mt-20 py-8 border-t border-neutral-200 
      [data-mode=dark]:border-neutral-800"
    >
      <div
        className="max-w-6xl mx-auto px-6 text-sm 
        text-neutral-600 [data-mode=dark]:text-neutral-400
        flex flex-col gap-3 md:flex-row md:items-center md:justify-between"
      >

        {/* Chap taraf */}
        <p>
          © {new Date().getFullYear()} Azamat — Built with{" "}
          <span
            className="font-medium text-neutral-900 
            [data-mode=dark]:text-neutral-100"
          >
            React + Vite
          </span>
        </p>

        {/* O‘ng taraf */}
        <div className="flex gap-4">
          <FooterLink href="https://t.me/yourtelegram">Telegram</FooterLink>
          <FooterLink href="https://github.com/yourgithub">GitHub</FooterLink>
          <FooterLink href="mailto:youremail@example.com">Email</FooterLink>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="hover:text-neutral-900 [data-mode=dark]:hover:text-white transition-colors"
    >
      {children}
    </a>
  );
}
