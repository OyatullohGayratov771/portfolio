export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "Shaxsiy brend uchun minimal dark portfolio. React + Tailwind bilan.",
      tech: ["React", "Tailwind", "Vite"],
      link: "https://github.com/username/portfolio",
    },
    {
      title: "Weather App",
      desc: "API orqali ob-havo maʼlumotlarini ko‘rsatadi. Clean UI, Responsive.",
      tech: ["React", "API", "Context API"],
      link: "https://github.com/username/weather-app",
    },
    {
      title: "Todo Manager",
      desc: "Soddaligi kuchi — vazifalarni boshqarish uchun qulay interfeys.",
      tech: ["React", "LocalStorage"],
      link: "https://github.com/username/todo-app",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-cream dark:bg-base text-base dark:text-cream transition-colors duration-300">
  <div className="max-w-6xl mx-auto">
    
    <div className="text-center">
      <h2 className="text-4xl font-semibold text-base dark:text-sand">Projects</h2>
      <p className="mt-3 text-muted dark:text-sand max-w-md mx-auto">
        Men yaratgan loyihalardan namunalar
      </p>
    </div>

    <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((p, i) => (
        <div
          key={i}
          data-aos="fade-up"
          data-aos-delay={i * 120}
          className="group border border-muted/30 dark:border-sand/20 bg-cream dark:bg-base p-6 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:border-sand dark:hover:border-sand"
          >
          <h3 className="text-xl font-medium">{p.title}</h3>

          <p className="mt-3 text-sm text-muted dark:text-sand leading-relaxed">
            {p.desc}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {p.tech.map((t, index) => (
              <span
                key={index}
                className="text-xs px-3 py-1 rounded-full border border-muted/40 dark:border-sand/30 text-muted dark:text-sand"
              >
                {t}
              </span>
            ))}
          </div>

          <a
            href={p.link}
            target="_blank"
            className="mt-6 inline-flex items-center gap-2 text-sm text-muted dark:text-sand hover:text-base dark:hover:text-cream transition-colors"
          >
            View Project →
          </a>
        </div>
      ))}
    </div>

  </div>
</section>
  );
}
