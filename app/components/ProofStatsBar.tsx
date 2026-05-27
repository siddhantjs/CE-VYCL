"use client";

import { AnimatedStat } from "@/components/ui/animated-stat";
import { Stagger, motion, staggerItem } from "./motion";

const stats = [
  { value: 800, suffix: "+", label: "Vehicles subscribed in Hawaii" },
  { value: 45, suffix: "", label: "Days from idea to live program" },
  { value: 10, suffix: "+", label: "Years of subscription-first experience" },
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
            <p className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              <AnimatedStat
                value={stat.value}
                suffix={stat.suffix}
                className="text-white"
                duration={1.4 + index * 0.1}
              />
            </p>
            <p className="mt-2 text-sm leading-snug text-white/85 sm:text-base">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </Stagger>
    </section>
  );
}
