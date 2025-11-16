import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { useTranslation } from "react-i18next";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    setOpen(false);
  };

  const activeLang = i18n.language;

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-cream/90 backdrop-blur-md border-b border-sand/40">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 h-16">
        
        {/* Logo */}
        <h1 className="text-lg font-semibold tracking-wide text-base select-none">
          gayratov oyatulloh
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted">

          <a href="#home" className="hover:text-base transition">{t("nav.home")}</a>
          <a href="#about" className="hover:text-base transition">{t("nav.about")}</a>
          <a href="#projects" className="hover:text-base transition">{t("nav.projects")}</a>
          <a href="#contact" className="hover:text-base transition">{t("nav.contact")}</a>

          {/* Language Switch */}
          <div className="flex gap-3 ml-6">
            {["uz","en","ru"].map((lang) => (
              <button
                key={lang}
                onClick={() => changeLang(lang)}
                className={`transition ${
                  activeLang === lang ? "text-base font-semibold" : "text-muted hover:text-base"
                }`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-base">
          {open ? <HiX size={26}/> : <HiMenu size={26}/>}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-cream border-t border-sand/40 px-6 py-4 flex flex-col gap-4 text-muted text-sm">
          <a href="#home" onClick={() => setOpen(false)}>{t("nav.home")}</a>
          <a href="#about" onClick={() => setOpen(false)}>{t("nav.about")}</a>
          <a href="#projects" onClick={() => setOpen(false)}>{t("nav.projects")}</a>
          <a href="#contact" onClick={() => setOpen(false)}>{t("nav.contact")}</a>

          <div className="flex gap-4 pt-2 border-t border-sand/30 mt-2">
            {["uz","en","ru"].map((lang) => (
              <button
                key={lang}
                onClick={() => changeLang(lang)}
                className={`transition ${
                  activeLang === lang ? "text-base font-semibold" : "text-muted hover:text-base"
                }`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
