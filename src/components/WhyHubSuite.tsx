"use client";

import {
  LayoutDashboard,
  BellRing,
  Smartphone,
  FileBarChart,
  Lock,
  Workflow,
} from "lucide-react";

const FEATURES = [
  {
    icon: LayoutDashboard,
    title: "Single operational pane",
    body: "Every site, every framework, every action — one dashboard, role-aware, audit-ready.",
  },
  {
    icon: BellRing,
    title: "Automated alerts",
    body: "Overdue inspections, defective assets, expiring tickets, RIDDOR triggers — escalated to the right person, every time.",
  },
  {
    icon: Smartphone,
    title: "Built mobile-first",
    body: "PWA-ready. Works on every estate phone, online and offline. No app store. No friction.",
  },
  {
    icon: FileBarChart,
    title: "Audit packs on demand",
    body: "AMP, FCI, SLA, KLOE, reliability — generated, stamped, exported. Inspector arrives → pack in their inbox.",
  },
  {
    icon: Lock,
    title: "Single sign-on across hubs",
    body: "Compliance, Care, FM — one login, one identity, one trail. Saves IT a week per site.",
  },
  {
    icon: Workflow,
    title: "White-label your estate",
    body: "Drop your logo, your palette, your language. HubSuite carries the brand of the operator, not the vendor.",
  },
];

export function WhyHubSuite() {
  return (
    <section id="features" className="mx-auto max-w-content px-6 py-24">
      <div className="mb-14 text-center">
        <span className="mb-4 inline-flex rounded-pill border border-card bg-card/40 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.3em] text-muted">
          Why HubSuite
        </span>
        <h2 className="text-4xl font-extrabold md:text-5xl">
          Built for <span className="text-gradient">operators</span>, not auditors.
        </h2>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map(({ icon: Icon, title, body }) => (
          <div
            key={title}
            className="group relative overflow-hidden rounded-2xl border border-card/80 bg-card/30 p-7 backdrop-blur transition hover:border-accent/60"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-brand-gradient opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20"
            />
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-bg/70 ring-1 ring-card text-accent">
              <Icon size={22} />
            </div>
            <h3 className="mb-2 text-lg font-bold">{title}</h3>
            <p className="text-sm leading-relaxed text-muted">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
