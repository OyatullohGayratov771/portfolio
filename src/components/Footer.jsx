import { useTranslation } from "react-i18next";
import { FaGithub, FaTelegramPlane, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="py-12 px-6 bg-cream text-base border-t border-sand/40">
      <div 
        data-aos="fade-in" 
        data-aos-delay="200" 
        className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6"
      >
        {/* Brand */}
        <h3 className="text-lg font-semibold tracking-wide text-base">
          gayratov oyatulloh
        </h3>

        {/* Links */}
        <div className="flex gap-8 text-sm text-muted">
          <a href="#about" className="hover:text-base transition">{t("footer.about")}</a>
          <a href="#projects" className="hover:text-base transition">{t("footer.projects")}</a>
          <a href="#contact" className="hover:text-base transition">{t("footer.contact")}</a>
        </div>

        {/* Social */}
        <div className="flex items-center gap-6 text-xl text-muted">
          <a href="https://github.com/OyatullohGayratov771" target="_blank" className="hover:text-base transition">
            <FaGithub />
          </a>
          <a href="https://t.me/x_azamat_x" target="_blank" className="hover:text-base transition">
            <FaTelegramPlane />
          </a>
          <a href="mailto:azamatgayratov771@gmail.com" className="hover:text-base transition">
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Bottom note */}
      <div className="text-center text-xs text-muted mt-10">
        © {new Date().getFullYear()} Goyatulloh — {t("footer.note")}
      </div>
    </footer>
  );
}
