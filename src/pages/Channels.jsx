import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Channels() {
  const channels = [
    {
      title: "Telegram — Dev Notes",
      desc: "Quick thoughts, code tips, and creative fragments.",
      link: "/channels/telegram",
      image: "/project1.jpg",
      code: "TG-01",
    },
    {
      title: "YouTube — Raw Talks",
      desc: "Long-form chaos about design, dev & business.",
      link: "/channels/youtube",
      image: "/project1.jpg",
      code: "YT-02",
    },
    {
      title: "Instagram — Visual Log",
      desc: "A collage-based archive of my experiments.",
      link: "/channels/instagram",
      image: "/project1.jpg",
      code: "IG-03",
    },
  ];

  return (
    <section
      className="relative bg-neutral-100 dark:bg-black text-black dark:text-white
      pt-20 sm:pt-24 md:pt-28 pb-24 sm:pb-32 md:pb-36 overflow-hidden"
    >
      {/* Background Texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[url('/noise.png')] opacity-30 pointer-events-none mix-blend-multiply"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-20">
        {/* PAGE TITLE */}
        <div className="relative mb-10 sm:mb-16">
          {/* ASCII BLOCK BEHIND */}
          <pre
            aria-hidden="true"
            className="absolute -top-10 -left-2 text-[8px] sm:text-[10px] opacity-20 dark:opacity-15 pointer-events-none select-none leading-none"
          >{`/\/\/\/\/\////////////////
///////////////////////
//// CHANNEL LOG ///////
///////////////////////`}</pre>

          <h1
            className="relative font-black uppercase tracking-tight leading-[0.9]
            text-[2.2rem] sm:text-[3rem] md:text-[3.8rem]"
          >
            Channel
            <br />
            Directory
          </h1>

          <div className="absolute -bottom-2 left-1 h-[4px] sm:h-[5px] w-40 sm:w-52 bg-black dark:bg-white rotate-[-3deg]" />
        </div>

        {/* SUBTEXT */}
        <p className="max-w-xl text-sm sm:text-base md:text-lg opacity-80 mb-8 sm:mb-12 font-semibold">
          A network of my digital output. Raw content. No filters.
        </p>

        {/* CHANNEL GRID */}
        <div className="grid grid-cols-12 gap-6 sm:gap-8 md:gap-10">
          {channels.map((ch, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.12 }}
              className="relative col-span-12 sm:col-span-6 lg:col-span-4"
            >
              {/* Border Frame */}
              <div
                className="relative border-[3px] sm:border-4 border-black dark:border-white
                bg-white dark:bg-neutral-900
                p-4 sm:p-5
                shadow-[4px_4px_0px_black] dark:shadow-[4px_4px_0px_white]"
              >
                {/* TOP CODE STRIP */}
                <div className="flex justify-between items-center mb-3 sm:mb-4">
                  <span className="font-black text-xs sm:text-sm tracking-widest">
                    {ch.code}
                  </span>
                  <span className="font-black text-[10px] sm:text-xs opacity-60">
                    /log-active
                  </span>
                </div>

                {/* Image */}
                <div className="relative border-[3px] sm:border-4 border-black dark:border-white md:rotate-[1.5deg] overflow-hidden">
                  <img
                    src={ch.image}
                    alt={ch.title}
                    className="w-full h-36 sm:h-44 object-cover grayscale contrast-125"
                    loading="lazy"
                  />
                </div>

                {/* Title */}
                <h3 className="mt-3 sm:mt-4 text-lg sm:text-xl font-black uppercase tracking-tight">
                  {ch.title}
                </h3>

                {/* Desc */}
                <p className="mt-2 text-xs sm:text-sm opacity-75 leading-relaxed">
                  {ch.desc}
                </p>

                {/* ASCII Bottom Label */}
                <pre
                  aria-hidden="true"
                  className="mt-3 sm:mt-4 text-[8px] sm:text-[9px] opacity-40 leading-none select-none pointer-events-none"
                >{`[=========  ${ch.code}  =========]`}</pre>

                {/* Button */}
                <Link
                to={ch.link}
                className="inline-block w-full sm:w-auto mt-4 sm:mt-6
                px-4 py-2 border-[3px] sm:border-4 border-black dark:border-white
                bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white
                font-black uppercase text-xs sm:text-sm -rotate-1
                shadow-[3px_3px_0px_black] dark:shadow-[3px_3px_0px_white]
                hover:translate-x-[3px] hover:translate-y-[3px] transition-transform text-center"
              >
                Visit Channel
              </Link>

              </div>

              {/* TERMINAL CORNER */}
              <span
                className="absolute -top-3 -right-3 sm:-top-3.5 sm:-right-3.5
                px-2 py-0.5 sm:py-1 text-[9px] sm:text-[10px] font-black
                bg-black text-white dark:bg-white dark:text-black
                rotate-[3deg] border-2 border-black dark:border-white"
              >
                CH-{i + 1}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
