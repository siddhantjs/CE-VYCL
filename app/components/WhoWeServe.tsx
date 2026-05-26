"use client";

import { FadeIn, Stagger, motion, staggerItem } from "./motion";

const audiences = [
  {
    icon: "▣",
    title: "Dealer Groups",
    description:
      "Launch and scale subscription programs on your existing rooftops — without adding headcount. We handle the playbook, the partners, and the dealer subscription program launch.",
    proof: "FlexRide by King, Hawaii",
  },
  {
    icon: "◆",
    title: "Lenders",
    description:
      "Structure lending facilities for fleet-based subscription portfolios with proper collateral, cash-flow modeling, and lender-ready documentation.",
    proof: "Westlake Financial / CULA",
  },
  {
    icon: "⬡",
    title: "SaaS Platforms",
    description:
      "Bridge your technology to US dealer networks with market-ready onboarding and go-to-market execution.",
    proof: "Exclusive US Licensing Partner — Tomorrow's Journey / JRNY",
  },
  {
    icon: "◎",
    title: "OEMs & Fleet Operators",
    description:
      "Design branded or captive subscription programs from fleet composition through subscriber experience.",
    proof: "Rivian EV fleet structure, Hawaii",
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
          {audiences.map((item) => (
            <motion.article
              key={item.title}
              variants={staggerItem}
              className="flex flex-col rounded-3xl border border-vycl-border bg-white p-6 shadow-sm"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0F6E56]/10 text-lg text-[#0F6E56]">
                {item.icon}
              </span>
              <h3 className="mt-4 text-lg font-bold text-vycl-dark">
                {item.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-vycl-text-muted">
                {item.description}
              </p>
              <p className="mt-4 text-xs font-semibold text-[#0F6E56]">
                {item.proof}
              </p>
            </motion.article>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
