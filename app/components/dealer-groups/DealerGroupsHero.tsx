"use client";

import { FadeIn } from "../motion";

export function DealerGroupsHero() {
  return (
    <section className="px-5 pt-16 pb-12 sm:px-8 sm:pt-20 sm:pb-16">
      <FadeIn className="mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center rounded-full border border-vycl-border bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-vycl-dark">
          For Dealer Groups &amp; Dealer Principals
        </span>
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-vycl-dark sm:text-5xl">
          Your dealership, running subscription. Without rebuilding it from
          scratch.
        </h1>
        <p className="mt-5 text-base leading-relaxed text-vycl-text-muted sm:text-lg">
          Most programs fail not because the model is wrong, but because the
          implementation is. VYCL solves all of it — platform, lending,
          insurance, and operations — before you launch.
        </p>
      </FadeIn>
    </section>
  );
}
