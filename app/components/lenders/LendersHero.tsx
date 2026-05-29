"use client";

import { FadeIn } from "../motion";

export function LendersHero() {
  return (
    <section className="px-5 pt-16 pb-12 sm:px-8 sm:pt-20 sm:pb-16">
      <FadeIn className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-vycl-dark sm:text-5xl">
          Vehicle subscription lending is a different asset class. We help you
          structure it correctly.
        </h1>
        <p className="mt-5 text-base leading-relaxed text-vycl-text-muted sm:text-lg">
          Traditional auto lending structures do not map cleanly onto subscription
          fleet portfolios. VYCL works with lenders to build the right facility
          structure, underwriting criteria, and monitoring framework.
          Subscriber-level insurance compliance is managed in real time through
          Axle. Subscriber underwriting is powered by KEYVO   the only platform
          built specifically for subscription portfolio risk.
        </p>
      </FadeIn>
    </section>
  );
}
