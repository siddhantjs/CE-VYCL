"use client";

import { FadeIn } from "../motion";

export function ServicesHero() {
  return (
    <section className="px-5 pt-16 pb-12 sm:px-8 sm:pt-20 sm:pb-16">
      <FadeIn className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-vycl-dark sm:text-5xl">
          How VYCL Works
        </h1>
        <p className="mt-5 text-base leading-relaxed text-vycl-text-muted sm:text-lg">
          VYCL delivers B2B automotive consulting services as your vehicle
          subscription strategy consultant and car subscription business model
          consultant   solving all six pillars and building your vehicle
          subscription business plan in whatever combination your organisation
          needs.
        </p>
      </FadeIn>
    </section>
  );
}
