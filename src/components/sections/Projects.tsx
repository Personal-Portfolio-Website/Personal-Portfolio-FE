import Link from "next/link";
import { PROJECTS } from "@/data/projects";

const CATEGORIES = ["Full-Stack Systems", "Java OOP & LAB211 Lab"] as const;

export default function Projects() {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto w-full">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-zinc-300 text-xs font-semibold tracking-widest uppercase font-mono">
          Featured Work & Solutions
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-zinc-100 to-zinc-300 bg-clip-text text-transparent mt-2 drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]">
          Projects & Engineering Lab
        </h1>
        <p className="mt-4 text-zinc-300 text-base">
          From full-stack production systems to core Java architecture labs.
        </p>
      </div>

      {/* Grouped Categories */}
      <div className="space-y-16">
        {CATEGORIES.map((category) => {
          const categoryProjects = PROJECTS.filter((p) => p.category === category);
          if (categoryProjects.length === 0) return null;

          return (
            <div key={category} className="space-y-6">
              <div className="flex items-center gap-3 border-b border-zinc-800/80 pb-3">
                <div className="h-2 w-2 rounded-full bg-zinc-300" />
                <h2 className="text-xl font-bold text-zinc-100">
                  {category}
                </h2>
                <span className="text-xs text-zinc-400 font-mono">
                  ({categoryProjects.length})
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryProjects.map((project) => (
                  <div
                    key={project.id}
                    className="flex flex-col justify-between p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-500/50 transition-all duration-200 ease-out hover:-translate-y-0.5 backdrop-blur-md"
                  >
                    <div>
                      <h3 className="text-lg font-bold text-zinc-100 tracking-tight mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                        {project.description}
                      </p>
                    </div>

                    <div>
                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 text-xs font-mono font-medium text-zinc-300 bg-zinc-900 border border-zinc-800 rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Action Links */}
                      <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-zinc-800/80 text-sm">
                        {project.frontendUrl && (
                          <a
                            href={project.frontendUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-300 hover:text-white font-medium transition-colors duration-200"
                          >
                            FE Code &rarr;
                          </a>
                        )}
                        {project.backendUrl && (
                          <a
                            href={project.backendUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-300 hover:text-white font-medium transition-colors duration-200"
                          >
                            BE Code &rarr;
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-300 hover:text-white font-medium transition-colors duration-200"
                          >
                            Source Code &rarr;
                          </a>
                        )}
                        {project.demoUrl && (
                          <Link
                            href={project.demoUrl}
                            className="text-zinc-300 hover:text-white font-medium transition-colors duration-200"
                          >
                            Live Demo &rarr;
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}