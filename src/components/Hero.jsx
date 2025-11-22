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

  return (
    <section
      aria-labelledby="hero-title"
      className="relative pt-16 sm:pt-20 md:pt-32 pb-16 sm:pb-20 md:pb-28 overflow-hidden
      bg-neutral-100 dark:bg-black text-black dark:text-white"
    >
      {/* Texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-multiply pointer-events-none"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-12 gap-6 md:gap-10 relative">

        {/* LEFT SIDE */}
        <div className="col-span-12 md:col-span-7 flex flex-col z-20">

          {/* TITLE */}
          <motion.div
            initial={shouldReduceMotion ? "show" : "hidden"}
            animate="show"
            variants={titleVariants}
            className="relative mb-3"
          >
            <img
              src="/torn-paper.png"
              alt=""
              aria-hidden="true"
              className="absolute -top-6 -left-4 w-[135%] opacity-60 dark:opacity-40 
              rotate-[-2deg] pointer-events-none hidden sm:block select-none"
            />

            <h1
              id="hero-title"
              className="relative font-black uppercase z-10 
              leading-[0.9] tracking-tight select-none
              text-[2.3rem] sm:text-[3.1rem] md:text-[4.6rem] lg:text-[5.2rem]"
            >
              Azamat
              <br />
              Builds
              <br />
              Digital Stuff
            </h1>
          </motion.div>

          {/* SUBLINE */}
          <motion.div
            initial={shouldReduceMotion ? "show" : "hidden"}
            animate="show"
            variants={titleVariants}
            transition={{ delay: 0.15 }}
            className="relative inline-block mt-3 sm:mt-4"
          >
            <img
              src="/torn-paper-small.png"
              alt=""
              aria-hidden="true"
              className="absolute -top-1 -left-2 w-[115%] opacity-60 dark:opacity-40 rotate-[1deg] hidden xs:block select-none"
            />

            <p className="relative text-sm sm:text-base md:text-lg font-semibold max-w-lg leading-snug">
              Developer / Designer / Entrepreneur — making bold, handcrafted web experiences.
            </p>
          </motion.div>

          {/* CTA BUTTONS */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            {/* PRIMARY CTA */}
            <motion.div
              whileHover={shouldReduceMotion ? {} : { scale: 1.03, rotate: -2 }}
              className="relative inline-block"
            >
              <img
                src="/tape.png"
                alt=""
                aria-hidden="true"
                className="absolute -top-3 left-0 w-20 opacity-80 rotate-[6deg] hidden sm:block select-none"
              />

              <Link
                to="/projects"
                className="relative w-full sm:w-auto text-center
                px-6 sm:px-8 py-2.5 sm:py-3
                bg-white dark:bg-black border-3 sm:border-4 border-black dark:border-white
                text-black dark:text-white uppercase font-bold text-xs sm:text-sm
                shadow-[4px_4px_0px_black] dark:shadow-[4px_4px_0px_white]
                -rotate-1 inline-block transition-transform"
              >
                View Work
              </Link>
            </motion.div>

            {/* SECONDARY CTA */}
            <motion.div
              whileHover={shouldReduceMotion ? {} : { rotate: 2, scale: 1.02 }}
            >
              <Link
                to="/contact"
                className="w-full sm:w-auto text-center
                px-6 sm:px-8 py-2.5 sm:py-3
                bg-black dark:bg:white text-white dark:text-black
                border-3 sm:border-4 border-black dark:border-white
                uppercase font-bold text-xs sm:text-sm
                shadow-[4px_4px_0px_black] dark:shadow-[4px_4px_0px_white]
                rotate-[1deg] inline-block transition-transform"
              >
                Contact Me
              </Link>
            </motion.div>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="col-span-12 md:col-span-5 flex flex-col gap-4 sm:gap-6 relative z-10 mt-6 md:mt-0">

          {/* Portrait */}
          <motion.div
            initial={shouldReduceMotion ? "show" : "hidden"}
            animate="show"
            variants={blockVariants}
            transition={{ delay: 0.1 }}
            className="relative border-3 sm:border-4 border-black dark:border-white
            rotate-[1.5deg] overflow-hidden 
            shadow-[4px_4px_0px_black] dark:shadow-[4px_4px_0px_white]
            will-change-transform"
          >
            <picture>
              <source src="/azamat.webp" type="image/webp" />
              <img
                src="/azamat.jpg"
                alt="Azamat portrait"
                className="w-full h-56 sm:h-72 md:h-80 lg:h-96 object-cover grayscale contrast-125"
                loading="lazy"
              />
            </picture>

            <div
              className="absolute bottom-0 left-0 bg-[#FFEA00] text-black px-3 sm:px-4 py-1.5 sm:py-2
              border-t-3 sm:border-t-4 border-r-3 sm:border-r-4 border-black dark:border-white 
              font-bold uppercase text-[10px] sm:text-xs -rotate-2"
            >
              Creator & Hacker Spirit
            </div>
          </motion.div>

          {/* Torn Strip Slogan */}
          <div className="relative w-full -rotate-1">
            <img
              src="/torn-strip.png"
              alt=""
              className="w-full opacity-70 dark:opacity-40 pointer-events-none select-none"
            />

            <p
              className="absolute inset-0 flex items-center justify-center
              text-[9px] xs:text-[10px] sm:text-xs md:text-sm 
              uppercase font-black tracking-widest
              text-black dark:text-white pointer-events-none rotate-[0.6deg]"
            >
              No Perfect Lines. Only Real Work.
            </p>
          </div>
        </div>
      </div>

      {/* Vertical decorative text */}
      <span
        aria-hidden="true"
        className="hidden md:block absolute top-16 right-[-30px] rotate-90 font-black text-4xl md:text-5xl uppercase opacity-25 tracking-tight"
      >
        Portfolio
      </span>
    </section>
  );
}
