"use client";

import { FadeIn } from "../motion";

export function FleetOperatorsHero() {
  return (
    <section className="px-5 pt-16 pb-12 sm:px-8 sm:pt-20 sm:pb-16">
      <FadeIn className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-vycl-dark sm:text-5xl">
          Fleet rental to subscription transition   done right.
        </h1>
        <p className="mt-5 text-base leading-relaxed text-vycl-text-muted sm:text-lg">
          VYCL is your OEM subscription program consultant and fleet program
          consulting partner for operators moving beyond traditional rental. From
          rental car fleet subscription programs to rental fleet monetization, we
          integrate AVIS Budget wholesale channel subscription inventory, PLUG
          sourcing, Axle compliance, and KEYVO underwriting   with automotive
          fleet financing expertise built in.
        </p>
      </FadeIn>
    </section>
  );
}
