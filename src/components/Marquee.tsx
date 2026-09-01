import { marqueeItems } from "@/lib/content";

export function Marquee() {
  const row = [...marqueeItems, ...marqueeItems];

  return (
    <div className="relative border-y border-line/80 bg-ink-2/40 py-5">
      <div
        className="scrollbar-none overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
        }}
      >
        <div className="marquee-track flex w-max items-center gap-10 pr-10">
          {row.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="flex shrink-0 items-center gap-10 font-mono text-[12px] uppercase tracking-[0.2em] text-muted"
            >
              {item}
              <span className="size-1 rounded-full bg-accent/50" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
