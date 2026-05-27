"use client";

import { MapPin, Sparkles, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { FadeIn, Stagger, motion, staggerItem } from "../motion";

const valueProps: {
  icon: LucideIcon;
  title: string;
  body: string;
}[] = [
  {
    icon: Sparkles,
    title: "Exclusive US licensing partner — Tomorrow's Journey / JRNY",
    body: "VYCL is the exclusive US licensing partner for Tomorrow's Journey and their JRNY platform — live proof of what a US market partnership looks like in practice. We configure, implement, and optimize JRNY on dealer rooftops, not just recommend it from the sidelines.",
  },
  {
    icon: MapPin,
    title: "Active dealer BD pipeline",
    body: "VYCL maintains an active dealer business development pipeline across multiple US markets — not a contact list sitting in a spreadsheet. We run the dealer conversation daily: discovery, proof requirements, demos, and the path to a signed agreement.",
  },
  {
    icon: Zap,
    title: "Live proof-of-concept rooftop — FlexRide by King",
    body: "FlexRide by King is Hawaii's active dealer subscription program — the single strongest tool in any platform sales conversation. When a dealer asks who's running this on a real rooftop, you have a live answer backed by JRNY, Axle, and institutional lending.",
  },
];

export function PlatformValueProps() {
  return (
    <section className="px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-vycl-dark sm:text-4xl">
            What VYCL brings
          </h2>
          <p className="mt-4 text-base leading-relaxed text-vycl-text-muted">
            The US dealer channel — licensing proof, active pipeline, and a
            rooftop your sales team can point to today.
          </p>
        </FadeIn>

        <Stagger className="mt-14 grid gap-4 lg:grid-cols-3">
          {valueProps.map((item) => (
            <motion.article
              key={item.title}
              variants={staggerItem}
              className="flex flex-col rounded-3xl border border-vycl-border bg-white p-6 shadow-sm"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-vycl-lime-muted text-vycl-dark">
                <item.icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
              </span>
              <h3 className="mt-4 text-lg font-bold text-vycl-dark">
                {item.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-vycl-text-muted">
                {item.body}
              </p>
            </motion.article>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
