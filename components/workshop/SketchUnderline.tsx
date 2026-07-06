"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * A pencil underline that draws itself beneath a word.
 * Hand-authored wavy path — deliberately imperfect.
 */
export function SketchUnderline({
  children,
  className,
  delay = 0.5,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <span className={cn("relative inline-block whitespace-nowrap", className)}>
      {children}
      <svg
        className="absolute -bottom-[0.1em] left-0 h-[0.16em] w-full overflow-visible"
        viewBox="0 0 200 12"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <motion.path
          d="M3 8C36 3.5 63 9.5 96 6.5C127 3.8 159 8.8 197 4.5"
          stroke="var(--copper)"
          strokeWidth="5"
          strokeLinecap="round"
          initial={reduce ? { opacity: 0 } : { pathLength: 0 }}
          whileInView={reduce ? { opacity: 1 } : { pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay, ease: "easeInOut" }}
        />
      </svg>
    </span>
  );
}
