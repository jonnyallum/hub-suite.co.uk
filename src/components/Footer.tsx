"use client";

import { HubLogo } from "../../brand/react";

export function Footer() {
  return (
    <footer className="border-t border-card/60 bg-bg/40">
      <div className="mx-auto grid max-w-content gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <HubLogo product="suite" variant="lockup" size={32} />
          <p className="mt-4 max-w-md text-sm text-muted">
            One operating system across compliance, care, and facility management. Built in the UK by JonnyAI — for estates that take operations seriously.
          </p>
        </div>

        <div>
          <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-muted">Hubs</div>
          <ul className="space-y-2 text-sm">
            <li><a className="hover:text-accent" href="https://compliance-hub.co.uk">Compliance Hub</a></li>
            <li><a className="hover:text-accent" href="https://care-hub-app.co.uk">Care Hub</a></li>
            <li><a className="hover:text-accent" href="https://fm-control-hub.co.uk">FM Control Hub</a></li>
          </ul>
        </div>

        <div>
          <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-muted">Company</div>
          <ul className="space-y-2 text-sm">
            <li><a className="hover:text-accent" href="https://jonnyai.co.uk">JonnyAI</a></li>
            <li><a className="hover:text-accent" href="#contact">Contact</a></li>
            <li><a className="hover:text-accent" href="#pricing">Pricing</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-card/60">
        <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-muted md:flex-row">
          <div>© {new Date().getFullYear()} JonnyAI HubSuite. All rights reserved.</div>
          <div>Built in the UK · privacy · terms</div>
        </div>
      </div>
    </footer>
  );
}
