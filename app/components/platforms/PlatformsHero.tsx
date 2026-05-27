"use client";

import { FadeIn } from "../motion";

export function PlatformsHero() {
  return (
    <section className="px-5 pt-16 pb-12 sm:px-8 sm:pt-20 sm:pb-16">
      <FadeIn className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-vycl-dark sm:text-5xl">
          Your platform needs US dealers. We know how to get them.
        </h1>
        <p className="mt-5 text-base leading-relaxed text-vycl-text-muted sm:text-lg">
          As the exclusive US licensing partner for Tomorrow&apos;s Journey, VYCL
          knows the dealer conversation, knows what proof they need, and knows
          how to turn a demo into a signed agreement backed by a live reference
          program.
        </p>
      </FadeIn>
    </section>
  );
}
