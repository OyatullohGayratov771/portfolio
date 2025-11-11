import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-28 px-6 bg-cream text-base">
      <div 
        data-aos="fade-right"
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-14 md:gap-20"
      >

        {/* Profile Image */}
        <div className="relative shrink-0">
          <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border border-sand/60">
            <img
              src="https://avatars.githubusercontent.com/OyatullohGayratov771"
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text */}
        <div className="max-w-xl">
          <h2 className="text-3xl sm:text-4xl font-semibold leading-snug text-base">
            {t("hero.title")}
          </h2>

          <p className="mt-5 text-muted leading-relaxed">
            {t("about.desc1")}
          </p>

          <p className="mt-3 text-muted leading-relaxed">
            {t("about.desc2")}
          </p>

          <p className="mt-3 text-muted leading-relaxed">
            {t("about.desc3")}
          </p>

          <p className="mt-3 text-muted leading-relaxed font-medium">
            {t("about.stack")}
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="px-6 py-2 rounded-full border border-accent text-base
              hover:bg-accent hover:text-cream transition-all duration-300"
            >
              {t("hero.cta")}
            </a>
            <a
              href="#contact"
              className="px-6 py-2 rounded-full border border-accent text-base
              hover:bg-accent hover:text-cream transition-all duration-300"
            >
              Contact
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
