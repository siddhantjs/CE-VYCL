"use client";

import { FadeIn } from "../motion";

export function PlatformsHero() {
  return (
    <section className="px-5 pt-16 pb-12 sm:px-8 sm:pt-20 sm:pb-16">
      <FadeIn className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-vycl-dark sm:text-5xl">
          At the heart of every accelerating enterprise is the technology that
          powers it.
        </h1>
        <p className="mt-5 text-base leading-relaxed text-vycl-text-muted sm:text-lg">
          VYCL is the exclusive US licensing partner of Tomorrow&apos;s Journey
          delivering a first in class, go-to-market platform that allows Dealers
          to launch and scale without disruption.
        </p>
      </FadeIn>
    </section>
  );
}
