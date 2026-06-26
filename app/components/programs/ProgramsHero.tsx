"use client";

import { FadeIn } from "../motion";

export function ProgramsHero() {
  return (
    <section className="px-5 pt-16 pb-12 sm:px-8 sm:pt-20 sm:pb-16">
      <FadeIn className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-vycl-dark sm:text-5xl">
          Programs built. Programs running.
        </h1>
        <p className="mt-5 text-base leading-relaxed text-vycl-text-muted sm:text-lg">
          With live vehicle subscription programs currently thriving in the US,
          the Six Pillars framework has established itself as the blueprint for
          success in the marketplace.
        </p>
      </FadeIn>
    </section>
  );
}
