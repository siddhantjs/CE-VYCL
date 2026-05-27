"use client";

import { animate, useReducedMotion } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useInViewOnce } from "@/lib/use-in-view-once";

type AnimatedStatProps = {
  value: number;
  suffix?: ReactNode;
  prefix?: ReactNode;
  className?: string;
  duration?: number;
};

/** Count-up stat that animates when scrolled into view. */
export function AnimatedStat({
  value,
  suffix,
  prefix,
  className,
  duration = 1.4,
}: AnimatedStatProps) {
  const { ref, inView } = useInViewOnce<HTMLSpanElement>({
    rootMargin: "-40px 0px",
    threshold: 0.2,
  });
  const reduce = useReducedMotion();
  const [count, setCount] = useState(reduce ? value : 0);

  useEffect(() => {
    if (reduce) {
      setCount(value);
      return;
    }
    if (!inView) return;

    const controls = animate(0, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setCount(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value, reduce, duration]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}
