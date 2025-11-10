export default function Hero() {
  return (
    <section className="min-h-[100svh] flex items-center justify-center px-6 bg-cream dark:bg-base text-base dark:text-cream transition-colors duration-300">
      <div className="max-w-2xl text-center select-none">

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
          Gayratov <span className="text-muted dark:text-sand">Oyatulloh</span>
        </h1>

        <p className="text-muted dark:text-sand mt-4 text-lg sm:text-xl">
          Frontend Developer · Clean Interfaces & Clear Logic
        </p>

        <div className="mt-8">
          <a
            href="#projects"
            className="px-8 py-3 rounded-full border border-muted dark:border-sand
            hover:bg-base hover:text-cream dark:hover:bg-cream dark:hover:text-base
            transition-all duration-300 inline-block"
          >
            View Projects
          </a>
        </div>

      </div>
    </section>
  );
}
