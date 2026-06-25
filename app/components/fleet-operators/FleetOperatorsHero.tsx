"use client";

import { FadeIn } from "../motion";

export function FleetOperatorsHero() {
  return (
    <section className="px-5 pt-16 pb-12 sm:px-8 sm:pt-20 sm:pb-16">
      <FadeIn className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-vycl-dark sm:text-5xl">
          Scaling your fleet one subscription at a time.
        </h1>
        <p className="mt-5 text-base leading-relaxed text-vycl-text-muted sm:text-lg">
          For private rental fleet operators and Peer to Peer Hosts, scale drives
          profits but finances hinder scale. Fleet growth via Subscription is the
          answer.
        </p>
      </FadeIn>
    </section>
  );
}
