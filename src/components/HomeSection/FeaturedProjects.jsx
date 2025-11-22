import { Link } from "react-router-dom";

export function FeaturedProjects() {
  const items = [
    {
      title: "Goyatulloh",
      desc: "Creative software with a bold brutalist UI aesthetic.",
      tag: "Software Project",
      image: "/project1.jpg",
      link: "/projects/goyatulloh",
      rotate: "-2deg",
      rotateClass: "md:-rotate-2",
    },
    {
      title: "Manimal Store",
      desc: "Minimalist lifestyle brand — clean identity, bold visuals.",
      tag: "Brand & E-commerce",
      image: "/project2.jpg",
      link: "/projects/manimal",
      rotate: "2deg",
      rotateClass: "md:rotate-2",
    },
  ];

  return (
    <section className="mt-16 sm:mt-20">
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase mb-6 sm:mb-10">
        Featured Projects
      </h2>

      <div className="grid grid-cols-12 gap-6 sm:gap-8">
        {items.map((p, i) => (
          <div
            key={i}
            className={`col-span-12 md:col-span-6 relative transition-transform hover:scale-[1.01] ${p.rotateClass}`}
          >
            {/* Torn background (collage layer) */}
            <img
              src="/torn-paper.png"
              aria-hidden="true"
              className="absolute -top-4 -left-3 w-[110%] sm:w-[120%] opacity-40 dark:opacity-30
              pointer-events-none hidden sm:block"
            />

            {/* Card */}
            <div
              className="relative border-[3px] sm:border-4 border-black dark:border-white
              bg-white dark:bg-black
              p-4 sm:p-5
              shadow-[4px_4px_0px_0px_black] dark:shadow-[4px_4px_0px_0px_white]"
            >
              {/* Tag */}
              <span
                className="inline-block bg-[#FFEA00] text-black
                px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs
                font-black uppercase border-2 border-black dark:border-white
                -rotate-1"
              >
                {p.tag}
              </span>

              {/* Image */}
              <div className="overflow-hidden mt-3 border-2 border-black dark:border-white">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-40 sm:h-48 object-cover grayscale contrast-[1.25] hover:grayscale-0 transition-all duration-300"
                />
              </div>

              {/* Title */}
              <h3 className="mt-4 text-xl sm:text-2xl font-black uppercase leading-tight">
                {p.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm opacity-80 mt-2 leading-relaxed">
                {p.desc}
              </p>

              {/* CTA */}
              <Link
                to={p.link}
                className="inline-block w-full sm:w-auto mt-4 sm:mt-5
                border-[3px] sm:border-4 border-black dark:border-white
                px-4 py-2 text-xs sm:text-sm font-bold uppercase
                bg-neutral-100 dark:bg-neutral-900
                shadow-[3px_3px_0px_0px_black] dark:shadow-[3px_3px_0px_0px_white]
                -rotate-1 hover:translate-x-[3px] hover:translate-y-[3px] transition-transform text-center"
              >
                View Case Study →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
