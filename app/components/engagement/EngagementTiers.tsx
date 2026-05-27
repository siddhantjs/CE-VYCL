"use client";

import Link from "next/link";
import { FadeIn, Stagger, motion, staggerItem } from "../motion";

const tiers = [
  {
    tier: "01",
    label: "Advisory",
    featured: false,
    description:
      "Strategic guidance for organizations at the evaluation stage. VYCL delivers market assessment, program design, partner identification, and a clear go/no-go recommendation — senior counsel without execution overhead. You leave with strategic clarity, not a slide deck that gathers dust.",
    bestFor:
      "OEMs, lenders, and SaaS platforms exploring the US subscription market",
    extras: {
      heading: "Typical deliverables",
      items: [
        "Market assessment memo",
        "Partner shortlist",
        "Program design framework",
      ],
    },
  },
  {
    tier: "02",
    label: "Implementation",
    featured: true,
    description:
      "Hands-on buildout from concept to launch, covering all Six Pillars. We configure the JRNY platform, engage lenders through Westlake and CULA, integrate Axle for insurance verification, source inventory through AVIS/Budget and PLUG, launch MiaVita marketing, and design day-to-day operations — end to end, on your rooftop.",
    bestFor: "Dealer groups launching their first or second rooftop",
    extras: {
      heading: "Partner stack",
      items: [
        "JRNY platform",
        "Westlake / CULA",
        "Axle",
        "AVIS/Budget + PLUG",
        "MiaVita",
        "Operational design",
      ],
    },
    proof: "FlexRide by King — 45-day launch, zero incremental headcount",
  },
  {
    tier: "03",
    label: "Ongoing Partnership",
    featured: false,
    description:
      "Embedded strategic and operational support for programs already running. VYCL leads performance review, lender relationship management, platform optimization, and national expansion planning — so your team stays focused on subscribers and rooftops, not firefighting infrastructure.",
    bestFor:
      "Multi-rooftop operators scaling beyond their home market",
    extras: {
      heading: "Focus areas",
      items: [
        "Performance review",
        "Lender relationship management",
        "Platform optimization",
        "National expansion planning",
      ],
    },
  },
];

export function EngagementTiers() {
  return (
    <section className="px-5 pb-20 sm:px-8 sm:pb-24">
      <div className="mx-auto max-w-6xl">
        <Stagger className="grid gap-5 lg:grid-cols-3">
          {tiers.map((tier) => (
            <motion.article
              key={tier.label}
              variants={staggerItem}
              className={
                tier.featured
                  ? "flex flex-col rounded-3xl border-2 border-vycl-lime bg-vycl-dark p-6 text-white shadow-lg sm:p-7"
                  : "flex flex-col rounded-3xl border border-vycl-border bg-white p-6 shadow-sm sm:p-7"
              }
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <div className="flex items-center justify-between gap-3">
                <span
                  className={
                    tier.featured
                      ? "text-xs font-semibold uppercase tracking-widest text-vycl-lime"
                      : "text-xs font-semibold uppercase tracking-widest text-vycl-text-muted"
                  }
                >
                  Tier {tier.tier}
                </span>
              </div>
              <h2
                className={
                  tier.featured
                    ? "mt-3 text-2xl font-extrabold tracking-tight"
                    : "mt-3 text-2xl font-extrabold tracking-tight text-vycl-dark"
                }
              >
                {tier.label}
              </h2>
              <p
                className={
                  tier.featured
                    ? "mt-4 flex-1 text-sm leading-relaxed text-white/75"
                    : "mt-4 flex-1 text-sm leading-relaxed text-vycl-text-muted"
                }
              >
                {tier.description}
              </p>

              <div className="mt-6 border-t border-vycl-border/40 pt-5">
                <p
                  className={
                    tier.featured
                      ? "text-xs font-semibold uppercase tracking-wider text-vycl-lime"
                      : "text-xs font-semibold uppercase tracking-wider text-[#0F6E56]"
                  }
                >
                  Best for
                </p>
                <p
                  className={
                    tier.featured
                      ? "mt-1.5 text-sm font-medium text-white/90"
                      : "mt-1.5 text-sm font-medium text-vycl-dark"
                  }
                >
                  {tier.bestFor}
                </p>
              </div>

              <div className="mt-5">
                <p
                  className={
                    tier.featured
                      ? "text-xs font-semibold text-white/50"
                      : "text-xs font-semibold text-vycl-text-muted"
                  }
                >
                  {tier.extras.heading}
                </p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {tier.extras.items.map((item) => (
                    <li
                      key={item}
                      className={
                        tier.featured
                          ? "rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/85"
                          : "rounded-full bg-vycl-cream-muted px-3 py-1 text-xs font-medium text-vycl-dark"
                      }
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {"proof" in tier && tier.proof ? (
                <p className="mt-5 rounded-2xl bg-vycl-lime/15 px-4 py-3 text-xs font-semibold text-vycl-lime">
                  {tier.proof}
                </p>
              ) : null}
            </motion.article>
          ))}
        </Stagger>

        <FadeIn className="mt-10 text-center">
          <Link
            href="/#services"
            className="text-sm font-semibold text-[#0F6E56] transition-opacity hover:opacity-80"
          >
            See the Six Pillars framework →
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
