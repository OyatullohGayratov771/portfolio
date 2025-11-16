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
      className="w-12 h-6 flex items-center bg-neutral-200 dark:bg-neutral-700 rounded-full p-1 transition-all duration-300"
    >
      <div
        className={`w-4 h-4 rounded-full bg-white dark:bg-neutral-100 transform transition-transform duration-300 ${
          theme === "dark" ? "translate-x-6" : "translate-x-0"
        }`}
      ></div>
    </button>
  );
}
