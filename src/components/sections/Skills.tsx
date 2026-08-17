import { SKILL_CATEGORIES } from "@/data/skills";

export default function Skills() {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto w-full">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-zinc-300 text-xs font-semibold tracking-widest uppercase font-mono">
          Technical Arsenal
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-zinc-100 to-zinc-300 bg-clip-text text-transparent mt-2 drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]">
          Skills & Technologies
        </h1>
        <p className="mt-4 text-zinc-300 text-base">
          The languages, frameworks, and engineering tools I leverage to build scalable web applications.
        </p>
      </div>

      {/* Grid Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SKILL_CATEGORIES.map((category, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-500/50 transition-all duration-200 ease-out hover:-translate-y-0.5 backdrop-blur-md"
          >
            <h2 className="text-xl font-bold text-zinc-100 mb-2">
              {category.title}
            </h2>
            <p className="text-sm text-zinc-300 mb-6 leading-relaxed">
              {category.description}
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs font-medium text-zinc-300 bg-zinc-900/80 border border-zinc-800 rounded-lg hover:border-zinc-600 hover:text-zinc-100 transition-all duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}