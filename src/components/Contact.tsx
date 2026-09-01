"use client";

import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { LinkedInIcon, WhatsAppIcon } from "./icons";
import { profile } from "@/lib/content";
import { Reveal, SectionLabel } from "./ui";

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: WhatsAppIcon,
    label: "WhatsApp",
    value: profile.phone,
    href: profile.whatsapp,
  },
  {
    icon: Phone,
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phoneHref}`,
  },
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    value: "in/theanshumansinha",
    href: profile.linkedin,
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative scroll-mt-28 pt-16 pb-24 sm:pt-24 sm:pb-32"
    >
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[2rem] border border-line bg-ink-2/60 px-7 py-16 sm:px-12 sm:py-20">
          {/* glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-40 left-1/2 size-[40rem] -translate-x-1/2 rounded-full opacity-[0.18] blur-[110px]"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, #c9f24d 0%, rgba(77,224,192,0.4) 40%, transparent 72%)",
            }}
          />
          <div
            aria-hidden
            className="grid-bg pointer-events-none absolute inset-0 opacity-40"
            style={{
              maskImage: "radial-gradient(80% 60% at 50% 0%, #000, transparent)",
              WebkitMaskImage:
                "radial-gradient(80% 60% at 50% 0%, #000, transparent)",
            }}
          />

          <div className="relative mx-auto max-w-3xl text-center">
            <Reveal>
              <div className="flex justify-center">
                <SectionLabel>Contact</SectionLabel>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <h2
                id="contact-heading"
                className="mt-6 text-[clamp(2.25rem,6vw,4rem)] leading-[1.02] font-medium text-gradient"
              >
                Let&apos;s make your site the
                <span className="serif-italic accent-gradient"> answer</span>
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-muted sm:text-base">
                Whether you need a technical audit, programmatic pages that scale, or
                AI tooling to take repetitive SEO work off your plate — tell me what
                you&apos;re trying to grow and I&apos;ll tell you exactly how I&apos;d
                approach it.
              </p>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={profile.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-accent px-7 py-4 text-sm font-medium text-ink"
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-accent-2 to-accent transition-transform duration-500 group-hover:translate-x-0" />
                  <WhatsAppIcon className="relative size-4" />
                  <span className="relative">Message me on WhatsApp</span>
                  <ArrowUpRight className="relative size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-ink/50 px-7 py-4 text-sm text-fg backdrop-blur transition-colors duration-300 hover:border-accent/40"
                >
                  <Mail className="size-4 text-accent/80" />
                  Email instead
                </a>
              </div>
            </Reveal>
          </div>

          <div className="relative mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line/70 sm:grid-cols-2 lg:grid-cols-4">
            {channels.map((c, i) => (
              <Reveal key={c.label} delay={0.1 + i * 0.06} className="h-full">
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex h-full items-center gap-4 bg-ink/85 px-5 py-5 transition-colors duration-500 hover:bg-ink-3/70"
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-line bg-ink-2/70 text-accent transition-colors duration-500 group-hover:border-accent/40">
                    <c.icon className="size-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                      {c.label}
                    </span>
                    <span className="mt-1 block truncate text-[12.5px]">
                      {c.value}
                    </span>
                  </span>
                  <ArrowUpRight className="ml-auto size-4 shrink-0 text-muted opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:text-accent" />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
