"use client";

import { FadeIn } from "../motion";

export function FleetOperatorsHero() {
  return (
    <section className="px-5 pt-16 pb-12 sm:px-8 sm:pt-20 sm:pb-16">
      <FadeIn className="mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center rounded-full border border-vycl-border bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-vycl-dark">
          For Fleet Operators &amp; OEMs
        </span>
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-vycl-dark sm:text-5xl">
          Your fleet. Subscribed. Profitable.
        </h1>
        <p className="mt-5 text-base leading-relaxed text-vycl-text-muted sm:text-lg">
          Fleet-based subscription programs need a fundamentally different
          structure than dealer retail. VYCL integrates direct AVIS/Budget
          wholesale inventory access, PLUG EV sourcing for pre-owned units, Axle
          compliance at fleet scale, and KEYVO underwriting — built as one
          program architecture for rental companies, EV fleet operators, and
          hosts running vehicles at scale.
        </p>
      </FadeIn>
    </section>
  );
}
