"use client";

import { useEffect } from "react";

export function Background() {
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      document.documentElement.style.setProperty("--cursor-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${e.clientY}px`);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* base wash */}
      <div className="absolute inset-0 bg-ink" />

      {/* top-left aurora */}
      <div
        className="absolute -top-[34rem] -left-[26rem] size-[62rem] rounded-full opacity-[0.09] blur-[130px]"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, #c9f24d 0%, rgba(201,242,77,0.28) 32%, transparent 68%)",
        }}
      />

      {/* right teal aurora */}
      <div
        className="absolute top-[14rem] -right-[26rem] size-[54rem] rounded-full opacity-[0.11] blur-[140px]"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, #4de0c0 0%, rgba(77,224,192,0.24) 34%, transparent 70%)",
        }}
      />

      {/* bottom violet aurora */}
      <div
        className="absolute bottom-[-30rem] left-[24%] size-[58rem] rounded-full opacity-[0.10] blur-[150px]"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, #8b7bff 0%, rgba(139,123,255,0.22) 36%, transparent 72%)",
        }}
      />

      {/* grid */}
      <div
        className="grid-bg absolute inset-0 opacity-60"
        style={{
          maskImage:
            "radial-gradient(120% 90% at 50% 0%, #000 12%, transparent 78%)",
          WebkitMaskImage:
            "radial-gradient(120% 90% at 50% 0%, #000 12%, transparent 78%)",
        }}
      />

      {/* cursor spotlight */}
      <div
        className="absolute inset-0 hidden opacity-[0.055] transition-opacity duration-500 lg:block"
        style={{
          background:
            "radial-gradient(420px circle at var(--cursor-x, 50%) var(--cursor-y, 30%), #c9f24d, transparent 70%)",
        }}
      />

      {/* film grain */}
      <div className="noise absolute inset-0 opacity-[0.16] mix-blend-soft-light" />

      {/* vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(140% 110% at 50% 20%, transparent 40%, rgba(0,0,0,0.55) 100%)",
        }}
      />
    </div>
  );
}
