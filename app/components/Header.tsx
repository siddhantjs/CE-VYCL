"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CALENDLY_URL, CONTACT_PATH } from "@/lib/site";
import { LogoMark } from "./icons";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/programs", label: "Programs" },
  { href: CONTACT_PATH, label: "Contact" },
];

export function Header() {
  return (
    <motion.header
      className="sticky top-0 z-50 border-b border-vycl-border/60 bg-vycl-cream/90 backdrop-blur-md"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <LogoMark />
          <span className="text-lg font-bold tracking-tight text-vycl-dark">
            VYCL
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item, i) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
            >
              <Link
                href={item.href}
                className="text-sm font-medium text-vycl-text-muted transition-colors hover:text-vycl-dark"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.4 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-vycl-dark px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Schedule a Call
          </Link>
        </motion.div>
      </div>
    </motion.header>
  );
}
