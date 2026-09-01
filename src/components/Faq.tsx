import { Plus } from "lucide-react";
import { faqs } from "@/lib/content";
import { Reveal, SectionHeading } from "./ui";

/**
 * Native <details>/<summary> on purpose: answers stay in the DOM whether open or
 * closed, so they are crawlable and match the FAQPage structured data, and the
 * whole thing is keyboard accessible without any JavaScript.
 */
export function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative scroll-mt-28 py-24 sm:py-32"
    >
      <div className="container-x">
        <SectionHeading
          id="faq-heading"
          label="FAQ"
          title="Questions people"
          accent="actually ask"
          intro="The things that come up in every first conversation — answered up front, so you can decide whether it's worth a call."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-line bg-line/70">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={0.04 + i * 0.05}>
              <details
                name="faq"
                open={i === 0}
                className="group bg-ink/85 transition-colors duration-500 open:bg-ink-3/50"
              >
                <summary className="flex cursor-pointer list-none items-start gap-5 px-6 py-6 [&::-webkit-details-marker]:hidden">
                  <span className="mt-1 font-mono text-[11px] text-muted/60">
                    0{i + 1}
                  </span>
                  <h3 className="flex-1 text-[16.5px] leading-snug font-medium tracking-tight sm:text-[18px]">
                    {f.q}
                  </h3>
                  <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full border border-line text-muted transition-all duration-500 group-open:rotate-45 group-open:border-accent/40 group-open:bg-accent/10 group-open:text-accent">
                    <Plus className="size-4" />
                  </span>
                </summary>
                <div className="px-6 pb-7 sm:pl-[3.4rem]">
                  <p className="max-w-3xl text-[14.5px] leading-[1.75] text-muted">
                    {f.a}
                  </p>
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
