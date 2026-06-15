"use client";

import { FadeIn } from "../motion";

export function PlatformsHero() {
  return (
    <section className="px-5 pt-16 pb-12 sm:px-8 sm:pt-20 sm:pb-16">
      <FadeIn className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-vycl-dark sm:text-5xl">
          Automotive SaaS US market entry   with dealers who will sign.
        </h1>
        <p className="mt-5 text-base leading-relaxed text-vycl-text-muted sm:text-lg">
          VYCL is the automotive SaaS licensing partner US for Tomorrow&apos;s
          Journey   delivering automotive platform go-to-market US execution and
          automotive go-to-market consultant support for UK automotive SaaS US
          expansion, JRNY subscription platform US deployment, and dealer
          onboarding subscription software that closes franchise dealers.
        </p>
      </FadeIn>
    </section>
  );
}
