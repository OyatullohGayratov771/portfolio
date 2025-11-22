import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative bg-neutral-100 dark:bg-black text-black dark:text-white pt-24 pb-32 overflow-hidden">

      {/* Noise Background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[url('/noise.png')] opacity-25 mix-blend-multiply pointer-events-none"
      />

      {/* Light red xerox glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-red-600 opacity-[0.03] mix-blend-screen pointer-events-none"
      />

      <div className="max-w-6xl mx-auto px-5 relative z-20">

        {/* ================= TITLE ================= */}
        <div className="relative inline-block mb-14 sm:mb-20">
          
          {/* Torn paper background (hidden on XS) */}
          <img
            src="/torn-paper.png"
            className="hidden sm:block absolute -top-10 -left-10 w-[160%] opacity-60 dark:opacity-40 rotate-[3deg]"
            aria-hidden="true"
          />

          <h1 className="relative text-4xl sm:text-6xl md:text-7xl font-black uppercase leading-[0.9] rotate-[-2deg] tracking-tight">
            About  
            <br />
            Azamat
          </h1>

          <div className="absolute -bottom-2 sm:-bottom-4 left-2 sm:left-3 h-[6px] sm:h-[8px] w-40 sm:w-56 bg-red-600 rotate-[-5deg]" />
        </div>


        {/* ================= RAW BIO ================= */}
        <div className="grid grid-cols-12 gap-6 sm:gap-10 mb-20">

          {/* Bio text */}
          <div className="col-span-12 md:col-span-7 relative">

            {/* Torn strip (hidden in XS) */}
            <img
              src="/torn-strip.png"
              className="hidden sm:block absolute -top-6 left-2 w-[80%] opacity-40 rotate-[1deg]"
              aria-hidden="true"
            />

            <div className="relative border-4 border-black dark:border-white bg-white dark:bg-neutral-900 p-5 sm:p-7 rotate-[1.5deg]
              shadow-[5px_5px_0px_black] dark:shadow-[5px_5px_0px_white]">

              {/* Grain on box */}
              <div className="absolute inset-0 bg-[url('/noise.png')] opacity-15 mix-blend-soft-light pointer-events-none" />

              <p className="font-semibold text-base sm:text-lg leading-relaxed">
                Men Azamat. Kod yozaman, dizayn qilaman, fikrlayman.
                Steril, ortiqcha tekis UIlar menga mos emas. Menga qirra, kollaj, rotation, tartibli tartibsizlik yoqadi.
              </p>

              <p className="mt-4 font-semibold text-base sm:text-lg leading-relaxed">
                UI menga ko‘proq zine — qo‘lda yasalgan, nuqsonli, tirik ko‘rinishi bilan yoqadi.
                Texture, yirtilgan qog‘oz, noise — bu mening energiyam.
              </p>

              <p className="mt-4 font-semibold text-base sm:text-lg leading-relaxed">
                Hozir “Azamat Universe” deb nomlangan shaxsiy vizual tizimni qurayapman.
              </p>

              {/* Tape */}
              <img
                src="/tape.png"
                className="absolute -top-4 right-4 w-20 sm:w-28 rotate-[8deg] opacity-80 pointer-events-none"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.93 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="col-span-12 md:col-span-5 relative rotate-[2deg]"
          >
            {/* Torn paper (reduced on mobile) */}
            <img
              src="/torn-paper-small.png"
              className="absolute -top-3 -left-3 w-[110%] opacity-40 rotate-[3deg] pointer-events-none hidden sm:block"
              aria-hidden="true"
            />

            <img
              src="/azamat2.jpg"
              alt="Azamat portrait"
              className="border-4 border-black dark:border-white grayscale contrast-[1.3] shadow-[6px_6px_0px_black] dark:shadow-[6px_6px_0px_white]"
            />

            <p className="absolute bottom-3 left-3 bg-[#ffea00] text-black px-3 py-1 font-black uppercase text-xs sm:text-sm rotate-[-4deg] border-2 border-black">
              Creator / Builder
            </p>
          </motion.div>
        </div>


        {/* ================= CURRENTLY COOKING ================= */}
        <div className="mb-24 relative">
          
          <h2 className="relative text-2xl sm:text-4xl font-black uppercase mb-6">
            Currently Cooking:
          </h2>

          <div className="grid grid-cols-12 gap-5 sm:gap-7">
            {[
              "Goyatulloh — Creative Software",
              "Manimal Store — Visual Identity Brand",
              "Brutalist UI Kit — Chaotic but Alive",
              "Azamat Universe — Digital System",
            ].map((item, i) => (
              <div
                key={i}
                className="relative col-span-12 sm:col-span-6 border-4 border-black dark:border-white px-4 py-3 sm:px-6 sm:py-4 bg-neutral-50 dark:bg-neutral-900 font-bold uppercase text-xs sm:text-sm rotate-[1deg]
                shadow-[4px_4px_0px_black] dark:shadow-[4px_4px_0px_white]"
              >
                {item}
                <div className="absolute -bottom-1 left-3 h-[4px] sm:h-[6px] w-16 sm:w-24 bg-red-600 rotate-[-4deg]" />
              </div>
            ))}
          </div>
        </div>


        {/* ================= TIMELINE ================= */}
        <div className="mb-24">
          <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight mb-8">
            Timeline
          </h2>

          <div className="border-l-4 border-black dark:border-white pl-6 sm:pl-8 space-y-8 sm:space-y-10">
            {[
              ["2019", "Started Coding"],
              ["2021", "First Freelance Project"],
              ["2023", "Launched Manimal Store"],
              ["2024", "Created Goyatulloh"],
              ["2025", "Building Azamat Universe"],
            ].map(([year, text], i) => (
              <div key={i} className="relative">
                <span className="absolute -left-[38px] sm:-left-[45px] top-1 font-black text-base sm:text-xl rotate-[-4deg]">
                  {year}
                </span>
                <p className="font-semibold text-base sm:text-lg">{text}</p>

                <div className="h-[3px] sm:h-[4px] w-20 sm:w-28 bg-red-600 mt-2 rotate-[-5deg]" />
              </div>
            ))}
          </div>
        </div>


        {/* ================= FUN FACTS ================= */}
        <div className="mb-28">
          <h2 className="text-2xl sm:text-4xl font-black uppercase mb-8">
            Fun Facts
          </h2>

          <div className="flex flex-wrap gap-5 sm:gap-8">
            {[
              "Debug after coffee only.",
              "Noise textures heal my soul.",
              "Animations make me too happy.",
              "Minimalism sometimes, chaos always.",
            ].map((fact, i) => (
              <div
                key={i}
                className="relative bg-white dark:bg-neutral-900 border-4 border-black dark:border-white px-4 py-3 sm:px-5 sm:py-4 font-black text-xs sm:text-sm uppercase rotate-[2deg]
                shadow-[4px_4px_0px_black] dark:shadow-[4px_4px_0px_white]"
              >
                {fact}

                <img
                  src="/tape.png"
                  className="absolute -top-3 left-2 w-16 sm:w-20 rotate-[8deg] opacity-70 pointer-events-none"
                  aria-hidden="true"
                />
              </div>
            ))}
          </div>
        </div>


        {/* ================= MANIFESTO ================= */}
        <div className="mb-10 sm:mb-20">
          <div className="p-7 sm:p-10 bg-black dark:bg-white text-white dark:text-black border-4 border-black dark:border-white rotate-[-2deg]
            shadow-[6px_6px_0px_black] dark:shadow-[6px_6px_0px_white]">
            <h2 className="text-2xl sm:text-4xl font-black uppercase mb-4 sm:mb-6">
              My Manifesto
            </h2>

            <div className="space-y-3 sm:space-y-4 text-lg sm:text-2xl font-black leading-tight">
              <p>I BUILD LOUD.</p>
              <p>I DESIGN HONEST.</p>
              <p>I BREAK PATTERNS.</p>
              <p>I CREATE WITHOUT PERMISSION.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
