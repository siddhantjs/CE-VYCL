"use client";

import { FadeIn, Stagger, motion, staggerItem } from "../motion";

const tiers = [
  {
    tier: "01",
    label: "Advisory",
    featured: false,
    description:
      "Strategic guidance for organisations at the evaluation stage. Market assessment, program design, partner identification, and go/no-go recommendation.",
    bestFor:
      "OEMs, lenders, and SaaS platforms exploring the US subscription market",
    extras: {
      heading: "Partners involved",
      items: [
        "KEYVO underwriting assessment",
        "JRNY platform evaluation",
        "Axle compliance review",
      ],
    },
  },
  {
    tier: "02",
    label: "Implementation",
    featured: true,
    description: "Hands-on buildout from concept to launch. All Six Pillars covered.",
    bestFor: "Dealer groups launching their first or second rooftop",
    extras: {
      heading: "What's included",
      items: [
        "JRNY platform configuration (exclusive US licensing partner)",
        "Lender engagement — Westlake Financial / CULA facility structure",
        "Axle insurance verification integration",
        "Inventory sourcing — AVIS/Budget wholesale + PLUG EV platform",
        "Digital marketing launch via MiaVita Solutions",
        "Operational design — staffing model, workflow, subscriber onboarding",
      ],
    },
  },
  {
    tier: "03",
    label: "Ongoing Partnership",
    featured: false,
    description:
      "Embedded strategic and operational support for programs already running. Performance review, lender relationship management, platform optimisation, and national expansion planning.",
    bestFor: "Multi-rooftop operators scaling beyond their home market",
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
                  Engagement Tier {tier.tier}
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

              {"extras" in tier && tier.extras ? (
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
                  <ul className="mt-2 space-y-2">
                    {tier.extras.items.map((item) => (
                      <li
                        key={item}
                        className={
                          tier.featured
                            ? "text-sm leading-relaxed text-white/85 before:mr-2 before:content-['•']"
                            : "text-sm leading-relaxed text-vycl-dark before:mr-2 before:text-[#0F6E56] before:content-['•']"
                        }
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

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
            </motion.article>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
