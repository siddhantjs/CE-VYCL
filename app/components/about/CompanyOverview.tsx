"use client";

import { FadeIn } from "../motion";

export function CompanyOverview() {
  return (
    <section className="px-5 pb-16 sm:px-8 sm:pb-20">
      <FadeIn>
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-vycl-border bg-white px-8 py-12 sm:px-12 sm:py-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-vycl-text-muted">
            VYCL LLC
          </p>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-vycl-dark sm:text-3xl">
            Purpose-built for subscription
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-vycl-text-muted">
            Founded by Ryan Yamauchi, VYCL LLC is Hawaii-based and operating
            nationally as an automotive industry consulting firm and automotive
            industry advisor Hawaii. It is the only vehicle subscription
            consultancy purpose-built for the subscription economy   not a
            generalist firm, but a specialist mobility industry consultant built
            exclusively for subscription.
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
