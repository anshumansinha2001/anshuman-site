import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/lib/content";

/**
 * The PDF is embedded rather than linked directly. A top-level navigation to a
 * .pdf is downloaded instead of shown for anyone who has Chrome's "Download PDF
 * files instead of automatically opening them" setting on; that setting does not
 * apply to a PDF embedded in the page, so this route previews for everyone.
 */
const resumeFile = "/Anshuman-Sinha-Resume.pdf";

export const metadata: Metadata = {
  title: "Résumé",
  description: `Résumé of ${profile.name}, ${profile.role} based in ${profile.location}.`,
  alternates: { canonical: "/resume" },
};

export default function ResumePage() {
  return (
    <main className="flex min-h-[100svh] flex-col">
      <header className="border-b border-line">
        <div className="container-x flex flex-wrap items-center justify-between gap-4 py-5">
          <div>
            <Link
              href="/"
              className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent transition-opacity duration-300 hover:opacity-70"
            >
              &larr; Back to site
            </Link>
            <h1 className="mt-2 text-xl font-medium text-fg">
              {profile.name}
              <span className="serif-italic accent-gradient"> Résumé</span>
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={resumeFile}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-line bg-ink-2/50 px-5 py-2.5 text-sm text-muted transition-colors duration-300 hover:border-accent/40 hover:text-fg"
            >
              Open in new tab
            </a>
            <a
              href={resumeFile}
              download
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-ink transition-opacity duration-300 hover:opacity-90"
            >
              Download PDF
            </a>
          </div>
        </div>
      </header>

      <div className="container-x w-full flex-1 py-6">
        <object
          data={resumeFile}
          type="application/pdf"
          aria-label={`Résumé of ${profile.name}`}
          className="h-[78svh] w-full rounded-2xl border border-line bg-ink-2"
        >
          {/* Shown only when the browser cannot render a PDF inline, which is
              the case on most mobile browsers. */}
          <div className="flex h-full flex-col items-center justify-center gap-4 rounded-2xl border border-line bg-ink-2 px-6 py-16 text-center">
            <p className="max-w-sm text-[15px] leading-relaxed text-muted">
              Your browser cannot display the PDF on this page. Open it in a new
              tab instead.
            </p>
            <a
              href={resumeFile}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-ink"
            >
              Open the résumé
            </a>
          </div>
        </object>

        <p className="mt-4 text-[13px] text-muted">
          Not loading?{" "}
          <a
            href={resumeFile}
            target="_blank"
            rel="noopener noreferrer"
            className="text-fg underline decoration-line underline-offset-4 transition-colors hover:decoration-accent"
          >
            Open the PDF directly
          </a>
          .
        </p>
      </div>
    </main>
  );
}
