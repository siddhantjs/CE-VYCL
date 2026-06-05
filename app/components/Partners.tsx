"use client";

import Image from "next/image";
import Link from "next/link";
import { CONTACT_PATH } from "@/lib/site";
import { ECOSYSTEM_PARTNERS} from "@/lib/partners";
import { FadeIn, Stagger, motion, staggerItem } from "./motion";

function PartnerLogo({
  name,
  relationship,
  logoSrc,
  logoClassName = "h-10 w-36",
}: {
  name: string;
  relationship: string;
  logoSrc?: string;
  logoClassName?: string;
}) {
  const alt = `${name}   ${relationship} with VYCL vehicle subscription consultancy`;

  if (logoSrc) {
    return (
      <div className={`relative ${logoClassName}`}>
        <Image
          src={logoSrc}
          alt={alt}
          fill
          className="object-contain object-left"
          sizes="160px"
        />
      </div>
    );
  }

  const initials = name
    .split(/[\s/]+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0F6E56]/10 text-xs font-bold text-[#0F6E56]">
      {initials}
    </span>
  );
}

function PartnerCard({
  name,
  relationship,
  description,
  logoSrc,
  logoClassName,
}: (typeof ECOSYSTEM_PARTNERS)[number]) {
  return (
    <motion.article
      variants={staggerItem}
      className="flex flex-col rounded-2xl border border-vycl-border bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
    >
      <PartnerLogo
        name={name}
        relationship={relationship}
        logoSrc={logoSrc}
        logoClassName={logoClassName}
      />
      <h3 className="mt-4 text-base font-bold text-vycl-dark">{name}</h3>
      <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-[#0F6E56]">
        {relationship}
      </p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-vycl-text-muted">
        {description}
      </p>
    </motion.article>
  );
}

export function Partners() {
  return (
    <section
      id="partners"
      className="relative overflow-hidden bg-vycl-cream px-5 py-20 sm:px-8 sm:py-24"
    >
      <div className="relative mx-auto max-w-6xl">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-vycl-text-muted">
            Who We Work With
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-vycl-dark sm:text-4xl">
            Partner Ecosystem
          </h2>
          <p className="mt-4 text-base leading-relaxed text-vycl-text-muted">
            VYCL bridges automotive retail, finance, insurance, technology,
            inventory, and marketing   connecting every stakeholder your
            subscription program needs to succeed.
          </p>
        </FadeIn>

        <FadeIn delay={0.12} className="mt-10">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-vycl-text-muted">
            Ecosystem Partners
          </p>
        </FadeIn>

        <Stagger className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ECOSYSTEM_PARTNERS.map((partner) => (
            <PartnerCard key={partner.name} {...partner} />
          ))}
        </Stagger>

        <FadeIn delay={0.16} className="mt-10 text-center">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Link
              href={CONTACT_PATH}
              className="inline-flex rounded-full bg-vycl-dark px-7 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Work With Us
            </Link>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
