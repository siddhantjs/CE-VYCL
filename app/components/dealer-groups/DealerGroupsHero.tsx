"use client";

import { FadeIn } from "../motion";

export function DealerGroupsHero() {
  return (
    <section className="px-5 pt-16 pb-12 sm:px-8 sm:pt-20 sm:pb-16">
      <FadeIn className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-vycl-dark sm:text-5xl">
          Your dealership, running subscription. Without rebuilding from scratch.
        </h1>
        <p className="mt-5 text-base leading-relaxed text-vycl-text-muted sm:text-lg">
          Most programs fail not because the model is wrong, but because the
          implementation is. VYCL handles the platform, the lender, insurance
          compliance, and inventory before you go live — so the program works on
          day one.
        </p>
      </FadeIn>
    </section>
  );
}
