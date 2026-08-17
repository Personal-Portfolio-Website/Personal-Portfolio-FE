import { EXPERIENCES } from "@/data/experience";

export default function Experience() {
  return (
    <section className="py-16 px-6 max-w-4xl mx-auto w-full">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">
          Milestones & Track Record
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-white mt-2">
          Experience & Milestones
        </h1>
        <p className="mt-4 text-slate-400 text-base">
          My academic journey, teaching leadership, and national competitive achievements.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative border-l border-slate-800 ml-4 md:ml-8 space-y-12">
        {EXPERIENCES.map((exp, idx) => (
          <div key={idx} className="relative pl-8 md:pl-10">
            {/* Timeline Dot */}
            <div className="absolute -left-2.5 top-1.5 h-5 w-5 rounded-full border-4 border-slate-950 bg-cyan-400 shadow-md shadow-cyan-500/20" />

            <div className="p-6 md:p-8 rounded-2xl bg-slate-800/40 border border-slate-700/60 hover:border-cyan-500/40 transition-all backdrop-blur-sm">
              <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold text-cyan-300 bg-cyan-950/50 border border-cyan-800/60 rounded-full">
                {exp.period}
              </span>

              <h2 className="text-xl font-bold text-white tracking-tight">
                {exp.role}
              </h2>
              <p className="text-sm font-medium text-slate-400 mt-1 mb-4">
                {exp.organization}
              </p>

              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                {exp.description}
              </p>

              {/* Achievements */}
              <ul className="space-y-2 mb-6">
                {exp.achievements.map((item, i) => (
                  <li key={i} className="text-sm text-slate-400 flex items-start gap-2">
                    <span className="text-cyan-400 mt-0.5">&bull;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs font-medium text-slate-300 bg-slate-800 border border-slate-700 rounded-md"
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