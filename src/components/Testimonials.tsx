"use client";

import { Quote } from "lucide-react";

const QUOTES = [
  {
    text: "Moving from spreadsheets to HubSuite cut our audit prep from three weeks to two days. The inspector left with the pack in their inbox.",
    author: "Operations Director",
    org: "UK estates group · 22 sites",
  },
  {
    text: "The dark mode and consistent branding across all three hubs makes onboarding new estate managers genuinely simple. People learn one app, they know all three.",
    author: "Compliance Lead",
    org: "Heritage tourism operator",
  },
  {
    text: "Care Hub gave our CQC inspector everything they asked for in one click. We've never been so calm during a visit.",
    author: "Registered Manager",
    org: "Residential care provider · 4 homes",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-content px-6 py-24">
      <h2 className="mb-12 text-center text-4xl font-extrabold md:text-5xl">
        Estates that <span className="text-gradient">trust</span> HubSuite
      </h2>

      <div className="grid gap-5 md:grid-cols-3">
        {QUOTES.map((q) => (
          <figure
            key={q.author}
            className="relative flex h-full flex-col gap-5 overflow-hidden rounded-2xl border border-card/80 bg-card/30 p-7 backdrop-blur"
          >
            <Quote size={28} className="text-accent opacity-70" aria-hidden />
            <blockquote className="text-base leading-relaxed">"{q.text}"</blockquote>
            <figcaption className="mt-auto border-t border-card/60 pt-4 text-sm">
              <div className="font-semibold">{q.author}</div>
              <div className="text-muted">{q.org}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
