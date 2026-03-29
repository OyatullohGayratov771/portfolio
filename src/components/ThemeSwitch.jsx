import { useEffect, useState } from "react";

export default function ThemeSwitch() {
  const [theme, setTheme] = useState(() => {
    if (localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    }
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="w-9 h-9 flex items-center justify-center
      border-2 border-black dark:border-white
      bg-neutral-100 dark:bg-neutral-900
      hover:bg-neutral-200 dark:hover:bg-neutral-800
      transition-colors duration-200 text-base"
    >
      {theme === "dark" ? "☀" : "☽"}
    </button>
  );
}
