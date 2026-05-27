"use client";

import { Handshake, MapPin, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { FadeIn, Stagger, motion, staggerItem } from "./motion";

const differentiators: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: Wrench,
    title: "Operators, not observers",
    description:
      "VYCL is the only consultancy purpose-built for the vehicle subscription economy. We don't advise from the sidelines — we've built, operated, and financed real programs on real rooftops.",
  },
  {
    icon: MapPin,
    title: "Proven at scale",
    description:
      "Active programs span Hawaii and are growing nationally. We've structured lending with institutional partners, launched SaaS into US dealer networks, and guided 800+ deployments via the Six Pillars framework.",
  },
  {
    icon: Handshake,
    title: "Partner from day one",
    description:
      "Whether you are launching your first subscription program or scaling an existing one across multiple rooftops, VYCL brings a level of specificity — in lending structure, platform knowledge, insurance compliance, and inventory sourcing — that no generalist automotive consultancy can match.",
  },
];

const highlights = [
  "Hawaii & national programs",
  "Institutional lending",
  "US dealer network launches",
  "Six Pillars framework",
];

export function WhyVycl() {
  return (
    <section id="why-vycl" className="px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold uppercase tracking-widest text-vycl-text-muted">
            Why VYCL
          </h2>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-vycl-dark sm:text-4xl">
            Built for the vehicle subscription economy
          </h2>
          <p className="mt-4 text-base leading-relaxed text-vycl-text-muted">
            Subscription expertise forged on real rooftops - not borrowed from
            generic automotive consulting playbooks.
          </p>
        </FadeIn>

        <FadeIn delay={0.08} className="mt-10">
          <figure className="relative overflow-hidden rounded-3xl border border-vycl-border bg-white p-8 shadow-sm sm:p-10">
            <div
              className="absolute inset-y-0 left-0 w-1 bg-vycl-lime"
              aria-hidden
            />
            <blockquote className="pl-4 text-lg font-semibold leading-snug tracking-tight text-vycl-dark sm:text-xl sm:leading-snug">
              We don&apos;t advise from the sidelines -  we&apos;ve built,
              operated, and financed real programs, with real results.
            </blockquote>
            <figcaption className="mt-4 pl-4 text-sm text-vycl-text-muted">
              The only consultancy purpose-built for vehicle subscription.
            </figcaption>
          </figure>
        </FadeIn>

        <Stagger className="mt-8 grid gap-4 lg:grid-cols-3">
          {differentiators.map((item) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                variants={staggerItem}
                className="group flex flex-col rounded-3xl border border-vycl-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-vycl-dark/8 text-vycl-dark transition-colors group-hover:bg-vycl-lime/30">
                  <Icon className="h-5 w-5" strokeWidth={2} aria-hidden />
                </span>
                <h3 className="mt-4 text-lg font-bold text-vycl-dark">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-vycl-text-muted">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </Stagger>

        <FadeIn delay={0.12} className="mt-8">
          <ul className="flex flex-wrap justify-center gap-2">
            {highlights.map((label) => (
              <li
                key={label}
                className="rounded-full border border-vycl-border bg-vycl-cream-muted px-3.5 py-1.5 text-xs font-medium text-vycl-dark"
              >
                {label}
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
