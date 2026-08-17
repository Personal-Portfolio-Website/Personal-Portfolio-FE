import Link from "next/link";

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center text-center px-6 py-12 max-w-4xl mx-auto"
    >
      {/* Badge / Status Tag */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-cyan-400 text-xs font-medium mb-6">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
        Available for Internships & Projects
      </div>

      {/* Main Heading */}
      <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
        Building Scalable Software with{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          Passion & Precision.
        </span>
      </h1>

      {/* Slogan & Description */}
      <div className="mt-6 max-w-2xl">
        <p className="text-lg sm:text-xl font-medium italic text-cyan-400">
          &ldquo;Strategy wins both on the board and in code.&rdquo;
        </p>
        <p className="mt-3 text-base sm:text-lg text-slate-400 leading-relaxed">
          I&apos;m a Software Engineering student passionate about crafting clean full-stack applications, exploring system architectures, and learning by doing.
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="#projects"
          className="px-6 py-3 text-sm font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-lg shadow-cyan-500/20 transition-all hover:scale-105"
        >
          Explore Projects
        </Link>
        <Link
          href="#contact"
          className="px-6 py-3 text-sm font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-all hover:scale-105"
        >
          Contact Me
        </Link>
      </div>
    </section>
  );
}