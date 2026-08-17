import Link from "next/link";
import { ArrowRight, Sparkles, Terminal, Code2, Cpu } from "lucide-react";

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="min-h-[calc(100vh-5rem)] flex flex-col justify-center items-center text-center px-6 py-12 max-w-5xl mx-auto"
    >
      {/* Badge / Status Tag */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-zinc-300 text-xs font-medium mb-8 backdrop-blur-md shadow-lg">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        Available for Internships & Engineering Roles
      </div>

      {/* Main Heading */}
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-none pb-3">
        Building Scalable Systems with{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-100 to-zinc-300 drop-shadow-[0_0_30px_rgba(255,255,255,0.25)]">
          Passion & Precision.
        </span>
      </h1>

      {/* Slogan & Description */}
      <div className="mt-6 max-w-2xl">
        <p className="text-lg sm:text-xl font-medium italic text-zinc-200">
          &ldquo;Driven by curiosity, shaped by engineering discipline.&rdquo;
        </p>
        <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed">
          I&apos;m a Software Engineering student focused on crafting high-performance full-stack web applications, clean system architectures, and reliable backends.
        </p>
      </div>

      {/* Inline Interactive Keyword Badges */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-900/90 border border-zinc-800/80 text-xs font-mono text-zinc-300">
          <Cpu className="w-3.5 h-3.5 text-emerald-400" />
          Next.js App Router
        </span>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-900/90 border border-zinc-800/80 text-xs font-mono text-zinc-300">
          <Terminal className="w-3.5 h-3.5 text-cyan-400" />
          Spring Boot
        </span>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-900/90 border border-zinc-800/80 text-xs font-mono text-zinc-300">
          <Code2 className="w-3.5 h-3.5 text-violet-400" />
          Java Architecture
        </span>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-900/90 border border-zinc-800/80 text-xs font-mono text-zinc-300">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          Tailwind CSS v4
        </span>
      </div>

      {/* CTA Buttons */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/projects"
          className="px-6 py-3 text-sm font-semibold text-zinc-950 bg-zinc-100 hover:bg-white rounded-xl shadow-lg shadow-white/5 border border-zinc-200 transition-all duration-200 ease-out hover:scale-[1.02] active:scale-[0.98] inline-flex items-center gap-2"
        >
          Explore Projects
          <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          href="/contact"
          className="px-6 py-3 text-sm font-semibold text-zinc-200 bg-zinc-900/80 hover:bg-zinc-800 hover:text-white rounded-xl border border-zinc-800 hover:border-zinc-700 transition-all duration-200 ease-out hover:scale-[1.02] active:scale-[0.98]"
        >
          Contact Me
        </Link>
      </div>
    </section>
  );
}