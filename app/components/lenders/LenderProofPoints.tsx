"use client";

import { Building2, FileText, LineChart, ShieldCheck, Sparkles, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { FadeIn, Stagger, motion, staggerItem } from "../motion";

const proofPoints: { icon: LucideIcon; text: string }[] = [
  {
    icon: Building2,
    text: "Closed a subscription lending facility agreement with Westlake Financial   Westlake Financial dealer program   and CULA credit union auto subscription lending for FlexRide by King",
  },
  {
    icon: Sparkles,
    text: "KEYVO subscription underwriting software   vehicle subscription underwriting and automotive fintech subscription portfolio monitoring",
  },
  {
    icon: LineChart,
    text: "Pro forma subscription fleet lender deliverables   subscription loan cash flow modeling, auto subscription data tape lender files, and auto subscription monthly cash flow projections",
  },
  {
    icon: FileText,
    text: "How to finance a subscription fleet   fleet loan facility for subscription design, indirect auto lending subscription mapping, and lender-ready documentation",
  },
  {
    icon: Users,
    text: "Auto lender subscription program partnership and automotive lender subscription strategy for dealers scaling a dealer subscription finance program",
  },
  {
    icon: ShieldCheck,
    text: "Subscription fleet financing with Axle-powered verification   subscriber-level compliance reducing lender exposure across every rooftop",
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
