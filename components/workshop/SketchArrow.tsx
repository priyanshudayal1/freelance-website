"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * A small hand-drawn arrow that draws itself in view.
 * Points down-right by default; rotate/flip with className.
 */
export function SketchArrow({
  className,
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  const draw = (order: number) => ({
    initial: reduce ? { opacity: 0 } : { pathLength: 0 },
    whileInView: reduce ? { opacity: 1 } : { pathLength: 1 },
    viewport: { once: true },
    transition: {
      duration: order === 0 ? 0.55 : 0.25,
      delay: delay + order * 0.5,
      ease: "easeInOut" as const,
    },
  });

  return (
    <svg
      viewBox="0 0 80 60"
      fill="none"
      aria-hidden="true"
      className={cn("h-10 w-12 overflow-visible text-copper", className)}
    >
      <motion.path
        d="M6 7C22 26 42 43 70 50"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        {...draw(0)}
      />
      <motion.path
        d="M60 53.5L71.5 50.5L64 42.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...draw(1)}
      />
    </svg>
  );
}
