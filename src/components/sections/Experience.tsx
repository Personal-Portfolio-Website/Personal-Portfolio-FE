import { EXPERIENCES } from "@/data/experience";

export default function Experience() {
  return (
    <section className="py-16 px-6 max-w-4xl mx-auto w-full">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-zinc-300 text-xs font-semibold tracking-widest uppercase font-mono">
          Milestones & Track Record
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-zinc-100 to-zinc-300 bg-clip-text text-transparent mt-2 drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]">
          Experience & Milestones
        </h1>
        <p className="mt-4 text-zinc-300 text-base">
          My academic journey, teaching leadership, and national competitive achievements.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative border-l border-zinc-800/80 ml-4 md:ml-8 space-y-12">
        {EXPERIENCES.map((exp, idx) => (
          <div key={idx} className="relative pl-8 md:pl-10">
            {/* Timeline Dot */}
            <div className="absolute -left-2.5 top-1.5 h-5 w-5 rounded-full border-4 border-zinc-950 bg-zinc-100 shadow-md shadow-white/10" />

            <div className="p-6 md:p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-500/50 transition-all duration-200 ease-out backdrop-blur-md">
              <span className="inline-block px-3 py-1 mb-3 text-xs font-mono font-semibold text-zinc-300 bg-zinc-900 border border-zinc-800 rounded-full">
                {exp.period}
              </span>

              <h2 className="text-xl font-bold text-zinc-100 tracking-tight">
                {exp.role}
              </h2>
              <p className="text-sm font-medium text-zinc-300 mt-1 mb-4">
                {exp.organization}
              </p>

              <p className="text-sm text-zinc-300 leading-relaxed mb-4">
                {exp.description}
              </p>

              {/* Achievements */}
              <ul className="space-y-2 mb-6">
                {exp.achievements.map((item, i) => (
                  <li key={i} className="text-sm text-zinc-300 flex items-start gap-2">
                    <span className="text-zinc-400 mt-0.5">&bull;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800/80">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs font-mono font-medium text-zinc-300 bg-zinc-900 border border-zinc-800 rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}