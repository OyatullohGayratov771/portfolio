export function NowBuilding() {
  const items = [
    {
      name: "Goyatulloh",
      desc: "Creative software with brutalist design.",
      status: "Active",
      statusColor: "bg-green-500",
    },
    {
      name: "Manimal Store",
      desc: "Visual identity & e-commerce brand.",
      status: "Ongoing",
      statusColor: "bg-yellow-400",
    },
    {
      name: "Azamat Universe",
      desc: "Personal digital system & design language.",
      status: "Planning",
      statusColor: "bg-red-500",
    },
  ];

  return (
    <section className="mt-20 sm:mt-24">
      <div className="flex items-baseline gap-4 mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-4xl font-black uppercase">
          Now Building
        </h2>
        <span className="flex items-center gap-1.5 text-xs font-bold uppercase opacity-70">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse inline-block" />
          Live
        </span>
      </div>

      <div className="grid grid-cols-12 gap-4 sm:gap-5">
        {items.map((item, i) => (
          <div
            key={i}
            className="col-span-12 sm:col-span-4 border-2 border-black dark:border-white
            bg-white dark:bg-neutral-900
            p-4 sm:p-5
            shadow-[3px_3px_0px_black] dark:shadow-[3px_3px_0px_white]"
          >
            <div className="flex items-center justify-between mb-2">
              <span className={`w-2 h-2 rounded-full ${item.statusColor}`} />
              <span className="text-[10px] font-black uppercase opacity-60 font-mono">
                {item.status}
              </span>
            </div>
            <p className="font-black uppercase text-sm sm:text-base">{item.name}</p>
            <p className="text-xs opacity-70 mt-1 leading-snug">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
