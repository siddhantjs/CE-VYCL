"use client";

import Image from "next/image";
import { FadeIn, Stagger, motion, staggerItem } from "./motion";

const pillars = [
  {
    icon: "◆",
    title: "Lending",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80",
    description:
      "Subscription financing models, lending partnerships, and capital structuring to scale your program.",
  },
  {
    icon: "▣",
    title: "Dealer Integration",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=600&q=80",
    description:
      "Transform dealerships into subscription-enabled businesses without disrupting retail operations.",
  },
  {
    icon: "◎",
    title: "Inventory Management",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
    description:
      "Optimize fleet utilization, reduce carrying costs, and stabilize recurring revenue streams.",
  },
  {
    icon: "⬡",
    title: "Technology",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
    description:
      "Future-proof platforms, operational automation, and customer experience systems that scale.",
  },
  {
    icon: "◉",
    title: "Insurance",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80",
    description:
      "Integrated insurance programs that protect assets and unlock new revenue opportunities.",
  },
  {
    icon: "✦",
    title: "Marketing",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
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
            Ryan&apos;s proprietary framework - proven across 800+ vehicle
            deployments.
          </p>
        </FadeIn>

        <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <motion.article
              key={pillar.title}
              variants={staggerItem}
              className="group flex flex-col overflow-hidden rounded-3xl bg-vycl-dark-card transition-colors hover:bg-vycl-dark-elevated"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <div className="relative aspect-[2/1] w-full overflow-hidden">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 384px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-vycl-dark-card via-vycl-dark-card/20 to-transparent" />
                <motion.span
                  className="absolute bottom-3 left-3 flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-base text-vycl-lime backdrop-blur-sm"
                  whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                >
                  {pillar.icon}
                </motion.span>
              </div>
              <div className="flex flex-1 flex-col p-4">
                <h3 className="text-base font-bold">{pillar.title}</h3>
                <p className="mt-1.5 flex-1 text-sm leading-snug text-white/65">
                  {pillar.description}
                </p>
              </div>
            </motion.article>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
