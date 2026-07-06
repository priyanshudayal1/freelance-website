"use client";

import { motion, useReducedMotion } from "motion/react";

/** A thin measurement bar that fills to its value when scrolled into view. */
export function MeterBar({ value, delay = 0 }: { value: number; delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <div className="h-1 w-full bg-line" role="presentation">
      <motion.div
        className="h-full bg-copper"
        initial={reduce ? { width: `${value}%` } : { width: "0%" }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}
