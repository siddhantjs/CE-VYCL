"use client";

import Link from "next/link";
import { ArrowRight, Clock3 } from "lucide-react";
import { BLOG_PAGE } from "@/lib/blog/config";
import { BLOG_POSTS } from "@/lib/blog/posts";
import { Stagger, motion, staggerItem } from "../motion";

export function BlogCardGrid() {
  const { grid } = BLOG_PAGE;

  return (
    <section className="px-5 pb-20 sm:px-8 sm:pb-24">
      <div className="mx-auto max-w-6xl">
        <Stagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {BLOG_POSTS.map((post) => {
            const Icon = post.icon;

            return (
              <motion.div
                key={post.slug}
                variants={staggerItem}
                className="h-full"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <Link
                  href={post.path}
                  className="group flex h-full min-h-[420px] flex-col overflow-hidden rounded-3xl border border-vycl-border bg-white shadow-sm transition-shadow hover:shadow-lg"
                >
                  <div className="flex h-36 shrink-0 flex-col items-center justify-center border-b border-vycl-border bg-vycl-cream-muted px-6 py-10">
                    <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0F6E56]/10 text-[#0F6E56] transition-colors group-hover:bg-[#0F6E56]/15">
                      <Icon className="h-8 w-8" aria-hidden />
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#0F6E56]">
                      {post.category}
                    </p>
                    <h2 className="mt-3 text-lg font-bold leading-snug text-vycl-dark sm:text-xl">
                      {post.title}
                    </h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-vycl-text-muted">
                      {post.excerpt}
                    </p>
                    <div className="mt-6 flex items-center justify-between gap-3 border-t border-vycl-border pt-5">
                      <span className="inline-flex items-center gap-1.5 text-xs text-vycl-text-muted">
                        <Clock3 className="h-3.5 w-3.5" aria-hidden />
                        {post.readTimeMinutes} min read
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0F6E56] transition-colors group-hover:text-vycl-dark">
                        {grid.readMoreLabel}
                        <ArrowRight
                          className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                          aria-hidden
                        />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
