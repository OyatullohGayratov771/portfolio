const Header = ({ theme, setTheme }) => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-muted/20 dark:border-sand/20 bg-cream/80 dark:bg-base/80 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 h-16">

        {/* Logo */}
        <h1 className="text-lg font-semibold tracking-wide text-base dark:text-cream">
          goyatulloh
        </h1>

        {/* Nav - desktop */}
        <nav className="hidden md:flex gap-8 text-sm text-muted dark:text-sand">
          <a href="#home" className="hover:text-base dark:hover:text-cream transition">Home</a>
          <a href="#about" className="hover:text-base dark:hover:text-cream transition">About</a>
          <a href="#projects" className="hover:text-base dark:hover:text-cream transition">Projects</a>
          <a href="#contact" className="hover:text-base dark:hover:text-cream transition">Contact</a>
        </nav>

        {/* Theme Toggle */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="px-3 py-1.5 rounded-full border border-muted dark:border-sand text-muted dark:text-sand
          hover:bg-base hover:text-cream dark:hover:bg-cream dark:hover:text-base transition"
        >
          {theme === "dark" ? "Light" : "Dark"}
        </button>

      </div>
    </header>
  );
};

export default Header;
