"use client";

import { FadeIn } from "../motion";

export function DealerGroupsHero() {
  return (
    <section className="px-5 pt-16 pb-12 sm:px-8 sm:pt-20 sm:pb-16">
      <FadeIn className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-vycl-dark sm:text-5xl">
          Your dealership subscription program   without rebuilding from scratch.
        </h1>
        <p className="mt-5 text-base leading-relaxed text-vycl-text-muted sm:text-lg">
          Most programs fail not because the model is wrong, but because the
          implementation is. VYCL is your automotive revenue consultant for
          dealer group revenue diversification   delivering subscription software
          for franchise dealers, a vehicle subscription all-in-one program, and
          franchise dealer subscription program structure before you go live.
        </p>
      </FadeIn>
    </section>
  );
}
