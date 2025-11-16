export function SkillPoster() {
  const skills = [
    "React / JavaScript / Tailwind",
    "Go / REST APIs / Backend",
    "UI / Branding / Motion",
  ];

  return (
    <section className="mt-24 grid grid-cols-12 gap-6">
      {skills.map((s, i) => (
        <div
          key={i}
          className="col-span-12 md:col-span-4 border-4 border-black dark:border-white 
          p-6 bg-neutral-100 dark:bg-neutral-900 rotate-[-1deg]"
        >
          <p className="text-lg uppercase font-black">{s}</p>
        </div>
      ))}
    </section>
  );
}
