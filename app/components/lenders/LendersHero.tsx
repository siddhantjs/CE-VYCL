"use client";

import { FadeIn } from "../motion";

export function LendersHero() {
  return (
    <section className="px-5 pt-16 pb-12 sm:px-8 sm:pt-20 sm:pb-16">
      <FadeIn className="mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center rounded-full border border-vycl-border bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-vycl-dark">
          For Auto Lenders &amp; Credit Unions
        </span>
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-vycl-dark sm:text-5xl">
          Vehicle subscription lending is a different asset class. We help you
          structure it correctly.
        </h1>
        <p className="mt-5 text-base leading-relaxed text-vycl-text-muted sm:text-lg">
          Traditional auto lending structures don&apos;t map onto subscription
          fleet portfolios. VYCL works with lenders to build the right facility
          structure, underwriting criteria, and monitoring framework.
        </p>
      </FadeIn>
    </section>
  );
}
