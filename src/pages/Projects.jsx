import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Goyatulloh",
      desc: "Creative software with chaotic brutal UI and handcrafted interactions.",
      image: "/project1.jpg",
      year: "2024",
      url: "/projects/goyatulloh",
      rotate: "-2deg",
      strip: "Software • Design • Creative Tool",
    },
    {
      title: "Manimal Store",
      desc: "Minimalist brand with character. Street fashion meets brutal type aesthetic.",
      image: "/project2.jpg",
      year: "2023",
      url: "/projects/manimal",
      rotate: "2deg",
      strip: "Branding • Identity • E-commerce",
    },
    {
      title: "Azamat Universe",
      desc: "Personal digital system. Collage UI, torn layouts, handcrafted vibes.",
      image: "/project3.jpg",
      year: "2025",
      url: "/projects/universe",
      rotate: "-1deg",
      strip: "Design Language • Framework • System",
    },
  ];

  return (
    <section className="relative bg-neutral-100 dark:bg-black text-black dark:text-white pt-24 pb-36 overflow-hidden">

      {/* noise */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[url('/noise.png')] opacity-30 mix-blend-multiply pointer-events-none"
      />

      <div className="max-w-6xl mx-auto px-5 sm:px-6 relative z-20">

        {/* TITLE */}
        <div className="relative inline-block mb-14 sm:mb-20">
          <img
            src="/torn-paper.png"
            className="hidden sm:block absolute -top-10 -left-10 w-[150%] opacity-50 rotate-[3deg]"
            aria-hidden="true"
          />

          <h1 className="relative text-4xl sm:text-6xl md:text-7xl font-black uppercase leading-[0.9] rotate-[-3deg] tracking-tight">
            Projects
          </h1>

          <div className="absolute -bottom-3 left-2 h-[6px] sm:h-[8px] w-40 sm:w-60 bg-red-600 rotate-[-6deg]" />
        </div>

        {/* LIST */}
        <div className="grid grid-cols-12 gap-6 sm:gap-10">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              style={{
                rotate: window.innerWidth < 640 ? "0deg" : p.rotate,
              }}
              className="col-span-12 sm:col-span-6 lg:col-span-4 relative"
            >

              {/* Torn background strip */}
              <img
                src="/torn-strip.png"
                aria-hidden="true"
                className="absolute -top-4 left-0 w-[100%] opacity-40 rotate-[1deg] hidden sm:block"
              />

              {/* CARD */}
              <div className="relative border-4 border-black dark:border-white bg-white dark:bg-neutral-900 
                shadow-[5px_5px_0px_black] dark:shadow-[5px_5px_0px_white] 
                p-4 sm:p-5">

                {/* IMAGE */}
                <div className="relative border-4 border-black dark:border-white overflow-hidden rotate-[1deg]">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-44 sm:h-48 md:h-52 object-cover grayscale contrast-125"
                  />

                  {/* YEAR TAG */}
                  <span className="absolute bottom-2 left-2 bg-[#FFEA00] font-black text-[10px] sm:text-xs px-2 py-1 
                    border-2 border-black rotate-[-3deg]">
                    {p.year}
                  </span>
                </div>

                {/* TEXT CONTENT */}
                <h3 className="mt-4 text-xl sm:text-2xl font-black uppercase">
                  {p.title}
                </h3>

                <p className="text-sm sm:text-[15px] opacity-80 mt-1 leading-snug">
                  {p.desc}
                </p>

                {/* STRIP LABEL */}
                <div className="mt-3 relative">
                  <img
                    src="/torn-paper-small.png"
                    className="absolute -top-1 left-0 w-[110%] opacity-30 rotate-[1deg] pointer-events-none hidden sm:block"
                    aria-hidden="true"
                  />
                  <p className="relative font-bold uppercase text-[10px] sm:text-[11px] tracking-wide">
                    {p.strip}
                  </p>
                </div>

                {/* BUTTON */}
                <a
                  href={p.url}
                  className="inline-block mt-4 sm:mt-5 px-4 sm:px-5 py-2 border-4 border-black dark:border-white 
                    bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white 
                    font-bold uppercase text-xs sm:text-sm rotate-[-1deg]
                    shadow-[4px_4px_0px_black] dark:shadow-[4px_4px_0px_white]
                    hover:translate-x-[3px] hover:translate-y-[3px] transition-transform"
                >
                  View Project
                </a>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
