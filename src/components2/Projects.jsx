import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();

  const projects = [
    {
      title: "Portfolio Website",
      desc: "Shaxsiy brend uchun minimal portfolio. React + Tailwind bilan.",
      tech: ["React", "Tailwind", "Vite"],
      link: "https://github.com/OyatullohGayratov771",
    },
    {
      title: "Weather App",
      desc: "API orqali ob-havo maʼlumotlarini ko‘rsatadi. Clean UI, Responsive.",
      tech: ["React", "API", "Context API"],
      link: "https://github.com/OyatullohGayratov771",
    },
    {
      title: "Todo Manager",
      desc: "Soddaligi kuchi — vazifalarni boshqarish uchun qulay interfeys.",
      tech: ["React", "LocalStorage"],
      link: "https://github.com/OyatullohGayratov771",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-base text-cream">
      <div className="max-w-6xl mx-auto">

        <div className="text-center">
          <h2 className="text-4xl font-semibold text-cream">
            {t("projects.title")}
          </h2>
          <p className="mt-3 text-sand max-w-md mx-auto">
            {t("projects.subtitle")}
          </p>
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 120}
              className="group border border-sand/20 bg-base p-6 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:border-sand"
            >
              <h3 className="text-xl font-medium text-cream">{p.title}</h3>

              <p className="mt-3 text-sm text-sand leading-relaxed">{p.desc}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t, index) => (
                  <span
                    key={index}
                    className="text-xs px-3 py-1 rounded-full border border-sand/30 text-sand"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={p.link}
                target="_blank"
                className="mt-6 inline-flex items-center gap-2 text-sm text-sand hover:text-cream transition-colors"
              >
                {t("projects.view")}
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
