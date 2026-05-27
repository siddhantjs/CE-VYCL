"use client";

import Link from "next/link";
import { CALENDLY_URL, CONTACT_PATH } from "@/lib/site";
import { FadeIn, motion } from "../motion";

export function FleetOperatorsCta() {
  return (
    <section className="px-5 pb-20 sm:px-8 sm:pb-24">
      <FadeIn>
        <motion.div
          className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-vycl-dark px-8 py-14 text-center text-white sm:px-16 sm:py-20"
          whileInView={{ scale: [0.98, 1] }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Ready to build a subscription layer on your fleet?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/70">
            Tell us your fleet size and mix — we&apos;ll map whether
            subscription fits your inventory and what structure makes sense.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full bg-vycl-lime px-8 py-3.5 text-sm font-semibold text-vycl-dark transition-opacity hover:opacity-90"
              >
                Schedule a Call
              </Link>
            </motion.div>
            <Link
              href={CONTACT_PATH}
              className="text-sm font-semibold text-white/80 underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              Or send a message →
            </Link>
          </div>
        </motion.div>
      </FadeIn>
    </section>
  );
}
