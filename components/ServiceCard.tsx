"use client";

import { GlassCursorHighlight } from "@/components/motion";

/**
 * Service card — light "Forest & Amber" glass card for the folded services
 * section of the single landing page. Non-navigating (no service detail routes
 * exist on a landing build); it presents the capability inline.
 */

type Service = {
  slug: string;
  name: string;
  description: string;
};

type Props = {
  service: Service;
  index?: number;
  imageSrc?: string;
};

export default function ServiceCard({ service, index, imageSrc }: Props) {
  const num = String((index ?? 0) + 1).padStart(2, "0");
  return (
    <div
      className="group relative block rounded-2xl overflow-hidden h-full transition-transform duration-500 hover:-translate-y-1"
      style={{
        background: "rgba(255,255,255,0.55)",
        backdropFilter: "blur(20px) saturate(120%)",
        WebkitBackdropFilter: "blur(20px) saturate(120%)",
        border: "1px solid rgba(63,94,58,0.18)",
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.6), 0 20px 50px -24px rgba(27,42,26,0.4)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          padding: 1,
          background:
            "conic-gradient(from 180deg at 50% 50%, rgba(63,94,58,0.55), rgba(217,185,122,0.6), rgba(63,94,58,0.55))",
          WebkitMask:
            "linear-gradient(#000,#000) content-box, linear-gradient(#000,#000)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      <GlassCursorHighlight accent="var(--color-primary, #3f5e3a)" opacity={0.18} radius={320}>
        {imageSrc && (
          <div className="aspect-[4/3] relative overflow-hidden">
            <img
              src={imageSrc}
              alt={service.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              onError={(e) => ((e.target as HTMLImageElement).style.display = "none")}
            />
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-bg/60 to-transparent" />
          </div>
        )}

        <div className="p-6 relative">
          <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-primary/80 mb-3">
            {num} — Capability
          </div>
          <h3 className="font-display text-xl md:text-2xl text-ink mb-3 font-semibold leading-tight">
            {service.name}
          </h3>
          <p className="text-ink/70 text-sm leading-relaxed">
            {service.description}
          </p>
        </div>
      </GlassCursorHighlight>
    </div>
  );
}
