export default function About() {
  return (
    <section id="about" className="py-28 px-6 bg-cream dark:bg-base text-base dark:text-cream transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-14 md:gap-20">

        {/* Profile Image */}
        <div className="relative shrink-0">
          <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border border-muted/40 dark:border-sand/30">
            <img
              src="https://avatars.githubusercontent.com/u/0?v=4"
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="max-w-xl">
          <h2 className="text-3xl sm:text-4xl font-semibold leading-snug">
            Gayratov Oyatulloh
          </h2>

          <p className="mt-5 text-muted dark:text-sand leading-relaxed">
            Frontend Developer. Minimal UI/UX ishqibozi. Murakkab fikrlarni sodda,
            ammo chuqur va toza interfeyslarga aylantiraman.
          </p>

          <p className="mt-3 text-muted dark:text-sand leading-relaxed">
            Asosiy yo‘nalishlar:
            <span className="text-base dark:text-cream font-medium"> React, TailwindCSS, Vite</span>.
            Estetika + funksionallik balansini qadrlayman.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="px-6 py-2 rounded-full border border-muted dark:border-sand
              hover:bg-base hover:text-cream dark:hover:bg-cream dark:hover:text-base 
              transition-colors duration-300"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-2 rounded-full border border-muted dark:border-sand
              hover:bg-base hover:text-cream dark:hover:bg-cream dark:hover:text-base 
              transition-colors duration-300"
            >
              Contact
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
