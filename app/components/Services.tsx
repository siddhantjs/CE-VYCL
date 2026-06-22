"use client";

import Image from "next/image";
import { SIX_PILLARS } from "@/lib/pillars";
import { FadeIn, Stagger, motion, staggerItem } from "./motion";

export function Services() {
  return (
    <section
      id="pillars"
      aria-labelledby="pillars-heading"
      className="bg-vycl-dark px-5 py-20 text-white sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2
            id="pillars-heading"
            className="text-3xl font-extrabold tracking-tight sm:text-4xl"
          >
            The Six Pillars of Vehicle Subscription
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70">
          VYCL’s framework proven across 1000+ vehicle deployments.
          </p>
        </FadeIn>

        <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SIX_PILLARS.map((pillar) => (
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
                  alt={pillar.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 384px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-vycl-dark-card via-vycl-dark-card/20 to-transparent" />
                <span className="absolute bottom-3 left-3 rounded-lg bg-white/10 px-2.5 py-1 text-xs font-bold text-vycl-lime backdrop-blur-sm">
                  {pillar.number}
                </span>
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
