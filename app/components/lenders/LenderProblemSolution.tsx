"use client";

import { FadeIn, Stagger, motion, staggerItem } from "../motion";

const frictionPoints = [
  {
    problem:
      "Collateral doesn\u2019t behave like a single-asset auto loan \u2014 fleets turn over, mileage accrues, and exposure spans multiple subscribers.",
    solution:
      "VYCL structures fleet collateral, lien positions, and lender-ready documentation aligned to how subscription inventory actually moves.",
  },
  {
    problem:
      "Monthly subscriber revenue, churn, and utilization don\u2019t fit standard amortization schedules or indirect dealer loan tapes.",
    solution:
      "We build pro formas and data tapes mapped to subscription cash flows \u2014 the same approach used to close FlexRide\u2019s facility with Westlake and CULA.",
  },
  {
    problem:
      "You can\u2019t monitor portfolio risk without subscriber-level insurance and eligibility verified continuously, not at origination only.",
    solution:
      "VYCL integrates Axle for real-time insurance compliance and KEYVO for structured underwriting data on every rooftop in the portfolio.",
  },
];

export function LenderProblemSolution() {
  return (
    <section className="bg-vycl-cream-muted px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-vycl-dark sm:text-4xl">
            The lender problem
          </h2>
          <p className="mt-4 text-base leading-relaxed text-vycl-text-muted">
            Subscription portfolios need different data, different vehicle
            subscription underwriting, and different monitoring   from how to
            finance a subscription fleet through a closed subscription lending
            facility agreement.
          </p>
        </FadeIn>

        <Stagger className="mt-12 grid gap-4 lg:grid-cols-3 lg:grid-rows-[auto_auto_auto] lg:gap-y-4">
          {frictionPoints.map((item) => (
            <motion.article
              key={item.problem.slice(0, 40)}
              variants={staggerItem}
              className="flex flex-col gap-4 rounded-3xl border border-vycl-border bg-white p-6 shadow-sm lg:row-span-3 lg:grid lg:grid-rows-subgrid lg:gap-0"
            >
              <p className="text-sm leading-relaxed text-vycl-dark sm:text-base">
                {item.problem}
              </p>
              <div
                role="separator"
                aria-hidden
                className="h-px w-full shrink-0 bg-vycl-border/60"
              />
              <p className="text-sm leading-relaxed text-vycl-text-muted">
                {item.solution}
              </p>
            </motion.article>
          ))}
        </Stagger>

        <FadeIn className="mt-12 overflow-hidden rounded-3xl border border-vycl-border bg-vycl-dark px-8 py-10 text-center text-white sm:px-12">
          <p className="text-xl font-bold tracking-tight sm:text-2xl">
            VYCL has already closed a subscription lending facility.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
            We structured and closed institutional lending with Westlake Financial
            and CULA for FlexRide by King   a live reference for subscription
            auto portfolio financing, auto lender subscription program partnership,
            and automotive fleet financing consultant-led facility design in
            production.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {["Westlake Financial", "CULA", "FlexRide by King"].map((name) => (
              <span
                key={name}
                className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold text-white/90"
              >
                {name}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
