"use client";

import Link from "next/link";
import { Building2, ChevronDown, Landmark, Layers, Truck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { FEATURED_NAV, type FeaturedNavItem } from "@/lib/site";

const FEATURED_ICONS: Record<string, LucideIcon> = {
  "Dealer Groups": Building2,
  Lenders: Landmark,
  "SaaS Platforms": Layers,
  "Fleet Operators": Truck,
};

function FeaturedLink({
  item,
  onNavigate,
}: {
  item: FeaturedNavItem;
  onNavigate?: () => void;
}) {
  const Icon = FEATURED_ICONS[item.label] ?? Building2;
  const content = (
    <>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-vycl-lime-muted text-vycl-dark">
        <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
      </span>
      <span className="min-w-0">
        <span className="flex flex-wrap items-center gap-2">
          <span className="font-semibold text-vycl-dark">{item.label}</span>
          {item.comingSoon ? (
            <span className="rounded-full bg-vycl-cream-muted px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-vycl-text-muted">
              Soon
            </span>
          ) : null}
        </span>
        <span className="mt-0.5 block text-sm leading-snug text-vycl-text-muted">
          {item.description}
        </span>
      </span>
    </>
  );

  const className =
    "flex gap-3 rounded-2xl p-3 text-left transition-colors hover:bg-vycl-cream-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-vycl-dark";

  if (item.href && !item.comingSoon) {
    return (
      <Link href={item.href} className={className} onClick={onNavigate}>
        {content}
      </Link>
    );
  }

  return (
    <div
      className={`${className} cursor-default opacity-70`}
      aria-disabled={item.comingSoon}
    >
      {content}
    </div>
  );
}

type NavMegaMenuProps = {
  /** Called when a link is chosen (e.g. close mobile drawer). */
  onNavigate?: () => void;
  /** Render as inline list for mobile instead of dropdown trigger. */
  variant?: "dropdown" | "list";
};

export function NavMegaMenu({ onNavigate, variant = "dropdown" }: NavMegaMenuProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };

    const onPointerDown = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        close();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onPointerDown);
    };
  }, [open, close]);

  const panel = (
    <div
      className={
        variant === "dropdown"
          ? "rounded-3xl border border-vycl-border bg-white p-3 shadow-[0_20px_50px_-12px_rgba(15,36,25,0.18)]"
          : "space-y-1"
      }
      role="menu"
    >
      <div
        className={
          variant === "dropdown"
            ? "grid gap-0.5 sm:grid-cols-2"
            : "flex flex-col gap-0.5"
        }
      >
        {FEATURED_NAV.map((item) => (
          <FeaturedLink
            key={item.label}
            item={item}
            onNavigate={() => {
              close();
              onNavigate?.();
            }}
          />
        ))}
      </div>
    </div>
  );

  if (variant === "list") {
    return (
      <div className="border-t border-vycl-border/60 pt-4">
        <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-widest text-vycl-text-muted">
          Who We Serve
        </p>
        {panel}
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        className={`inline-flex items-center gap-1 rounded-lg px-2 py-1 text-sm font-medium transition-colors ${
          open
            ? "text-vycl-dark ring-1 ring-vycl-dark/20"
            : "text-vycl-text-muted hover:text-vycl-dark"
        }`}
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
      >
        Who We Serve
        <ChevronDown
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>

      {open ? (
        <div
          className="absolute left-1/2 top-full z-50 mt-3 w-[min(calc(100vw-2.5rem),28rem)] -translate-x-1/2 sm:w-[32rem]"
          role="presentation"
        >
          {panel}
        </div>
      ) : null}
    </div>
  );
}
