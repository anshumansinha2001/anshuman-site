"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Award, ChevronDown } from "lucide-react";
import { experience, profile } from "@/lib/content";
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
          intro="Two and a half years across SaaS in-house and agency-side client work, the kind of range that teaches you what actually moves rankings versus what only looks busy."
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
                      <div className="grid gap-3 pb-8 sm:pl-[3.25rem]">
                        <ul className="grid gap-3 sm:grid-cols-2">
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

                        {job.recognition && (
                          <figure className="relative grid items-center gap-6 overflow-hidden rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/[0.06] via-ink-2/40 to-accent-2/[0.05] p-5 sm:grid-cols-[180px_1fr] sm:p-6 lg:grid-cols-[210px_1fr] lg:gap-8">
                            <a
                              href={job.recognition.image}
                              target="_blank"
                              rel="noopener"
                              className="group/cert relative mx-auto block w-full max-w-[220px] overflow-hidden rounded-xl border border-line shadow-[0_20px_50px_-20px_rgba(0,0,0,0.7)] sm:max-w-none"
                            >
                              <Image
                                src={job.recognition.image}
                                alt={`${job.company} ${job.recognition.program} certificate presented to ${profile.first} for ${job.recognition.award}`}
                                width={job.recognition.width}
                                height={job.recognition.height}
                                sizes="(max-width: 640px) 220px, 210px"
                                className="h-auto w-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/cert:scale-[1.03]"
                              />
                              <span className="absolute right-2 bottom-2 inline-flex items-center gap-1 rounded-full border border-line bg-ink/80 px-2 py-1 font-mono text-[10px] text-fg/90 opacity-0 backdrop-blur transition-opacity duration-300 group-hover/cert:opacity-100 group-focus-visible/cert:opacity-100">
                                View
                                <ArrowUpRight className="size-3" />
                              </span>
                            </a>

                            <figcaption className="text-center sm:text-left">
                              <span className="inline-flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.18em] text-accent">
                                <Award className="size-3.5" />
                                {job.recognition.program}
                              </span>
                              <p className="mt-3 text-2xl font-medium tracking-tight sm:text-[28px]">
                                <span className="text-gradient">
                                  {job.recognition.award}
                                </span>
                              </p>
                              <p className="mt-3 text-[14px] leading-relaxed text-muted">
                                {job.recognition.citation}
                              </p>
                              <blockquote className="mt-5 border-l-2 border-accent/50 pl-4 text-left">
                                <p className="font-serif text-[17px] leading-snug text-fg/90 italic sm:text-lg">
                                  &ldquo;{job.recognition.quote}&rdquo;
                                </p>
                                <footer className="mt-2 font-mono text-[11px] text-muted">
                                  {job.recognition.by}
                                </footer>
                              </blockquote>
                            </figcaption>
                          </figure>
                        )}
                      </div>
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
