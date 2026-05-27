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

const proofPoints: {
  icon: LucideIcon;
  title: string;
  body: string;
}[] = [
  {
    icon: Zap,
    title: "Rivian EV fleet program, Hawaii",
    body: "VYCL developed the subscription structure for a 20-unit Rivian fleet program in Hawaii — unit economics, subscriber terms, and compliance wired for EV operations at fleet scale. It is a live reference for how an OEM-aligned EV fleet moves from parked inventory to recurring subscription revenue.",
  },
  {
    icon: Building2,
    title: "AVIS/Budget wholesale access",
    body: "VYCL has direct access to AVIS/Budget wholesale channels for fleet inventory at scale — not one-off retail acquisitions. That wholesale relationship lets fleet operators source units on terms built for volume turnover, not ad hoc lot purchases.",
  },
  {
    icon: Battery,
    title: "PLUG EV inventory sourcing",
    body: "PLUG EV is VYCL\u2019s platform for pre-owned EV inventory sourcing — curated supply for subscription fleets that need EV units without new-OEM lead times. Fleet operators get a repeatable sourcing path instead of chasing individual units across auctions and brokers.",
  },
  {
    icon: ShieldCheck,
    title: "Axle fleet-level compliance",
    body: "Axle delivers insurance verification across the fleet — subscriber by subscriber, unit by unit — before handoff and throughout the term. Fleet-level compliance runs continuously so operators are not managing coverage gaps manually across dozens or hundreds of active subscribers.",
  },
  {
    icon: Sparkles,
    title: "KEYVO subscription underwriting",
    body: "KEYVO is purpose-built for subscription portfolio risk — approval workflows, subscriber data, and portfolio visibility that indirect auto systems were never designed to produce. Fleet operators and their lending partners get underwriting infrastructure aligned to how subscription fleets actually perform.",
  },
];

export function FleetProofPoints() {
  return (
    <section className="px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-vycl-dark sm:text-4xl">
            Fleet-specific proof
          </h2>
          <p className="mt-4 text-base leading-relaxed text-vycl-text-muted">
            EV fleet structure, wholesale inventory access, and compliance
            infrastructure built for operators running vehicles at scale.
          </p>
        </FadeIn>

        <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {proofPoints.map((item) => (
            <motion.article
              key={item.title}
              variants={staggerItem}
              className="flex flex-col rounded-3xl border border-vycl-border bg-white p-6 shadow-sm lg:last:col-span-1"
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
