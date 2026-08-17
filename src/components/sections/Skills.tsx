import { SKILL_CATEGORIES } from "@/data/skills";

export default function Skills() {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto w-full">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">
          Technical Arsenal
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-white mt-2">
          Skills & Technologies
        </h1>
        <p className="mt-4 text-slate-400 text-base">
          The languages, frameworks, and engineering tools I leverage to build scalable web applications.
        </p>
      </div>

      {/* Grid Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SKILL_CATEGORIES.map((category, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-slate-800/40 border border-slate-700/60 hover:border-cyan-500/40 transition-all hover:-translate-y-1 backdrop-blur-sm"
          >
            <h2 className="text-xl font-bold text-white mb-2">
              {category.title}
            </h2>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              {category.description}
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs font-medium text-cyan-300 bg-cyan-950/40 border border-cyan-800/50 rounded-lg hover:border-cyan-400/60 transition-colors"
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