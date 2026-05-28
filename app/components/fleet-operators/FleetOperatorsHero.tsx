"use client";

import { FadeIn } from "../motion";

export function FleetOperatorsHero() {
  return (
    <section className="px-5 pt-16 pb-12 sm:px-8 sm:pt-20 sm:pb-16">
      <FadeIn className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-vycl-dark sm:text-5xl">
          Your fleet. Subscribed. Profitable.
        </h1>
        <p className="mt-5 text-base leading-relaxed text-vycl-text-muted sm:text-lg">
          Fleet-based subscription programs need a fundamentally different
          structure. VYCL has direct access to the AVIS/Budget wholesale channel
          for fleet-ready inventory, pre-owned EV sourcing through PLUG, insurance
          verification through Axle, and subscriber underwriting through KEYVO  
          all integrated into a program designed for fleet-scale operations.
        </p>
      </FadeIn>
    </section>
  );
}
