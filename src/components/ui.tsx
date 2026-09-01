"use client";

import { motion, useInView, type Variants } from "motion/react";
import { useRef, type ReactNode } from "react";

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: easeOutExpo },
  },
};

export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section" | "span";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-12% 0px -8% 0px" });
  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      ref={ref}
      initial={{ opacity: 0, y: 26, filter: "blur(6px)" }}
      animate={
        inView
          ? { opacity: 1, y: 0, filter: "blur(0px)" }
          : { opacity: 0, y: 26, filter: "blur(6px)" }
      }
      transition={{ duration: 0.75, ease: easeOutExpo, delay }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
      <span className="relative flex size-1.5">
        <span className="absolute inset-0 rounded-full bg-accent" />
        <span
          className="absolute inset-0 rounded-full bg-accent"
          style={{ animation: "pulse-ring 2.6s ease-out infinite" }}
        />
      </span>
      {children}
    </span>
  );
}

export function SectionHeading({
  id,
  label,
  title,
  accent,
  intro,
  align = "left",
}: {
  id?: string;
  label: string;
  title: string;
  accent?: string;
  intro?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-3xl text-center"
          : "max-w-3xl text-left"
      }
    >
      <Reveal>
        <SectionLabel>{label}</SectionLabel>
      </Reveal>
      <Reveal delay={0.06}>
        <h2
          id={id}
          className="mt-5 text-4xl leading-[1.04] font-medium text-gradient sm:text-5xl lg:text-[3.5rem]"
        >
          {title}
          {accent ? <span className="serif-italic accent-gradient"> {accent}</span> : null}
        </h2>
      </Reveal>
      {intro ? (
        <Reveal delay={0.12}>
          <p className="mt-6 text-[15px] leading-relaxed text-muted sm:text-base">
            {intro}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}

export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-line bg-white/[0.02] px-3 py-1.5 text-xs text-muted transition-colors duration-300 hover:border-accent/40 hover:text-fg">
      {children}
    </span>
  );
}
