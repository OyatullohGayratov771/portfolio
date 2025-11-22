import { motion } from "framer-motion";

export default function TelegramChannel() {
  return (
    <section className="relative bg-neutral-100 dark:bg-black text-black dark:text-white pt-24 pb-32 overflow-hidden">

      {/* Noise */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[url('/noise.png')] opacity-25 mix-blend-multiply pointer-events-none"
      />

      <div className="max-w-5xl mx-auto px-5 sm:px-6 relative z-20">

        {/* TITLE BLOCK */}
        <div className="relative mb-12 sm:mb-16">
          {/* ASCII header behind */}
          <pre
            aria-hidden="true"
            className="absolute -top-10 -left-2 text-[9px] sm:text-[10px] opacity-25 leading-none pointer-events-none select-none"
          >{`//// TELEGRAM CHANNEL LOG
//  AZAMAT DEV NOTES
/////////////////////`}</pre>

          <h1 className="relative text-4xl sm:text-5xl md:text-6xl font-black uppercase leading-[0.9] tracking-tight">
            Telegram  
            <br />
            Dev Notes
          </h1>

          <div className="absolute -bottom-2 left-1 h-[5px] w-40 sm:w-56 bg-red-600 rotate-[-4deg]" />
        </div>

        {/* SUBTEXT */}
        <p className="text-base sm:text-lg font-semibold max-w-xl opacity-85 mb-10">
          Qisqa fikrlar, backend / frontend snippets, side-project progress va 
          “real vaqt rejimida” bo‘ladigan kashfiyotlarim shu yerda.
        </p>

        {/* MAIN CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative border-4 border-black dark:border-white bg-white dark:bg-neutral-900 p-5 sm:p-7 shadow-[6px_6px_0px_black] dark:shadow-[6px_6px_0px_white]"
        >
          {/* Top meta */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-5 text-xs sm:text-sm font-mono">
            <span className="px-2 py-1 border-2 border-black dark:border-white uppercase font-black">
              CHANNEL: @azamat_dev_notes
            </span>
            <span className="opacity-70">STATUS: ACTIVE / DAILY LOGS</span>
          </div>

          {/* Body split */}
          <div className="grid grid-cols-12 gap-6">
            {/* LEFT SIDE TEXT */}
            <div className="col-span-12 md:col-span-7 space-y-4 text-sm sm:text-[15px] leading-relaxed">
              <p>
                Bu kanal “polished” kontent uchun emas. Bu yer log-faylga o‘xshaydi:
                bugun nimani o‘rgandim, nimani sinab ko‘rdim, nimani buzdim.
              </p>
              <p>
                Stack: <span className="font-semibold">Go, React, Tailwind, Brutal UI, bizness va product fikrlari</span>.  
                Ba’zida random hayot observation’lar, anime’dan iqtibos bo‘lgan fikrlar ham tushib qoladi.
              </p>
              <p>
                Agar men bilan bir xil path’da yurgan bo‘lsang, bu kanal senga “yolg‘iz emassan” degan hisni beradi.
              </p>
            </div>

            {/* RIGHT SIDE BOXES */}
            <div className="col-span-12 md:col-span-5 flex flex-col gap-4 text-xs sm:text-sm">
              {/* Schedule box */}
              <div className="border-2 border-black dark:border-white p-3 bg-neutral-100 dark:bg-neutral-800">
                <p className="font-black uppercase mb-1">Drop Frequency</p>
                <p>• Qisqa yozuvlar – haftasiga bir necha marta</p>
                <p>• Deep thread’lar – kayfiyat va vaqtga qarab</p>
              </div>

              {/* What to expect */}
              <div className="border-2 border-black dark:border-white p-3 bg-neutral-100 dark:bg-neutral-800">
                <p className="font-black uppercase mb-1">Expect:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Real code screenshots & snippets</li>
                  <li>Startup / side-project fikrlari</li>
                  <li>System thinking, habit va mindset notlari</li>
                </ul>
              </div>
            </div>
          </div>

          {/* ASCII divider */}
          <pre
            aria-hidden="true"
            className="mt-5 text-[9px] opacity-40 leading-none pointer-events-none select-none"
          >
{`[================ CHANNEL LINK ================]`}
          </pre>

          {/* CTA BUTTONS */}
          <div className="mt-4 flex flex-wrap gap-4">
            <a
              href="https://t.me/your_channel_here"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2 border-4 border-black dark:border-white bg-neutral-200 dark:bg-neutral-800
              text-black dark:text-white font-black uppercase text-xs sm:text-sm
              shadow-[4px_4px_0px_black] dark:shadow-[4px_4px_0px_white] rotate-[-1deg]
              hover:translate-x-[3px] hover:translate-y-[3px] transition-transform"
            >
              Open Telegram
            </a>

            <button
              type="button"
              className="px-4 py-2 border-2 border-black dark:border-white text-[11px] sm:text-xs font-mono uppercase bg-white dark:bg-black"
            >
              copy link
            </button>
          </div>
        </motion.div>

        {/* FOOTNOTE */}
        <p className="mt-10 text-[11px] sm:text-xs opacity-60 font-mono">
          LOG: this channel is part of the Azamat Universe / content layer.
        </p>
      </div>
    </section>
  );
}
