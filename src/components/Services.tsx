"use client";

import type { MouseEvent } from "react";
import { services } from "@/lib/content";
import { Reveal, SectionHeading } from "./ui";

function ServiceCard({
  service,
}: {
  service: (typeof services)[number];
}) {
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <div
      onMouseMove={onMove}
      className="card-sheen group relative h-full overflow-hidden rounded-2xl border border-line p-7 transition-all duration-500 hover:border-accent/25"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-[19px] font-medium tracking-tight">{service.title}</h3>
        <span className="font-mono text-[11px] text-muted/70 transition-colors duration-500 group-hover:text-accent">
          {service.n}
        </span>
      </div>

      <p className="mt-4 text-[14px] leading-[1.7] text-muted">{service.body}</p>

      <div className="mt-6 flex flex-wrap gap-1.5">
        {service.tags.map((t) => (
          <span
            key={t}
            className="rounded-md border border-line/80 bg-ink/60 px-2 py-1 font-mono text-[10.5px] tracking-wide text-muted"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </div>
  );
}

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative scroll-mt-28 py-24 sm:py-32"
    >
      <div className="container-x">
        <SectionHeading
          id="services-heading"
          label="What I do"
          title="Six ways I move"
          accent="the needle"
          intro="Search is a systems problem: architecture, content, authority and now AI answer engines. I work across all of it, and I write the code when the fix lives in the codebase."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.n} delay={0.04 + (i % 3) * 0.07} className="h-full">
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
