import { useState } from "react";
import { Link } from "react-router-dom";
import ThemeSwitch from "./ThemeSwitch";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header 
      className="sticky top-0 z-50 backdrop-blur-md 
      bg-white/70 dark:bg-[#0B0B0B]/70 
      border-b border-neutral-200 dark:border-neutral-800
      transition-all duration-300"
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link 
          to="/" 
          className="font-semibold text-lg tracking-tight hover:opacity-70 transition"
        >
          gayratov oyatulloh
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-sm">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/projects">Projects</NavItem>
          <NavItem to="/businesses">Businesses</NavItem>
          <NavItem to="/channels">Channels</NavItem>
          <NavItem to="/notes">Notes</NavItem>
          <NavItem to="/contact">Contact</NavItem>
        </div>

        {/* Right: Theme + Mobile toggle */}
        <div className="flex items-center gap-3">
          <ThemeSwitch />
          <button
            className="md:hidden border border-neutral-300 dark:border-neutral-700 
            p-2 rounded-md text-lg"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 
        ${open ? "max-h-96" : "max-h-0"}
        bg-white dark:bg-[#0F0F0F] border-t border-neutral-200 dark:border-neutral-800`}
      >
        <div className="flex flex-col p-6 gap-4 text-sm">
          <NavItemMobile setOpen={setOpen} to="/">Home</NavItemMobile>
          <NavItemMobile setOpen={setOpen} to="/about">About</NavItemMobile>
          <NavItemMobile setOpen={setOpen} to="/projects">Projects</NavItemMobile>
          <NavItemMobile setOpen={setOpen} to="/businesses">Businesses</NavItemMobile>
          <NavItemMobile setOpen={setOpen} to="/channels">Channels</NavItemMobile>
          <NavItemMobile setOpen={setOpen} to="/notes">Notes</NavItemMobile>
          <NavItemMobile setOpen={setOpen} to="/contact">Contact</NavItemMobile>
        </div>
      </div>
    </header>
  );
}

/* Desktop Nav Item Component */
function NavItem({ to, children }) {
  return (
    <Link
      to={to}
      className="text-neutral-600 dark:text-neutral-300 
      hover:text-neutral-900 [data-mode=dark]:hover:text-white 
      transition-colors"
    >
      {children}
    </Link>
  );
}

/* Mobile Nav Item Component */
function NavItemMobile({ to, children, setOpen }) {
  return (
    <Link
      to={to}
      onClick={() => setOpen(false)}
      className="text-neutral-700 dark:text-neutral-300 
      hover:text-black [data-mode=dark]:hover:text-white 
      transition-colors"
    >
      {children}
    </Link>
  );
}
