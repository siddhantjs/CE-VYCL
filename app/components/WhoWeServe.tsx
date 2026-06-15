"use client";

import Link from "next/link";
import { FadeIn, Stagger, motion, staggerItem } from "./motion";

const audiences = [
  {
    icon: "▣",
    title: "Dealer Groups",
    href: "/dealer-groups",
    description:
      "Launch and scale a car subscription program for dealers on your existing rooftops   without adding headcount. We handle the playbook, the partners, and the dealer subscription program launch.",
  },
  {
    icon: "◆",
    title: "Lenders",
    href: "/lenders",
    description:
      "Structure auto subscription lending structure, fleet subscription loan facility design, and subscription loan cash flow modeling for fleet-based portfolios   with proper collateral, pro forma subscription fleet lender deliverables, and lender-ready documentation.",
  },
  {
    icon: "⬡",
    title: "SaaS Platforms",
    href: "/platforms",
    description:
      "Automotive SaaS US market entry and subscription software for franchise dealers   powered by Tomorrow&apos;s Journey JRNY and KEYVO subscription underwriting software.",
  },
  {
    icon: "◎",
    title: "OEMs & Fleet Operators",
    href: "/fleet-operators",
    description:
      "Fleet operator subscription consulting for rental fleet monetization subscription, captive auto finance subscription structures, and mobility subscription fleet operator programs   backed by AVIS/Budget wholesale and PLUG EV sourcing.",
  },
];

export function WhoWeServe() {
  return (
    <section
      id="who-we-serve"
      className="bg-vycl-cream-muted px-5 py-20 sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-vycl-dark sm:text-4xl">
            Who We Serve
          </h2>
          <p className="mt-4 text-base leading-relaxed text-vycl-text-muted">
            Built for every layer of the subscription stack.
          </p>
        </FadeIn>

        <Stagger className="mt-14 grid gap-4 sm:grid-cols-2">
          {audiences.map((item) => {
            const card = (
              <>
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0F6E56]/10 text-lg text-[#0F6E56]">
                  {item.icon}
                </span>
                <h3 className="mt-4 text-lg font-bold text-vycl-dark">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-vycl-text-muted">
                  {item.description}
                </p>
              </>
            );

            const className =
              "flex flex-col h-full rounded-3xl border border-vycl-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md";

            return (
              <motion.div
                key={item.title}
                variants={staggerItem}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                {"href" in item && item.href ? (
                  <Link href={item.href} className={className}>
                    {card}
                  </Link>
                ) : (
                  <article className={className}>{card}</article>
                )}
              </motion.div>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
