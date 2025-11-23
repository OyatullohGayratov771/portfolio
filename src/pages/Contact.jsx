import { useState } from "react";
import { motion } from "framer-motion";

const TELEGRAM_USERNAME = "x_azamat_x";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    message: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const { name, contact, message } = form;

    if (!name.trim() || !contact.trim() || !message.trim()) {
      setError("Hammasini to‘ldir. Bo‘sh forma bilan gaplashmayman.");
      return;
    }

    const text = encodeURIComponent(
      `Yangi xabar (azamat-universe):

Name: ${name}
Contact: ${contact}

Message:
${message}`
    );

    const url = `https://t.me/${TELEGRAM_USERNAME}?text=${text}`;
    window.open(url, "_blank");
  };

  return (
    <section
      className="relative bg-neutral-100 dark:bg-black text-black dark:text-white
      pt-20 sm:pt-24 pb-24 sm:pb-32 overflow-hidden"
    >
      {/* Noise */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[url('/noise.png')] opacity-25 mix-blend-multiply pointer-events-none"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-20">
        {/* TITLE */}
        <div className="relative mb-10 sm:mb-14">
          <pre
            aria-hidden="true"
            className="absolute -top-8 -left-1 text-[8px] sm:text-[10px] opacity-25 leading-none pointer-events-none select-none"
          >{`//// CONTACT GATEWAY
//  AZAMAT UNIVERSE
////////////////////`}</pre>

          <h1
            className="relative font-black uppercase leading-[0.9] tracking-tight
            text-[2.2rem] sm:text-[2.8rem] md:text-[3.4rem]"
          >
            Let’s
            <br />
            Talk.
          </h1>

          <div className="absolute -bottom-2 left-1 h-[4px] sm:h-[5px] w-32 sm:w-40 bg-red-600 rotate-[-4deg]" />
        </div>

        {/* SUBTEXT */}
        <p className="text-sm sm:text-base md:text-lg font-semibold max-w-xl opacity-85 mb-8 sm:mb-10">
          Loyiha g‘oyalari, kollab, savol yoki shunchaki fikr bo‘lsa — yoz.
          Qisqa, aniq, rostini yozgan yaxshi.
        </p>

        <div className="grid grid-cols-12 gap-6 sm:gap-8">
          {/* LEFT: FORM */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="col-span-12 md:col-span-7"
          >
            <div
              className="relative border-3 sm:border-4 border-black dark:border-white
              bg-white dark:bg-neutral-900
              p-4 sm:p-6
              shadow-[4px_4px_0px_black] dark:shadow-[4px_4px_0px_white]
             "
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4 text-[11px] sm:text-xs font-mono">
                <span className="px-2 py-1 border-2 border-black dark:border-white uppercase font-black">
                  /contact-form
                </span>
                <span className="opacity-70">MODE: TELEGRAM DM</span>
              </div>

              {error && (
                <div className="mb-3 text-[11px] sm:text-xs font-mono bg-red-200 text-black border-2 border-black px-3 py-2">
                  {error}
                </div>
              )}

              <form
                className="space-y-4 text-sm sm:text-[15px]"
                onSubmit={handleSubmit}
              >
                <div>
                  <label className="block font-semibold uppercase text-[11px] mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name or alias"
                    className="w-full border-2 border-black dark:border-white bg-neutral-100 dark:bg-neutral-800
                    px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>

                <div>
                  <label className="block font-semibold uppercase text-[11px] mb-1">
                    Contact
                  </label>
                  <input
                    type="text"
                    name="contact"
                    value={form.contact}
                    onChange={handleChange}
                    placeholder="Email yoki @telegram"
                    className="w-full border-2 border-black dark:border-white bg-neutral-100 dark:bg-neutral-800
                    px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>

                <div>
                  <label className="block font-semibold uppercase text-[11px] mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Qisqa va aniq: nima qilmoqchisan, nima so‘ramoqchisan?"
                    className="w-full border-2 border-black dark:border-white bg-neutral-100 dark:bg-neutral-800
                    px-3 py-2 text-sm outline-none resize-none focus:ring-2 focus:ring-red-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto mt-3 px-6 py-2 border-3 sm:border-4 border-black dark:border-white
                  bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white
                  font-black uppercase text-xs sm:text-sm
                  shadow-[3px_3px_0px_black] dark:shadow-[3px_3px_0px_white]
                  -rotate-1 sm:rotate-[-2deg]
                  hover:translate-x-[2px] hover:translate-y-[2px] transition-transform"
                >
                  Send via Telegram
                </button>
              </form>
            </div>
          </motion.div>

          {/* RIGHT: DIRECT CONTACT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="col-span-12 md:col-span-5 flex flex-col gap-4 sm:gap-5 text-[11px] sm:text-sm"
          >
            <div
              className="border-3 sm:border-4 border-black dark:border-white
              bg-white dark:bg-neutral-900
              p-4 sm:p-5
              shadow-[3px_3px_0px_black] dark:shadow-[3px_3px_0px_white]"
            >
              <p className="font-black uppercase mb-2">Direct lines</p>

              <div className="space-y-2">
                <a
                  href="mailto:azamatgayratov771@gamil.com"
                  className="block underline underline-offset-2 hover:opacity-80 break-all"
                >
                  Email: azamatgayratov771@gamil.com
                </a>
                <a
                  href="tel:+998901234567"
                  className="block underline underline-offset-2 hover:opacity-80"
                > 
                  Phone: +998333110101
                </a>
                <a
                  href="https://www.instagram.com/x.azamat.x/"
                  target="_blank"
                  rel="noreferrer"
                  className="block underline underline-offset-2 hover:opacity-80"
                >
                  Instagram: @x.azamat.x 
                </a>
                <a
                  href="https://www.linkedin.com/in/oyatullohgayratov0101/"
                  target="_blank"
                  rel="noreferrer"
                  className="block underline underline-offset-2 hover:opacity-80"
                >
                  LinkedIn: Oyatulloh Gayratov
                </a>
                <a
                  href={`https://t.me/${TELEGRAM_USERNAME}`}
                  target="_blank"
                  rel="noreferrer"
                  className="block underline underline-offset-2 hover:opacity-80"
                >
                  Telegram: @{TELEGRAM_USERNAME}
                </a>

                <a
                  href="https://github.com/OyatullohGayratov771"
                  target="_blank"
                  rel="noreferrer"
                  className="block underline underline-offset-2 hover:opacity-80"
                >
                  GitHub: OyatullohGayratov771
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100087367497180"
                  target="_blank"
                  rel="noreferrer"
                  className="block underline underline-offset-2 hover:opacity-80"
                >
                  Facebook: Oyatulloh Gayratov
                </a>
                <a> 
                  Location: Tashkent, Uzbekistan
                </a>
              </div>
              <div className="mt-4 text-[10px] sm:text-[11px] opacity-70 font-mono">
                <div>/end-of-direct-lines/</div>
              </div>
            </div>

            <div className="border-2 border-black dark:border-white bg-neutral-100 dark:bg-neutral-800 p-4">
              <p className="font-black uppercase mb-2">Best messages:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Qisqa, aniq va maqsadli.</li>
                <li>Real loyiha / real savol.</li>
                <li>“Mana shunaqa narsa qilmoqchiman” deb yozilganlar.</li>
              </ul>
            </div>

            <div className="border-2 border-black dark:border-white bg-neutral-100 dark:bg-neutral-800 p-3 font-mono text-[10px] sm:text-[11px]">
              <p className="font-black uppercase mb-1">Response energy</p>
              <p>
                Qiziq, kreativ va rostgo‘y yozuvlar tezroq javob oladi.
                Noaniq, “sal gaplashamiz” tipidagi yozuvlar bekor turadi.
              </p>
            </div>
          </motion.div>
        </div>

        <p className="mt-8 sm:mt-10 text-[10px] sm:text-[11px] opacity-60 font-mono">
          LOG: this page is the communication port of the Azamat Universe.
        </p>
      </div>
    </section>
  );
}
