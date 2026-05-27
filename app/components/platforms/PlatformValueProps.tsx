"use client";

import { MapPin, Sparkles, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { FadeIn, Stagger, motion, staggerItem } from "../motion";
import { SpinningText } from "@/components/ui/spinning-text";

/** Short ring copy — each token should read clearly at a glance while spinning. */
const PLATFORM_RING =
  "JRNY • DEALERS • FLEXRIDE • PIPELINE • PROOF • DEMOS • SIGNED • ";

type ValueProp = {
  icon: LucideIcon;
  title: string;
  body: string;
  highlights: string[];
  featured?: boolean;
};

const valueProps: ValueProp[] = [
  {
    icon: Sparkles,
    title: "Exclusive JRNY partner",
    body: "US licensing partner for Tomorrow's Journey — we configure, implement, and optimize JRNY on dealer rooftops.",
    highlights: ["JRNY", "US licensing"],
    featured: true,
  },
  {
    icon: MapPin,
    title: "Active dealer pipeline",
    body: "Live BD across US markets — discovery, proof, demos, and the path to a signed agreement, every week.",
    highlights: ["Multi-market", "BD daily"],
  },
  {
    icon: Zap,
    title: "FlexRide proof rooftop",
    body: "Hawaii's running subscription program — the live answer when dealers ask who's actually doing this today.",
    highlights: ["FlexRide", "Live reference"],
  },
];

export function PlatformValueProps() {
  return (
    <section className="px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-vycl-dark sm:text-4xl">
            What VYCL brings
          </h2>
          <p className="mt-3 text-base leading-relaxed text-vycl-text-muted">
            Licensing proof, an active pipeline, and a rooftop your sales team
            can point to today.
          </p>
        </FadeIn>

        <FadeIn className="mt-10 flex justify-center">
          <div
            className="relative flex h-36 w-36 items-center justify-center sm:h-40 sm:w-40"
            aria-hidden
          >
            <div className="absolute inset-0 rounded-full bg-vycl-lime/20 blur-2xl" />
            <SpinningText
              radius={7.5}
              duration={18}
              className="h-full w-full text-[10px] font-bold uppercase tracking-[0.28em] text-vycl-dark sm:text-[11px]"
            >
              {PLATFORM_RING}
            </SpinningText>
          </div>
        </FadeIn>

        <Stagger className="mt-10 grid gap-4 lg:grid-cols-3">
          {valueProps.map((item) => (
            <motion.article
              key={item.title}
              variants={staggerItem}
              className={
                item.featured
                  ? "relative flex flex-col overflow-hidden rounded-3xl border-2 border-vycl-lime bg-vycl-dark p-6 text-white shadow-lg sm:p-7"
                  : "flex flex-col rounded-3xl border border-vycl-border bg-white p-6 shadow-sm"
              }
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              {item.featured ? (
                <div
                  className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(15,36,25,0.95)_0%,rgba(15,110,86,0.45)_100%)]"
                  aria-hidden
                />
              ) : null}

              <div className="relative flex flex-1 flex-col">
                <span
                  className={
                    item.featured
                      ? "flex h-10 w-10 items-center justify-center rounded-xl bg-vycl-lime/15 text-vycl-lime"
                      : "flex h-10 w-10 items-center justify-center rounded-xl bg-vycl-lime-muted text-vycl-dark"
                  }
                >
                  <item.icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                </span>
                <h3
                  className={
                    item.featured
                      ? "mt-4 text-lg font-bold text-white"
                      : "mt-4 text-lg font-bold text-vycl-dark"
                  }
                >
                  {item.title}
                </h3>
                <p
                  className={
                    item.featured
                      ? "mt-2 flex-1 text-sm leading-relaxed text-white/75"
                      : "mt-2 flex-1 text-sm leading-relaxed text-vycl-text-muted"
                  }
                >
                  {item.body}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {item.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className={
                        item.featured
                          ? "rounded-full bg-vycl-lime/15 px-3 py-1 text-xs font-semibold text-vycl-lime"
                          : "rounded-full bg-vycl-lime-muted px-3 py-1 text-xs font-semibold text-vycl-dark"
                      }
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
