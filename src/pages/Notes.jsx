import { useMemo, useState } from "react";
import { motion } from "framer-motion";

const NOTES = [
  {
    slug: "brutalism-as-a-system",
    title: "Brutalism as a System, not a Style",
    date: "2025-01-10",
    tags: ["design", "system", "ui"],
    summary:
      "Nega brutal UI faqat 'qalin border + qora-oq' emas, balki fikrlash uslubi ekanini yozganman.",
  },
  {
    slug: "backend-as-lego",
    title: "Backend Architecture as Lego Blocks",
    date: "2025-01-05",
    tags: ["backend", "go", "architecture"],
    summary:
      "Go servislarni kichik bloklarga bo‘lib o‘ylash, modul, boundary va coupling haqida qisqa note.",
  },
  {
    slug: "rat-race-memo",
    title: "Mini Memo: Rat Race’dan Qochish",
    date: "2024-12-28",
    tags: ["life", "mindset"],
    summary:
      "Ish, pul, erkinlik balansi, 'faqat ko‘proq ishlab bo‘lsa bo‘ldi' mentalitetini sindirish haqida.",
  },
  {
    slug: "shipping-ugly",
    title: "Ship Ugly, Learn Fast",
    date: "2024-12-20",
    tags: ["product", "startup"],
    summary:
      "Chiroyli qilaman deb boshlamasdan, ishlaydiganini tezroq chiqarish haqida kichik zarba.",
  },
];

const TAGS = ["all", "design", "system", "ui", "backend", "go", "architecture", "life", "mindset", "product", "startup"];

export default function Notes() {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState("all");

  const filteredNotes = useMemo(() => {
    return NOTES.filter((note) => {
      const q = query.toLowerCase();
      const matchesQuery =
        !q ||
        note.title.toLowerCase().includes(q) ||
        note.summary.toLowerCase().includes(q) ||
        note.tags.some((t) => t.toLowerCase().includes(q));

      const matchesTag =
        activeTag === "all" || note.tags.map((t) => t.toLowerCase()).includes(activeTag.toLowerCase());

      return matchesQuery && matchesTag;
    });
  }, [query, activeTag]);

  return (
    <section className="relative bg-neutral-100 dark:bg-black text-black dark:text-white pt-24 pb-32 overflow-hidden">
      {/* Noise */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[url('/noise.png')] opacity-25 mix-blend-multiply pointer-events-none"
      />

      <div className="max-w-6xl mx-auto px-5 sm:px-6 relative z-20">
        {/* TITLE */}
        <div className="relative mb-10 sm:mb-14">
          <pre
            aria-hidden="true"
            className="absolute -top-10 -left-1 text-[9px] sm:text-[10px] opacity-25 leading-none pointer-events-none select-none"
          >{`//// NOTES INDEX
//  AZAMAT UNIVERSE
///////////////////`}</pre>

          <h1 className="relative text-4xl sm:text-5xl md:text-6xl font-black uppercase leading-[0.9] tracking-tight">
            Notes  
            <br />
            & Logs
          </h1>

          <div className="absolute -bottom-2 left-1 h-[5px] w-40 sm:w-56 bg-red-600 rotate-[-4deg]" />
        </div>

        {/* SUBTEXT */}
        <p className="text-base sm:text-lg font-semibold max-w-xl opacity-85 mb-8">
          Bu yer blog emas. Bu yer — log. Fikrlar, konseptlar, darslar va jarayon orasida yozilgan qisqa yozuvlar.
        </p>

        {/* SEARCH + TAGS BAR */}
        <div className="border-4 border-black dark:border-white bg-white dark:bg-neutral-900 p-4 sm:p-5 mb-10 shadow-[6px_6px_0px_black] dark:shadow-[6px_6px_0px_white]">
          <div className="flex flex-col gap-4 sm:gap-3">
            {/* “/notes” fake CLI */}
            <div className="font-mono text-[11px] sm:text-xs flex flex-wrap items-center gap-2">
              <span className="font-black uppercase px-2 py-1 border-2 border-black dark:border-white">
                /notes
              </span>
              <span className="opacity-70">
                type to filter: <span className="italic">design, backend, product...</span>
              </span>
            </div>

            {/* Search input */}
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by keyword or tag…"
              className="w-full border-2 border-black dark:border-white bg-neutral-100 dark:bg-neutral-800 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-red-500"
            />

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {TAGS.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setActiveTag(tag)}
                  className={`px-3 py-1 text-[11px] font-black uppercase border-2 border-black dark:border-white
                    ${
                      activeTag === tag
                        ? "bg-black text-white dark:bg-white dark:text-black"
                        : "bg-neutral-100 dark:bg-neutral-800 text-black dark:text-white"
                    }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* NOTES LIST */}
        <div className="grid grid-cols-12 gap-6 sm:gap-8">
          {filteredNotes.length === 0 && (
            <div className="col-span-12 text-sm sm:text-base font-mono opacity-70">
              No notes match this filter. Balki keyin yozarman.
            </div>
          )}

          {filteredNotes.map((note, idx) => (
            <motion.article
              key={note.slug}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="col-span-12 md:col-span-6 lg:col-span-4"
            >
              <div className="relative border-4 border-black dark:border-white bg-white dark:bg-neutral-900 p-4 sm:p-5 shadow-[5px_5px_0px_black] dark:shadow-[5px_5px_0px_white]">
                {/* Date + tags line */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2 text-[11px] sm:text-xs font-mono">
                  <span>{note.date}</span>
                  <span className="opacity-70">
                    {note.tags.join(" • ")}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-lg sm:text-xl font-black uppercase leading-snug mb-2">
                  {note.title}
                </h2>

                {/* Summary */}
                <p className="text-sm opacity-80 leading-relaxed mb-4">
                  {note.summary}
                </p>

                {/* Fake link / placeholder */}
                <div className="flex items-center justify-between text-[11px] sm:text-xs font-mono">
                  <span className="opacity-60">slug: {note.slug}</span>
                  <span className="px-2 py-1 border-2 border-black dark:border-white uppercase font-black">
                    Soon
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <p className="mt-10 text-[11px] sm:text-xs opacity-60 font-mono">
          PLAN: keying bosqichda har bir note uchun alohida /notes/[slug] sahifa qilinadi.
        </p>
      </div>
    </section>
  );
}
