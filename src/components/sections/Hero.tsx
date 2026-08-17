import Link from "next/link";

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center text-center px-6 py-12 max-w-4xl mx-auto"
    >
      {/* Badge / Status Tag */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-zinc-300 text-xs font-medium mb-6 backdrop-blur-md">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        Available for Internships & Projects
      </div>

      {/* Main Heading */}
      <h1 className="text-4xl sm:text-6xl font-extrabold text-zinc-50 tracking-tight leading-tight">
        Building Scalable Software with{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-100 to-zinc-300 drop-shadow-[0_0_25px_rgba(255,255,255,0.2)]">
          Passion & Precision.
        </span>
      </h1>

      {/* Slogan & Description */}
      <div className="mt-6 max-w-2xl">
        <p className="text-lg sm:text-xl font-medium italic text-zinc-200">
          &ldquo;Driven by curiosity, shaped by engineering discipline.&rdquo;
        </p>
        <p className="mt-3 text-base sm:text-lg text-zinc-300 leading-relaxed">
          I&apos;m a Software Engineering student passionate about crafting clean full-stack applications, exploring system architectures, and learning by doing.
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/projects"
          className="px-6 py-3 text-sm font-semibold text-zinc-950 bg-zinc-100 hover:bg-white rounded-lg shadow-md shadow-white/5 border border-zinc-200 transition-all duration-200 ease-out hover:scale-[1.02] active:scale-[0.98]"
        >
          Explore Projects
        </Link>
        <Link
          href="/contact"
          className="px-6 py-3 text-sm font-semibold text-zinc-200 bg-zinc-900 hover:bg-zinc-800/80 hover:text-white rounded-lg border border-zinc-800 hover:border-zinc-700 transition-all duration-200 ease-out hover:scale-[1.02] active:scale-[0.98]"
        >
          Contact Me
        </Link>
      </div>
    </section>
  );
}