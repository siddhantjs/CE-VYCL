"use client";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { CALENDLY_URL,PRIMARY_NAV } from "@/lib/site";
import { LogoMark } from "./icons";
import { NavMegaMenu } from "./NavMegaMenu";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.header
      className="sticky top-0 z-50 border-b border-vycl-border/60 bg-vycl-cream/90 backdrop-blur-md"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="">
        <Image
              src="/LOGO-dark.svg"
              alt="VYCL"
              width={28}
              height={28}
              className="h-10 w-10 md:h-12 md:w-12"
            />
        </Link>

        <nav className="hidden items-center gap-6 md:flex lg:gap-8">
          {PRIMARY_NAV.map((item, i) => (
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
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.4 }}
          >
            <NavMegaMenu />
          </motion.div>
        </nav>

        <div className="flex items-center gap-3">
          <motion.div
            className="hidden sm:block"
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

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-vycl-border text-vycl-dark md:hidden"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden />
            ) : (
              <Menu className="h-5 w-5" aria-hidden />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            className="border-t border-vycl-border/60 bg-vycl-cream md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav className="mx-auto max-w-6xl space-y-1 px-5 py-4">
              {PRIMARY_NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-xl px-3 py-2.5 text-sm font-medium text-vycl-dark hover:bg-vycl-cream-muted"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <NavMegaMenu
                variant="list"
                onNavigate={() => setMobileOpen(false)}
              />
              <Link
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block rounded-full bg-vycl-dark px-5 py-3 text-center text-sm font-semibold text-white sm:hidden"
                onClick={() => setMobileOpen(false)}
              >
                Schedule a Call
              </Link>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
