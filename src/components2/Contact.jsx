import { useTranslation } from "react-i18next";
import { FaInstagram, FaTelegramPlane, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-24 px-6 bg-cream text-base">
      <div data-aos="fade-up" className="max-w-4xl mx-auto text-center">

        <h2 className="text-4xl font-semibold">{t("contact.title")}</h2>
        <p className="mt-4 text-muted max-w-lg mx-auto leading-relaxed">
          {t("contact.desc")}
        </p>

        {/* Form */}
        <form className="mt-12 flex flex-col gap-4 max-w-md mx-auto">
          <input
            type="text"
            placeholder={t("contact.name")}
            className="w-full px-4 py-3 border border-sand/40 rounded-md bg-cream outline-none"
          />
          <input
            type="email"
            placeholder={t("contact.email")}
            className="w-full px-4 py-3 border border-sand/40 rounded-md bg-cream outline-none"
          />
          <textarea
            rows="5"
            placeholder={t("contact.message")}
            className="w-full px-4 py-3 border border-sand/40 rounded-md bg-cream outline-none"
          />
          <button className="px-8 py-2 mt-4 border border-accent rounded-full hover:bg-accent hover:text-cream transition">
            {t("contact.send")}
          </button>
        </form>

        {/* Social */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-base text-muted text-xl">

          <a href="https://instagram.com/x.azamat.x" target="_blank" className="hover:text-base transition flex items-center gap-2">
            <FaInstagram /> <span className="text-sm">Instagram</span>
          </a>

          <a href="https://t.me/x_azamat_x" target="_blank" className="hover:text-base transition flex items-center gap-2">
            <FaTelegramPlane /> <span className="text-sm">Telegram</span>
          </a>

          <a href="https://linkedin.com/in/oyatullohgayratov0101" target="_blank" className="hover:text-base transition flex items-center gap-2">
            <FaLinkedin /> <span className="text-sm">LinkedIn</span>
          </a>

          <a href="https://github.com/OyatullohGayratov771" target="_blank" className="hover:text-base transition flex items-center gap-2">
            <FaGithub /> <span className="text-sm">GitHub</span>
          </a>

        </div>

      </div>
    </section>
  );
}
