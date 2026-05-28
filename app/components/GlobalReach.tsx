"use client";

import dynamic from "next/dynamic";
import { useReducedMotion } from "framer-motion";
import { GLOBE_ARCS, GLOBE_CONFIG } from "@/lib/globe";
import { FadeIn } from "./motion";

const World = dynamic(
  () => import("@/components/ui/globe").then((mod) => mod.World),
  {
    ssr: false,
    loading: () => (
      <div
        aria-hidden
        className="h-full w-full animate-pulse rounded-full bg-vycl-dark-card/40"
      />
    ),
  },
);

export function GlobalReach() {
  const reduceMotion = useReducedMotion();

  const globeConfig = {
    ...GLOBE_CONFIG,
    autoRotate: reduceMotion ? false : GLOBE_CONFIG.autoRotate,
  };

  return (
    <section
      id="global-reach"
      aria-labelledby="global-reach-heading"
      className="relative overflow-hidden bg-vycl-dark px-5 py-20 text-white sm:px-8 sm:py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[42%] h-[min(90vw,28rem)] w-[min(90vw,28rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-vycl-lime/[0.07] blur-3xl lg:top-[58%]"
      />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 lg:min-h-[38rem] lg:gap-0">
        <FadeIn className="relative z-20 mx-auto max-w-2xl shrink-0 text-center lg:pointer-events-none lg:absolute lg:inset-x-0 lg:top-0">
          <p className="text-sm font-semibold uppercase tracking-widest text-vycl-lime">
            National Reach
          </p>
          <h2
            id="global-reach-heading"
            className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl"
          >
            Hawaii-based. Operating nationally.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70">
            From live programs in Hawaii to lending, SaaS, and dealer network
            deployments across the U.S.   VYCL connects every stakeholder your
            subscription program needs.
          </p>
        </FadeIn>

        <div className="relative z-10 h-[min(72vw,20rem)] w-full sm:h-[24rem] md:h-[26rem] lg:absolute lg:inset-x-0 lg:bottom-0 lg:top-[11.5rem] lg:h-auto">
          <World data={GLOBE_ARCS} globeConfig={globeConfig} />
        </div>
      </div>
    </section>
  );
}
