import Link from "next/link";
import { PROJECTS } from "@/data/projects";

const CATEGORIES = ["Full-Stack Systems", "Java OOP & LAB211 Lab"] as const;

export default function Projects() {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto w-full">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">
          Featured Work & Solutions
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-white mt-2">
          Projects & Engineering Lab
        </h1>
        <p className="mt-4 text-slate-400 text-base">
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
              <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
                <div className="h-2 w-2 rounded-full bg-cyan-400" />
                <h2 className="text-xl font-bold text-slate-200">
                  {category}
                </h2>
                <span className="text-xs text-slate-500 font-mono">
                  ({categoryProjects.length})
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryProjects.map((project) => (
                  <div
                    key={project.id}
                    className="flex flex-col justify-between p-6 rounded-2xl bg-slate-800/40 border border-slate-700/60 hover:border-cyan-500/40 transition-all hover:-translate-y-1 backdrop-blur-sm"
                  >
                    <div>
                      <h3 className="text-lg font-bold text-white tracking-tight mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-slate-400 leading-relaxed mb-6">
                        {project.description}
                      </p>
                    </div>

                    <div>
                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 text-xs font-medium text-slate-300 bg-slate-800 border border-slate-700 rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Action Links */}
                      <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-800 text-sm">
                        {project.frontendUrl && (
                          <a
                            href={project.frontendUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-cyan-400 font-medium transition-colors"
                          >
                            FE Code &rarr;
                          </a>
                        )}
                        {project.backendUrl && (
                          <a
                            href={project.backendUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-cyan-400 font-medium transition-colors"
                          >
                            BE Code &rarr;
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-cyan-400 font-medium transition-colors"
                          >
                            Source Code &rarr;
                          </a>
                        )}
                        {project.demoUrl && (
                          <Link
                            href={project.demoUrl}
                            className="text-slate-400 hover:text-cyan-400 font-medium transition-colors"
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