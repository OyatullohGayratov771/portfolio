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
    },
    {
      title: "Manimal Store",
      desc: "Minimalist lifestyle brand — clean identity, bold visuals.",
      tag: "Brand & E-commerce",
      image: "/project2.jpg",
      link: "/projects/manimal",
      rotate: "2deg",
    },
  ];

  return (
    <section className="mt-24">
      <h2 className="text-3xl md:text-5xl font-black uppercase mb-10">
        Featured Projects
      </h2>

      <div className="grid grid-cols-12 gap-10">
        {items.map((p, i) => (
          <div
            key={i}
            className="col-span-12 md:col-span-6 relative transition-transform hover:scale-[1.01]"
            style={{ transform: `rotate(${p.rotate})` }}
          >
            {/* Torn background (collage layer) */}
            <img
              src="/torn-paper.png"
              aria-hidden="true"
              className="absolute -top-6 -left-6 w-[120%] opacity-50 dark:opacity-30 pointer-events-none"
            />

            {/* Card */}
            <div className="relative border-4 border-black dark:border-white bg-white dark:bg-black p-5 shadow-[6px_6px_0px_0px_black] dark:shadow-[6px_6px_0px_0px_white]">
              
              {/* Tag */}
              <span className="inline-block bg-[#FFEA00] text-black px-3 py-1 text-xs font-black uppercase border-2 border-black dark:border-white rotate-[-1deg]">
                {p.tag}
              </span>

              {/* Image */}
              <div className="overflow-hidden mt-3 border-2 border-black dark:border-white">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-48 object-cover grayscale contrast-[1.25] hover:grayscale-0 transition-all duration-300"
                />
              </div>

              {/* Title */}
              <h3 className="mt-4 text-2xl font-black uppercase">{p.title}</h3>

              {/* Description */}
              <p className="text-sm opacity-80 mt-2">{p.desc}</p>

              {/* CTA */}
              <Link
                to={p.link}
                className="inline-block mt-5 border-4 border-black dark:border-white px-4 py-2
                text-sm font-bold uppercase bg-neutral-100 dark:bg-neutral-900
                shadow-[4px_4px_0px_0px_black] dark:shadow-[4px_4px_0px_0px_white]
                rotate-[-1deg] hover:translate-x-[3px] hover:translate-y-[3px] transition-transform"
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
