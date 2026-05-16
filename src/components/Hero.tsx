"use client";

import { ArrowRight, ShieldCheck } from "lucide-react";
import { HubLogo } from "../../brand/react";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* animated gradient grid background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-fade">
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(rgb(var(--brand-ink) / 0.18) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--brand-ink) / 0.18) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
      </div>

      {/* floating accent orbs */}
      <div aria-hidden className="pointer-events-none absolute -left-32 top-20 h-[420px] w-[420px] rounded-full bg-brand-cyan/20 blur-3xl animate-float" />
      <div aria-hidden className="pointer-events-none absolute -right-24 top-40 h-[460px] w-[460px] rounded-full bg-brand-violet/20 blur-3xl animate-pulse-slow" />

      <div className="relative mx-auto grid max-w-content items-center gap-10 px-6 pb-20 pt-12 md:grid-cols-2 md:gap-14 md:pb-28 md:pt-20">
        {/* Copy */}
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-pill border border-card/80 bg-card/40 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-muted backdrop-blur">
            <span className="inline-block h-2 w-2 rounded-full bg-success animate-pulse-slow" />
            UK estates · live in production
          </div>

          <h1 className="mb-6 text-5xl font-extrabold leading-[1.02] tracking-tight md:text-7xl">
            Operational oversight of <span className="text-gradient">statutory compliance</span>, care &amp; facilities.
          </h1>

          <p className="mb-10 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
            HubSuite is one operating system across three connected hubs — built for UK estates that can't afford a missed inspection, a paper-thin audit trail, or yet another disconnected SaaS.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#hubs"
              className="group inline-flex items-center gap-2 rounded-pill bg-brand-gradient px-7 py-3.5 text-sm font-bold text-white shadow-glow transition-all hover:translate-y-[-1px] hover:shadow-elev"
            >
              See the three hubs
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-pill border border-card bg-bg/60 px-6 py-3.5 text-sm font-semibold text-fg backdrop-blur transition hover:border-accent hover:bg-card"
            >
              Book a walkthrough
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs uppercase tracking-[0.18em] text-muted">
            <span className="inline-flex items-center gap-2"><ShieldCheck size={14} /> CQC-aligned</span>
            <span>LOLER / PUWER / RIDDOR</span>
            <span>RAMS · CDM 2015</span>
            <span>EICR · Gas · Fire · Legionella</span>
          </div>
        </div>

        {/* Glowing H constellation */}
        <div className="relative flex items-center justify-center">
          <div aria-hidden className="absolute h-[480px] w-[480px] rounded-full bg-brand-cyan/15 blur-3xl animate-pulse-slow" />
          <img
            src="/hero.svg"
            alt=""
            className="relative w-full max-w-[520px] drop-shadow-[0_0_60px_rgba(91,141,239,0.35)]"
          />
          <div aria-hidden className="absolute -bottom-4 left-1/2 -translate-x-1/2">
            <HubLogo product="suite" variant="wordmark" size={28} />
          </div>
        </div>
      </div>
    </section>
  );
}
