"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { NumberTicker } from "@/components/ui/number-ticker";
import { FadeIn, Stagger, staggerItem } from "./motion";

const partnerStats = [
  { value: 8, suffix: "+", label: "Industry sectors" },
  { value: 50, suffix: "+", label: "Clients & partners" },
];

const partners = [
  {
    name: "OEMs",
    icon: "◈",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Dealer Groups",
    icon: "▣",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Fleet Operators",
    icon: "◎",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Lenders",
    icon: "◆",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Insurers",
    icon: "⬡",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Mobility Tech",
    icon: "◉",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Marketing",
    icon: "✦",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "SaaS Platforms",
    icon: "⬢",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=80",
  },
];

function PartnerCard({
  name,
  icon,
  image,
}: (typeof partners)[number]) {
  return (
    <motion.article
      variants={staggerItem}
      className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-vycl-border/60 bg-vycl-dark shadow-sm"
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
    >
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 280px"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-vycl-dark via-vycl-dark/45 to-transparent transition-opacity duration-300 group-hover:via-vycl-dark/55" />
      <div className="absolute inset-0 flex flex-col justify-end p-4">
        <span className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-vycl-lime text-sm font-bold text-vycl-dark shadow-sm">
          {icon}
        </span>
        <h3 className="text-sm font-bold leading-tight text-white">{name}</h3>
      </div>
    </motion.article>
  );
}

export function Partners() {
  return (
    <section
      id="partners"
      className="relative overflow-hidden bg-vycl-cream px-5 py-20 sm:px-8 sm:py-24"
    >
      <div
        className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-vycl-lime/25 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-vycl-dark/5 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-widest text-vycl-text-muted">
              Who We Work With
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-vycl-dark sm:text-4xl">
              Partner Ecosystem
            </h2>
            <p className="mt-4 text-base leading-relaxed text-vycl-text-muted">
              VYCL bridges automotive retail, finance, insurance, technology,
              inventory, and marketing — connecting every stakeholder your
              subscription program needs to succeed.
            </p>

            <div className="mt-8 flex flex-wrap gap-8 border-t border-vycl-border pt-8">
              {partnerStats.map((stat, index) => (
                <div key={stat.label}>
                  <p className="text-3xl font-extrabold text-vycl-dark">
                    <NumberTicker
                      value={stat.value}
                      delay={index * 0.15}
                      className="text-vycl-dark dark:text-vycl-dark"
                    />
                    {stat.suffix}
                  </p>
                  <p className="mt-1 text-sm text-vycl-text-muted">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <motion.div
              className="mt-8 inline-block"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="#contact"
                className="inline-flex rounded-full bg-vycl-dark px-7 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                Work With Us
              </Link>
            </motion.div>
          </FadeIn>

          <FadeIn delay={0.12}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-vycl-border bg-vycl-dark shadow-[0_20px_50px_rgba(15,36,25,0.12)] sm:aspect-[5/6] lg:aspect-auto lg:min-h-[420px]">
              <Image
                src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=900&q=80"
                alt="Modern vehicles representing the mobility ecosystem"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-vycl-dark/90 via-vycl-dark/25 to-vycl-dark/10" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-vycl-lime/90 px-3 py-1 text-xs font-bold uppercase tracking-wide text-vycl-dark">
                  <span className="flex h-5 w-5 items-center justify-center rounded-md bg-vycl-dark text-[10px] text-vycl-lime">
                    V
                  </span>
                  Connected Hub
                </span>
                <p className="mt-3 max-w-sm text-lg font-bold leading-snug text-white">
                  One network linking every part of vehicle subscription
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        <Stagger className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {partners.map((partner) => (
            <PartnerCard key={partner.name} {...partner} />
          ))}
        </Stagger>
      </div>
    </section>
  );
}
