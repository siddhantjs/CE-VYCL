"use client";

import {
  Building2,
  Gauge,
  Megaphone,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { FadeIn, Stagger, motion, staggerItem } from "../motion";

type ProofPoint = {
  icon: LucideIcon;
  title: string;
  body: string;
  featured?: boolean;
  highlights?: string[];
};

const proofPoints: ProofPoint[] = [
  {
    icon: Zap,
    title: "FlexRide by King",
    body: "Hawaii’s active dealer subscription program, built and operated by VYCL. Launched in 45 days with zero incremental headcount and institutional lending secured before go-live — proof you can run subscription without rebuilding your store.",
  },
  {
    icon: Sparkles,
    title: "KEYVO underwriting",
    body: "The only subscription-native subscriber approval tool available to dealers and lenders. Ryan co-founded KEYVO — VYCL clients get direct access to underwriting infrastructure no other consultancy can offer.",
  },
  {
    icon: Gauge,
    title: "JRNY platform",
    body: "Tomorrow’s Journey / JRNY powers active US dealer programs. VYCL is the exclusive US licensing partner — we configure, optimize, and implement JRNY on your rooftops, not just recommend it.",
  },
  {
    icon: ShieldCheck,
    title: "Axle insurance verification",
    body: "Real-time insurance compliance across every subscriber and rooftop. Axle verifies coverage before handoff — so your program stays compliant without manual back-office checks.",
  },
  {
    icon: Megaphone,
    title: "MiaVita Solutions",
    body: "Automotive subscription specialist digital marketing. MiaVita runs campaigns built for how subscription is sold — different from traditional retail — so your program gets demand, not just infrastructure.",
  },
  {
    icon: Building2,
    title: "Westlake Financial / CULA",
    body: "Institutional lending structured and closed before FlexRide went live — collateral modeled for subscription fleet portfolios, not retail paper. VYCL brings the lender relationship to your rooftop so you are not sourcing it alone.",
  },
];

export function DealerProofPoints() {
  return (
    <section className="px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-vycl-dark sm:text-4xl">
            Dealer-specific proof
          </h2>
          <p className="mt-4 text-base leading-relaxed text-vycl-text-muted">
            Real numbers, real partners, and a program running on a dealer rooftop
            today.
          </p>
        </FadeIn>

        <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {proofPoints.map((item) => (
            <motion.article
              key={item.title}
              variants={staggerItem}
              className={
                item.featured
                  ? "relative flex flex-col overflow-hidden rounded-3xl border-2 border-vycl-lime bg-vycl-dark p-6 text-white shadow-lg sm:p-7"
                  : "flex flex-col rounded-3xl border border-vycl-border bg-white p-6 shadow-sm"
              }
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              {item.featured ? (
                <div
                  className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(15,36,25,0.95)_0%,rgba(15,110,86,0.45)_100%)]"
                  aria-hidden
                />
              ) : null}

              <div className="relative flex flex-col flex-1">
                <span
                  className={
                    item.featured
                      ? "flex h-10 w-10 items-center justify-center rounded-xl bg-vycl-lime/15 text-vycl-lime"
                      : "flex h-10 w-10 items-center justify-center rounded-xl bg-vycl-lime-muted text-vycl-dark"
                  }
                >
                  <item.icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                </span>
                <h3
                  className={
                    item.featured
                      ? "mt-4 text-lg font-bold text-white"
                      : "mt-4 text-lg font-bold text-vycl-dark"
                  }
                >
                  {item.title}
                </h3>
                <p
                  className={
                    item.featured
                      ? "mt-2 flex-1 text-sm leading-relaxed text-white/75"
                      : "mt-2 flex-1 text-sm leading-relaxed text-vycl-text-muted"
                  }
                >
                  {item.body}
                </p>

                {item.highlights ? (
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {item.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="rounded-full bg-vycl-lime/15 px-3 py-1 text-xs font-semibold text-vycl-lime"
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </motion.article>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
