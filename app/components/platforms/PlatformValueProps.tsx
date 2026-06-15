"use client";

import { LineChart, MapPin, Sparkles, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { FadeIn, Stagger, motion, staggerItem } from "../motion";

const proofPoints: { icon: LucideIcon; text: string }[] = [
  {
    icon: Sparkles,
    text: "JRNY subscription platform US   exclusive automotive SaaS licensing partner US for Tomorrow's Journey",
  },
  {
    icon: MapPin,
    text: "Automotive SaaS dealer adoption and subscription software for franchise dealers across active US dealer BD pipeline",
  },
  {
    icon: Zap,
    text: "Live proof-of-concept rooftop   vehicle subscription platform ROI and car subscription technology dealer integration reference",
  },
  {
    icon: LineChart,
    text: "Automotive SaaS dealer sales consultant support   subscription management software automotive evaluation and go-to-market execution",
  },
];

export function PlatformValueProps() {
  return (
    <section className="px-5 py-16 sm:px-8 sm:py-20">
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
