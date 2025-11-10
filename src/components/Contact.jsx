import { FaInstagram, FaTelegramPlane, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-cream dark:bg-base text-base dark:text-cream transition-colors duration-300">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-semibold">Let’s Connect</h2>
        <p className="mt-4 text-muted dark:text-sand max-w-lg mx-auto leading-relaxed">
          Fikrlaringiz, loyihalaringiz yoki hamkorlik takliflari bo‘lsa, bemalol yozing.  
          Har bir xabarga shaxsan javob beraman.
        </p>

        {/* Form */}
        <form className="mt-12 flex flex-col gap-4 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Ismingiz"
            className="w-full px-4 py-3 bg-cream dark:bg-base border border-muted/30 dark:border-sand/30 rounded-md outline-none focus:border-sand focus:bg-sand/10 transition-colors"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 bg-cream dark:bg-base border border-muted/30 dark:border-sand/30 rounded-md outline-none focus:border-sand focus:bg-sand/10 transition-colors"
          />

          <textarea
            rows="5"
            placeholder="Xabar..."
            className="w-full px-4 py-3 bg-cream dark:bg-base border border-muted/30 dark:border-sand/30 rounded-md outline-none focus:border-sand focus:bg-sand/10 transition-colors"
          ></textarea>

          <button
            className="px-8 py-2 mt-4 border border-muted dark:border-sand rounded-full 
            hover:bg-base hover:text-cream dark:hover:bg-cream dark:hover:text-base 
            transition-all duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Social Links */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-muted dark:text-sand text-2xl">
          <a href="#" className="hover:text-base dark:hover:text-cream transition flex items-center gap-2">
            <FaInstagram /> <span className="text-sm">Instagram</span>
          </a>

          <a href="#" className="hover:text-base dark:hover:text-cream transition flex items-center gap-2">
            <FaTelegramPlane /> <span className="text-sm">Telegram</span>
          </a>

          <a href="#" className="hover:text-base dark:hover:text-cream transition flex items-center gap-2">
            <FaLinkedin /> <span className="text-sm">LinkedIn</span>
          </a>

          <a href="#" className="hover:text-base dark:hover:text-cream transition flex items-center gap-2">
            <FaGithub /> <span className="text-sm">Github</span>
          </a>
        </div>
      </div>
    </section>
  );
}
