"use client";

import { Award, GraduationCap } from "lucide-react";
import { certifications, education } from "@/lib/content";
import { Reveal, SectionLabel } from "./ui";

export function Credentials() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="relative scroll-mt-28 py-24 sm:py-28"
    >
      <div className="container-x">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <SectionLabel>Education</SectionLabel>
            </Reveal>
            <Reveal delay={0.06}>
              <h2
                id="education-heading"
                className="mt-5 text-3xl leading-tight font-medium text-gradient sm:text-4xl"
              >
                Engineering
                <span className="serif-italic accent-gradient"> background</span>
              </h2>
            </Reveal>

            <div className="mt-8 space-y-4">
              {education.map((e, i) => (
                <Reveal key={e.school} delay={0.1 + i * 0.07}>
                  <div className="group flex gap-4 rounded-2xl border border-line bg-ink-2/40 p-5 transition-colors duration-500 hover:border-accent/25">
                    <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-lg border border-line bg-ink/70 text-accent">
                      <GraduationCap className="size-4" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[15px] font-medium">{e.credential}</p>
                      <p className="mt-1 text-[13.5px] text-muted">{e.school}</p>
                      <div className="mt-2.5 flex flex-wrap items-center gap-3 font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted/80">
                        <span>{e.period}</span>
                        <span className="size-1 rounded-full bg-accent/50" />
                        <span>{e.detail}</span>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <Reveal>
              <SectionLabel>Certifications</SectionLabel>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-5 text-3xl leading-tight font-medium text-gradient sm:text-4xl">
                Formally
                <span className="serif-italic accent-gradient"> certified</span>
              </h2>
            </Reveal>

            <ul className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-line bg-line/70">
              {certifications.map((c, i) => (
                <Reveal key={c.name} delay={0.1 + i * 0.05}>
                  <li className="group flex items-center gap-4 bg-ink/85 px-5 py-4 transition-colors duration-500 hover:bg-ink-3/70">
                    <Award className="size-4 shrink-0 text-accent/80" />
                    <div className="min-w-0 flex-1">
                      <p className="text-[14.5px] font-medium">{c.name}</p>
                      <p className="mt-0.5 font-mono text-[11px] text-muted">
                        {c.issuer}
                      </p>
                    </div>
                    <span className="font-mono text-[10px] text-muted/50">
                      0{i + 1}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={0.3}>
              <div className="mt-4 flex items-center justify-between rounded-2xl border border-line bg-ink-2/40 px-5 py-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                  Languages
                </span>
                <span className="text-sm">English &nbsp;·&nbsp; Hindi</span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
