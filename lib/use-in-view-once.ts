"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

type UseInViewOnceOptions = {
  rootMargin?: string;
  threshold?: number;
};

/**
 * Reliable viewport detection with an immediate layout check on mount.
 * Framer Motion's useInView can miss elements inside nested whileInView
 * containers; this hook fires for above-the-fold stats on first paint.
 */
export function useInViewOnce<T extends HTMLElement = HTMLElement>(
  options: UseInViewOnceOptions = {},
): { ref: RefObject<T | null>; inView: boolean } {
  const { rootMargin = "0px", threshold = 0.1 } = options;
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || inView) return;

    const markVisible = () => setInView(true);

    const rect = element.getBoundingClientRect();
    const visibleOnMount =
      rect.top < window.innerHeight &&
      rect.bottom > 0 &&
      rect.left < window.innerWidth &&
      rect.right > 0;

    if (visibleOnMount) {
      markVisible();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markVisible();
          observer.disconnect();
        }
      },
      { rootMargin, threshold },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [inView, rootMargin, threshold]);

  return { ref, inView };
}
