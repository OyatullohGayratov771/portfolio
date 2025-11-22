import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Business() {
  const businesses = [
    {
      name: "Goyatulloh",
      desc: "Creative software — handcrafted UI, chaotic precision.",
      year: "2024",
      image: "/project1.jpg",
      tag: "Software • Design • AI",
      url: "/projects/goyatulloh",
    },
    {
      name: "Manimal Store",
      desc: "Minimalist lifestyle & apparel with brutal identity.",
      year: "2023",
      image: "/project2.jpg",
      tag: "Brand • Identity • E-Commerce",
      url: "/projects/manimal",
    },
  ];

  return (
    <section
      className="relative bg-neutral-100 dark:bg-black text-black dark:text-white
      pt-20 sm:pt-24 md:pt-28 pb-24 sm:pb-32 md:pb-36 overflow-hidden"
    >
      {/* Noise Background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[url('/noise.png')] opacity-25 mix-blend-multiply"
      />

      {/* Light red xerox bleed */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-red-600 opacity-[0.04] mix-blend-screen pointer-events-none"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-20">
        {/* PAGE TITLE */}
        <div className="relative inline-block mb-10 sm:mb-14">
          <img
            src="/torn-paper.png"
            className="absolute -top-6 -left-6 w-[140%] opacity-60 dark:opacity-30 rotate-[3deg] pointer-events-none hidden sm:block"
            aria-hidden="true"
          />

          <h1
            className="relative font-black uppercase leading-[0.9]
            text-[2.2rem] sm:text-[3rem] md:text-[3.8rem] lg:text-[4.2rem]
            rotate-[-2deg]"
          >
            My
            <br />
            Businesses
          </h1>

          <div className="absolute -bottom-3 left-2 h-[5px] sm:h-[7px] w-40 sm:w-56 bg-red-600 rotate-[-5deg]" />
        </div>

        {/* SUBLINE */}
        <p className="max-w-lg text-sm sm:text-base md:text-lg font-semibold mb-10 sm:mb-14 opacity-90">
          Brands, tools and systems I personally built — loud, raw and unapologetically brutal.
        </p>

        {/* BUSINESS GRID */}
        <div className="grid grid-cols-12 gap-6 sm:gap-8 md:gap-10">
          {businesses.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.12 }}
              className="relative col-span-12 md:col-span-6"
            >
              {/* Torn background */}
              <img
                src="/torn-strip.png"
                aria-hidden="true"
                className="absolute -top-4 -left-2 w-[105%] opacity-40 rotate-[1.5deg] pointer-events-none hidden sm:block"
              />

              {/* Card */}
              <div
                className="relative bg-white dark:bg-neutral-900
                border-[3px] sm:border-4 border-black dark:border-white
                p-4 sm:p-5
                shadow-[4px_4px_0px_black] dark:shadow-[4px_4px_0px_white]
                md:rotate-[1deg]"
              >
                {/* Image */}
                <div
                  className="relative overflow-hidden
                  border-[3px] sm:border-4 border-black dark:border-white
                  md:rotate-[1.5deg]"
                >
                  <img
                    src={b.image}
                    alt={b.name}
                    className="w-full h-44 sm:h-56 object-cover grayscale contrast-125"
                    loading="lazy"
                  />

                  {/* Yellow tag */}
                  <span
                    className="absolute bottom-2 left-2 bg-[#FFEA00] font-black text-[10px] sm:text-xs
                    px-2 py-1 border-2 border-black -rotate-3"
                  >
                    {b.year}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-black uppercase mt-4 sm:mt-5 leading-tight">
                  {b.name}
                </h3>

                {/* Description */}
                <p className="mt-2 opacity-80 text-xs sm:text-sm leading-relaxed">
                  {b.desc}
                </p>

                {/* Strip label */}
                <div className="relative mt-3 sm:mt-4">
                  <img
                    src="/torn-paper-small.png"
                    aria-hidden="true"
                    className="absolute -top-2 -left-1 w-[115%] opacity-40 rotate-[1deg] pointer-events-none hidden xs:block"
                  />
                  <p className="relative text-[11px] sm:text-[12px] font-bold uppercase tracking-wide">
                    {b.tag}
                  </p>
                </div>

                {/* Fake barcode + approved stamp */}
                <div className="flex items-center justify-between mt-4 sm:mt-5">
                  {/* Barcode */}
                  <div className="flex flex-col text-[8px] sm:text-[9px] font-mono opacity-70">
                    <div className="h-5 sm:h-6 w-12 sm:w-14 bg-[url('/noise.png')] bg-repeat-x mix-blend-hard-light opacity-60" />
                    <span>BR-{i}01</span>
                  </div>

                  {/* Stamp */}
                  <div className="text-[10px] sm:text-xs font-black uppercase border-2 border-black dark:border-white px-2.5 sm:px-3 py-0.5 sm:py-1 rotate-[-6deg] bg-red-600 text-white">
                    Approved
                  </div>
                </div>

                {/* Button */}
                <Link
                  to={b.url}
                  className="inline-block w-full sm:w-auto mt-5 sm:mt-6
                  px-5 py-2 border-[3px] sm:border-4 border-black dark:border-white
                  bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white
                  font-bold uppercase text-xs sm:text-sm
                  shadow-[3px_3px_0px_black] dark:shadow-[3px_3px_0px_white]
                  -rotate-1 hover:translate-x-[3px] hover:translate-y-[3px] transition-transform text-center"
                >
                  View Business
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
