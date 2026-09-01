"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { experience } from "@/lib/content";
import { Reveal, SectionHeading } from "./ui";

export function Experience() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="relative scroll-mt-28 py-24 sm:py-32"
    >
      <div className="container-x">
        <SectionHeading
          id="work-heading"
          label="Experience"
          title="Where I've done"
          accent="the work"
          intro="Two and a half years across SaaS in-house and agency-side client work — the kind of range that teaches you what actually moves rankings versus what only looks busy."
        />

        <div className="mt-14">
          {experience.map((job, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={job.company} delay={0.05 + i * 0.07}>
                <article
                  className={`group relative border-t border-line transition-colors duration-500 ${
                    i === experience.length - 1 ? "border-b" : ""
                  }`}
                >
                  <h3 className="sr-only">
                    {job.role} at {job.company}, {job.period}
                  </h3>

                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`job-panel-${i}`}
                    className="flex w-full cursor-pointer items-start gap-5 py-7 text-left sm:gap-8"
                  >
                    <span className="hidden pt-1 font-mono text-[11px] text-muted/60 sm:block">
                      0{i + 1}
                    </span>

                    <span className="flex-1">
                      <span className="flex flex-wrap items-center gap-3">
                        <span className="text-xl font-medium tracking-tight sm:text-2xl">
                          {job.role}
                        </span>
                        {job.current && (
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                            <span className="size-1 rounded-full bg-accent" />
                            Current
                          </span>
                        )}
                      </span>

                      <span className="mt-1.5 block text-[15px] text-fg/80">
                        {job.company}
                        <span className="mx-2 text-muted/40">/</span>
                        <span className="text-muted">{job.location}</span>
                      </span>

                      <span className="mt-3 block max-w-2xl text-[14px] leading-relaxed text-muted">
                        {job.blurb}
                      </span>

                      <span className="mt-4 flex flex-wrap gap-1.5">
                        {job.stack.map((s) => (
                          <span
                            key={s}
                            className="rounded-md border border-line/80 bg-ink-2/50 px-2 py-1 font-mono text-[10.5px] text-muted"
                          >
                            {s}
                          </span>
                        ))}
                      </span>
                    </span>

                    <span className="flex shrink-0 flex-col items-end gap-4 pt-1">
                      <time
                        dateTime={job.startDate}
                        className="font-mono text-[11px] whitespace-nowrap text-muted"
                      >
                        {job.period}
                      </time>
                      <span
                        className={`grid size-8 place-items-center rounded-full border border-line transition-all duration-500 ${
                          isOpen
                            ? "rotate-180 border-accent/40 bg-accent/10 text-accent"
                            : "text-muted group-hover:border-accent/30 group-hover:text-fg"
                        }`}
                      >
                        <ChevronDown className="size-4" />
                      </span>
                    </span>
                  </button>

                  {/*
                    Collapsed with grid-template-rows rather than unmounting, so every
                    bullet stays in the server-rendered HTML for crawlers.
                  */}
                  <div
                    id={`job-panel-${i}`}
                    className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <ul className="grid gap-3 pb-8 sm:grid-cols-2 sm:pl-[3.25rem]">
                        {job.points.map((point) => (
                          <li
                            key={point}
                            className="flex gap-3 rounded-xl border border-line/60 bg-ink-2/30 p-4 text-[13.5px] leading-relaxed text-muted"
                          >
                            <span className="mt-[0.45rem] size-1.5 shrink-0 rounded-full bg-accent/70" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
