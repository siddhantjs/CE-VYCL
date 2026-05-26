"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "./motion";

export function CtaBanner() {
  return (
    <section className="px-5 pb-20 sm:px-8">
      <FadeIn>
        <motion.div
          className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-vycl-dark px-8 py-14 text-center text-white sm:px-16 sm:py-20"
          whileInView={{ scale: [0.98, 1] }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            From Strategy to Scaled Subscription
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/70">
            Guide your organization into the future of mobility with a partner
            built exclusively for the vehicle subscription economy.
          </p>
          <motion.div
            className="mt-8 inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link
              href="#contact"
              className="inline-flex rounded-full bg-vycl-lime px-8 py-3.5 text-sm font-semibold text-vycl-dark transition-opacity hover:opacity-90"
            >
              Schedule a Call
            </Link>
          </motion.div>
        </motion.div>
      </FadeIn>
    </section>
  );
}
