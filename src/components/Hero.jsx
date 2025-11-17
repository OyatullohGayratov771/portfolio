import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const titleVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const blockVariants = {
    hidden: { opacity: 0, scale: 0.96 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  const hoverTransform = { scale: 1.02, rotate: -2 };

  return (
    <section
      aria-labelledby="hero-title"
      className="relative pt-20 md:pt-32 pb-24 overflow-hidden
      bg-neutral-100 dark:bg-black text-black dark:text-white"
    >
      {/* subtle noise / texture (decorative) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-20 pointer-events-none bg-[url('/noise.png')] mix-blend-multiply"
      />

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-12 gap-8 md:gap-10 relative">
        {/* LEFT — TEXT (z-index on top so torn layers overlay correctly) */}
        <div className="col-span-12 md:col-span-7 flex flex-col z-20">
          {/* Collage Title with a torn-paper background layer (decorative) */}
          <motion.div
            initial={shouldReduceMotion ? "show" : "hidden"}
            animate="show"
            variants={titleVariants}
            className="relative mb-2"
          >
            {/* Decorative torn-paper layer (hidden on very small screens) */}
            <img
              src="/torn-paper.png"
              alt=""
              aria-hidden="true"
              className="absolute -top-6 -left-6 w-[140%] opacity-60 dark:opacity-40 rotate-[-2deg] pointer-events-none hidden sm:block"
            />

            <h1
              id="hero-title"
              className="relative text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase
              leading-[0.95] tracking-tight z-10"
            >
              Azamat
              <br />
              Builds
              <br />
              Digital Stuff
            </h1>
          </motion.div>

          {/* Subline on small torn paper (decorative) */}
          <motion.div
            initial={shouldReduceMotion ? "show" : "hidden"}
            animate="show"
            variants={titleVariants}
            transition={{ delay: 0.15 }}
            className="relative inline-block mt-4"
          >
            <img
              src="/torn-paper-small.png"
              alt=""
              aria-hidden="true"
              className="absolute -top-1 -left-2 w-[115%] opacity-60 dark:opacity-40 rotate-[1deg] pointer-events-none hidden xs:block"
            />
            <p className="relative text-base sm:text-lg font-semibold max-w-lg">
              Developer / Designer / Entrepreneur — making bold, handcrafted web experiences.
            </p>
          </motion.div>

          {/* CTA group */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4">
            {/* Tape-decorated primary CTA */}
            <motion.div
              whileHover={shouldReduceMotion ? {} : hoverTransform}
              className="relative inline-block"
            >
              <img
                src="/tape.png"
                alt=""
                aria-hidden="true"
                className="absolute -top-3 left-0 w-20 opacity-80 pointer-events-none rotate-[6deg] hidden sm:block"
              />

              <Link
                to="/projects"
                className="relative px-6 sm:px-8 py-3 bg-white dark:bg-black border-4 border-black dark:border-white
                       text-black dark:text-white uppercase font-bold text-sm shadow-[6px_6px_0px_0px_black] dark:shadow-[6px_6px_0px_0px_white]
                       rotate-[-1deg] inline-block transition-transform"
                aria-label="View my work"
              >
                View Work
              </Link>
            </motion.div>

            {/* Secondary CTA */}
            <motion.div whileHover={shouldReduceMotion ? {} : { rotate: 2, scale: 1.02 }}>
              <Link
                to="/contact"
                className="px-6 sm:px-8 py-3 bg-black dark:bg-white text-white dark:text-black border-4 border-black dark:border-white
                       uppercase font-bold text-sm shadow-[6px_6px_0px_0px_black] dark:shadow-[6px_6px_0px_0px_white]
                       rotate-[1deg] inline-block transition-transform"
                aria-label="Contact me"
              >
                Contact Me
              </Link>
            </motion.div>
          </div>
        </div>

        {/* RIGHT — COLLAGE IMAGE column */}
        <div className="col-span-12 md:col-span-5 flex flex-col gap-6 relative z-10">
          <motion.div
            initial={shouldReduceMotion ? "show" : "hidden"}
            animate="show"
            variants={blockVariants}
            transition={{ delay: 0.1 }}
            className="relative border-4 border-black dark:border-white rotate-[2deg] overflow-hidden"
          >
            {/* Use <picture> for a modern fallback (webp if available) and lazy loading */}
            <picture>
              <source srcSet="/azamat.webp" type="image/webp" />
              <img
                src="/azamat.jpg"
                alt="Azamat portrait"
                loading="lazy"
                className="w-full h-72 sm:h-96 object-cover grayscale contrast-125"
                style={{ objectPosition: "center top" }}
              />
            </picture>

            {/* yellow label (slightly rotated) */}
            <div
              className="absolute bottom-0 left-0 bg-[#FFEA00] text-black px-4 py-2
              border-t-4 border-r-4 border-black dark:border-white font-bold uppercase text-xs rotate-[-2deg]"
              aria-hidden="true"
            >
              Creator & Hacker Spirit
            </div>
          </motion.div>

          {/* Torn strip with slogan */}
          <div className="relative w-full rotate-[-1deg]">
            <img
              src="/torn-strip.png"
              alt=""
              aria-hidden="true"
              className="w-full opacity-70 dark:opacity-40 pointer-events-none"
            />

            <p
              className="absolute inset-0 flex items-center justify-center
              text-[10px] sm:text-xs md:text-sm lg:text-base
              uppercase font-black tracking-widest
              text-black dark:text-white
              rotate-[1deg] pointer-events-none"
            >
              No Perfect Lines. Only Real Work.uuuu 
            </p>
          </div>

        </div>
      </div>

      {/* Decorative vertical "Portfolio" text — desktop only */}
      <span
        aria-hidden="true"
        className="hidden md:block absolute top-16 right-[-30px] rotate-90 font-black text-5xl uppercase tracking-tight opacity-30"
      >
        Portfolio
      </span>
    </section>
  );
}
