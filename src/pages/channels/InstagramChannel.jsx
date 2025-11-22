import { motion } from "framer-motion";

export default function InstagramChannel() {
  return (
    <section className="relative bg-neutral-100 dark:bg-black text-black dark:text-white pt-24 pb-32 overflow-hidden">

      {/* Noise */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[url('/noise.png')] opacity-25 mix-blend-multiply pointer-events-none"
      />

      <div className="max-w-5xl mx-auto px-5 sm:px-6 relative z-20">

        {/* TITLE */}
        <div className="relative mb-12 sm:mb-16">
          <pre
            aria-hidden="true"
            className="absolute -top-10 -left-2 text-[9px] sm:text-[10px] opacity-25 leading-none pointer-events-none select-none"
          >{`//// VISUAL ARCHIVE
//  AZAMAT IG LOG
/////////////////`}</pre>

          <h1 className="relative text-4xl sm:text-5xl md:text-6xl font-black uppercase leading-[0.9] tracking-tight">
            Instagram  
            <br />
            Visual Log
          </h1>

          <div className="absolute -bottom-2 left-1 h-[5px] w-40 sm:w-56 bg-red-600 rotate-[-4deg]" />
        </div>

        {/* SUBTEXT */}
        <p className="text-base sm:text-lg font-semibold max-w-xl opacity-85 mb-10">
          UI fragmentlar, collage’lar, WIP screenshotlar, behind-the-scenes va vizual tajribalarim uchun arxiv.
        </p>

        {/* CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative border-4 border-black dark:border-white bg-white dark:bg-neutral-900 p-5 sm:p-7 shadow-[6px_6px_0px_black] dark:shadow-[6px_6px_0px_white]"
        >
          {/* Meta line */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-5 text-xs sm:text-sm font-mono">
            <span className="px-2 py-1 border-2 border-black dark:border-white uppercase font-black">
              IG: @azamat_visuals
            </span>
            <span className="opacity-70">MODE: VISUAL / COLLAGE</span>
          </div>

          {/* Content */}
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-7 space-y-4 text-sm sm:text-[15px] leading-relaxed">
              <p>
                Boshqa joylarda gapirganimni bu yerda chizaman.  
                UI layout sketchlar, brutal posterlar, collage, typografiya tajribalari shu yerdan joy oladi.
              </p>
              <p>
                Maqsad: “portfolio uchun ideal post” emas, balki jarayonning o‘zi. 
                Xato, WIP, tugallanmagan g‘oyalar ham story / post sifatida yashaydi.
              </p>
            </div>

            {/* right info */}
            <div className="col-span-12 md:col-span-5 flex flex-col gap-4 text-xs sm:text-sm">
              <div className="border-2 border-black dark:border-white p-3 bg-neutral-100 dark:bg-neutral-800">
                <p className="font-black uppercase mb-1">Vizual kontent</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>UI / komponent sketchlari</li>
                  <li>Poster / typo tajribalar</li>
                  <li>Setup, dev life, random visuals</li>
                </ul>
              </div>

              <div className="border-2 border-black dark:border-white p-3 bg-neutral-100 dark:bg-neutral-800">
                <p className="font-black uppercase mb-1">Vibe</p>
                <p>Less “influencer”, more “visual notebook”.</p>
              </div>
            </div>
          </div>

          {/* ASCII divider */}
          <pre
            aria-hidden="true"
            className="mt-5 text-[9px] opacity-40 leading-none pointer-events-none select-none"
          >
{`[============ INSTAGRAM LINK ============]`}
          </pre>

          {/* CTA */}
          <div className="mt-4 flex flex-wrap gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2 border-4 border-black dark:border-white bg-neutral-200 dark:bg-neutral-800
              text-black dark:text:white font-black uppercase text-xs sm:text-sm
              shadow-[4px_4px_0px_black] dark:shadow-[4px_4px_0px_white] rotate-[-1deg]
              hover:translate-x-[3px] hover:translate-y-[3px] transition-transform"
            >
              Open Instagram
            </a>
          </div>
        </motion.div>

        <p className="mt-10 text-[11px] sm:text-xs opacity-60 font-mono">
          LOG: visual layer of the Azamat Universe.
        </p>
      </div>
    </section>
  );
}
