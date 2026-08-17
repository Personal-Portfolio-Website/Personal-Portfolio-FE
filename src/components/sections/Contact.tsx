import { CONTACT_CHANNELS } from "@/data/contact";

export default function Contact() {
  return (
    <section className="py-16 px-6 max-w-4xl mx-auto w-full">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">
          Let&apos;s Connect
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-white mt-2">
          Get in Touch
        </h1>
        <p className="mt-4 text-slate-400 text-base">
          Whether you have an engineering opportunity, a technical discussion, or need dedicated Java LAB211 mentoring, feel free to reach out.
        </p>
      </div>

      {/* Contact Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CONTACT_CHANNELS.map((channel, idx) => (
          <a
            key={idx}
            href={channel.href}
            target={channel.href.startsWith("http") ? "_blank" : undefined}
            rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="group p-6 rounded-2xl bg-slate-800/40 border border-slate-700/60 hover:border-cyan-500/40 transition-all hover:-translate-y-1 backdrop-blur-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <h2 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {channel.label}
                </h2>
                <span className="text-slate-500 group-hover:text-cyan-400 transition-colors text-sm font-mono">
                  &rarr;
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                {channel.description}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-800/80">
              <span className="text-sm font-mono text-cyan-300 font-medium break-all">
                {channel.value}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}