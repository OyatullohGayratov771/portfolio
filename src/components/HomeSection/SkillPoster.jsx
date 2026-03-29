const SKILLS = [
  {
    category: "Frontend",
    items: ["React", "JavaScript", "Tailwind CSS", "Framer Motion"],
    rotate: "-1deg",
  },
  {
    category: "Backend",
    items: ["Go", "REST APIs", "PostgreSQL", "Docker"],
    rotate: "1.5deg",
  },
  {
    category: "Design & Brand",
    items: ["UI Design", "Brutalism", "Motion", "Identity"],
    rotate: "-0.5deg",
  },
];

export function SkillPoster() {
  return (
    <section className="mt-20 sm:mt-24">
      <h2 className="text-2xl sm:text-4xl font-black uppercase mb-6 sm:mb-8">
        Skills
      </h2>

      <div className="grid grid-cols-12 gap-5 sm:gap-6">
        {SKILLS.map((skill, i) => (
          <div
            key={i}
            style={{ rotate: skill.rotate }}
            className="col-span-12 md:col-span-4 border-4 border-black dark:border-white
            bg-neutral-100 dark:bg-neutral-900
            p-5 sm:p-6
            shadow-[4px_4px_0px_black] dark:shadow-[4px_4px_0px_white]"
          >
            <p className="text-[10px] sm:text-xs font-black uppercase tracking-widest opacity-50 mb-3">
              {skill.category}
            </p>
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item) => (
                <span
                  key={item}
                  className="px-2.5 py-1 border-2 border-black dark:border-white
                  text-[11px] sm:text-xs font-bold uppercase
                  bg-white dark:bg-black"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
