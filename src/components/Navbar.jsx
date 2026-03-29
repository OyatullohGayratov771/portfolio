import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeSwitch from "./ThemeSwitch";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/businesses", label: "Businesses" },
  { to: "/channels", label: "Channels" },
  { to: "/notes", label: "Notes" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-md
      bg-white/80 dark:bg-black/80
      border-b-2 border-black dark:border-white
      transition-all duration-300"
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/"
          className="font-black text-base uppercase tracking-tight hover:opacity-70 transition"
        >
          gayratov<span className="text-red-600">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-xs font-bold uppercase tracking-wide">
          {NAV_LINKS.map(({ to, label }) => (
            <NavItem key={to} to={to} active={location.pathname === to}>
              {label}
            </NavItem>
          ))}
        </div>

        {/* Right: Theme + Mobile toggle */}
        <div className="flex items-center gap-3">
          <ThemeSwitch />
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5
            border-2 border-black dark:border-white
            bg-neutral-100 dark:bg-neutral-900
            hover:bg-neutral-200 dark:hover:bg-neutral-800 transition"
            onClick={() => setOpen(!open)}
          >
            <span
              className={`block h-0.5 w-5 bg-black dark:bg-white transition-all duration-200 origin-center
              ${open ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-black dark:bg-white transition-all duration-200
              ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-black dark:bg-white transition-all duration-200 origin-center
              ${open ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300
        ${open ? "max-h-96" : "max-h-0"}
        bg-white dark:bg-black border-t-2 border-black dark:border-white`}
      >
        <div className="flex flex-col p-6 gap-1">
          {NAV_LINKS.map(({ to, label }) => (
            <NavItemMobile
              key={to}
              setOpen={setOpen}
              to={to}
              active={location.pathname === to}
            >
              {label}
            </NavItemMobile>
          ))}
        </div>
      </div>
    </header>
  );
}

function NavItem({ to, children, active }) {
  return (
    <Link
      to={to}
      className={`relative transition-colors pb-0.5
        ${active
          ? "text-black dark:text-white after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-red-600"
          : "text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white"
        }`}
    >
      {children}
    </Link>
  );
}

function NavItemMobile({ to, children, setOpen, active }) {
  return (
    <Link
      to={to}
      onClick={() => setOpen(false)}
      className={`py-2 px-3 font-black uppercase text-sm transition-colors
        ${active
          ? "bg-black text-white dark:bg-white dark:text-black"
          : "text-black dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-900"
        }`}
    >
      {children}
    </Link>
  );
}
