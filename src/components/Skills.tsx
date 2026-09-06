"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { skillGroups } from "@/lib/content";
import { Reveal, SectionHeading } from "./ui";

export function Skills() {
  const [activeKey, setActiveKey] = useState(skillGroups[0].key);

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative scroll-mt-28 py-24 sm:py-32"
    >
      <div className="container-x">
        <SectionHeading
          id="skills-heading"
          label="Capabilities"
          title="The full"
          accent="toolkit"
          intro="Where marketing instinct meets an engineering skill set. That overlap is where most SEO work stalls, and it's where I'm most useful."
        />

        <Reveal delay={0.1}>
          <div
            role="tablist"
            aria-label="Skill categories"
            className="scrollbar-none mt-12 flex gap-2 overflow-x-auto pb-1"
          >
            {skillGroups.map((g) => {
              const isActive = g.key === activeKey;
              return (
                <button
                  key={g.key}
                  type="button"
                  role="tab"
                  id={`skill-tab-${g.key}`}
                  aria-selected={isActive}
                  aria-controls={`skill-panel-${g.key}`}
                  onClick={() => setActiveKey(g.key)}
                  className={`relative shrink-0 cursor-pointer rounded-full px-4 py-2.5 text-[13px] whitespace-nowrap transition-colors duration-300 ${
                    isActive ? "text-ink" : "text-muted hover:text-fg"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="skill-pill"
                      className="absolute inset-0 rounded-full bg-accent"
                      transition={{ type: "spring", stiffness: 320, damping: 30 }}
                    />
                  )}
                  <span className="relative font-medium">{g.label}</span>
                  <span
                    className={`relative ml-2 font-mono text-[10px] ${
                      isActive ? "text-ink/60" : "text-muted/60"
                    }`}
                  >
                    {g.items.length}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mt-8 min-h-[13rem] rounded-3xl border border-line bg-ink-2/40 p-7 sm:p-9">
            {/*
              Every panel stays in the DOM; inactive ones are hidden with CSS, so all
              five skill groups are in the server-rendered HTML rather than only the
              active tab. The fade-up animation replays each time a panel is revealed.
            */}
            {skillGroups.map((group) => {
              const isActive = group.key === activeKey;
              return (
                <div
                  key={group.key}
                  role="tabpanel"
                  id={`skill-panel-${group.key}`}
                  aria-labelledby={`skill-tab-${group.key}`}
                  aria-hidden={!isActive}
                  className={`animate-fade-up flex-wrap gap-2 ${
                    isActive ? "flex" : "hidden"
                  }`}
                >
                  <h3 className="sr-only">{group.label}</h3>
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="group inline-flex items-center gap-2 rounded-full border border-line bg-ink/60 px-3.5 py-2 text-[13px] text-fg/85 transition-all duration-300 hover:border-accent/40 hover:bg-accent/[0.06] hover:text-fg"
                    >
                      <span className="size-1 rounded-full bg-accent/60 transition-transform duration-300 group-hover:scale-150" />
                      {item}
                    </span>
                  ))}
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
