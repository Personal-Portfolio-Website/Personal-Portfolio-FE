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
    <section className="py-16 px-6 max-w-6xl mx-auto w-full">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        {/* About Me to đùng và chuyển màu neon rực rỡ */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-teal-300 to-fuchsia-500 bg-clip-text text-transparent">
          About Me
        </h1>
        
        {/* Dòng slogan chuyển thành phụ đề tinh gọn bên dưới */}
        <p className="text-lg sm:text-xl font-medium text-slate-300">
          Driven by curiosity, shaped by engineering discipline.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Detailed Bio */}
        <div className="lg:col-span-6 space-y-6 text-slate-300 leading-relaxed text-base sm:text-lg">
          <p>
            I am a Software Engineering student focused on building scalable,
            end-to-end web applications. My foundation is built on modern
            frontend ecosystems like Next.js and robust backend frameworks
            like Spring Boot.
          </p>
          <p>
            I believe writing code is much like playing chess: every component,
            class, and architectural decision requires foresight and tactical
            execution. My goal is to bridge thoughtful design with performant,
            reliable software.
          </p>
        </div>

        {/* Right Column: Key Highlights */}
        <div className="lg:col-span-6 space-y-4">
          {HIGHLIGHTS.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-800/40 border border-slate-700/60 hover:border-cyan-500/40 transition-all backdrop-blur-sm shadow-sm"
            >
              <h2 className="text-lg font-bold text-white mb-1.5">
                {item.title}
              </h2>
              <p className="text-sm text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}