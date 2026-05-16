"use client";

import { Mail, MessageSquare } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-content px-6 py-24">
      <div className="overflow-hidden rounded-3xl border border-card/80 bg-card/30 backdrop-blur">
        <div className="grid gap-0 md:grid-cols-2">
          <div className="relative flex flex-col gap-6 p-10 md:p-14">
            <span className="inline-flex w-fit rounded-pill border border-card bg-bg/60 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.3em] text-muted">
              Get started
            </span>
            <h2 className="text-4xl font-extrabold leading-[1.05] md:text-5xl">
              Tell us about your <span className="text-gradient">estate</span>.
            </h2>
            <p className="text-muted">
              We'll route you to the right hub, scope your onboarding, and set up a working pilot on one site — usually within two weeks.
            </p>

            <div className="space-y-3 text-sm">
              <a className="inline-flex items-center gap-2.5 hover:text-accent" href="mailto:hello@jonnyai.co.uk">
                <Mail size={16} /> hello@jonnyai.co.uk
              </a>
              <a className="inline-flex items-center gap-2.5 hover:text-accent" href="https://jonnyai.co.uk">
                <MessageSquare size={16} /> Talk to us at jonnyai.co.uk
              </a>
            </div>

            <div aria-hidden className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-brand-gradient opacity-30 blur-3xl" />
          </div>

          <form className="grid gap-3 bg-bg/40 p-10 md:p-14" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-3 sm:grid-cols-2">
              <Field placeholder="Name" />
              <Field placeholder="Work email" type="email" />
            </div>
            <Field placeholder="Organisation / estate" />
            <select
              className="rounded-lg border border-card bg-bg px-3.5 py-3 text-sm focus:border-accent focus:outline-none"
              defaultValue=""
            >
              <option value="" disabled>Which hub interests you most?</option>
              <option>Compliance Hub</option>
              <option>Care Hub</option>
              <option>FM Control Hub</option>
              <option>HubSuite (all three)</option>
            </select>
            <textarea
              placeholder="Tell us about your sites, frameworks, current tooling..."
              className="min-h-[7.5rem] rounded-lg border border-card bg-bg px-3.5 py-3 text-sm placeholder:text-muted focus:border-accent focus:outline-none"
            />
            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center self-start rounded-pill bg-brand-gradient px-6 py-3 text-sm font-bold text-white shadow-glow transition hover:translate-y-[-1px]"
            >
              Request a walkthrough
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="rounded-lg border border-card bg-bg px-3.5 py-3 text-sm placeholder:text-muted focus:border-accent focus:outline-none"
    />
  );
}
