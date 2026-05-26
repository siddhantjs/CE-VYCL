"use client";

import { NumberTicker } from "@/components/ui/number-ticker";
import { FadeIn, Stagger, motion, staggerItem } from "./motion";

const stats = [
  { value: 800, suffix: "+", label: "Vehicles subscribed in Hawaii" },
  { value: 45, suffix: " days", label: "From idea to live program" },
  { value: 10, suffix: "+ years", label: "Subscription-first experience" },
];

export function ProofStatsBar() {
  return (
    <section
      id="proof-stats"
      aria-label="Proof statistics"
      className="bg-vycl-dark px-5 py-12 sm:px-8 sm:py-14"
    >
      <Stagger className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-3 sm:gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            variants={staggerItem}
            className="text-center"
          >
            <FadeIn>
              <p className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                <NumberTicker
                  value={stat.value}
                  delay={index * 0.15}
                  className="text-white dark:text-white"
                />
                {stat.suffix}
              </p>
              <p className="mt-2 text-sm leading-snug text-white/85 sm:text-base">
                {stat.label}
              </p>
            </FadeIn>
          </motion.div>
        ))}
      </Stagger>
    </section>
  );
}
