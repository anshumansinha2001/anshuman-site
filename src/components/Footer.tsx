import { ArrowUp } from "lucide-react";
import { navLinks, profile } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-line">
      <div className="container-x py-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <p className="text-lg font-medium tracking-tight">
              {profile.name}
              <span className="serif-italic ml-2 accent-gradient">
                {profile.role}
              </span>
            </p>
            <p className="mt-3 text-[13.5px] leading-relaxed text-muted">
              Technical SEO, programmatic SEO and AI automation, built by someone
              who can also read the codebase.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-10 gap-y-2.5 sm:grid-cols-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[13.5px] text-muted transition-colors duration-300 hover:text-fg"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/resume"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13.5px] text-muted transition-colors duration-300 hover:text-fg"
            >
              Résumé
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13.5px] text-muted transition-colors duration-300 hover:text-fg"
            >
              LinkedIn
            </a>
          </nav>
        </div>

        <div className="hairline mt-10 h-px" />

        <div className="mt-6 flex flex-col-reverse items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] tracking-wide text-muted/70">
            © {year} {profile.name}. Built with Next.js &amp; Tailwind CSS.
          </p>
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] text-muted/70">
              {profile.location}
            </span>
            <a
              href="#top"
              className="group inline-flex items-center gap-2 rounded-full border border-line px-3.5 py-2 font-mono text-[11px] text-muted transition-colors duration-300 hover:border-accent/40 hover:text-fg"
            >
              Back to top
              <ArrowUp className="size-3 transition-transform duration-300 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
