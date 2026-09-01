"use client";

import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navLinks, profile } from "@/lib/content";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.2, 0.6, 1] },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.div
        className="fixed inset-x-0 top-0 z-60 h-px origin-left bg-gradient-to-r from-accent via-accent-2 to-accent/0"
        style={{ scaleX: progress }}
      />

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <nav className="container-x">
          <div
            className={`flex items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-500 sm:px-5 ${
              scrolled
                ? "border-line/90 bg-ink-2/70 shadow-[0_16px_50px_-24px_rgba(0,0,0,0.9)] backdrop-blur-xl"
                : "border-transparent bg-transparent"
            }`}
          >
            <a
              href="#top"
              className="group flex items-center gap-3 text-sm font-medium tracking-tight"
            >
              <span className="relative grid size-8 place-items-center overflow-hidden rounded-lg border border-line bg-ink-3">
                <span className="font-mono text-[11px] font-semibold text-accent">
                  AS
                </span>
                <span className="absolute inset-0 -translate-y-full bg-accent/10 transition-transform duration-500 group-hover:translate-y-0" />
              </span>
              <span className="whitespace-nowrap">
                {profile.name}
                <span className="ml-2 hidden font-mono text-[10px] uppercase tracking-[0.18em] text-muted sm:inline">
                  SEO
                </span>
              </span>
            </a>

            <ul className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => {
                const isActive = active === link.href;
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={`relative rounded-full px-3.5 py-2 text-[13px] transition-colors duration-300 ${
                        isActive ? "text-fg" : "text-muted hover:text-fg"
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 rounded-full border border-line bg-white/[0.04]"
                          transition={{ type: "spring", stiffness: 340, damping: 30 }}
                        />
                      )}
                      <span className="relative">{link.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center gap-2">
              <a
                href={profile.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group hidden items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-[13px] font-medium text-ink transition-all duration-300 hover:bg-accent/90 sm:inline-flex"
              >
                Let&apos;s talk
                <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-label={open ? "Close menu" : "Open menu"}
                className="grid size-9 place-items-center rounded-lg border border-line bg-ink-3/60 text-fg lg:hidden"
              >
                {open ? <X className="size-4" /> : <Menu className="size-4" />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-ink/95 backdrop-blur-xl lg:hidden"
          >
            <div className="container-x flex h-full flex-col justify-center gap-1 pb-16">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.055, duration: 0.5 }}
                  className="group flex items-baseline justify-between border-b border-line/70 py-5 text-3xl font-medium tracking-tight"
                >
                  <span className="transition-colors group-hover:text-accent">
                    {link.label}
                  </span>
                  <span className="font-mono text-[11px] text-muted">
                    0{i + 1}
                  </span>
                </motion.a>
              ))}
              <motion.a
                href={profile.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 font-medium text-ink"
              >
                Let&apos;s talk <ArrowUpRight className="size-4" />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
