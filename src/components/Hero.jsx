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
      className="relative pt-16 sm:pt-20 md:pt-32 pb-16 sm:pb-20 md:pb-28 
      overflow-hidden bg-neutral-100 dark:bg-black text-black dark:text-white"
    >
      {/* Noise Layer */}
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
            className="relative mb-3 sm:mb-4"
          >
            <img
              src="/torn-paper.png"
              aria-hidden="true"
              className="absolute -top-5 -left-4 w-[130%] opacity-55 dark:opacity-35
              rotate-[-2deg] hidden sm:block select-none pointer-events-none"
            />

            <h1
              id="hero-title"
              className="relative font-black uppercase z-10 
              leading-[0.9] tracking-tight select-none
              text-[2.35rem] sm:text-[3.15rem] md:text-[4.5rem] lg:text-[5rem]"
            >
              Gayratov Oyatulloh
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
            className="relative inline-block mt-2 sm:mt-3"
          >
            <img
              src="/torn-paper-small.png"
              aria-hidden="true"
              className="absolute -top-1.5 -left-2 w-[120%] opacity-55 dark:opacity-35 
              rotate-[1deg] hidden xs:block select-none pointer-events-none"
            />

            <p className="relative text-sm sm:text-base md:text-lg font-semibold max-w-lg leading-snug">
              Developer / Designer / Entrepreneur — making bold, handcrafted web experiences.
            </p>
          </motion.div>

          {/* CTA BUTTONS */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">

            {/* VIEW WORK */}
            <motion.div
              whileHover={shouldReduceMotion ? {} : { scale: 1.03, rotate: -2 }}
              className="relative inline-block"
            >
              <img
                src="/tape.png"
                aria-hidden="true"
                className="absolute -top-3 left-1 w-20 opacity-80 rotate-[6deg] 
                hidden sm:block select-none pointer-events-none"
              />

              <Link
                to="/projects"
                className="relative w-full sm:w-auto text-center
                px-6 sm:px-8 py-2.5 sm:py-3
                bg-white dark:bg-black border-[3px] sm:border-[4px] 
                border-black dark:border-white
                text-black dark:text-white uppercase font-black text-xs sm:text-sm
                shadow-[4px_4px_0px_black] dark:shadow-[4px_4px_0px_white]
                -rotate-1 inline-block transition-transform"
              >
                View Work
              </Link>
            </motion.div>

            {/* CONTACT */}
            <motion.div whileHover={shouldReduceMotion ? {} : { rotate: 2, scale: 1.03 }}>
              <Link
                to="/contact"
                className="w-full sm:w-auto text-center
                px-6 sm:px-8 py-2.5 sm:py-3
                bg-black dark:bg-white text-white dark:text-black
                border-[3px] sm:border-[4px] border-black dark:border-white
                uppercase font-black text-xs sm:text-sm
                shadow-[4px_4px_0px_black] dark:shadow-[4px_4px_0px_white]
                rotate-[1deg] inline-block transition-transform"
              >
                Contact Me
              </Link>
            </motion.div>

          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="col-span-12 md:col-span-5 flex flex-col gap-4 sm:gap-6 z-10 mt-5 md:mt-0">

          {/* PORTRAIT */}
          <motion.div
            initial={shouldReduceMotion ? "show" : "hidden"}
            animate="show"
            variants={blockVariants}
            transition={{ delay: 0.1 }}
            className="relative border-[3px] sm:border-[4px] border-black dark:border-white
            rotate-[1.5deg] overflow-hidden shadow-[4px_4px_0px_black]
            dark:shadow-[4px_4px_0px_white]"
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
              className="absolute bottom-0 left-0 bg-[#FFEA00] text-black 
              px-3 sm:px-4 py-1.5 sm:py-2 border-t-[3px] border-r-[3px]
              sm:border-t-[4px] sm:border-r-[4px] border-black dark:border-white
              font-black uppercase text-[10px] sm:text-xs -rotate-2"
            >
              Creator & Hacker Spirit
            </div>
          </motion.div>

          {/* STRIP SLOGAN */}
          <div className="relative w-full -rotate-1">
            <img
              src="/torn-strip.png"
              className="w-full opacity-70 dark:opacity-40 select-none pointer-events-none"
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

      {/* VERTICAL DECOR TEXT */}
      <span
        aria-hidden="true"
        className="hidden md:block absolute top-16 right-[-30px] rotate-90 font-black 
        text-4xl md:text-5xl uppercase opacity-25 tracking-tight select-none"
      >
        Portfolio
      </span>
    </section>
  );
}
