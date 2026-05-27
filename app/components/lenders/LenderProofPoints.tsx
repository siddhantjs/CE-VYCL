"use client";

import { Building2, ShieldCheck, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { FadeIn, Stagger, motion, staggerItem } from "../motion";

const proofPoints: {
  icon: LucideIcon;
  title: string;
  body: string;
}[] = [
  {
    icon: Building2,
    title: "Westlake Financial / CULA facility",
    body: "VYCL structured and closed a lending facility with Westlake Financial and CULA for FlexRide by King. Lenders get a live reference for collateral structure, facility terms, and the documentation package required to fund a subscription fleet portfolio.",
  },
  {
    icon: Sparkles,
    title: "KEYVO underwriting platform",
    body: "KEYVO is purpose-built for subscription portfolio risk — not retrofitted from indirect auto lending. It gives lenders structured subscriber data, approval workflows, and portfolio-level visibility that traditional underwriting systems were never designed to produce.",
  },
  {
    icon: ShieldCheck,
    title: "Axle insurance verification",
    body: "Axle delivers subscriber-level insurance compliance in real time across every rooftop in the portfolio. Continuous verification reduces lender exposure on fleet collateral without manual back-office checks or post-close surprises.",
  },
];

export function LenderProofPoints() {
  return (
    <section className="px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-vycl-dark sm:text-4xl">
            Lender-specific proof
          </h2>
          <p className="mt-4 text-base leading-relaxed text-vycl-text-muted">
            A closed facility, subscription-native underwriting, and
            subscriber-level compliance — built for lender diligence.
          </p>
        </FadeIn>

        <Stagger className="mt-14 grid gap-4 lg:grid-cols-3">
          {proofPoints.map((item) => (
            <motion.article
              key={item.title}
              variants={staggerItem}
              className="flex flex-col rounded-3xl border border-vycl-border bg-white p-6 shadow-sm"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-vycl-lime-muted text-vycl-dark">
                <item.icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
              </span>
              <h3 className="mt-4 text-lg font-bold text-vycl-dark">
                {item.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-vycl-text-muted">
                {item.body}
              </p>
            </motion.article>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
