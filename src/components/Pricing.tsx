"use client";

import { Check } from "lucide-react";
import { HubLogo } from "../../brand/react";

const PLANS = [
  {
    product: "compliance" as const,
    name: "Compliance Hub",
    price: "£249",
    suffix: "/site / month",
    features: [
      "LOLER · PUWER · EICR · Gas · Fire · Legionella",
      "RAMS · CDM 2015 · Permit-to-Work",
      "Audit packs (AMP, FCI, KLOE) on demand",
      "Unlimited users · per-site billing",
    ],
    href: "https://compliance-hub.co.uk",
    accentClass: "from-[#5B8DEF] to-[#27d9d9]",
  },
  {
    product: "suite" as const,
    name: "HubSuite Bundle",
    price: "£549",
    suffix: "/site / month",
    badge: "Most popular",
    features: [
      "All three hubs · Compliance, Care, FM Control",
      "Single sign-on · one audit trail across all hubs",
      "Priority support · onboarding included",
      "Quarterly white-label brand refresh",
    ],
    href: "#contact",
    accentClass: "from-[#27d9d9] via-[#5B8DEF] to-[#8a5cf6]",
    highlight: true,
  },
  {
    product: "fm" as const,
    name: "FM Control Hub",
    price: "£299",
    suffix: "/site / month",
    features: [
      "PPM scheduling · work orders · permits",
      "Contractor & key control",
      "Energy + reliability reporting (AMP / FCI)",
      "Unlimited users · per-site billing",
    ],
    href: "https://fm-control-hub.co.uk",
    accentClass: "from-[#5EC86E] to-[#8a5cf6]",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-content px-6 py-24">
      <div className="mb-14 text-center">
        <span className="mb-4 inline-flex rounded-pill border border-card bg-card/40 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.3em] text-muted">
          Pricing
        </span>
        <h2 className="mb-3 text-4xl font-extrabold md:text-5xl">
          Per-site. <span className="text-gradient">No surprises.</span>
        </h2>
        <p className="text-muted">Care Hub starts at £199/site/mo · enterprise &amp; multi-site discounts on request.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {PLANS.map((p) => (
          <div
            key={p.name}
            className={`relative flex flex-col rounded-2xl border p-7 backdrop-blur ${
              p.highlight ? "border-transparent bg-card/50 glow" : "border-card/80 bg-card/30"
            }`}
          >
            {p.badge && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-pill bg-brand-gradient px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white shadow-glow">
                {p.badge}
              </span>
            )}

            <div className="mb-5 inline-flex items-center gap-3">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-bg/70 ring-1 ring-card">
                <HubLogo product={p.product} size={36} />
              </div>
              <div>
                <div className="text-lg font-bold">{p.name}</div>
                <div className="text-xs uppercase tracking-[0.18em] text-muted">{p.product === "suite" ? "All hubs" : "Per-hub"}</div>
              </div>
            </div>

            <div className="mb-6 flex items-baseline gap-1.5">
              <span className={`bg-clip-text text-5xl font-extrabold text-transparent bg-gradient-to-br ${p.accentClass}`}>{p.price}</span>
              <span className="text-sm text-muted">{p.suffix}</span>
            </div>

            <ul className="mb-7 space-y-2.5 text-sm">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <Check size={16} className="mt-0.5 shrink-0 text-accent" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <a
              href={p.href}
              className={`mt-auto inline-flex items-center justify-center rounded-pill px-5 py-3 text-sm font-semibold transition ${
                p.highlight
                  ? "bg-brand-gradient text-white shadow-glow hover:translate-y-[-1px]"
                  : "border border-card text-fg hover:border-accent hover:bg-card"
              }`}
            >
              {p.product === "suite" ? "Get the bundle" : `Visit ${p.name}`}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
