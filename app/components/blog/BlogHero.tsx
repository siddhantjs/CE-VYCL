"use client";

import { BLOG_PAGE } from "@/lib/blog/config";
import { FadeIn } from "../motion";

export function BlogHero() {
  const { hero } = BLOG_PAGE;

  return (
    <section className="px-5 pt-16 pb-12 sm:px-8 sm:pt-20 sm:pb-16">
      <FadeIn className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-vycl-text-muted">
          {hero.eyebrow}
        </p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-vycl-dark sm:text-5xl">
          {hero.title}
        </h1>
        <p className="mt-5 text-base leading-relaxed text-vycl-text-muted sm:text-lg">
          {hero.description}
        </p>
      </FadeIn>
    </section>
  );
}
