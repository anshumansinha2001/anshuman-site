"use client";

import { Code2, Cpu, LineChart, Search } from "lucide-react";
import { profile } from "@/lib/content";
import { Reveal, SectionLabel } from "./ui";

const pillars = [
  {
    icon: Search,
    title: "Strategy first",
    body: "Research, intent mapping and gap analysis before a single word is written.",
  },
  {
    icon: Code2,
    title: "I ship the fix",
    body: "Dev background means technical recommendations get implemented, not queued.",
  },
  {
    icon: Cpu,
    title: "Automate the rest",
    body: "AI agents absorb the repetitive work so the hours go into strategy.",
  },
  {
    icon: LineChart,
    title: "Measured, always",
    body: "Every change is tested and tracked in Search Console and Analytics.",
  },
];

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative scroll-mt-28 py-24 sm:py-32"
    >
      <div className="container-x">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <Reveal>
              <SectionLabel>About</SectionLabel>
            </Reveal>
            <Reveal delay={0.06}>
              <h2
                id="about-heading"
                className="mt-5 text-4xl leading-[1.05] font-medium text-gradient sm:text-5xl"
              >
                An SEO who can
                <span className="serif-italic accent-gradient"> read the code</span>
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <div className="mt-8 space-y-5 rounded-2xl border border-line bg-ink-2/40 p-6">
                <div className="flex items-baseline justify-between border-b border-line/70 pb-4">
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                    Based in
                  </span>
                  <span className="text-sm">{profile.location}</span>
                </div>
                <div className="flex items-baseline justify-between border-b border-line/70 pb-4">
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                    Focus
                  </span>
                  <span className="text-sm">SaaS &amp; product SEO</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                    Education
                  </span>
                  <span className="text-sm">B.E. Computer Science</span>
                </div>
              </div>
            </Reveal>
          </div>

          <div>
            <div className="space-y-6">
              {profile.summary.map((para, i) => (
                <Reveal key={i} delay={0.08 + i * 0.08}>
                  <p className="text-[16px] leading-[1.75] text-muted sm:text-[17px]">
                    {para}
                  </p>
                </Reveal>
              ))}
            </div>

            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line/70 sm:grid-cols-2">
              {pillars.map((p, i) => (
                <Reveal key={p.title} delay={0.1 + i * 0.06} className="h-full">
                  <div className="group h-full bg-ink/85 p-6 transition-colors duration-500 hover:bg-ink-3/70">
                    <p.icon className="size-5 text-accent transition-transform duration-500 group-hover:scale-110" />
                    <h3 className="mt-4 text-[15px] font-medium">{p.title}</h3>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-muted">
                      {p.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
