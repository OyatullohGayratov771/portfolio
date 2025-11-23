export default function Footer() {
  return (
    <footer className="relative mt-24 pt-10 pb-12 overflow-hidden
      bg-neutral-100 dark:bg-black text-black dark:text-white border-t-4 border-black dark:border-white">

      {/* Noise layer */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.18] mix-blend-multiply pointer-events-none"
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Main footer row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

          {/* LEFT */}
          <div className="text-sm sm:text-base font-semibold leading-tight">
            © {new Date().getFullYear()}  
            <span className="font-black"> AZAMAT</span>  
            <br className="md:hidden" />
            <span className="opacity-70">— Built with React + Vite</span>
          </div>

          {/* RIGHT — Links */}
          <div className="flex gap-6 text-sm sm:text-base font-black uppercase tracking-wide">
            <FooterLink href="https://t.me/yourtelegram">Telegram</FooterLink>
            <FooterLink href="https://github.com/yourgithub">GitHub</FooterLink>
            <FooterLink href="mailto:youremail@example.com">Email</FooterLink>
          </div>
        </div>

        {/* Footer bottom note */}
        <div className="mt-10 flex items-center justify-between text-[10px] sm:text-xs opacity-60 font-mono">

          {/* Fake barcode */}
          <div className="flex flex-col items-start">
            <div className="h-5 w-20 bg-[url('/noise.png')] bg-repeat-x opacity-50"></div>
            <span>FT-LOG-001</span>
          </div>

          {/* Signature */}
          <span className="uppercase font-bold tracking-wider">
            No perfect pixels. Just real craft.
          </span>
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
      className="hover:opacity-100 opacity-70 dark:hover:opacity-100 
      transition-opacity duration-200"
    >
      {children}
    </a>
  );
}
