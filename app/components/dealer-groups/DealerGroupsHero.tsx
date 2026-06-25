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
          Most programs fail not because the model doesn&apos;t work, but because
          the system doesn&apos;t match the model. VYCL provides Dealers of all
          shapes and sizes with a bespoke strategy backed by the tools required
          to not only launch but scale. As Dealers strive for revenue
          diversification, delivering vehicles through subscription is the perfect
          &quot;Value Add&quot; solution and our all-in-one service is a must
          before you &quot;go live&quot;.
        </p>
      </FadeIn>
    </section>
  );
}
