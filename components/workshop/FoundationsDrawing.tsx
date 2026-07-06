"use client";

import { motion, useReducedMotion } from "motion/react";
import { sketchCircle } from "@/lib/sketch";

/**
 * The foundations, drawn as a construction diagram: three principles
 * at the vertices of an equilateral triangle, held in equal weight.
 * Clarix is the intersection. Thin lines, centre point, no color —
 * the way an engineer would actually draw a belief.
 */
export function FoundationsDrawing() {
  const reduce = useReducedMotion();

  const draw = (order: number) => ({
    initial: reduce ? { opacity: 0 } : ({ pathLength: 0 } as const),
    whileInView: reduce ? { opacity: 1 } : ({ pathLength: 1 } as const),
    viewport: { once: true },
    transition: {
      duration: reduce ? 0.4 : 0.9,
      delay: 0.2 + order * 0.2,
      ease: "easeInOut" as const,
    },
  });

  const fade = (delay: number, to = 1) => ({
    initial: { opacity: 0 },
    whileInView: { opacity: to },
    viewport: { once: true },
    transition: { duration: 0.6, delay, ease: "easeOut" as const },
  });

  const mono = { fontFamily: "var(--font-geist-mono)" };

  return (
    <svg
      viewBox="0 0 460 440"
      fill="none"
      role="img"
      aria-label="Construction drawing: craftsmanship, continuous improvement, and joy of building at the three corners of a triangle, with Clarix at the intersection"
      className="h-auto w-full"
    >
      {/* Nodes — 01 craftsmanship, 02 improvement, 03 joy */}
      <motion.path
        d={sketchCircle(230, 80, 36)}
        stroke="var(--ink)"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.75"
        {...draw(0)}
      />
      <motion.path
        d={sketchCircle(95, 330, 36)}
        stroke="var(--ink)"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.75"
        {...draw(1)}
      />
      <motion.path
        d={sketchCircle(365, 330, 36)}
        stroke="var(--ink)"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.75"
        {...draw(2)}
      />
      <motion.g
        fill="var(--ink)"
        fontSize="11"
        letterSpacing="2"
        textAnchor="middle"
        style={mono}
        {...fade(1)}
      >
        <text x="230" y="84">
          01
        </text>
        <text x="95" y="334">
          02
        </text>
        <text x="365" y="334">
          03
        </text>
      </motion.g>

      {/* Structure — the triangle */}
      <motion.path d="M213 112 112 298" stroke="var(--graphite)" strokeWidth="1.2" strokeLinecap="round" {...draw(3)} />
      <motion.path d="M247 112 348 298" stroke="var(--graphite)" strokeWidth="1.2" strokeLinecap="round" {...draw(4)} />
      <motion.path d="M131 330h198" stroke="var(--graphite)" strokeWidth="1.2" strokeLinecap="round" {...draw(5)} />

      {/* Construction medians toward the centre */}
      <motion.g
        stroke="var(--fog)"
        strokeWidth="1"
        strokeDasharray="2 6"
        {...fade(1.7, 0.7)}
      >
        <path d="M230 116v117" />
        <path d="M126 311l92 -57" />
        <path d="M334 311l-92 -57" />
      </motion.g>

      {/* Equal angles — held in balance */}
      <motion.path
        d="M244 247a14 14 0 0 1-7 12"
        stroke="var(--fog)"
        strokeWidth="1"
        {...fade(2, 0.8)}
      />
      <motion.text x="256" y="244" fill="var(--fog)" fontSize="7.5" letterSpacing="1.5" style={mono} {...fade(2.05)}>
        3 × 120°
      </motion.text>

      {/* The intersection */}
      <motion.g stroke="var(--copper)" strokeWidth="1.2" {...fade(1.9)}>
        <circle cx="230" cy="247" r="5.5" fill="none" />
        <path d="M230 235v24M218 247h24" />
      </motion.g>
      <motion.text
        x="230"
        y="280"
        textAnchor="middle"
        fill="var(--ink)"
        fontSize="11"
        letterSpacing="4"
        style={mono}
        {...fade(2.1)}
      >
        CLARIX
      </motion.text>
      <motion.text
        x="230"
        y="293"
        textAnchor="middle"
        fill="var(--fog)"
        fontSize="7"
        letterSpacing="2"
        style={mono}
        {...fade(2.2)}
      >
        THE INTERSECTION
      </motion.text>

      {/* Node labels */}
      <motion.g
        fill="var(--graphite)"
        fontSize="9"
        letterSpacing="1.5"
        textAnchor="middle"
        style={mono}
        {...fade(1.5)}
      >
        <text x="230" y="30">
          CRAFTSMANSHIP
        </text>
        <text x="95" y="390">
          CONTINUOUS IMPROVEMENT
        </text>
        <text x="365" y="390">
          JOY OF BUILDING
        </text>
      </motion.g>

      {/* Sheet annotations */}
      <motion.g
        fill="var(--fog)"
        fontSize="8"
        letterSpacing="1.5"
        style={mono}
        {...fade(2.3, 0.9)}
      >
        <text x="24" y="418">
          CLARIX — DWG 002 · FOUNDATIONS
        </text>
        <text x="24" y="430">
          ITERATION 8 — FINAL
        </text>
      </motion.g>
    </svg>
  );
}
