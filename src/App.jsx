import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";


export default function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );
  
  useEffect(() => {
    AOS.init({
      duration: 800, // animatsiya davomiyligi
      easing: "ease-out", // yumshoq animatsiya
      once: true, // faqat 1 marta animatsiya qilinadi
    });
  }, []);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className={theme}>
      <Header theme={theme} setTheme={setTheme} />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
