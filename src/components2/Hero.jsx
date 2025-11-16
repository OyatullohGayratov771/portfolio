import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="min-h-[100svh] flex items-center justify-center px-6 bg-cream text-base">
      <div data-aos="fade-up" className="max-w-2xl text-center select-none">

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
          <span className="text-base-text">{t("hero.title").split(" ")[0]}</span>{" "}
          <span className="text-muted">{t("hero.title").split(" ")[1]}</span>
        </h1>

        {/* Role */}
        <p className="mt-4 text-muted sm:text-lg">
          {t("hero.role")}
        </p>

        {/* Subtitle */}
        <p className="mt-2 text-muted/80 sm:text-base">
          {t("hero.subtitle")}
        </p>

        {/* CTA */}
        <a
          href="#projects"
          className="inline-block mt-10 px-8 py-3 rounded-full border border-accent text-accent
          hover:bg-accent hover:text-cream transition-all duration-300 hover:-translate-y-[2px]"
        >
          {t("hero.cta")}
        </a>
      </div>
    </section>
  );
}
