"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { HubLogo } from "../../brand/react";

const HUBS = [
  {
    product: "compliance" as const,
    title: "Compliance Hub",
    blurb: "Statutory compliance & risk operations. LOLER, PUWER, RIDDOR, EICR, Gas, Fire, Legionella, RAMS, CDM, Asbestos — one operating system, one audit trail.",
    href: "https://compliance-hub.jonnyai.co.uk",
    accent: "from-[#5B8DEF] to-[#27d9d9]",
    ring: "rgb(91 141 239 / 0.5)",
    cardBg: "linear-gradient(155deg, #0e1a36 0%, #142850 55%, #1c3266 100%)",
    bullets: ["LOLER / PUWER / EICR", "RAMS · CDM 2015", "Audit packs on tap"],
  },
  {
    product: "care" as const,
    title: "Care Hub",
    blurb: "CQC-aligned residential & nursing care. Residents, care plans, MAR, incidents, KLOE, training, audits — built for UK homes.",
    href: "https://care-hub.jonnyai.co.uk",
    accent: "from-[#31c6a9] to-[#5B8DEF]",
    ring: "rgb(49 198 169 / 0.5)",
    cardBg: "linear-gradient(155deg, #0e3a35 0%, #15604f 55%, #1a7a64 100%)",
    bullets: ["MAR · Care plans · KLOE", "Incidents · NEWS2", "Family portal"],
  },
  {
    product: "fm" as const,
    title: "FM Control Hub",
    blurb: "Master facility management. PPM, work orders, permits, contractor & key control, energy + reliability reporting — the operations brain.",
    href: "https://fm-control-hub.jonnyai.co.uk",
    accent: "from-[#5EC86E] to-[#8a5cf6]",
    ring: "rgb(94 200 110 / 0.5)",
    cardBg: "linear-gradient(155deg, #0e4724 0%, #2c8a48 40%, #4a4baf 75%, #6b3ecb 100%)",
    bullets: ["PPM + work orders", "Permits · contractors", "AMP / FCI / reliability"],
  },
];

export function HubsRow() {
  return (
    <section id="hubs" className="relative mx-auto max-w-content px-6 py-24">
      <div className="mb-14 flex flex-col items-center text-center">
        <span className="mb-4 inline-flex rounded-pill border border-card bg-card/40 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.3em] text-muted">
          Three hubs · one operating system
        </span>
        <h2 className="mb-3 text-4xl font-extrabold md:text-5xl">
          Pick a <span className="text-gradient">hub</span>. Or run the whole suite.
        </h2>
        <p className="max-w-2xl text-muted">
          Same login. Same audit trail. Same brand. Every site, every framework, every action accounted for.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {HUBS.map((h) => (
          <Link
            key={h.product}
            href={h.href}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 p-7 text-white shadow-elev transition-all hover:-translate-y-1 hover:border-white/30"
            style={{ background: h.cardBg, ["--hover-ring" as any]: h.ring }}
          >
            {/* subtle highlight on hover */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background: "radial-gradient(circle at 30% 0%, rgba(255,255,255,0.18) 0%, transparent 55%)",
              }}
            />

            {/* mark — black coin with product mark, like the reference photo */}
            <div className="relative mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-black/40 ring-1 ring-white/15 backdrop-blur-sm">
              <HubLogo product={h.product} size={56} />
            </div>

            <h3 className="relative mb-2 text-2xl font-bold">{h.title}</h3>
            <p className="relative mb-5 text-sm leading-relaxed text-white/80">{h.blurb}</p>

            <ul className="relative mb-6 space-y-1.5 text-xs uppercase tracking-[0.15em] text-white/70">
              {h.bullets.map((b) => (
                <li key={b} className="flex items-center gap-2">
                  <span className={`inline-block h-1 w-3 rounded-full bg-gradient-to-r ${h.accent}`} />
                  {b}
                </li>
              ))}
            </ul>

            <div className="relative mt-auto inline-flex items-center gap-2 self-start rounded-pill bg-white/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] backdrop-blur-sm transition group-hover:bg-white/25">
              Open the app
              <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
