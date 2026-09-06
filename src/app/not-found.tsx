import type { Metadata } from "next";
import Link from "next/link";
import { navLinks } from "@/lib/content";

export const metadata: Metadata = {
  title: "Page not found",
  description: "That page does not exist. Head back to the homepage.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="relative flex min-h-[100svh] items-center">
      <div className="container-x">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
          Error 404
        </p>
        <h1 className="mt-5 text-[clamp(2.5rem,7vw,4.5rem)] leading-[1.02] font-medium text-gradient">
          This page never
          <span className="serif-italic accent-gradient"> got indexed.</span>
        </h1>
        <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted">
          The URL you followed does not exist on this site. Nothing here to crawl, so
          try one of these instead.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-ink"
          >
            Back to homepage
          </Link>
          {navLinks.slice(0, 4).map((l) => (
            <Link
              key={l.href}
              href={`/${l.href}`}
              className="rounded-full border border-line bg-ink-2/50 px-5 py-3.5 text-sm text-muted transition-colors duration-300 hover:border-accent/40 hover:text-fg"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
