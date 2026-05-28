"use client";

import { Building2, ShieldCheck, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { FadeIn, Stagger, motion, staggerItem } from "../motion";

const proofPoints: { icon: LucideIcon; text: string }[] = [
  {
    icon: Building2,
    text: "Structured and closed a lending facility with Westlake Financial / CULA for FlexRide by King",
  },
  {
    icon: Sparkles,
    text: "KEYVO underwriting platform   purpose-built for subscription portfolios",
  },
  {
    icon: ShieldCheck,
    text: "Axle-powered insurance verification   subscriber-level compliance reducing lender exposure",
  },
];

const featuredPartners = [
  "KEYVO",
  "Westlake Financial",
  "CULA",
  "Axle",
];

export function LenderProofPoints() {
  return (
    <section className="px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-vycl-dark sm:text-4xl">
            Proof points
          </h2>
        </FadeIn>

        <Stagger className="mt-14 space-y-4">
          {proofPoints.map((item) => (
            <motion.article
              key={item.text}
              variants={staggerItem}
              className="flex gap-4 rounded-3xl border border-vycl-border bg-white p-6 shadow-sm"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-vycl-lime-muted text-vycl-dark">
                <item.icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
              </span>
              <p className="text-sm leading-relaxed text-vycl-dark sm:text-base">
                {item.text}
              </p>
            </motion.article>
          ))}
        </Stagger>

        <FadeIn className="mt-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-vycl-text-muted">
            Featured partners
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            {featuredPartners.map((name) => (
              <span
                key={name}
                className="rounded-full border border-vycl-border bg-vycl-cream-muted px-4 py-2 text-sm font-semibold text-vycl-dark"
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
