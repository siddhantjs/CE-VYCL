"use client";

import { FadeIn } from "../motion";

export function LendersHero() {
  return (
    <section className="px-5 pt-16 pb-12 sm:px-8 sm:pt-20 sm:pb-16">
      <FadeIn className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-vycl-dark sm:text-5xl">
          Auto subscription lending structure for a different asset class
        </h1>
        <p className="mt-5 text-base leading-relaxed text-vycl-text-muted sm:text-lg">
          Traditional structures do not map cleanly onto subscription fleet
          portfolios. As your auto finance consultant, VYCL helps lenders build
          the right fleet subscription loan facility, subscription auto portfolio
          financing, and subscription vehicle collateral structure   with
          vehicle subscription underwriting powered by KEYVO and real-time
          compliance through Axle.
        </p>
      </FadeIn>
    </section>
  );
}
