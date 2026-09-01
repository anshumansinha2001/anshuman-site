"use client";

import { ArrowUpRight, Globe, Lock } from "lucide-react";
import { projects } from "@/lib/content";
import { Reveal, SectionHeading } from "./ui";

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative scroll-mt-28 py-24 sm:py-32"
    >
      <div className="container-x">
        <SectionHeading
          id="projects-heading"
          label="Selected projects"
          title="Things I built and"
          accent="ranked"
          intro="Products where I owned both sides — the build and the search strategy. Architecture, templates and metadata designed so organic growth compounds instead of being retrofitted later."
        />

        <div className="mt-14 space-y-5">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={0.05 + i * 0.07}>
              <article className="group relative overflow-hidden rounded-3xl border border-line bg-ink-2/40 transition-all duration-500 hover:border-accent/25">
                {/* hover wash */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/[0.07] via-transparent to-accent-2/[0.05] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                <div className="relative grid gap-8 p-7 sm:p-9 lg:grid-cols-[1fr_0.75fr] lg:items-start lg:gap-14">
                  <div>
                    <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                      <span className="text-accent">{p.year}</span>
                      <span className="h-px w-8 bg-line" />
                      <span>{p.scope}</span>
                    </div>

                    <h3 className="mt-5 text-3xl font-medium tracking-tight sm:text-[2.6rem]">
                      {p.href ? (
                        <a
                          href={p.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-3"
                        >
                          <span className="text-gradient">{p.title}</span>
                          <ArrowUpRight className="size-5 text-muted transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent sm:size-6" />
                        </a>
                      ) : (
                        <span className="text-gradient">{p.title}</span>
                      )}
                    </h3>

                    <p className="mt-1.5 serif-italic text-lg text-muted">
                      {p.kind}
                    </p>

                    <p className="mt-6 max-w-xl text-[14.5px] leading-[1.75] text-muted">
                      {p.body}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-1.5">
                      {p.stack.map((s) => (
                        <span
                          key={s}
                          className="rounded-md border border-line/80 bg-ink/60 px-2.5 py-1 font-mono text-[10.5px] text-muted transition-colors duration-500 group-hover:border-line group-hover:text-fg/80"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    {p.href ? (
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-7 inline-flex items-center gap-2 rounded-full border border-line bg-ink/60 px-4 py-2.5 text-[13px] text-fg transition-all duration-300 hover:border-accent/40 hover:bg-accent/[0.06]"
                      >
                        <Globe className="size-3.5 text-accent/80" />
                        <span className="font-mono text-[11.5px]">{p.domain}</span>
                        <ArrowUpRight className="size-3.5 text-muted" />
                      </a>
                    ) : (
                      <span className="mt-7 inline-flex items-center gap-2 rounded-full border border-line bg-ink/60 px-4 py-2.5 font-mono text-[11.5px] text-muted">
                        <Lock className="size-3.5 text-accent/70" />
                        Internal tooling
                      </span>
                    )}
                  </div>

                  <ul className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line/70">
                    {p.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-3 bg-ink/85 px-5 py-4 text-[13px] leading-relaxed text-muted"
                      >
                        <span className="mt-[0.4rem] size-1.5 shrink-0 rounded-full bg-accent/70" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
