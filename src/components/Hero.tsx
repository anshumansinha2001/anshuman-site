"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDownRight, ArrowUpRight, FileText, Mail, MapPin } from "lucide-react";
import { LinkedInIcon, WhatsAppIcon } from "./icons";
import { profile, stats } from "@/lib/content";

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();

  const rise = (delay: number) => ({
    initial: { opacity: 0, y: reduce ? 0 : 24, filter: "blur(8px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 0.9, ease: easeOutExpo, delay },
  });

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center pt-32 pb-20 sm:pt-36"
    >
      <div className="container-x">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          {/* left column */}
          <div>
            <motion.div {...rise(0.05)}>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-ink-2/60 px-3 py-1.5 backdrop-blur sm:px-3.5">
                <span className="relative flex size-2">
                  <span className="absolute inset-0 rounded-full bg-accent" />
                  <span
                    className="absolute inset-0 rounded-full bg-accent"
                    style={{ animation: "pulse-ring 2.6s ease-out infinite" }}
                  />
                </span>
                <span className="font-mono text-[9.5px] uppercase tracking-[0.16em] whitespace-nowrap text-muted sm:text-[11px] sm:tracking-[0.18em]">
                  {profile.availability}
                </span>
              </span>
            </motion.div>

            <motion.h1
              {...rise(0.14)}
              className="mt-7 text-[clamp(2.75rem,8vw,5.25rem)] leading-[0.94] font-medium"
            >
              {/* Explicit spaces so the raw text reads "Anshuman Sinha, SEO that
                  compounds." for crawlers and screen readers, not one run-on word.
                  Whitespace between block boxes collapses, so nothing shifts. */}
              <span className="block text-gradient">{profile.first}</span>{" "}
              <span className="block text-gradient">
                {profile.last},{" "}
                <span className="serif-italic ml-2 accent-gradient text-[0.86em]">
                  SEO
                </span>
              </span>{" "}
              <span className="serif-italic block accent-gradient text-[0.86em]">
                that compounds.
              </span>
            </motion.h1>

            <motion.p
              {...rise(0.24)}
              className="mt-7 max-w-xl text-[15px] leading-relaxed text-muted sm:text-[17px]"
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              {...rise(0.32)}
              className="mt-6 flex flex-wrap items-center gap-2"
            >
              {profile.disciplines.map((d) => (
                <span
                  key={d}
                  className="rounded-full border border-line bg-white/[0.02] px-3 py-1.5 font-mono text-[11px] tracking-wide text-muted"
                >
                  {d}
                </span>
              ))}
            </motion.div>

            <motion.div
              {...rise(0.4)}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a
                href={profile.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-ink"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-accent-2 to-accent transition-transform duration-500 group-hover:translate-x-0" />
                <WhatsAppIcon className="relative size-4" />
                <span className="relative">Start a project</span>
                <ArrowUpRight className="relative size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full border border-line bg-ink-2/50 px-6 py-3.5 text-sm text-fg backdrop-blur transition-colors duration-300 hover:border-accent/40"
              >
                See my work
                <ArrowDownRight className="size-4 text-muted transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>
            </motion.div>

            <motion.div
              {...rise(0.48)}
              className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-[13px] text-muted"
            >
              <span className="inline-flex items-center gap-2">
                <MapPin className="size-3.5 text-accent/70" />
                {profile.location}
              </span>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-fg"
              >
                <Mail className="size-3.5 text-accent/70" />
                {profile.email}
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-fg"
              >
                <LinkedInIcon className="size-3 text-accent/70" />
                LinkedIn
              </a>
              <a
                href="/resume"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-fg"
              >
                <FileText className="size-3.5 text-accent/70" />
                Résumé
              </a>
            </motion.div>
          </div>

          {/* right column - portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, filter: "blur(12px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.1, ease: easeOutExpo, delay: 0.2 }}
            className="relative mx-auto w-full max-w-sm lg:max-w-none"
          >
            <div className="relative">
              <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-accent/18 via-transparent to-accent-2/14 blur-2xl" />

              <div className="relative overflow-hidden rounded-[1.75rem] border border-line bg-ink-2">
                <div className="relative aspect-square">
                  <Image
                    src="/anshuman-sinha.jpg"
                    alt="Anshuman Sinha, SEO Specialist based in Bengaluru, India"
                    fill
                    priority
                    sizes="(max-width: 1024px) 384px, 460px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/8 via-transparent to-accent-2/8 mix-blend-overlay" />
                </div>

                <span className="absolute top-4 right-4 rounded-full border border-line bg-ink/70 px-2.5 py-1 font-mono text-[10px] tracking-wide text-muted backdrop-blur">
                  BLR · IN
                </span>
              </div>

              {/* floating status card */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85, duration: 0.7, ease: easeOutExpo }}
                className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl border border-line bg-ink-2/90 px-4 py-3 backdrop-blur-xl sm:-left-6"
              >
                <span className="relative flex size-2">
                  <span className="absolute inset-0 rounded-full bg-accent" />
                  <span
                    className="absolute inset-0 rounded-full bg-accent"
                    style={{ animation: "pulse-ring 2.6s ease-out infinite" }}
                  />
                </span>
                <span>
                  <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                    Currently
                  </span>
                  <span className="mt-0.5 block text-[13.5px] font-medium">
                    SEO Specialist at Wisemonk
                  </span>
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.9, ease: easeOutExpo }}
          className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line/70 lg:mt-24 lg:grid-cols-4"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="group bg-ink/85 px-5 py-6 transition-colors duration-500 hover:bg-ink-3/80"
            >
              <p className="text-3xl font-medium tracking-tight sm:text-4xl">
                <span className="accent-gradient">{s.value}</span>
              </p>
              <p className="mt-2 text-sm font-medium">{s.label}</p>
              <p className="mt-0.5 font-mono text-[11px] text-muted">{s.sub}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
