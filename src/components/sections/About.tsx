import { HighlightItem } from "@/types";

const HIGHLIGHTS: HighlightItem[] = [
  {
    title: "Clean Architecture",
    description:
      "Focus on decoupled systems, SOLID principles, and maintainable codebase.",
  },
  {
    title: "Strategic Thinking",
    description:
      "Approaching engineering challenges with methodical planning and analytical logic.",
  },
  {
    title: "Continuous Learner",
    description:
      "Constantly exploring modern frameworks, cloud patterns, and software design.",
  },
];

export default function About() {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto w-full">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white via-zinc-100 to-zinc-300 bg-clip-text text-transparent pb-3 leading-tight drop-shadow-[0_0_25px_rgba(255,255,255,0.2)]">
          Bui Nguyen Nhat Minh
        </h1>

        <p className="text-lg sm:text-xl font-medium italic text-zinc-300">
          &ldquo;Strategy wins both on the board and in code.&rdquo;
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Detailed Bio */}
        <div className="lg:col-span-6 space-y-6 text-zinc-300 leading-relaxed text-base sm:text-lg">
          <p>
            I am a Software Engineering student focused on building scalable,
            end-to-end web applications. My foundation is built on modern
            frontend ecosystems like Next.js and robust backend frameworks like
            Spring Boot.
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
              className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-500/50 transition-all duration-200 ease-out hover:-translate-y-0.5 backdrop-blur-md shadow-sm"
            >
              <h2 className="text-lg font-bold text-zinc-100 mb-1.5">
                {item.title}
              </h2>
              <p className="text-sm text-zinc-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
