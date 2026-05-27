"use client";

import { FadeIn } from "../motion";

export function ServicesHero() {
  return (
    <section className="px-5 pt-16 pb-12 sm:px-8 sm:pt-20 sm:pb-16">
      <FadeIn className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-vycl-text-muted">
          Engagement Models
        </p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-vycl-dark sm:text-5xl">
          How VYCL Works
        </h1>
        <p className="mt-5 text-base leading-relaxed text-vycl-text-muted sm:text-lg">
          Vehicle subscription is not one problem — it&apos;s six. VYCL solves
          all of them, in whatever combination your business needs.
        </p>
      </FadeIn>
    </section>
  );
}
