import { HighlightItem } from '@/types';
const HIGHLIGHTS: HighlightItem[] = [
    {
    title: "Clean Architecture",
    description: "Focus on decoupled systems, SOLID principles, and maintainable codebase.",
  },
  {
    title: "Strategic Thinking",
    description: "Approaching engineering challenges with methodical planning and analytical logic.",
  },
  {
    title: "Continuous Learner",
    description: "Constantly exploring modern frameworks, cloud patterns, and software design.",
  },
];

export default function About() {
    return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto border-t border-slate-800">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">
          About Me
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
          Driven by curiosity, shaped by engineering discipline.
        </h2>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Narrative Bio */}
        <div className="space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg">
          <p>
            I am a Software Engineering student focused on building scalable, end-to-end web applications. My foundation is built on modern frontend ecosystems like Next.js and robust backend frameworks like Spring Boot.
          </p>
          <p className="text-slate-400">
            I believe writing code is much like playing chess: every component, class, and architectural decision requires foresight and tactical execution. My goal is to bridge thoughtful design with performant, reliable software.
          </p>
        </div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 gap-4">
          {HIGHLIGHTS.map((item, index) => (
            <div
              key={index}
              className="p-5 rounded-xl bg-slate-800/50 border border-slate-700/60 hover:border-cyan-500/50 transition-all hover:translate-x-1"
            >
              <h3 className="text-lg font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-1.5 text-sm text-slate-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}