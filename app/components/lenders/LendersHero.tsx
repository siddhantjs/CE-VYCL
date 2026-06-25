"use client";

import { FadeIn } from "../motion";

export function LendersHero() {
  return (
    <section className="px-5 pt-16 pb-12 sm:px-8 sm:pt-20 sm:pb-16">
      <FadeIn className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-vycl-dark sm:text-5xl">
          Subscription Lending structured for a different asset class
        </h1>
        <p className="mt-5 text-base leading-relaxed text-vycl-text-muted sm:text-lg">
          Traditional facilities do not map cleanly onto subscription fleet
          portfolios. VYCL helps lenders build the right products, designed to
          promote scale while adhering to tested risk mitigation formulas that
          make them viable. Its collateralized, its compliant, its not
          traditional, its not next, its now.
        </p>
      </FadeIn>
    </section>
  );
}
