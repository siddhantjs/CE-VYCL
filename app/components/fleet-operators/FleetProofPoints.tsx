"use client";

import {
  Battery,
  Building2,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { FadeIn, Stagger, motion, staggerItem } from "../motion";

const proofPoints: { icon: LucideIcon; text: string }[] = [
  {
    icon: Zap,
    text: "Dedicated Dealer network in Hawaii and California, building rental fleets through subscription.",
  },
  {
    icon: Building2,
    text: "Partnering with TURO® to provide key data for strategic fleet composition.",
  },
  {
    icon: Battery,
    text: "Connecting Fleet owners with funds to scale through Subscription.",
  },
  {
    icon: ShieldCheck,
    text: "Fleet leasing consultant support with subscription vehicle depreciation model and fleet vehicle ROI subscription analysis",
  },
  {
    icon: Sparkles,
    text: "Mobility subscription fleet operator programs   KEYVO underwriting purpose-built for subscription portfolio risk",
  },
];

export function FleetProofPoints() {
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
      </div>
    </section>
  );
}
