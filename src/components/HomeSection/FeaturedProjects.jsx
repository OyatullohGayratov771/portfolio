import { Link } from "react-router-dom";

export function FeaturedProjects() {
  const items = [
    {
      title: "Goyatulloh",
      desc: "Creative software built with modern, bold UI.",
      image: "/project1.jpg",
      link: "/projects/goyatulloh",
      rotate: "-2deg",
    },
    {
      title: "Manimal Store",
      desc: "Minimalist lifestyle brand with identity.",
      image: "/project2.jpg",
      link: "/projects/manimal",
      rotate: "2deg",
    },
  ];

  return (
    <section className="mt-20 grid grid-cols-12 gap-8">
      {items.map((p, i) => (
        <div
          key={i}
          className="col-span-12 md:col-span-6 relative"
          style={{ transform: `rotate(${p.rotate})` }}
        >
          {/* Torn background */}
          <img
            src="/torn-paper.png"
            className="absolute -top-4 -left-4 w-[110%] opacity-50 dark:opacity-30 pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative border-4 border-black dark:border-white p-5 bg-white dark:bg-black">
            <img
              src={p.image}
              className="w-full h-48 object-cover grayscale contrast-125"
            />

            <h3 className="mt-4 text-xl font-black uppercase">{p.title}</h3>
            <p className="text-sm mt-2 opacity-80">{p.desc}</p>

            <Link
              to={p.link}
              className="inline-block mt-4 border-4 border-black dark:border-white px-4 py-2 
              text-sm font-bold uppercase bg-neutral-100 dark:bg-neutral-900
              shadow-[4px_4px_0px_0px_black] dark:shadow-[4px_4px_0px_0px_white]"
            >
              Read More
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}
