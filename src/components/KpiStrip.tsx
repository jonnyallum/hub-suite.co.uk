"use client";

const KPIS = [
  { v: "10+",  l: "statutory frameworks covered" },
  { v: "100%", l: "audit-trail completeness" },
  { v: "24/7", l: "estate operations on call" },
  { v: "1",    l: "operating system" },
];

export function KpiStrip() {
  return (
    <section className="mx-auto max-w-content px-6 py-16">
      <div className="overflow-hidden rounded-2xl border border-card/80 bg-card/20 backdrop-blur">
        <div className="grid grid-cols-2 divide-x divide-card/60 lg:grid-cols-4">
          {KPIS.map((k) => (
            <div key={k.l} className="flex flex-col items-center gap-1.5 px-6 py-8 text-center">
              <span className="bg-brand-gradient bg-clip-text text-4xl font-extrabold text-transparent md:text-5xl">{k.v}</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted">{k.l}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
