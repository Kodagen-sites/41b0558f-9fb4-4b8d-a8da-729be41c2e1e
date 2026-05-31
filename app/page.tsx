"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import ScrollCanvas from "@/components/ScrollCanvas";
import {
  TextReveal,
  FadeUp,
  StaggerChildren,
  Marquee,
  MagneticButton,
  NumberCounter,
} from "@/components/motion";
import { siteConfig } from "@/lib/site-config";
import { asset, heroFrames } from "@/lib/assets";

const SECTORS = [
  "Financial Services",
  "Healthcare",
  "Energy & Climate",
  "Industrials",
  "Consumer & Retail",
  "Logistics",
  "Technology",
  "Public Sector",
];

const STATS = [
  { to: 40, suffix: "+", label: "Countries operated in" },
  { to: 18, suffix: "B", prefix: "$", label: "Capital deployed" },
  { to: 220, suffix: "+", label: "Organizations partnered" },
  { to: 30, suffix: "yrs", label: "Of compounding work" },
];

export default function HomePage() {
  const [p, setP] = useState(0);

  // Hero copy fades out as the frames scrub in.
  const heroOpacity = Math.max(0, 1 - p * 2.2);
  const heroY = -p * 60;

  return (
    <main className="bg-bg text-ink">
      <Header />

      {/* ── HERO — scrub-cinematic ScrollCanvas ───────────────── */}
      <ScrollCanvas
        frameCount={heroFrames.frameCount}
        pattern={heroFrames.pattern}
        padLength={heroFrames.padLength}
        scrollDistance={5}
        loadingVariant="L2"
        loadingLabel="Northgrove"
        onProgress={setP}
      >
        <div className="flex h-full items-center">
          <div
            className="mx-auto w-full max-w-7xl px-6 md:px-10"
            style={{ opacity: heroOpacity, transform: `translateY(${heroY}px)` }}
          >
            <div className="max-w-2xl">
              <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-bg/70">
                {siteConfig.contact.location}
              </p>
              <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.02] tracking-tight text-bg md:text-7xl">
                Enduring value,
                <br />
                across every sector.
              </h1>
              <p className="mt-7 max-w-lg text-lg leading-relaxed text-bg/75">
                {siteConfig.company.fullName} is a global advisory and operating
                partner — bringing capital, rigor, and patience to the
                organizations shaping what comes next.
              </p>
              <div className="pointer-events-auto mt-10 flex flex-wrap items-center gap-4">
                <MagneticButton
                  as="a"
                  href="/#services"
                  className="rounded-full bg-surface px-7 py-3.5 font-display text-sm font-semibold text-ink"
                >
                  What we do
                </MagneticButton>
                <Link
                  href="/#contact"
                  className="inline-flex rounded-full border border-bg/30 px-7 py-3.5 font-display text-sm font-semibold text-bg hover:bg-white/10 transition"
                >
                  Start a conversation
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div
          className="absolute inset-x-0 bottom-8 flex justify-center"
          style={{ opacity: heroOpacity }}
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-bg/55">
            Scroll to explore
          </span>
        </div>
      </ScrollCanvas>

      {/* ── SECTOR MARQUEE ────────────────────────────────────── */}
      <section className="border-y border-ink/10 bg-surface/30 py-6">
        <Marquee>
          <span className="mx-8 font-display text-sm font-semibold uppercase tracking-[0.2em] text-ink/70">
            {SECTORS.join("   ·   ")}
          </span>
        </Marquee>
      </section>

      {/* ── ABOUT ─────────────────────────────────────────────── */}
      <section id="about" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-28 md:px-10 md:py-36">
        <div className="grid items-center gap-14 md:grid-cols-2">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
              Who we are
            </p>
            <TextReveal
              as="h2"
              className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight md:text-5xl"
            >
              A partner for the long arc of building something that lasts.
            </TextReveal>
            <FadeUp delay={0.15}>
              <p className="mt-7 text-lg leading-relaxed text-ink/75">
                We are sector-agnostic by design. The discipline that turns a
                regional business into a global one is the same whether the
                product is steel, software, or care — capital with conviction,
                operational craft, and the patience to let good decisions
                compound.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-ink/75">
                Northgrove sits beside founders and boards as a working partner,
                not a passing advisor.
              </p>
            </FadeUp>
          </div>

          <FadeUp delay={0.1} className="relative">
            <div className="overflow-hidden rounded-3xl border border-ink/10 shadow-[0_30px_80px_-40px_rgba(27,42,26,0.5)]">
              <img
                src={asset("section-about", "boardroom architecture")}
                alt="Northgrove"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────── */}
      <section
        id="services"
        className="scroll-mt-24 bg-gradient-to-b from-transparent via-surface/20 to-transparent py-28 md:py-36"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="max-w-2xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
              What we do
            </p>
            <TextReveal
              as="h2"
              className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight md:text-5xl"
            >
              Four capabilities, one continuous engagement.
            </TextReveal>
          </div>

          <StaggerChildren
            staggerDelay={0.1}
            className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {siteConfig.services.map((s, i) => (
              <ServiceCard
                key={s.slug}
                index={i}
                service={s}
                imageSrc={asset(s.image, s.name)}
              />
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── WORK / PROOF ──────────────────────────────────────── */}
      <section id="work" className="scroll-mt-24 bg-ink text-bg">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36">
          <div className="max-w-2xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-surface">
              The record
            </p>
            <TextReveal
              as="h2"
              className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight text-bg md:text-5xl"
            >
              Built quietly, measured in decades.
            </TextReveal>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-10 md:grid-cols-4">
            {STATS.map((stat) => (
              <FadeUp key={stat.label}>
                <div className="font-display text-4xl font-extrabold text-surface md:text-6xl">
                  <NumberCounter
                    to={stat.to}
                    prefix={stat.prefix ?? ""}
                    suffix={stat.suffix ?? ""}
                    formatThousands
                  />
                </div>
                <div className="mt-3 text-sm leading-snug text-bg/60">
                  {stat.label}
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.2}>
            <figure className="mt-20 border-t border-white/10 pt-12">
              <blockquote className="max-w-3xl font-display text-2xl font-light leading-snug text-bg md:text-3xl">
                “They behave like owners. Northgrove showed up for the unglamorous
                quarters, not just the announcements.”
              </blockquote>
              <figcaption className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-bg/50">
                Chair, global industrials group
              </figcaption>
            </figure>
          </FadeUp>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <img
          src={asset("section-cta", "horizon landscape dawn")}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-bg/70" />
        <div className="relative mx-auto max-w-4xl px-6 py-28 text-center md:py-36">
          <TextReveal
            as="h2"
            className="font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl"
          >
            Let’s build something that outlasts us.
          </TextReveal>
          <FadeUp delay={0.15}>
            <p className="mx-auto mt-6 max-w-xl text-lg text-ink/75">
              Tell us where you’re headed. We’ll bring the capital, the operators,
              and the patience.
            </p>
            <div className="mt-10 flex justify-center">
              <MagneticButton
                as="a"
                href={`mailto:${siteConfig.contact.email}`}
                className="rounded-full bg-primary px-8 py-4 font-display text-sm font-semibold text-bg hover:brightness-110 transition"
              >
                {siteConfig.contact.email}
              </MagneticButton>
            </div>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </main>
  );
}
