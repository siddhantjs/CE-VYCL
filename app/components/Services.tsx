"use client";

import { ArrowUpRight } from "./icons";
import { FadeIn, Stagger, motion, staggerItem } from "./motion";

const pillars = [
  {
    icon: "◆",
    title: "Lending",
    description:
      "Subscription financing models, lending partnerships, and capital structuring to scale your program.",
  },
  {
    icon: "▣",
    title: "Dealer Integration",
    description:
      "Transform dealerships into subscription-enabled businesses without disrupting retail operations.",
  },
  {
    icon: "◎",
    title: "Inventory Management",
    description:
      "Optimize fleet utilization, reduce carrying costs, and stabilize recurring revenue streams.",
  },
  {
    icon: "⬡",
    title: "Technology",
    description:
      "Future-proof platforms, operational automation, and customer experience systems that scale.",
  },
  {
    icon: "◉",
    title: "Insurance",
    description:
      "Integrated insurance programs that protect assets and unlock new revenue opportunities.",
  },
  {
    icon: "✦",
    title: "Marketing",
    description:
      "ROI-focused campaigns, conversion optimization, and subscriber acquisition strategies.",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="bg-vycl-dark px-5 py-20 text-white sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            The Six Pillars of Vehicle Subscription
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70">
            Ryan&apos;s proprietary framework — proven across 800+ vehicle
            deployments.
          </p>
        </FadeIn>

        <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <motion.article
              key={pillar.title}
              variants={staggerItem}
              className="group flex flex-col rounded-3xl bg-vycl-dark-card p-6 transition-colors hover:bg-vycl-dark-elevated"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <div className="flex items-start justify-between">
                <motion.span
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-lg text-vycl-lime"
                  whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                >
                  {pillar.icon}
                </motion.span>
                <ArrowUpRight className="text-white/40 transition-colors group-hover:text-vycl-lime" />
              </div>
              <h3 className="mt-5 text-lg font-bold">{pillar.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-white/65">
                {pillar.description}
              </p>
            </motion.article>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
