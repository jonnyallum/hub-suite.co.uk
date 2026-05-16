"use client";

import { HubLogo, ThemeToggle } from "../../brand/react";

export function NavBar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl">
      <div className="border-b border-card/60 bg-bg/60">
        <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
          <a href="#" className="inline-flex items-center" aria-label="HubSuite home">
            <HubLogo product="suite" variant="lockup" size={32} />
          </a>
          <nav className="hidden gap-8 text-sm font-medium text-muted md:flex">
            <a className="transition hover:text-fg" href="#hubs">Hubs</a>
            <a className="transition hover:text-fg" href="#features">Features</a>
            <a className="transition hover:text-fg" href="#pricing">Pricing</a>
            <a className="transition hover:text-fg" href="#testimonials">Testimonials</a>
            <a className="transition hover:text-fg" href="#contact">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href="#contact"
              className="hidden rounded-pill bg-brand-gradient px-4 py-2 text-sm font-bold text-white shadow-glow transition hover:translate-y-[-1px] sm:inline-flex"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
