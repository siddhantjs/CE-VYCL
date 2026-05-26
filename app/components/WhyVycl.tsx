"use client";

import { FadeIn } from "./motion";

export function WhyVycl() {
  return (
    <section id="why-vycl" className="px-5 py-20 sm:px-8 sm:py-24">
      <FadeIn className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-vycl-text-muted">
          Why VYCL
        </p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-vycl-dark sm:text-4xl">
          Built for the vehicle subscription economy
        </h2>
        <div className="mt-8 space-y-5 text-left text-base leading-relaxed text-vycl-text-muted sm:text-center">
          <p>
            VYCL is the only consultancy purpose-built for the vehicle subscription
            economy. We don&apos;t advise from the sidelines — we&apos;ve built,
            operated, and financed real programs, on real rooftops, with real
            results.
          </p>
          <p>
            Our active programs span Hawaii and are growing nationally.
            We&apos;ve structured lending facilities with institutional partners,
            launched SaaS platforms into US dealer networks, and developed the
            Six Pillars framework that has guided over 800 vehicle deployments.
          </p>
          <p>
            Whether you&apos;re launching your first subscription program or
            expanding an existing one, VYCL brings vehicle subscription expertise,
            hands-on execution, and a partner-driven ecosystem that no other
            automotive consultancy can match.
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
