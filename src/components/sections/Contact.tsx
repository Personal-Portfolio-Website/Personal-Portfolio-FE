import { CONTACT_CHANNELS } from "@/data/contact";

export default function Contact() {
  return (
    <section className="py-16 px-6 max-w-4xl mx-auto w-full">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-zinc-300 text-xs font-semibold tracking-widest uppercase font-mono">
          Let&apos;s Connect
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-zinc-100 to-zinc-300 bg-clip-text text-transparent mt-2 drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]">
          Get in Touch
        </h1>
        <p className="mt-4 text-zinc-300 text-base">
          Whether you have an engineering opportunity, a technical discussion, or need dedicated Java LAB211 mentoring, feel free to reach out.
        </p>
      </div>

      {/* Contact Cards Grid (2x2 Layout) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {CONTACT_CHANNELS.map((channel, idx) => (
          <a
            key={idx}
            href={channel.href}
            target={channel.href.startsWith("http") ? "_blank" : undefined}
            rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="group p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-500/50 transition-all duration-200 ease-out hover:-translate-y-0.5 backdrop-blur-md flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <h2 className="text-lg font-bold text-zinc-100 group-hover:text-white transition-colors">
                  {channel.label}
                </h2>
                <span className="text-zinc-400 group-hover:text-white group-hover:translate-x-1 transition-all text-sm font-mono">
                  &rarr;
                </span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed mb-4">
                {channel.description}
              </p>
            </div>

            <div className="pt-3 border-t border-zinc-800/80">
              <span className="text-sm font-mono text-zinc-200 font-medium break-all">
                {channel.value}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}